"use client"

import { Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CashAccounts } from "@/components/accounts/cash-accounts"
import { InvestmentAccounts } from "@/components/accounts/investment-accounts"
import { RealEstateAccounts } from "@/components/accounts/real-estate-accounts"
import { CreditAccounts } from "@/components/accounts/credit-accounts"
import { LoanAccounts } from "@/components/accounts/loan-accounts"
import { CustomAccounts } from "@/components/accounts/custom-accounts"
import { Wallet, LineChart, Home, CreditCard, PiggyBank, Plus, Building2 } from "lucide-react"

export default function AccountsPage() {
  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <Wallet className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Accounts</h2>
        </div>
        <p className="text-muted-foreground">
          Manage all your financial accounts in one place
        </p>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid gap-4 md:grid-cols-3">
          {/* Account summary cards */}
        </div>

        <Tabs defaultValue="cash" className="space-y-6">
          <TabsList className="inline-flex h-auto p-1 bg-muted/50 gap-2">
            {/* Tab triggers */}
          </TabsList>
          <TabsContent value="cash" className="space-y-4">
            <CashAccounts />
          </TabsContent>
          <TabsContent value="investments" className="space-y-4">
            <InvestmentAccounts />
          </TabsContent>
          <TabsContent value="real-estate" className="space-y-4">
            <RealEstateAccounts />
          </TabsContent>
          <TabsContent value="credit-cards" className="space-y-4">
            <CreditAccounts />
          </TabsContent>
          <TabsContent value="loans" className="space-y-4">
            <LoanAccounts />
          </TabsContent>
          <TabsContent value="custom" className="space-y-4">
            <CustomAccounts />
          </TabsContent>
        </Tabs>
      </Suspense>
    </div>
  )
}