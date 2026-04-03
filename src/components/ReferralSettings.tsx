"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Country = "nigeria" | "ghana"

interface Props {
  selectedCountry: Country
}

const defaultSettings: Record<Country, {
  rewardAmount: string
  rewardPercentage: string
  referralLimit: string
  action: string
  active: boolean
}> = {
  nigeria: {
    rewardAmount: "100",
    rewardPercentage: "10%",
    referralLimit: "50",
    action: "",
    active: false,
  },
  ghana: {
    rewardAmount: "10",
    rewardPercentage: "5%",
    referralLimit: "30",
    action: "",
    active: true,
  },
}

export default function ReferralSettings({ selectedCountry }: Props) {
  const def = defaultSettings[selectedCountry]
  const [active, setActive] = useState(def.active)
  const [rewardAmount, setRewardAmount] = useState(def.rewardAmount)
  const [rewardPercentage, setRewardPercentage] = useState(def.rewardPercentage)
  const [referralLimit, setReferralLimit] = useState(def.referralLimit)
  const [action, setAction] = useState(def.action)

  const currency = selectedCountry === "nigeria" ? "NGN" : "GHS"

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      {/* Header row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Referral Settings</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-600">Referral Status</span>
          <button
            onClick={() => setActive(!active)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${
              active ? "bg-orange-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ${
                active ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Row 1: Required Action for Reward — full width */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Required Action for Reward
        </label>
        <div className="relative">
          <select
            value={action}
            onChange={(e) => setAction(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300 appearance-none pr-10"
          >
            <option value="">Action</option>
            <option value="signup">Sign Up</option>
            <option value="first_deposit">First Deposit</option>
            <option value="first_game">First Game Played</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Row 2: Reward Amount | Reward Percentage */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Reward Amount ({currency})
          </label>
          <Input
            value={rewardAmount}
            onChange={(e) => setRewardAmount(e.target.value)}
            className="border-gray-200 focus:ring-orange-300 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Reward Percentage
          </label>
          <Input
            value={rewardPercentage}
            onChange={(e) => setRewardPercentage(e.target.value)}
            className="border-gray-200 focus:ring-orange-300 w-full"
          />
        </div>
      </div>

      {/* Row 3: Referral Limit Per User | Current Status */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Referral Limit Per User
          </label>
          <Input
            value={referralLimit}
            onChange={(e) => setReferralLimit(e.target.value)}
            className="border-gray-200 focus:ring-orange-300 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Current Status
          </label>
          <div
            className={`w-full rounded-lg px-3 py-2.5 text-sm font-medium ${
              active
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-500"
            }`}
          >
            {active ? "Active - Referrals Enabled" : "Inactive - Referrals Disabled"}
          </div>
        </div>
      </div>

      {/* Save button — right aligned */}
      <div className="flex justify-end">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 px-8 rounded-xl">
          Save Settings
        </Button>
      </div>
    </div>
  )
}