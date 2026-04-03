"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Pencil, Check, X } from "lucide-react"

type Country = "nigeria" | "ghana"

interface Props {
  selectedCountry: Country
}

const bonusData: Record<Country, { amount: string; currency: string }> = {
  nigeria: { amount: "50", currency: "₦" },
  ghana: { amount: "5", currency: "GHS" },
}

const statsData: Record<Country, { totalPaid: string; totalDistributed: string; thisMonth: string }> = {
  nigeria: { totalPaid: "1,247", totalDistributed: "₦77,000", thisMonth: "100" },
  ghana: { totalPaid: "342", totalDistributed: "GHS 8,500", thisMonth: "28" },
}

export default function WelcomeBonus({ selectedCountry }: Props) {
  const { amount: defaultAmount, currency } = bonusData[selectedCountry]
  const stats = statsData[selectedCountry]

  const [amount, setAmount] = useState(defaultAmount)
  const [editing, setEditing] = useState(false)
  const [editValue, setEditValue] = useState(defaultAmount)

  const handleSave = () => {
    setAmount(editValue)
    setEditing(false)
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-5">Welcome Bonus</h2>

      {/* Top cards row */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        {/* Current Welcome Bonus */}
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-8 text-center">
          <p className="text-sm font-semibold text-gray-700 mb-2">Current Welcome Bonus</p>
          <p className="text-4xl font-bold text-orange-500 mb-1">
            {currency}{amount}
          </p>
          <p className="text-xs text-gray-500">Given to new users on first sign up</p>
        </div>

        {/* How It Works */}
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-8">
          <p className="text-sm font-semibold text-gray-700 mb-2">How It Works</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            New users will automatically receive {currency}{amount} in their account when they
            complete their first sign up. This bonus is credited immediately after successful
            registration.
          </p>
        </div>
      </div>

      {/* Edit Amount row */}
      <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-0.5">Welcome Bonus Amount</p>
          {editing ? (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-gray-500 text-sm">{currency}</span>
              <Input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="w-32 h-8 text-sm border-orange-300 focus:ring-orange-300"
              />
            </div>
          ) : (
            <p className="text-gray-800 font-semibold">{currency}{amount}</p>
          )}
        </div>
        {editing ? (
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => { setEditing(false); setEditValue(amount) }}
            >
              <X className="w-3 h-3 mr-1" /> Cancel
            </Button>
            <Button
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={handleSave}
            >
              <Check className="w-3 h-3 mr-1" /> Save
            </Button>
          </div>
        ) : (
          <Button
            size="sm"
            className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25"
            onClick={() => setEditing(true)}
          >
            <Pencil className="w-3 h-3 mr-1" />
            Edit Amount
          </Button>
        )}
      </div>

      {/* Bonus Statistics */}
      <h3 className="text-base font-semibold text-gray-800 mb-3">Bonus Statistics</h3>
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Bonuses Paid", value: stats.totalPaid },
          { label: "Total Amount Distributed", value: stats.totalDistributed },
          { label: "Bonuses This month", value: stats.thisMonth },
        ].map((stat) => (
          <div key={stat.label} className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-center">
            <p className="text-xl font-bold text-gray-800 mb-1">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}