"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  {
    date: "Jan",
    income: 10400,
    expenses: 8240,
  },
  {
    date: "Feb",
    income: 14405,
    expenses: 9300,
  },
  {
    date: "Mar",
    income: 9400,
    expenses: 7200,
  },
  {
    date: "Apr",
    income: 8200,
    expenses: 6278,
  },
  {
    date: "May",
    income: 7000,
    expenses: 5189,
  },
  {
    date: "Jun",
    income: 9600,
    expenses: 7239,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis
          dataKey="date"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <Card className="p-2 border shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Income
                      </span>
                      <span className="font-bold text-green-500">
                        ${payload[0].value}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Expenses
                      </span>
                      <span className="font-bold text-red-500">
                        ${payload[1].value}
                      </span>
                    </div>
                  </div>
                </Card>
              )
            }
            return null
          }}
        />
        <Line
          type="monotone"
          dataKey="income"
          strokeWidth={2}
          stroke="#22c55e"
          dot={{ strokeWidth: 2, r: 4 }}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="expenses"
          strokeWidth={2}
          stroke="#ef4444"
          dot={{ strokeWidth: 2, r: 4 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}