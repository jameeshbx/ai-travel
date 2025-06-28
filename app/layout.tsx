import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"

export const metadata: Metadata = {
  title: "Travel AI Dashboard",
  description: "Simple travel dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-gray-50">
          
          <main className="flex-1 ">{children}</main>
        </div>
      </body>
    </html>
  )
}
