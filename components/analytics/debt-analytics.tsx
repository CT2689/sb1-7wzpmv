"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const debtData = [
  {
    name: "Credit Cards",
    amount: 4300,
    interestRate: 16.99
  },
  {
    name: "Student Loans",
    amount: 27000,
    interestRate: 4.5
  },
  {
    name: "Mortgage",
    amount: 275000,
    interestRate: 3.5
  },
  {
    name: "Car Loan",
    amount: 15000,
    interestRate: 5.9
  }
]

export function DebtAnalytics() {
  const totalDebt = debtData.reduce((sum, item) => sum + item.amount, 0)
  
  return (
    <div className="space-y-4">
      <Card className="group hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle>Debt Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
              <BarChart data={debtData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  }).format(value as number)}
                  contentStyle={{
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: '0.5rem',
                    padding: '0.5rem'
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="amount" 
                  fill="var(--primary)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {debtData.map((debt) => (
          <Card key={debt.name} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-sm font-medium">{debt.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${debt.amount.toLocaleString()}
              </div>
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>{((debt.amount/totalDebt)*100).toFixed(1)}% of total debt</span>
                <span className="font-medium text-primary">{debt.interestRate}% APR</span>
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="text-sm text-muted-foreground">
                  Monthly Payment: ${(debt.amount * (debt.interestRate/1200)/(1-Math.pow(1+debt.interestRate/1200, -360))).toFixed(2)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}