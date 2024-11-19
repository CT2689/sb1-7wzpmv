"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingDown } from "lucide-react"
import Link from "next/link"

export default function LiabilityDetailsPage() {
  const params = useParams()
  const id = params.id

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      <div className="flex items-center space-x-4">
        <Link href="/liabilities">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="space-y-0.5">
          <h2 className="text-3xl font-bold tracking-tight">Liability Details</h2>
          <p className="text-muted-foreground">View and manage your liability information</p>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <TrendingDown className="h-5 w-5 text-primary" />
              <CardTitle>Liability Information</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p>Details for liability {id}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' }
  ]
}