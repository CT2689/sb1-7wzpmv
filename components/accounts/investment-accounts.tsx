"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, Plus, LineChart, TrendingUp, PieChart } from "lucide-react"
import Link from "next/link"

const accounts = [
  {
    id: "3",
    name: "401(k) Retirement",
    institution: "Fidelity",
    balance: 185000,
    accountNumber: "****9012",
    type: "Retirement",
    ytdReturn: 12.5,
    allocation: {
      stocks: 70,
      bonds: 25,
      cash: 5
    },
    contributions: {
      ytd: 8500,
      limit: 22500
    },
    lastUpdated: "2024-01-20",
    status: "Active",
    employerMatch: "100% up to 6%"
  },
  {
    id: "4",
    name: "Roth IRA",
    institution: "Vanguard",
    balance: 42000,
    accountNumber: "****3456",
    type: "Retirement",
    ytdReturn: 11.8,
    allocation: {
      stocks: 90,
      bonds: 8,
      cash: 2
    },
    contributions: {
      ytd: 2000,
      limit: 6500
    },
    lastUpdated: "2024-01-20",
    status: "Active"
  }
]

export function InvestmentAccounts() {
  return (
    <div className="grid gap-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Investment Accounts</h3>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Account
        </Button>
      </div>

      <div className="grid gap-6">
        {accounts.map((account) => {
          const contributionProgress = (account.contributions.ytd / account.contributions.limit) * 100
          
          return (
            <Card key={account.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-600" />
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{account.name}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <LineChart className="h-4 w-4 mr-1" />
                    {account.institution}
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-3xl font-bold">
                    ${account.balance.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className={`flex items-center text-sm ${account.ytdReturn >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {account.ytdReturn >= 0 ? '+' : '-'}{Math.abs(account.ytdReturn)}%
                    </div>
                    <span className="text-sm text-muted-foreground">
                      YTD return
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>YTD Contributions</span>
                    <span>${account.contributions.ytd.toLocaleString()} of ${account.contributions.limit.toLocaleString()}</span>
                  </div>
                  <Progress value={contributionProgress} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{contributionProgress.toFixed(1)}% of annual limit</span>
                    <span>${account.contributions.limit - account.contributions.ytd} remaining</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium">Account Info</p>
                    <div className="mt-1 space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Number: {account.accountNumber}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Type: {account.type}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium">Asset Allocation</p>
                    <div className="mt-1 space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Stocks: {account.allocation.stocks}%
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Bonds: {account.allocation.bonds}%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <PieChart className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm font-medium">Account Details</span>
                    </div>
                    <span className="text-sm font-medium text-green-500">
                      {account.status}
                    </span>
                  </div>
                  <div className="mt-2 space-y-1">
                    {account.employerMatch && (
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Employer Match</span>
                        <span className="text-sm">{account.employerMatch}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Last Updated</span>
                      <span className="text-sm">
                        {new Date(account.lastUpdated).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="w-full">Contribute</Button>
                  <Link href={`/accounts/${account.id}`} className="w-full">
                    <Button variant="outline" className="w-full">View Details</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}