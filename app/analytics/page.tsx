"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SpendingAnalytics } from "@/components/analytics/spending-analytics"
import { DebtAnalytics } from "@/components/analytics/debt-analytics"
import { NetWorthTrend } from "@/components/analytics/net-worth-trend"
import { TransactionHistory } from "@/components/analytics/transaction-history"
import { LineChart, PieChart, BarChart3, History } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <LineChart className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        </div>
        <p className="text-muted-foreground">
          Track your financial progress and analyze spending patterns
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="relative overflow-hidden border-none bg-gradient-to-br from-blue-500/20 to-blue-600/20 dark:from-blue-500/10 dark:to-blue-600/10">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,945</div>
            <p className="text-xs text-muted-foreground mt-1">
              +12% from last month
            </p>
          </CardContent>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/5 to-transparent" />
        </Card>
        <Card className="relative overflow-hidden border-none bg-gradient-to-br from-green-500/20 to-green-600/20 dark:from-green-500/10 dark:to-green-600/10">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Average Spending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,642</div>
            <p className="text-xs text-muted-foreground mt-1">
              Per month in 2024
            </p>
          </CardContent>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/5 to-transparent" />
        </Card>
        <Card className="relative overflow-hidden border-none bg-gradient-to-br from-purple-500/20 to-purple-600/20 dark:from-purple-500/10 dark:to-purple-600/10">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Savings Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.8%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Of monthly income
            </p>
          </CardContent>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/5 to-transparent" />
        </Card>
        <Card className="relative overflow-hidden border-none bg-gradient-to-br from-orange-500/20 to-orange-600/20 dark:from-orange-500/10 dark:to-orange-600/10">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Goal Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67.5%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Across all goals
            </p>
          </CardContent>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/5 to-transparent" />
        </Card>
      </div>

      <Tabs defaultValue="spending" className="space-y-6">
        <TabsList className="inline-flex h-auto p-1 bg-muted/50 gap-2">
          <TabsTrigger 
            value="spending" 
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md data-[state=active]:bg-background"
          >
            <PieChart className="h-4 w-4" />
            <span>Spending</span>
          </TabsTrigger>
          <TabsTrigger 
            value="transactions"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md data-[state=active]:bg-background"
          >
            <History className="h-4 w-4" />
            <span>Transactions</span>
          </TabsTrigger>
          <TabsTrigger 
            value="debt"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md data-[state=active]:bg-background"
          >
            <BarChart3 className="h-4 w-4" />
            <span>Debt</span>
          </TabsTrigger>
          <TabsTrigger 
            value="net-worth"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md data-[state=active]:bg-background"
          >
            <LineChart className="h-4 w-4" />
            <span>Net Worth</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="spending" className="space-y-4">
          <SpendingAnalytics />
        </TabsContent>
        <TabsContent value="transactions" className="space-y-4">
          <TransactionHistory />
        </TabsContent>
        <TabsContent value="debt" className="space-y-4">
          <DebtAnalytics />
        </TabsContent>
        <TabsContent value="net-worth" className="space-y-4">
          <NetWorthTrend />
        </TabsContent>
      </Tabs>
    </div>
  )
}