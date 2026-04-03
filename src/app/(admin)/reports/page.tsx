"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Search, SlidersHorizontal } from "lucide-react"

import TransactionHistory from "@/components/Transactionhistory"
import WinningHistory from "@/components/Winninghistory"
import GameHistory from "@/components/Gamehistory"
import LoginHistory from "@/components/Loginhistory"
import NotificationHistory from "@/components/Notificationhistory"

type Country = "nigeria" | "ghana"
type Tab = "transaction" | "game" | "winning" | "login" | "notification"

const tabs: { id: Tab; label: string }[] = [
  { id: "transaction", label: "Transaction History" },
  { id: "game", label: "Game History" },
  { id: "winning", label: "Winning History" },
  { id: "login", label: "Login History" },
  { id: "notification", label: "Notification History" },
]

export default function InternalReport() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<Tab>("transaction")
  const [selectedCountry, setSelectedCountry] = useState<Country>("nigeria")
  const [search, setSearch] = useState("")

  const sharedProps = { selectedCountry, search }

  return (
    <>
      <Header showBack onBack={() => router.push("/")} />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
        {/* Page Title */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Master Admin</h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push("/")}
            className="border-orange-300 text-orange-600 hover:bg-orange-50"
          >
            ← Back
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                activeTab === tab.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {activeTab === tab.id && <span>📋</span>}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          {/* Country Selector */}
          <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-gray-200/50">
            <span className="text-sm font-medium text-gray-600">Country:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedCountry("nigeria")}
                className={`p-1 rounded-md transition-all ${
                  selectedCountry === "nigeria"
                    ? "ring-2 ring-blue-500 scale-105"
                    : "opacity-80 hover:opacity-100"
                }`}
                title="Nigeria"
              >
                <Image
                  src="/images/NIG.png"
                  alt="Nigeria"
                  width={32}
                  height={24}
                  className="w-8 h-6 object-cover rounded"
                />
              </button>
              <button
                onClick={() => setSelectedCountry("ghana")}
                className={`p-1 rounded-md transition-all ${
                  selectedCountry === "ghana"
                    ? "ring-2 ring-blue-500 scale-105"
                    : "opacity-80 hover:opacity-100"
                }`}
                title="Ghana"
              >
                <Image
                  src="/images/GHN.png"
                  alt="Ghana"
                  width={32}
                  height={24}
                  className="w-8 h-6 object-cover rounded"
                />
              </button>
            </div>
          </div>

          {/* Search + Filter */}
          <div className="flex items-center gap-3">
            {activeTab === "transaction" && (
              <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-300">
                <option value="">Transaction Type</option>
                <option value="deposit">Deposit</option>
                <option value="withdrawal">Withdrawal</option>
                <option value="transfer">Transfer</option>
              </select>
            )}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 w-64 bg-gray-50/50 border-gray-200 rounded-lg focus:bg-white transition-colors"
              />
            </div>
            {activeTab === "transaction" && (
              <Button variant="outline" size="sm" className="border-gray-200 text-gray-600 hover:bg-gray-50">
                <SlidersHorizontal className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "transaction" && <TransactionHistory {...sharedProps} />}
        {activeTab === "game" && <GameHistory {...sharedProps} />}
        {activeTab === "winning" && <WinningHistory {...sharedProps} />}
        {activeTab === "login" && <LoginHistory {...sharedProps} />}
        {activeTab === "notification" && <NotificationHistory {...sharedProps} />}
      </main>
    </>
  )
}