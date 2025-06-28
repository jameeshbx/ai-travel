import type React from "react"
// Super simple card component
export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`bg-white rounded-lg shadow-sm border p-6 ${className}`}>{children}</div>
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold mb-2">{children}</h3>
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

