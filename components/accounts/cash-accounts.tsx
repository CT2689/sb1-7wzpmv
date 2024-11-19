"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, Plus, PiggyBank, TrendingUp, Building2 } from "lucide-react"
import Link from "next/link"

const accounts = [
  {
    id: "1",
    name: "Primary Checking",
    bank: "Chase Bank",
    balance: 5200,
    accountNumber: "****1234",
    type: "Checking",
    apy: 0.01,
    monthlyChange: 850,
    lastTransaction: "2024-01-20",
    routingNumber: "021000021",
    status: "Active",
    monthlyFee: 0,
    minimumBalance: 1500
  },
  {
    id: "2",
    name: "High-Yield Savings",
    bank: "Ally Bank",
    balance: 15000,
    accountNumber: "****5678",
    type: "Savings",
    apy: 4.25,
    monthlyChange: 250,
    lastTransaction: "2024-01-18",
    routingNumber: "124003116",
    status: "Active",
    monthlyFee: 0,
    minimumBalance: 0
  }
]

export function CashAccounts() {
  return (
    <div className="grid gap-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Cash Accounts</h3>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Account
        </Button>
      </div>

      <div className="grid gap-6">
        {accounts.map((account) => (
          <Card key={account.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
            <CardHeader className="flex flex-row items-start justify-between">
              <div className="space-y-1">
                <CardTitle>{account.name}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Building2 className="h-4 w-4 mr-1" />
                  {account.bank}
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
                  <div className={`flex items-center text-sm ${account.monthlyChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {account.monthlyChange >= 0 ? '+' : '-'}${Math.abs(account.monthlyChange)}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    this month
                  </span>
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
                  <p className="text-sm font-medium">Interest Rate</p>
                  <div className="mt-1 space-y-1">
                    <p className="text-sm text-muted-foreground">
                      APY: {account.apy}%
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Compounds: Daily
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <PiggyBank className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm font-medium">Account Details</span>
                  </div>
                  <span className="text-sm font-medium text-blue-500">
                    {account.status}
                  </span>
                </div>
                <div className="mt-2 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Monthly Fee</span>
                    <span className="text-sm">${account.monthlyFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Minimum Balance</span>
                    <span className="text-sm">${account.minimumBalance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Last Transaction</span>
                    <span className="text-sm">
                      {new Date(account.lastTransaction).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="w-full">Transfer</Button>
                <Link href={`/accounts/${account.id}`} className="w-full">
                  <Button variant="outline" className="w-full">View Details</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}