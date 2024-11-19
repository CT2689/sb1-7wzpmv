import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wallet2 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col">
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
                Smart Finance Management
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Take control of your financial future with powerful tools and insights
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
              <Link href="/dashboard" className="w-full">
                <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 hover:opacity-90">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/auth" className="w-full">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}