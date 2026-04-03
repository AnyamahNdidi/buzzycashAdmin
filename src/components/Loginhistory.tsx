"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Country = "nigeria" | "ghana"

interface LoginEntry {
  id: number
  username: string
  loginTime: string
  ipAddress: string
  location: string
  device: string
}

interface Props {
  selectedCountry: Country
  search: string
}

const data: Record<Country, LoginEntry[]> = {
  nigeria: Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    username: "ayomakun",
    loginTime: "14:30:00",
    ipAddress: "192.168.0.1",
    location: "Lagos",
    device: "Chrome - Windows",
  })),
  ghana: Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    username: "kwame_g",
    loginTime: "10:15:00",
    ipAddress: "10.0.0.5",
    location: "Accra",
    device: i % 2 === 0 ? "Safari - iPhone" : "Chrome - Android",
  })),
}

const ITEMS_PER_PAGE = 9

export default function LoginHistory({ selectedCountry, search }: Props) {
  const [currentPage, setCurrentPage] = useState(1)

  const filtered = data[selectedCountry].filter(
    (l) =>
      l.username.toLowerCase().includes(search.toLowerCase()) ||
      l.location.toLowerCase().includes(search.toLowerCase()) ||
      l.ipAddress.includes(search)
  )

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  return (
    <>
      <Card className="shadow-xl border-0 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4">
          <div className="grid grid-cols-5 gap-4 font-semibold text-sm">
            <div>Username</div>
            <div>Login Time</div>
            <div>IP Address</div>
            <div>Location</div>
            <div>Device</div>
          </div>
        </div>
        <CardContent className="p-0">
          {paginated.map((row, index) => (
            <div
              key={row.id}
              className={`grid grid-cols-5 gap-4 p-4 items-center border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
              }`}
            >
              <div className="font-medium text-gray-900">{row.username}</div>
              <div className="text-gray-600 text-sm">{row.loginTime}</div>
              <div className="text-gray-600 text-sm font-mono">{row.ipAddress}</div>
              <div className="text-gray-700">{row.location}</div>
              <div className="text-gray-600 text-sm">{row.device}</div>
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
    </>
  )
}