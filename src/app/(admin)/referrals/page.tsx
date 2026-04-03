"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

import ReferralSettings from "@/components/ReferralSettings"
import ReferralLevels from "@/components/ReferralLevels"
import WelcomeBonus from "@/components/WelcomeBonus"
import Statistics from "@/components/Statistics"

type Country = "nigeria" | "ghana"
type Tab = "settings" | "levels" | "bonus" | "statistics"

const tabs: { id: Tab; label: string }[] = [
  { id: "settings", label: "Referral Settings" },
  { id: "levels", label: "Referral Levels" },
  { id: "bonus", label: "Welcome Bonus" },
  { id: "statistics", label: "Statistics" },
]

export default function Referrals() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<Tab>("settings")
  const [selectedCountry, setSelectedCountry] = useState<Country>("nigeria")

  const sharedProps = { selectedCountry }

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

        {/* Country Selector */}
        <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-gray-200/50 w-fit mb-6">
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

        {/* Tab Content */}
        {activeTab === "settings" && <ReferralSettings {...sharedProps} />}
        {activeTab === "levels" && <ReferralLevels {...sharedProps} />}
        {activeTab === "bonus" && <WelcomeBonus {...sharedProps} />}
        {activeTab === "statistics" && <Statistics {...sharedProps} />}
      </main>
    </>
  )
}