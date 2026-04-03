"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Country = "nigeria" | "ghana"

interface Referrer {
  id: number
  username: string
  email: string
  level: "Gold" | "Silver" | "Bronze"
  referrals: number
  totalRewards: string
}

interface Props {
  selectedCountry: Country
}

const summaryData: Record<Country, {
  totalReferrals: string
  activeReferrers: string
  totalRewardsPaid: string
  conversionRate: string
}> = {
  nigeria: {
    totalReferrals: "1,247",
    activeReferrers: "₦77,000",
    totalRewardsPaid: "100",
    conversionRate: "100",
  },
  ghana: {
    totalReferrals: "342",
    activeReferrers: "GHS 8,500",
    totalRewardsPaid: "56",
    conversionRate: "78",
  },
}

const referrers: Record<Country, Referrer[]> = {
  nigeria: [
    { id: 1, username: "ayomakun", email: "ayomakun@mk.com", level: "Gold", referrals: 60, totalRewards: "₦5000" },
    { id: 2, username: "ayomakun", email: "ayomakun@mk.com", level: "Gold", referrals: 60, totalRewards: "₦5000" },
    { id: 3, username: "ayomakun", email: "ayomakun@mk.com", level: "Bronze", referrals: 20, totalRewards: "₦2000" },
    { id: 4, username: "ayomakun", email: "ayomakun@mk.com", level: "Silver", referrals: 40, totalRewards: "₦3000" },
    { id: 5, username: "ayomakun", email: "ayomakun@mk.com", level: "Gold", referrals: 60, totalRewards: "₦5000" },
    { id: 6, username: "tunde_b", email: "tunde@mk.com", level: "Silver", referrals: 35, totalRewards: "₦3000" },
    { id: 7, username: "emeka_k", email: "emeka@mk.com", level: "Bronze", referrals: 15, totalRewards: "₦500" },
  ],
  ghana: [
    { id: 1, username: "kwame_g", email: "kwame@mk.com", level: "Gold", referrals: 55, totalRewards: "GHS 200" },
    { id: 2, username: "ama_b", email: "ama@mk.com", level: "Silver", referrals: 25, totalRewards: "GHS 100" },
    { id: 3, username: "kofi_m", email: "kofi@mk.com", level: "Bronze", referrals: 8, totalRewards: "GHS 50" },
    { id: 4, username: "akosua_d", email: "akosua@mk.com", level: "Gold", referrals: 60, totalRewards: "GHS 200" },
  ],
}

const levelColors: Record<Referrer["level"], string> = {
  Gold: "text-yellow-600 font-semibold",
  Silver: "text-gray-500 font-semibold",
  Bronze: "text-amber-700 font-semibold",
}

const ITEMS_PER_PAGE = 5

export default function Statistics({ selectedCountry }: Props) {
  const [currentPage, setCurrentPage] = useState(1)
  const summary = summaryData[selectedCountry]
  const allReferrers = referrers[selectedCountry]

  const totalPages = Math.ceil(allReferrers.length / ITEMS_PER_PAGE)
  const paginated = allReferrers.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const summaryCards = [
    { label: "Total Referrals", value: summary.totalReferrals },
    { label: "Active Referrers", value: summary.activeReferrers },
    { label: "Total Rewards Paid", value: summary.totalRewardsPaid },
    { label: "Conversion Rate", value: summary.conversionRate },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-5">Statistics</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {summaryCards.map((card) => (
          <div key={card.label} className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-center">
            <p className="text-xl font-bold text-gray-800 mb-1">{card.value}</p>
            <p className="text-xs text-gray-500">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Referrers Table */}
      <Card className="shadow-sm border-0 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4">
          <div className="grid grid-cols-4 gap-4 font-semibold text-sm">
            <div>Referrer</div>
            <div>Level</div>
            <div>Referrals</div>
            <div>Total Rewards</div>
          </div>
        </div>
        <CardContent className="p-0">
          {paginated.map((row, index) => (
            <div
              key={row.id}
              className={`grid grid-cols-4 gap-4 p-4 items-center border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
              }`}
            >
              <div>
                <p className="font-medium text-gray-900">{row.username}</p>
                <p className="text-xs text-gray-500">{row.email}</p>
              </div>
              <div className={levelColors[row.level]}>{row.level}</div>
              <div className="text-gray-700">{row.referrals}</div>
              <div className="font-semibold text-gray-900">{row.totalRewards}</div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="sm"
            className={currentPage === page ? "bg-orange-500 hover:bg-orange-600" : ""}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Button>
        ))}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}