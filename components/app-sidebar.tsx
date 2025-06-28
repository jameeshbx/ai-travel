"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  LayoutDashboard,
  MapPin,
  Calendar,
  Camera,
  MessageSquare,
  CloudSun,
  DollarSign,
  Languages,
  Compass,
  Settings,
  User,
  Plane,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Trip Planner",
    url: "/trip-planner",
    icon: Calendar,
  },
  {
    title: "Destination Finder",
    url: "/destinations",
    icon: MapPin,
  },
  {
    title: "Itinerary Generator",
    url: "/itinerary",
    icon: Compass,
  },
]

const aiTools = [
  {
    title: "Travel Chat Assistant",
    url: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Weather Insights",
    url: "/weather",
    icon: CloudSun,
  },
  {
    title: "Currency Converter",
    url: "/currency",
    icon: DollarSign,
  },
  {
    title: "Language Translator",
    url: "/translator",
    icon: Languages,
  },
  {
    title: "Destination Images",
    url: "/images",
    icon: Camera,
  },
]

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform bg-background border-r transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          isCollapsed ? "-translate-x-full" : "translate-x-0",
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Plane className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">AI Travel Tools</span>
                <span className="text-xs text-muted-foreground">Dashboard</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-auto px-4">
            <div className="space-y-6">
              {/* Main Navigation */}
              <div>
                <h3 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Navigation
                </h3>
                <nav className="space-y-1">
                  {navigationItems.map((item) => (
                    <Link key={item.title} href={item.url}>
                      <Button variant={pathname === item.url ? "secondary" : "ghost"} className="w-full justify-start">
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.title}
                      </Button>
                    </Link>
                  ))}
                </nav>
              </div>

              <Separator />

              {/* AI Tools */}
              <div>
                <h3 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  AI Tools
                </h3>
                <nav className="space-y-1">
                  {aiTools.map((tool) => (
                    <Link key={tool.title} href={tool.url}>
                      <Button variant={pathname === tool.url ? "secondary" : "ghost"} className="w-full justify-start">
                        <tool.icon className="mr-2 h-4 w-4" />
                        {tool.title}
                      </Button>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 space-y-1">
            <Link href="/settings">
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setIsCollapsed(true)} />
      )}
    </>
  )
}
