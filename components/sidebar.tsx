"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOut } from "lucide-react"

/** Navigation links shown in the sidebar */
const menuItems = [
  { name: "Home" , href: "/"},
  { name: "My Travel", href: "/dashboard" },
  { name: "Trip Planner", href: "/trip-planner" },
  { name: "Destinations", href: "/destinations" },
  
]

/**
 * Sidebar component – stays fixed while the main content scrolls.
 * Place it inside a flex container next to your main content.
 */
export function Sidebar() {
  const pathname = usePathname()

  /** Example logout handler */
  const handleLogout = () => {
    console.log("User logged out from sidebar")
    alert("Logged out successfully!")

    // Example logout actions:
    // localStorage.removeItem("user")
    // sessionStorage.clear()
    // window.location.href = "/login"
  }

  return (
    <div className="w-64 bg-white border-r p-4 flex flex-col sticky top-0 self-start h-screen">
      {/* Logo / Heading */}
      <div className="mb-8">
        <h1 className="text-xl font-bold">Travel&nbsp;AI</h1>
        <p className="text-gray-500 text-sm">Dashboard</p>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`block px-3 py-2 rounded-lg transition-colors ${
              pathname === item.href
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Logout Button fixed at the bottom */}
      <div className="mt-auto mb-4 pt-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors group"
        >
          <LogOut className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  )
}
