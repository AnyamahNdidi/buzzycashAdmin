"use client"

import { useRouter, usePathname } from "next/navigation"
import { BarChart3, FileText, Gamepad2, LayoutDashboard, Users, Wallet } from 'lucide-react'

export function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

  const sidebarItems = [
    { id: "dashboard", label: "DASHBOARD", icon: LayoutDashboard, href: "/" },
    { id: "activities", label: "GAME ACTIVITIES", icon: Gamepad2, href: "/game-activities" },
    { id: "users", label: "USER MANAGEMENT", icon: Users, href: "/users" },
    { id: "payout", label: "WINNING PAYOUT", icon: Wallet, href: "/payout" },
    { id: "report", label: "INTERNAL REPORT", icon: FileText, href: "/reports" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="w-64 bg-white shadow-xl border-r border-gray-200/50">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">₦</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Admin Panel</h3>
            <p className="text-xs text-gray-500">Management System</p>
          </div>
        </div>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <li key={item.id}>
                <button
                  onClick={() => router.push(item.href)}
                  className={`w-full flex items-center gap-3 px-3 py-3 text-xs font-medium rounded-xl transition-all duration-200 group ${
                    active
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm"
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-colors ${
                    active 
                      ? "bg-white/20" 
                      : "bg-gray-100 group-hover:bg-gray-200"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
