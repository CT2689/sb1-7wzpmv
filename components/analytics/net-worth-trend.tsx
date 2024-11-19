"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const netWorthData = [
  { month: "Jan", assets: 350000, liabilities: 321500, netWorth: 28500 },
  { month: "Feb", assets: 355000, liabilities: 320000, netWorth: 35000 },
  { month: "Mar", assets: 360000, liabilities: 318000, netWorth: 42000 },
  { month: "Apr", assets: 362000, liabilities: 316000, netWorth: 46000 },
  { month: "May", assets: 368000, liabilities: 314000, netWorth: 54000 }
]

export function NetWorthTrend() {
  return (
    <div className="space-y-4">
      <Card className="group hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle>Net Worth Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
              <LineChart data={netWorthData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
                <XAxis dataKey="month" />
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
                <Line 
                  type="monotone" 
                  dataKey="assets" 
                  stroke="#4ECDC4" 
                  strokeWidth={2}
                  name="Assets"
                  dot={{ strokeWidth: 2 }}
                  activeDot={{ r: 8 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="liabilities" 
                  stroke="#FF6B6B" 
                  strokeWidth={2}
                  name="Liabilities"
                  dot={{ strokeWidth: 2 }}
                  activeDot={{ r: 8 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="netWorth" 
                  stroke="var(--primary)" 
                  strokeWidth={2}
                  name="Net Worth"
                  dot={{ strokeWidth: 2 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="group hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#4ECDC4]">
              ${netWorthData[netWorthData.length - 1].assets.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              +{((netWorthData[netWorthData.length - 1].assets - netWorthData[0].assets) / netWorthData[0].assets * 100).toFixed(1)}% since January
            </p>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Liabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#FF6B6B]">
              ${netWorthData[netWorthData.length - 1].liabilities.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {((netWorthData[netWorthData.length - 1].liabilities - netWorthData[0].liabilities) / netWorthData[0].liabilities * 100).toFixed(1)}% since January
            </p>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Net Worth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              ${netWorthData[netWorthData.length - 1].netWorth.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              +{((netWorthData[netWorthData.length - 1].netWorth - netWorthData[0].netWorth) / netWorthData[0].netWorth * 100).toFixed(1)}% since January
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}