"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Search, Copy } from "lucide-react"

export default function UserManagement() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("all-users")

  const userTabs = [
    { id: "all-users", label: "All Users" },
    { id: "active-users", label: "Active Users" },
    { id: "banned-users", label: "Banned Users" },
  ]

  const usersData = {
    "all-users": [
      {
        id: 1,
        name: "Perfect Light",
        username: "@chinis",
        phone: "+2347076367146",
        email: "chine.cleavecreativesolutions@gmail.com",
        onboarded: "2025-07-22 12:17 PM",
        onboardedRelative: "1 week ago",
        balance: "0.00 NGN",
      },
      {
        id: 2,
        name: "Monica Ijeoma",
        username: "@Monica",
        phone: "+2349028745327",
        email: "ifeachommesoma36@gmail.com",
        onboarded: "2025-07-14 09:38 AM",
        onboardedRelative: "2 weeks ago",
        balance: "0.00 NGN",
      },
      {
        id: 3,
        name: "Ayomikun Oladipupo",
        username: "@Sekani01",
        phone: "+2348100879836",
        email: "ayomikunoladipupo62@gmail.com",
        onboarded: "2025-06-30 02:40 PM",
        onboardedRelative: "1 month ago",
        balance: "0.00 NGN",
      },
      {
        id: 4,
        name: "Tobi Yinka",
        username: "@Yinka2025",
        phone: "+2349077322979",
        email: "yolarewajus@gmail.com",
        onboarded: "2025-06-30 06:19 PM",
        onboardedRelative: "1 month ago",
        balance: "0.00 NGN",
      },
      {
        id: 5,
        name: "Perpetua Odinibueze",
        username: "@Chineche",
        phone: "+2349043545342",
        email: "perfectlight35@gmail.com",
        onboarded: "2025-06-30 04:29 PM",
        onboardedRelative: "1 month ago",
        balance: "0.00 NGN",
      },
      {
        id: 6,
        name: "Perfect Light",
        username: "@chinis",
        phone: "+2347076367146",
        email: "chine.cleavecreativesolutions@gmail.com",
        onboarded: "2025-07-22 12:17 PM",
        onboardedRelative: "1 week ago",
        balance: "0.00 NGN",
      },
      {
        id: 7,
        name: "Perfect Light",
        username: "@chinis",
        phone: "+2347076367146",
        email: "chine.cleavecreativesolutions@gmail.com",
        onboarded: "2025-07-22 12:17 PM",
        onboardedRelative: "1 week ago",
        balance: "0.00 NGN",
      },
      {
        id: 8,
        name: "Perfect Light",
        username: "@chinis",
        phone: "+2347076367146",
        email: "chine.cleavecreativesolutions@gmail.com",
        onboarded: "2025-07-22 12:17 PM",
        onboardedRelative: "1 week ago",
        balance: "0.00 NGN",
      },
    ],
    "active-users": [
      {
        id: 1,
        name: "Perfect Light",
        username: "@chinis",
        phone: "+2347076367146",
        email: "chine.cleavecreativesolutions@gmail.com",
        onboarded: "2025-07-22 12:17 PM",
        onboardedRelative: "1 week ago",
        balance: "0.00 NGN",
      },
      {
        id: 2,
        name: "Monica Ijeoma",
        username: "@Monica",
        phone: "+2349028745327",
        email: "ifeachommesoma36@gmail.com",
        onboarded: "2025-07-14 09:38 AM",
        onboardedRelative: "2 weeks ago",
        balance: "0.00 NGN",
      },
      {
        id: 3,
        name: "Ayomikun Oladipupo",
        username: "@Sekani01",
        phone: "+2348100879836",
        email: "ayomikunoladipupo62@gmail.com",
        onboarded: "2025-06-30 02:40 PM",
        onboardedRelative: "1 month ago",
        balance: "0.00 NGN",
      },
    ],
    "banned-users": [
      {
        id: 1,
        name: "Tobi Yinka",
        username: "@Yinka2025",
        phone: "+2349077322979",
        email: "yolarewajus@gmail.com",
        onboarded: "2025-06-30 06:19 PM",
        onboardedRelative: "1 month ago",
        balance: "0.00 NGN",
      },
      {
        id: 2,
        name: "Perpetua Odinibueze",
        username: "@Chineche",
        phone: "+2349043545342",
        email: "perfectlight35@gmail.com",
        onboarded: "2025-06-30 04:29 PM",
        onboardedRelative: "1 month ago",
        balance: "0.00 NGN",
      },
    ],
  }

  const currentUsers = usersData[activeTab as keyof typeof usersData] || []

  return (
    <>
      <Header showBack onBack={() => router.push("/")} />

      <main className="flex-1 p-8 overflow-auto">
        {/* User Tabs */}
        <div className="flex items-center gap-4 mb-8">
          {userTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-200/50">
              <span className="text-sm font-semibold text-gray-700">Country:</span>
              <div className="flex items-center gap-1">
                <img
                  src="/placeholder.svg?height=16&width=24"
                  alt="Nigeria Flag"
                  className="w-6 h-4 rounded-sm shadow-sm"
                />
                <img
                  src="/placeholder.svg?height=16&width=24"
                  alt="Ghana Flag"
                  className="w-6 h-4 rounded-sm shadow-sm"
                />
              </div>
            </div>
            <Button
              variant="outline"
              className="bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 rounded-lg"
            >
              KYC Status
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Username/Email"
              className="pl-10 w-80 bg-gray-50/50 border-gray-200 rounded-lg focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Users Table */}
        <Card className="shadow-xl border-0 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4">
            <div className="grid grid-cols-5 gap-4 font-semibold">
              <div>User</div>
              <div>Phone/Email</div>
              <div>Onboarded On</div>
              <div>Balance</div>
              <div>Action</div>
            </div>
          </div>
          <CardContent className="p-0">
            {currentUsers.map((user, index) => (
              <div
                key={user.id}
                className={`grid grid-cols-5 gap-4 p-4 items-center border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <div>
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-sm text-green-600">{user.username}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{user.phone}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{user.onboarded}</p>
                  <p className="text-sm text-gray-600">{user.onboardedRelative}</p>
                </div>
                <div className="font-semibold text-gray-900">{user.balance}</div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100"
                    onClick={() => router.push(`/users/${user.id}`)}
                  >
                    Details
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </>
  )
}
