"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  CreditCard, 
  LayoutDashboard, 
  LineChart, 
  Wallet2,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const navigation = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard
  },
  {
    href: "/accounts",
    label: "Accounts",
    icon: Wallet2
  },
  {
    href: "/liabilities",
    label: "Liabilities",
    icon: CreditCard
  },
  {
    href: "/analytics",
    label: "Analytics",
    icon: LineChart
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings
  }
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Wallet2 className="h-6 w-6 text-primary" />
        <span className="hidden font-bold sm:inline-block">
          WealthNest
        </span>
      </Link>
      <nav className="flex items-center space-x-4 lg:space-x-6">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                isActive 
                  ? "bg-muted hover:bg-muted" 
                  : "text-muted-foreground hover:text-foreground hover:bg-transparent",
                "transition-colors"
              )}
            >
              <Icon className="h-4 w-4 mr-2" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}