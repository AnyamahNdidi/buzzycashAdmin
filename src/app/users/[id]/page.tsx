"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import {
  Wallet,
  ArrowDownCircle,
  ArrowUpCircle,
  FileText,
  CheckCircle,
  CircleDollarSign,
  CreditCard,
  LogIn,
  Bell,
  Users,
  User,
  Ban,
} from "lucide-react"

export default function UserDetailsPage() {
  const router = useRouter()
  const userId = "2347076367146" // Dummy user ID for display

  const metricCards = [
    {
      title: "Balance",
      value: "10,000 NGN",
      icon: Wallet,
      bg: "bg-slate-700",
      viewColor: "text-slate-300",
    },
    {
      title: "Deposits",
      value: "8,500 NGN",
      icon: ArrowDownCircle,
      bg: "bg-green-600",
      viewColor: "text-green-300",
    },
    {
      title: "Payouts",
      value: "7,000 NGN",
      icon: ArrowUpCircle,
      bg: "bg-red-600",
      viewColor: "text-red-300",
    },
    {
      title: "Transactions",
      value: "8",
      icon: FileText,
      bg: "bg-blue-600",
      viewColor: "text-blue-300",
    },
  ]

  const actionButtons = [
    { label: "Debit", icon: CircleDollarSign },
    { label: "Credit", icon: CreditCard },
    { label: "Login Activities", icon: LogIn },
    { label: "Notifications", icon: Bell },
    { label: "Referrals", icon: Users },
    { label: "View Account", icon: User },
    { label: "Ban User", icon: Ban },
  ]

  return (
    <>
      <Header showBack onBack={() => router.push("/users")} />

      <main className="flex-1 p-8 overflow-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-6">USER - +{userId}</h2>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metricCards.map((card, index) => {
            const Icon = card.icon
            return (
              <Card
                key={index}
                className={`${card.bg} border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                <CardContent className="p-6 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium opacity-90">{card.title}</p>
                    <Icon className="w-6 h-6 opacity-80" />
                  </div>
                  <div className="flex items-end justify-between">
                    <p className="text-3xl font-bold">{card.value}</p>
                    <Button variant="link" className={`text-xs font-semibold ${card.viewColor} hover:underline`}>
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {actionButtons.map((button, index) => {
            const Icon = button.icon
            return (
              <Button
                key={index}
                variant="outline"
                className="bg-white text-gray-700 border-gray-200 hover:bg-gray-50 rounded-lg px-4 py-2 flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {button.label}
              </Button>
            )
          })}
        </div>

        {/* User Information Form */}
        <Card className="shadow-xl border-0 p-6">
          <CardContent className="p-0">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Perfect Light - Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-2">
                  Fullname <span className="text-red-500">*</span>
                </label>
                <Input id="fullname" defaultValue="Perfect Light" className="bg-gray-50 border-gray-200 rounded-lg" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    defaultValue="chine.cleavecreativesolutions@gmail.com"
                    className="bg-gray-50 border-gray-200 rounded-lg pr-10"
                  />
                  <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
                </div>
              </div>
              <div>
                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-200 bg-gray-200 text-gray-700 text-sm">
                    +234
                  </span>
                  <Input
                    id="phone-number"
                    defaultValue="7076367146"
                    className="flex-1 bg-gray-50 border-gray-200 rounded-r-lg rounded-l-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <Input id="address" placeholder="Enter address" className="bg-gray-50 border-gray-200 rounded-lg" />
              </div>
              <div>
                <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-2">
                  Nationality <span className="text-red-500">*</span>
                </label>
                <Input id="nationality" defaultValue="Nigeria" className="bg-gray-50 border-gray-200 rounded-lg" />
              </div>
              <div>
                <label htmlFor="2fa-status" className="block text-sm font-medium text-gray-700 mb-2">
                  2FA Security Status
                </label>
                <Input
                  id="2fa-status"
                  defaultValue="Activated"
                  readOnly
                  className="bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button className="bg-green-700 hover:bg-green-800 text-white shadow-lg shadow-green-700/25 rounded-lg px-8 py-3">
                Update Data
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  )
}7

