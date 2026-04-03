"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Header } from "@/components/header"
import { ChevronDown, Search, ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react"

type Country = "nigeria" | "ghana"
type PaymentTab = "manual" | "automated"

interface Transaction {
  id: number
  gateway: string
  initiationDate: string
  username: string
  amount: string
  status: "Confirmed" | "Pending" | "Declined"
}

export default function Transactions() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<PaymentTab>("manual")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCountry, setSelectedCountry] = useState<Country>("nigeria")

  const paymentTabs = [
    { id: "manual" as PaymentTab, label: "Manual Payment" },
    { id: "automated" as PaymentTab, label: "Automated Payment" },
  ]

  const transactionData: Record<Country, Record<PaymentTab, Transaction[]>> = {
    nigeria: {
      manual: [
        { id: 1, gateway: "1512", initiationDate: "12/02/23", username: "ayomakun", amount: "5000.00 NGN", status: "Confirmed" },
        { id: 2, gateway: "1512", initiationDate: "12/02/23", username: "ayomakun", amount: "5000.00 NGN", status: "Pending" },
        { id: 3, gateway: "1512", initiationDate: "12/02/23", username: "ayomakun", amount: "5000.00 NGN", status: "Declined" },
        { id: 4, gateway: "1512", initiationDate: "12/02/23", username: "ayomakun", amount: "5000.00 NGN", status: "Confirmed" },
        { id: 5, gateway: "1512", initiationDate: "12/02/23", username: "ayomakun", amount: "5000.00 NGN", status: "Declined" },
        { id: 6, gateway: "1512", initiationDate: "12/02/23", username: "ayomakun", amount: "5000.00 NGN", status: "Confirmed" },
        { id: 7, gateway: "1512", initiationDate: "12/02/23", username: "ayomakun", amount: "5000.00 NGN", status: "Pending" },
        { id: 8, gateway: "1512", initiationDate: "12/02/23", username: "ayomakun", amount: "5000.00 NGN", status: "Confirmed" },
        { id: 9, gateway: "1512", initiationDate: "12/02/23", username: "ayomakun", amount: "5000.00 NGN", status: "Declined" },
      ],
      automated: [
        { id: 1, gateway: "2201", initiationDate: "14/02/23", username: "john_doe", amount: "10000.00 NGN", status: "Confirmed" },
        { id: 2, gateway: "2202", initiationDate: "14/02/23", username: "jane_smith", amount: "7500.00 NGN", status: "Pending" },
        { id: 3, gateway: "2203", initiationDate: "14/02/23", username: "tunde_bello", amount: "3000.00 NGN", status: "Declined" },
        { id: 4, gateway: "2204", initiationDate: "14/02/23", username: "amaka_obi", amount: "15000.00 NGN", status: "Confirmed" },
        { id: 5, gateway: "2205", initiationDate: "14/02/23", username: "emeka_kalu", amount: "2500.00 NGN", status: "Confirmed" },
      ],
    },
    ghana: {
      manual: [
        { id: 1, gateway: "3301", initiationDate: "12/02/23", username: "kwame_g", amount: "500.00 GHS", status: "Confirmed" },
        { id: 2, gateway: "3302", initiationDate: "12/02/23", username: "ama_b", amount: "300.00 GHS", status: "Pending" },
        { id: 3, gateway: "3303", initiationDate: "12/02/23", username: "kofi_m", amount: "1000.00 GHS", status: "Declined" },
        { id: 4, gateway: "3304", initiationDate: "12/02/23", username: "akosua_d", amount: "750.00 GHS", status: "Confirmed" },
      ],
      automated: [
        { id: 1, gateway: "4401", initiationDate: "15/02/23", username: "yaw_asante", amount: "1200.00 GHS", status: "Confirmed" },
        { id: 2, gateway: "4402", initiationDate: "15/02/23", username: "abena_ko", amount: "800.00 GHS", status: "Pending" },
        { id: 3, gateway: "4403", initiationDate: "15/02/23", username: "kojo_fr", amount: "2000.00 GHS", status: "Confirmed" },
      ],
    },
  }

  const currentTransactions = transactionData[selectedCountry][activeTab]

  const statusStyles: Record<Transaction["status"], string> = {
    Confirmed: "bg-green-100 text-green-700 hover:bg-green-200",
    Pending: "bg-orange-100 text-orange-600 hover:bg-orange-200",
    Declined: "bg-red-100 text-red-600 hover:bg-red-200",
  }

  return (
    <>
      <Header showBack onBack={() => router.push("/")} />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
        {/* Page title */}
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

        {/* Payment Tabs */}
        <div className="flex items-center gap-4 mb-8">
          {paymentTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
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
          {/* Country selector */}
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
            <div className="text-sm font-medium text-gray-700">
              {selectedCountry === "nigeria" ? "Nigeria (NGN)" : "Ghana (GHS)"}
            </div>
          </div>

          {/* Search + filter */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search here..."
                className="pl-10 w-72 bg-gray-50/50 border-gray-200 rounded-lg focus:bg-white transition-colors"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-200 text-gray-600 hover:bg-gray-50"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Transactions Table */}
        <Card className="shadow-xl border-0 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4">
            <div className="grid grid-cols-6 gap-4 font-semibold">
              <div>Gateway / Transaction</div>
              <div>Initiation Date</div>
              <div>Username</div>
              <div>Amount</div>
              <div>Status</div>
              <div>Action</div>
            </div>
          </div>

          <CardContent className="p-0">
            {currentTransactions.map((txn, index) => (
              <div
                key={txn.id}
                className={`grid grid-cols-6 gap-4 p-4 items-center border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <div className="font-medium text-gray-900">{txn.gateway}</div>
                <div className="text-gray-600">{txn.initiationDate}</div>
                <div className="text-gray-700">{txn.username}</div>
                <div className="font-semibold text-gray-900">{txn.amount}</div>
                <div>
                  <Badge className={statusStyles[txn.status]}>{txn.status}</Badge>
                </div>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100"
                      >
                        Action
                        <ChevronDown className="w-3 h-3 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Confirm</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Decline</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant={currentPage === 1 ? "default" : "outline"}
            size="sm"
            className={currentPage === 1 ? "bg-orange-500 hover:bg-orange-600" : ""}
            onClick={() => setCurrentPage(1)}
          >
            1
          </Button>
          <Button
            variant={currentPage === 2 ? "default" : "outline"}
            size="sm"
            className={currentPage === 2 ? "bg-orange-500 hover:bg-orange-600" : ""}
            onClick={() => setCurrentPage(2)}
          >
            2
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </main>
    </>
  )
}