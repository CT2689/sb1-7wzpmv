"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useTheme } from "next-themes"

type Theme = "dark" | "light" | "system"

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProviderContext.Provider value={{ theme: (theme as Theme), setTheme }}>
      <div {...props}>{children}</div>
    </ThemeProviderContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useThemeContext must be used within a ThemeProvider")

  return context
}