"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { BarChart3, CreditCard, FileText, Gamepad2, LayoutDashboard, Search, TrendingUp, Users, Wallet, X, RefreshCw, Ban, DollarSign, Ticket, Trophy, Gift, Clock, ArrowUpDown } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

// Define country types
type Country = 'nigeria' | 'ghana'

// Define metric data structure
interface MetricData {
  title: string
  value: string
  icon: any
  bgGradient: string
  textColor: string
  iconBg: string
}

// Define stats data structure
interface StatsData {
  value: string
  label: string
  icon: any
  iconColor: string
  iconBg: string
  bgGradient: string
  borderColor: string
}

// Country-specific data
const countryData: Record<Country, { 
  metrics: MetricData[],
  stats: StatsData[]
}> = {
  nigeria: {
    metrics: [
      {
        title: "Total Customers",
        value: "10,000",
        icon: Users,
        bgGradient: "bg-gradient-to-br from-[#0A2463] to-[#0A2463]",
        textColor: "text-white",
        iconBg: "bg-white/20"
      },
      {
        title: "Active Customers",
        value: "8,500",
        icon: TrendingUp,
        bgGradient: "bg-gradient-to-br from-[#008D26] to-[#008D26]",
        textColor: "text-white",
        iconBg: "bg-white/20"
      },
      {
        title: "Total Renewals",
        value: "7,000",
        icon: RefreshCw,
        bgGradient: "bg-gradient-to-br from-[#0DA4BA] to-[#0DA4BA]",
        textColor: "text-white",
        iconBg: "bg-white/20"
      },
      {
        title: "Inactive Customers",
        value: "800",
        icon: Users,
        bgGradient: "bg-gradient-to-br from-[#D32828] to-[#D32828]",
        textColor: "text-white",
        iconBg: "bg-white/20"
      }
    ],
    stats: [
      {
        value: "6,500",
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
  },
  ghana: {
    metrics: [
      {
        title: "Total Customers",
        value: "5,200",
        icon: Users,
        bgGradient: "bg-gradient-to-br from-slate-700 to-slate-800",
        textColor: "text-white",
        iconBg: "bg-white/20"
      },
      {
        title: "Active Customers",
        value: "4,500",
        icon: TrendingUp,
        bgGradient: "bg-gradient-to-br from-green-600 to-green-700",
        textColor: "text-white",
        iconBg: "bg-white/20"
      },
      {
        title: "Total Renewals",
        value: "3,200",
        icon: RefreshCw,
        bgGradient: "bg-gradient-to-br from-cyan-500 to-cyan-600",
        textColor: "text-white",
        iconBg: "bg-white/20"
      },
      {
        title: "Inactive Customers",
        value: "700",
        icon: Users,
        bgGradient: "bg-gradient-to-br from-red-500 to-red-600",
        textColor: "text-white",
        iconBg: "bg-white/20"
      }
    ],
    stats: [
      {
        value: "3,200",
        label: "Tickets Sold",
        icon: Ticket,
        iconColor: "text-orange-600",
        iconBg: "bg-orange-500",
        bgGradient: "bg-gradient-to-br from-orange-50 to-orange-100/80",
        borderColor: "border-orange-200/50"
      },
      {
        value: "2,800,000 GHS",
        label: "Amount Sold",
        icon: DollarSign,
        iconColor: "text-blue-600",
        iconBg: "bg-blue-500",
        bgGradient: "bg-gradient-to-br from-blue-50 to-blue-100/80",
        borderColor: "border-blue-200/50"
      },
      {
        value: "180,000 GHS",
        label: "Paid Bonus",
        icon: Gift,
        iconColor: "text-green-600",
        iconBg: "bg-green-500",
        bgGradient: "bg-gradient-to-br from-green-50 to-green-100/80",
        borderColor: "border-green-200/50"
      },
      {
        value: "1,450,000 GHS",
        label: "Realized Profit",
        icon: Trophy,
        iconColor: "text-yellow-600",
        iconBg: "bg-yellow-500",
        bgGradient: "bg-gradient-to-br from-yellow-50 to-yellow-100/80",
        borderColor: "border-yellow-200/50"
      },
      {
        value: "1,120,000 GHS",
        label: "Total Payout",
        icon: CreditCard,
        iconColor: "text-emerald-600",
        iconBg: "bg-emerald-500",
        bgGradient: "bg-gradient-to-br from-emerald-50 to-emerald-100/80",
        borderColor: "border-emerald-200/50"
      },
      {
        value: "45",
        label: "Pending Payment",
        icon: Clock,
        iconColor: "text-amber-600",
        iconBg: "bg-amber-500",
        bgGradient: "bg-gradient-to-br from-amber-50 to-amber-100/80",
        borderColor: "border-amber-200/50"
      },
      {
        value: "15",
        label: "Rejected Payment",
        icon: X,
        iconColor: "text-red-600",
        iconBg: "bg-red-500",
        bgGradient: "bg-gradient-to-br from-red-50 to-red-100/80",
        borderColor: "border-red-200/50"
      },
      {
        value: "280",
        label: "Total Withdrawal",
        icon: ArrowUpDown,
        iconColor: "text-indigo-600",
        iconBg: "bg-indigo-500",
        bgGradient: "bg-gradient-to-br from-indigo-50 to-indigo-100/80",
        borderColor: "border-indigo-200/50"
      },
      {
        value: "12",
        label: "Pending Withdrawal",
        icon: RefreshCw,
        iconColor: "text-orange-600",
        iconBg: "bg-orange-500",
        bgGradient: "bg-gradient-to-br from-orange-50 to-orange-100/80",
        borderColor: "border-orange-200/50"
      },
      {
        value: "40",
        label: "Rejected Withdrawal",
        icon: Ban,
        iconColor: "text-rose-600",
        iconBg: "bg-rose-500",
        bgGradient: "bg-gradient-to-br from-rose-50 to-rose-100/80",
        borderColor: "border-rose-200/50"
      }
    ]
  }
}

export default function Dashboard() {
  const [selectedCountry, setSelectedCountry] = useState<Country>('nigeria')
  const { metrics, stats } = countryData[selectedCountry]
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
   <div className="flex min-h-screen flex-col">
    <Header 
    title="Dashboard" 
    onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
    isSidebarOpen={isSidebarOpen}
    />
  <div className="flex-1 space-y-4 p-2 sm:p-4 md:p-6 lg:p-8 pt-4 sm:pt-6">
    <div className="flex flex-col sm:flex-row sm:items-center justify-end space-y-2 sm:space-y-0">
      {/* <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Dashboard</h2> */}
      <div className="flex items-center space-x-2">
        <div>Country:</div>
        <div 
          className={`p-1 rounded-md cursor-pointer transition-all ${
            selectedCountry === 'nigeria' ? 'ring-2 ring-blue-500 scale-105' : 'opacity-80 hover:opacity-100'
          }`}
          onClick={() => setSelectedCountry('nigeria')}
          title="Nigeria"
        >
          <Image 
            src="/images/NIG.png" 
            alt="Nigeria" 
            width={32} 
            height={24} 
            className="w-8 sm:w-10"
          />
        </div>
        <div 
          className={`p-1 rounded-md cursor-pointer transition-all ${
            selectedCountry === 'ghana' ? 'ring-2 ring-blue-500 scale-105' : 'opacity-80 hover:opacity-100'
          }`}
          onClick={() => setSelectedCountry('ghana')}
          title="Ghana"
        >
          <Image 
            src="/images/GHN.png" 
            alt="Ghana" 
            width={32} 
            height={24} 
            className="w-8 sm:w-10"
          />
        </div>
      </div>
    </div>

    {/* Country Indicator */}
    <div className="bg-white p-3 rounded-lg shadow-sm border text-sm sm:text-base">
      <p className="text-gray-600">
        Showing data for: <span className="font-medium">
          {selectedCountry === 'nigeria' ? 'Nigeria (NGN)' : 'Ghana (GHS)'}
        </span>
      </p>
    </div>

    {/* Metrics Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {metrics.map((metric, index) => (
        <Card 
          key={index} 
          className={`${metric.bgGradient} ${metric.textColor} transition-all hover:shadow-lg h-full min-h-[120px]`}
        >
          <CardContent className="p-4 sm:p-6 h-full">
            <div className="flex items-center justify-between h-full">
              <div>
                <p className="text-xs sm:text-sm font-medium">{metric.title}</p>
                <h3 className="text-xl sm:text-2xl font-bold">{metric.value}</h3>
              </div>
              <div className={`p-2 sm:p-3 rounded-full ${metric.iconBg}`}>
                <metric.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((stat, index) => (
        <Card 
          key={index} 
          className={`${stat.bgGradient} border ${stat.borderColor} transition-all hover:shadow-md h-full min-h-[100px] sm:min-h-[120px]`}
        >
          <CardContent className="p-3 sm:p-4 h-full">
            <div className="flex items-center justify-between h-full">
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-700">{stat.label}</p>
                <h3 className={`text-lg sm:text-xl font-bold ${stat.iconColor}`}>
                  {stat.value}
                </h3>
              </div>
              <div className={`p-1.5 sm:p-2 rounded-full ${stat.iconBg} bg-opacity-20`}>
                <stat.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${stat.iconColor}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</div>
  )
}