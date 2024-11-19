"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const spendingData = [
  { name: "Housing", value: 1500, color: "#FF6B6B" },
  { name: "Transportation", value: 400, color: "#4ECDC4" },
  { name: "Food", value: 600, color: "#45B7D1" },
  { name: "Utilities", value: 300, color: "#96CEB4" },
  { name: "Entertainment", value: 200, color: "#FFEEAD" },
  { name: "Healthcare", value: 250, color: "#D4A5A5" },
  { name: "Other", value: 300, color: "#9FA8DA" }
]

export function SpendingAnalytics() {
  const total = spendingData.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="col-span-2 group hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle>Monthly Spending Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
              <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <Pie
                  data={spendingData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name} (${((value/total)*100).toFixed(1)}%)`}
                >
                  {spendingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  }).format(value as number)}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {spendingData.map((category) => (
        <Card key={category.name} className="group hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              {category.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${category.value}</div>
            <p className="text-xs text-muted-foreground mt-2">
              {((category.value/total)*100).toFixed(1)}% of total spending
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}