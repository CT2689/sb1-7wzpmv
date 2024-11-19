"use client"

import { useState } from "react"

export function useDetailsDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const openDetails = (item: any) => {
    setSelectedItem(item)
    setIsOpen(true)
  }

  const closeDetails = () => {
    setIsOpen(false)
    setSelectedItem(null)
  }

  return {
    isOpen,
    selectedItem,
    openDetails,
    closeDetails,
  }
}