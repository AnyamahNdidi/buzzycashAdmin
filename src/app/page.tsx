"use client"

import { Card, CardContent } from "@/components/ui/card"
// import { Sidebar } from "@/components/sidebar" // Removed: now in layout.tsx
import { Header } from "@/components/header"
import { BarChart3, CreditCard, FileText, Gamepad2, LayoutDashboard, Search, TrendingUp, Users, Wallet, X, RefreshCw, Ban, DollarSign, Ticket, Trophy, Gift, Clock, ArrowUpDown } from 'lucide-react'

export default function Dashboard() {
const metricCards = [
  {
    title: "Total Subscribers",
    value: "10,000",
    icon: Users,
    bgGradient: "bg-gradient-to-br from-slate-700 to-slate-800",
    textColor: "text-white",
    iconBg: "bg-white/20"
  },
  {
    title: "Active Subscriptions",
    value: "8,500",
    icon: TrendingUp,
    bgGradient: "bg-gradient-to-br from-green-600 to-green-700",
    textColor: "text-white",
    iconBg: "bg-white/20"
  },
  {
    title: "Total Renewals",
    value: "7,000",
    icon: RefreshCw,
    bgGradient: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    textColor: "text-white",
    iconBg: "bg-white/20"
  },
  {
    title: "Inactive Subscribers",
    value: "800",
    icon: Users,
    bgGradient: "bg-gradient-to-br from-red-500 to-red-600",
    textColor: "text-white",
    iconBg: "bg-white/20"
  }
]

const statsCards = [
  {
    value: "6500",
    label: "Tickets Sold",
    icon: Ticket,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-500",
    bgGradient: "bg-gradient-to-br from-orange-50 to-orange-100/80",
    borderColor: "border-orange-200/50"
  },
  {
    value: "5,000,000 NGN",
    label: "Amount Sold",
    icon: DollarSign,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-500",
    bgGradient: "bg-gradient-to-br from-blue-50 to-blue-100/80",
    borderColor: "border-blue-200/50"
  },
  {
    value: "300,000 NGN",
    label: "Paid Bonus",
    icon: Gift,
    iconColor: "text-green-600",
    iconBg: "bg-green-500",
    bgGradient: "bg-gradient-to-br from-green-50 to-green-100/80",
    borderColor: "border-green-200/50"
  },
  {
    value: "2,650,000 NGN",
    label: "Realized Profit",
    icon: Trophy,
    iconColor: "text-yellow-600",
    iconBg: "bg-yellow-500",
    bgGradient: "bg-gradient-to-br from-yellow-50 to-yellow-100/80",
    borderColor: "border-yellow-200/50"
  },
  {
    value: "2,050,000 NGN",
    label: "Total Payout",
    icon: CreditCard,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-500",
    bgGradient: "bg-gradient-to-br from-emerald-50 to-emerald-100/80",
    borderColor: "border-emerald-200/50"
  },
  {
    value: "80",
    label: "Pending Payment",
    icon: Clock,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-500",
    bgGradient: "bg-gradient-to-br from-amber-50 to-amber-100/80",
    borderColor: "border-amber-200/50"
  },
  {
    value: "30",
    label: "Rejected Payment",
    icon: X,
    iconColor: "text-red-600",
    iconBg: "bg-red-500",
    bgGradient: "bg-gradient-to-br from-red-50 to-red-100/80",
    borderColor: "border-red-200/50"
  },
  {
    value: "500",
    label: "Total Withdrawal",
    icon: ArrowUpDown,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-500",
    bgGradient: "bg-gradient-to-br from-indigo-50 to-indigo-100/80",
    borderColor: "border-indigo-200/50"
  },
  {
    value: "20",
    label: "Pending Withdrawal",
    icon: RefreshCw,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-500",
    bgGradient: "bg-gradient-to-br from-orange-50 to-orange-100/80",
    borderColor: "border-orange-200/50"
  },
  {
    value: "80",
    label: "Rejected Withdrawal",
    icon: Ban,
    iconColor: "text-rose-600",
    iconBg: "bg-rose-500",
    bgGradient: "bg-gradient-to-br from-rose-50 to-rose-100/80",
    borderColor: "border-rose-200/50"
  }
]

return (
  <>
    <Header />
    
    <main className="flex-1 p-8 overflow-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">DASHBOARD</h2>
          <p className="text-gray-600">Welcome back! Here's what's happening with your platform.</p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-200/50">
          <span className="text-sm font-semibold text-gray-700">Country:</span>
          <div className="flex items-center gap-1">
            <div className="w-6 h-4 bg-green-500 rounded-sm shadow-sm"></div>
            <div className="w-6 h-4 bg-yellow-500 rounded-sm shadow-sm"></div>
            <div className="w-6 h-4 bg-red-500 rounded-sm shadow-sm"></div>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {metricCards.map((card, index) => {
          const Icon = card.icon
          return (
            <Card key={index} className={`${card.bgGradient} border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${card.textColor} opacity-90 mb-3`}>
                      {card.title}
                    </p>
                    <p className={`text-3xl font-bold ${card.textColor}`}>
                      {card.value}
                    </p>
                  </div>
                  <div className={`p-3 rounded-xl ${card.iconBg}`}>
                    <Icon className={`w-7 h-7 ${card.textColor}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className={`${stat.bgGradient} border ${stat.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${stat.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xl font-bold text-gray-900 leading-tight mb-1">{stat.value}</p>
                    <p className="text-sm font-medium text-gray-600 leading-tight">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </main>
  </>
)
}
