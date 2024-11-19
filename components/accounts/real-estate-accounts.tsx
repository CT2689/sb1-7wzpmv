"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, Plus, Building2, TrendingUp, MapPin } from "lucide-react"

const accounts = [
  {
    id: "1",
    name: "Primary Residence",
    address: "123 Main St, Anytown, USA",
    purchasePrice: 350000,
    currentValue: 425000,
    mortgage: 275000,
    equity: 150000,
    appreciation: 21.4,
    lastValuation: "2024-01-15",
    type: "Single Family Home",
    yearPurchased: 2020,
    squareFeet: 2200
  },
  {
    id: "2",
    name: "Rental Property",
    address: "456 Oak Ave, Somewhere, USA",
    purchasePrice: 280000,
    currentValue: 320000,
    mortgage: 210000,
    equity: 110000,
    appreciation: 14.3,
    lastValuation: "2024-01-10",
    type: "Duplex",
    yearPurchased: 2021,
    squareFeet: 2800,
    rentalIncome: 2800
  }
]

export function RealEstateAccounts() {
  return (
    <div className="grid gap-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Real Estate</h3>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Property
        </Button>
      </div>

      <div className="grid gap-6">
        {accounts.map((property) => {
          const equityPercentage = (property.equity / property.currentValue) * 100
          
          return (
            <Card key={property.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-600" />
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{property.name}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4 mr-1" />
                    {property.type}
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-3xl font-bold">
                    ${property.currentValue.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-sm">
                    <div className="flex items-center text-green-500">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {property.appreciation}%
                    </div>
                    <span className="text-muted-foreground">
                      appreciation since purchase
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Equity</span>
                    <span>{equityPercentage.toFixed(1)}% owned</span>
                  </div>
                  <Progress value={equityPercentage} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>${property.equity.toLocaleString()} equity</span>
                    <span>${property.mortgage.toLocaleString()} mortgage</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium">Purchase Details</p>
                    <div className="mt-1 space-y-1">
                      <p className="text-sm">
                        Price: ${property.purchasePrice.toLocaleString()}
                      </p>
                      <p className="text-sm">Year: {property.yearPurchased}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium">Property Details</p>
                    <div className="mt-1 space-y-1">
                      <p className="text-sm">
                        {property.squareFeet.toLocaleString()} sq ft
                      </p>
                      {'rentalIncome' in property && (
                        <p className="text-sm text-green-500">
                          ${property.rentalIncome}/month rental
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    {property.address}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="w-full">Update Value</Button>
                  <Button variant="outline" className="w-full">View Details</Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}