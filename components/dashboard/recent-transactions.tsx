"use client"

import { Avatar } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

const transactions = [
  {
    id: "1",
    amount: -89.99,
    date: "2024-01-20",
    description: "Netflix Subscription",
    category: "Entertainment"
  },
  {
    id: "2",
    amount: -45.50,
    date: "2024-01-19",
    description: "Grocery Store",
    category: "Food"
  },
  {
    id: "3",
    amount: 2500.00,
    date: "2024-01-15",
    description: "Salary Deposit",
    category: "Income"
  }
]

export function RecentTransactions() {
  return (
    <ScrollArea className="h-[300px]">
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-2"
          >
            <div className="flex items-center space-x-4">
              <Avatar className="h-9 w-9">
                <div className={`h-full w-full rounded-full ${
                  transaction.amount > 0 ? "bg-green-500" : "bg-red-500"
                }`} />
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">
                  {transaction.description}
                </p>
                <p className="text-sm text-muted-foreground">
                  {transaction.category}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className={`text-sm font-medium leading-none ${
                  transaction.amount > 0 ? "text-green-500" : "text-red-500"
                }`}>
                  {transaction.amount > 0 ? "+" : ""}
                  ${Math.abs(transaction.amount).toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}