"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

const upcomingPayments = [
  {
    id: "1",
    amount: 1200.00,
    dueDate: "2024-01-25",
    description: "Rent Payment",
    status: "pending"
  },
  {
    id: "2",
    amount: 350.00,
    dueDate: "2024-01-27",
    description: "Car Insurance",
    status: "pending"
  }
]

export function UpcomingPayments() {
  return (
    <ScrollArea className="h-[300px]">
      <div className="space-y-4">
        {upcomingPayments.map((payment) => (
          <div
            key={payment.id}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div>
              <p className="font-medium">{payment.description}</p>
              <p className="text-sm text-muted-foreground">
                Due: {new Date(payment.dueDate).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <p className="font-medium">${payment.amount.toFixed(2)}</p>
              <Button size="sm">Pay Now</Button>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}