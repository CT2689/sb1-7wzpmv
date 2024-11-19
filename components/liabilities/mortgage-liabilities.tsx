"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, Plus, Home, Calendar, DollarSign } from "lucide-react"
import Link from "next/link"

const mortgages = [
  {
    id: "3",
    name: "Primary Residence",
    lender: "Wells Fargo",
    originalAmount: 350000,
    currentBalance: 275000,
    interestRate: 3.5,
    monthlyPayment: 1575,
    term: 360,
    remainingPayments: 280,
    propertyValue: 425000,
    address: "123 Main St, Anytown, USA",
    nextPayment: "2024-02-01"
  },
  {
    id: "4",
    name: "Rental Property",
    lender: "Chase",
    originalAmount: 280000,
    currentBalance: 210000,
    interestRate: 4.0,
    monthlyPayment: 1337,
    term: 360,
    remainingPayments: 300,
    propertyValue: 320000,
    address: "456 Oak Ave, Somewhere, USA",
    nextPayment: "2024-02-05"
  }
]

export function MortgageLiabilities() {
  return (
    <div className="grid gap-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Mortgages</h3>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Mortgage
        </Button>
      </div>

      <div className="grid gap-6">
        {mortgages.map((mortgage) => {
          const equity = mortgage.propertyValue - mortgage.currentBalance
          const equityPercentage = (equity / mortgage.propertyValue) * 100
          const amortizationProgress = ((mortgage.term - mortgage.remainingPayments) / mortgage.term) * 100
          
          return (
            <Card key={mortgage.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-emerald-500 to-emerald-600" />
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{mortgage.name}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Home className="h-4 w-4 mr-1" />
                    {mortgage.lender}
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-3xl font-bold">
                    ${mortgage.currentBalance.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Current balance
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Loan Progress</span>
                    <span>{amortizationProgress.toFixed(1)}% paid</span>
                  </div>
                  <Progress value={amortizationProgress} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{mortgage.term - mortgage.remainingPayments} payments made</span>
                    <span>{mortgage.remainingPayments} remaining</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium">Rate</p>
                    <p className="text-lg mt-1">{mortgage.interestRate}%</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium">Payment</p>
                    <p className="text-lg mt-1">${mortgage.monthlyPayment}</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium">Next Due</p>
                    <p className="text-lg mt-1">
                      {new Date(mortgage.nextPayment).toLocaleDateString(undefined, { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm font-medium">Home Equity</span>
                    </div>
                    <span className="text-sm font-medium">
                      ${equity.toLocaleString()} ({equityPercentage.toFixed(1)}%)
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="w-full">Make Payment</Button>
                  <Link href={`/liabilities/${mortgage.id}`} className="w-full">
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