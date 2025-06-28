"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plane, LogIn, User } from "lucide-react"


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo and App Name */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Plane className="h-4 w-4" />
          </div>
          <span className="text-lg font-bold text-gray-900">TRAVELIX</span>
        </Link>

        {/* Navigation Links Grouped */}
        <nav className="hidden md:flex items-center space-x-6 text- text-gray-600">
          <Link href="/dashboard" className="hover:text-blue-600 transition-colors">
            My Travel
          </Link>
          <Link href="/trip-planner" className="hover:text-blue-600 transition-colors">
            Trip Planner
          </Link>
          <Link href="/destinations" className="hover:text-blue-600 transition-colors">
            Destinations
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-2">
         <Link href="/auth/signin">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Sign In
            </Button>
          </Link>

          <Link href="/auth/signup">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <User className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
          </Link>


        </div>
      </div>
    </header>
  )
}
