"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  TrendingUp, 
  Wallet,
  PiggyBank,
  CreditCard,
  LineChart,
  Building2,
  Plus,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="container space-y-8 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
          <p className="text-muted-foreground">
            Here's what's happening with your finances today.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/accounts">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Account
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Net Worth</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$54,000</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
              <ArrowUpRight className="h-4 w-4 text-green-500" />
              <span className="text-green-500">+89.5%</span>
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$368,000</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
              <ArrowUpRight className="h-4 w-4 text-green-500" />
              <span className="text-green-500">+5.2%</span>
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Debt</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$314,000</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
              <ArrowDownRight className="h-4 w-4 text-green-500" />
              <span className="text-green-500">-2.3%</span>
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Savings</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,350</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1">
              <ArrowUpRight className="h-4 w-4 text-green-500" />
              <span className="text-green-500">+15%</span>
              <span>from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <Link href="/accounts">
              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardContent className="flex items-center p-6">
                  <Wallet className="h-5 w-5 mr-3 text-primary" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">View Accounts</h3>
                    <p className="text-sm text-muted-foreground">Manage your financial accounts</p>
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/liabilities">
              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardContent className="flex items-center p-6">
                  <CreditCard className="h-5 w-5 mr-3 text-primary" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">View Liabilities</h3>
                    <p className="text-sm text-muted-foreground">Track your debts and loans</p>
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/analytics">
              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardContent className="flex items-center p-6">
                  <LineChart className="h-5 w-5 mr-3 text-primary" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">View Analytics</h3>
                    <p className="text-sm text-muted-foreground">Track your financial progress</p>
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/settings">
              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardContent className="flex items-center p-6">
                  <Building2 className="h-5 w-5 mr-3 text-primary" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">Settings</h3>
                    <p className="text-sm text-muted-foreground">Manage your preferences</p>
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </CardContent>
              </Card>
            </Link>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { type: "deposit", amount: 2500, description: "Salary Deposit", date: "2024-01-20" },
              { type: "withdrawal", amount: -1200, description: "Rent Payment", date: "2024-01-19" },
              { type: "withdrawal", amount: -89.99, description: "Netflix Subscription", date: "2024-01-18" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${activity.amount > 0 ? "bg-green-500" : "bg-red-500"}`} />
                  <div>
                    <p className="text-sm font-medium">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(activity.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <p className={`text-sm font-medium ${activity.amount > 0 ? "text-green-500" : "text-red-500"}`}>
                  {activity.amount > 0 ? "+" : ""}{activity.amount.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                  })}
                </p>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Transactions
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}