"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, Plus, GraduationCap, School } from "lucide-react"
import Link from "next/link"

const studentLoans = [
  {
    id: "5",
    name: "Federal Direct Subsidized",
    lender: "Department of Education",
    originalAmount: 20000,
    currentBalance: 15000,
    interestRate: 4.5,
    monthlyPayment: 210,
    term: 120,
    remainingPayments: 96,
    school: "State University",
    nextPayment: "2024-02-10",
    type: "Federal",
    status: "In Repayment"
  },
  {
    id: "6",
    name: "Federal Direct Unsubsidized",
    lender: "Department of Education",
    originalAmount: 30000,
    currentBalance: 27000,
    interestRate: 5.0,
    monthlyPayment: 250,
    term: 120,
    remainingPayments: 108,
    school: "State University",
    nextPayment: "2024-02-10",
    type: "Federal",
    status: "In Repayment"
  }
]

export function StudentLoanLiabilities() {
  return (
    <div className="grid gap-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Student Loans</h3>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Loan
        </Button>
      </div>

      <div className="grid gap-6">
        {studentLoans.map((loan) => {
          const progressPercentage = ((loan.originalAmount - loan.currentBalance) / loan.originalAmount) * 100
          
          return (
            <Card key={loan.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{loan.name}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4 mr-1" />
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
                    <span>{loan.remainingPayments} remaining</span>
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

                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <School className="h-4 w-4 mr-2 text-blue-500" />
                      <span className="text-sm font-medium">{loan.school}</span>
                    </div>
                    <span className="text-sm font-medium text-blue-500">
                      {loan.type}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="w-full">Make Payment</Button>
                  <Link href={`/liabilities/${loan.id}`} className="w-full">
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