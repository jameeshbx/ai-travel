"use client"

import type React from "react"

// Super simple button component
export function Button({
  children,
  onClick,
  className = "",
  type = "button",
}: {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: "button" | "submit"
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${className}`}
    >
      {children}
    </button>
  )
}
