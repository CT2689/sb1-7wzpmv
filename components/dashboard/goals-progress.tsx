"use client"

import { Progress } from "@/components/ui/progress"

const goals = [
  {
    id: "1",
    name: "Emergency Fund",
    target: 10000,
    current: 6500,
    category: "Savings"
  },
  {
    id: "2",
    name: "New Car",
    target: 25000,
    current: 15000,
    category: "Purchase"
  }
]

export function GoalsProgress() {
  return (
    <div className="space-y-8">
      {goals.map((goal) => {
        const progress = (goal.current / goal.target) * 100
        return (
          <div key={goal.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{goal.name}</p>
                <p className="text-sm text-muted-foreground">{goal.category}</p>
              </div>
              <p className="font-medium">
                ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
              </p>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )
      })}
    </div>
  )
}