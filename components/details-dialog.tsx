"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { 
  Activity,
  AlertCircle,
  ArrowDownRight,
  ArrowUpRight,
  Calendar,
  CreditCard,
  DollarSign,
  FileText,
  History,
  Info,
  Percent,
  PiggyBank,
  Wallet
} from "lucide-react"

const mockTransactionHistory = [
  { date: "2024-01-20", type: "credit", amount: 2500, description: "Salary Deposit" },
  { date: "2024-01-19", type: "debit", amount: -1200, description: "Rent Payment" },
  { date: "2024-01-18", type: "debit", amount: -89.99, description: "Netflix Subscription" },
  { date: "2024-01-17", type: "credit", amount: 500, description: "Freelance Payment" },
  { date: "2024-01-16", type: "debit", amount: -45.50, description: "Grocery Store" }
]

const mockBalanceHistory = [
  { date: "2023-08", balance: 8500 },
  { date: "2023-09", balance: 9200 },
  { date: "2023-10", balance: 8900 },
  { date: "2023-11", balance: 9800 },
  { date: "2023-12", balance: 10500 },
  { date: "2024-01", balance: 11200 }
]

interface DetailsDialogProps {
  isOpen: boolean
  onClose: () => void
  data: any
  type: "account" | "liability"
}

export function DetailsDialog({ isOpen, onClose, data, type }: DetailsDialogProps) {
  if (!data) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{data.name}</DialogTitle>
          <DialogDescription>
            {type === "account" ? data.bank : data.lender}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Current Balance
                  </CardTitle>
                  {type === "account" ? (
                    <Wallet className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  )}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ${type === "account" ? data.balance : data.currentBalance}
                  </div>
                  {type === "account" && data.monthlyChange && (
                    <p className="text-xs text-muted-foreground">
                      {data.monthlyChange >= 0 ? "+" : "-"}
                      ${Math.abs(data.monthlyChange)} this month
                    </p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {type === "account" ? "Interest Rate" : "APR"}
                  </CardTitle>
                  <Percent className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {type === "account" ? data.apy : data.apr}%
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {type === "account" ? "Annual Percentage Yield" : "Annual Percentage Rate"}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Balance History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockBalanceHistory}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="balance"
                        stroke="var(--primary)"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle>Recent Transactions</CardTitle>
                <History className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  {mockTransactionHistory.map((transaction, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full bg-muted`}>
                          {transaction.type === "credit" ? (
                            <ArrowUpRight className="h-4 w-4 text-green-500" />
                          ) : (
                            <ArrowDownRight className="h-4 w-4 text-red-500" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{transaction.description}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(transaction.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className={`text-sm font-medium ${
                        transaction.type === "credit" ? "text-green-500" : "text-red-500"
                      }`}>
                        {transaction.type === "credit" ? "+" : "-"}
                        ${Math.abs(transaction.amount)}
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Account Info</CardTitle>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="space-y-2">
                  {type === "account" ? (
                    <>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Account Number</span>
                        <span className="text-sm">•••• {data.lastFourDigits}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Account Type</span>
                        <span className="text-sm">{data.type}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Original Amount</span>
                        <span className="text-sm">${data.originalAmount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Remaining Term</span>
                        <span className="text-sm">{data.remainingPayments} months</span>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Important Dates</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Next Payment Due</span>
                    <span className="text-sm">
                      {new Date(data.nextPaymentDate || data.dueDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Statement Closing</span>
                    <span className="text-sm">
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {type === "liability" && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Payment Information</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Minimum Payment</span>
                    <span className="text-sm">${data.minPayment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Last Payment</span>
                    <span className="text-sm">$350.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Payment Method</span>
                    <span className="text-sm">Auto Pay Enabled</span>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}