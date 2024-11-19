"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, Plus, Home, Car, GraduationCap } from "lucide-react"

const accounts = [
  {
    id: "1",
    name: "Auto Loan",
    lender: "Toyota Financial",
    originalAmount: 35000,
    currentBalance: 28000,
    interestRate: 3.9,
    monthlyPayment: 545,
    term: 60,
    remainingPayments: 48,
    type: "auto",
    asset: "2023 Toyota RAV4",
    nextPayment: "2024-02-15"
  },
  {
    id: "2",
    name: "Student Loan",
    lender: "Federal Direct",
    originalAmount: 50000,
    currentBalance: 42000,
    interestRate: 4.5,
    monthlyPayment: 460,
    term: 120,
    remainingPayments: 96,
    type: "student",
    nextPayment: "2024-02-01"
  }
]

export function LoanAccounts() {
  return (
    <div className="grid gap-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Loans</h3>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Loan
        </Button>
      </div>

      <div className="grid gap-6">
        {accounts.map((loan) => {
          const progressPercentage = ((loan.originalAmount - loan.currentBalance) / loan.originalAmount) * 100
          const Icon = loan.type === "auto" ? Car : loan.type === "student" ? GraduationCap : Home
          
          return (
            <Card key={loan.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-cyan-600" />
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{loan.name}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon className="h-4 w-4 mr-1" />
                    {loan.lender}
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-3xl font-bold">
                    ${loan.currentBalance.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Current balance
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Loan Progress</span>
                    <span>{progressPercentage.toFixed(1)}% paid</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{loan.term - loan.remainingPayments} payments made</span>
                    <span>{loan.remainingPayments} payments remaining</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium">Rate</p>
                    <p className="text-lg mt-1">{loan.interestRate}%</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium">Payment</p>
                    <p className="text-lg mt-1">${loan.monthlyPayment}</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium">Next Due</p>
                    <p className="text-lg mt-1">
                      {new Date(loan.nextPayment).toLocaleDateString(undefined, { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>

                {loan.asset && (
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm font-medium">Secured Asset</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {loan.asset}
                    </p>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button className="w-full">Make Payment</Button>
                  <Button variant="outline" className="w-full">View Details</Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}