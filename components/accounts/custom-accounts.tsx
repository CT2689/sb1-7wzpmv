"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, ArrowUpRight, Briefcase } from "lucide-react"

const accounts = [
  {
    id: "1",
    name: "Business Investment",
    type: "Private Equity",
    value: 75000,
    initialInvestment: 50000,
    dateInvested: "2022-06-15",
    notes: "Startup investment in tech company",
    return: 50
  },
  {
    id: "2",
    name: "Art Collection",
    type: "Alternative Asset",
    value: 25000,
    initialInvestment: 20000,
    dateInvested: "2023-01-10",
    notes: "Contemporary art pieces",
    return: 25
  }
]

export function CustomAccounts() {
  return (
    <div className="grid gap-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Custom Assets</h3>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Asset
        </Button>
      </div>

      <div className="grid gap-6">
        {accounts.map((asset) => (
          <Card key={asset.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="h-2 bg-gradient-to-r from-pink-500 to-pink-600" />
            <CardHeader className="flex flex-row items-start justify-between">
              <div className="space-y-1">
                <CardTitle>{asset.name}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4 mr-1" />
                  {asset.type}
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="text-3xl font-bold">
                  ${asset.value.toLocaleString()}
                </div>
                <div className="flex items-center gap-2 mt-1 text-sm">
                  <span className="text-green-500">+{asset.return}%</span>
                  <span className="text-muted-foreground">
                    return on investment
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium">Initial Investment</p>
                  <p className="text-lg mt-1">
                    ${asset.initialInvestment.toLocaleString()}
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium">Date Invested</p>
                  <p className="text-lg mt-1">
                    {new Date(asset.dateInvested).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm font-medium">Notes</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {asset.notes}
                </p>
              </div>

              <div className="flex gap-2">
                <Button className="w-full">Update Value</Button>
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}