"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCardLiabilities } from "@/components/liabilities/credit-card-liabilities"
import { MortgageLiabilities } from "@/components/liabilities/mortgage-liabilities"
import { StudentLoanLiabilities } from "@/components/liabilities/student-loan-liabilities"
import { CreditCard, Home, GraduationCap, TrendingDown } from "lucide-react"

export default function LiabilitiesPage() {
  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <TrendingDown className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Liabilities</h2>
        </div>
        <p className="text-muted-foreground">
          Track and manage all your debts in one place
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="relative overflow-hidden border-none bg-gradient-to-br from-red-500/20 to-red-600/20 dark:from-red-500/10 dark:to-red-600/10">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Debt</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$321,300</div>
            <p className="text-xs text-muted-foreground mt-1">
              -2.3% from last month
            </p>
          </CardContent>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/5 to-transparent" />
        </Card>
        <Card className="relative overflow-hidden border-none bg-gradient-to-br from-green-500/20 to-green-600/20 dark:from-green-500/10 dark:to-green-600/10">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Monthly Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,845</div>
            <p className="text-xs text-muted-foreground mt-1">
              Due in next 30 days
            </p>
          </CardContent>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/5 to-transparent" />
        </Card>
        <Card className="relative overflow-hidden border-none bg-gradient-to-br from-blue-500/20 to-blue-600/20 dark:from-blue-500/10 dark:to-blue-600/10">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Average Interest</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.8%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Weighted average APR
            </p>
          </CardContent>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-white/5 to-transparent" />
        </Card>
      </div>

      <Tabs defaultValue="credit-cards" className="space-y-6">
        <TabsList className="inline-flex h-auto p-1 bg-muted/50 gap-2">
          <TabsTrigger 
            value="credit-cards" 
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md data-[state=active]:bg-background"
          >
            <CreditCard className="h-4 w-4" />
            <span>Credit Cards</span>
          </TabsTrigger>
          <TabsTrigger 
            value="mortgages"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md data-[state=active]:bg-background"
          >
            <Home className="h-4 w-4" />
            <span>Mortgages</span>
          </TabsTrigger>
          <TabsTrigger 
            value="student-loans"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md data-[state=active]:bg-background"
          >
            <GraduationCap className="h-4 w-4" />
            <span>Student Loans</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="credit-cards" className="space-y-4">
          <CreditCardLiabilities />
        </TabsContent>
        <TabsContent value="mortgages" className="space-y-4">
          <MortgageLiabilities />
        </TabsContent>
        <TabsContent value="student-loans" className="space-y-4">
          <StudentLoanLiabilities />
        </TabsContent>
      </Tabs>
    </div>
  )
}