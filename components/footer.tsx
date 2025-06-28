"use client"
import Link from "next/link"
import { Plane, Mail } from "lucide-react"


export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Plane className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold">TravelAI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your smart travel companion powered by AI. Plan, discover, and explore the world with intelligent
              insights.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>hello@travelai.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/trip-planner" className="hover:text-white transition-colors">
                  Trip Planner
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="hover:text-white transition-colors">
                  My Favorites
                </Link>
              </li>
            </ul>
          </div>

          {/* AI Tools */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">AI Tools</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/chat" className="hover:text-white transition-colors">
                  Travel Assistant
                </Link>
              </li>
              <li>
                <Link href="/weather" className="hover:text-white transition-colors">
                  Weather Insights
                </Link>
              </li>
              <li>
                <Link href="/currency" className="hover:text-white transition-colors">
                  Currency Converter
                </Link>
              </li>
              <li>
                <Link href="/translator" className="hover:text-white transition-colors">
                  Language Translator
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm text-gray-400">© 2025 TravelAI. All rights reserved.</p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
              Cookies
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
