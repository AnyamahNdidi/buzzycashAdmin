"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Country = "nigeria" | "ghana"

interface WinningEntry {
  id: number
  username: string
  ticket: string
  amountWon: string
  date: string
  status: "Paid" | "Pending" | "Processing"
}

interface Props {
  selectedCountry: Country
  search: string
}

const data: Record<Country, WinningEntry[]> = {
  nigeria: Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    username: "ayomakun",
    ticket: "BUZZYCASH DAILY PHASE#1234",
    amountWon: "5000NGN",
    date: "12/02/23 14:30:00",
    status: i % 3 === 0 ? "Pending" : i % 3 === 1 ? "Processing" : "Paid",
  })),
  ghana: Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    username: "kwame_g",
    ticket: "BUZZYCASH GH PHASE#5678",
    amountWon: "500GHS",
    date: "14/02/23 10:15:00",
    status: i % 2 === 0 ? "Paid" : "Pending",
  })),
}

const statusStyles: Record<WinningEntry["status"], string> = {
  Paid: "bg-green-100 text-green-700 hover:bg-green-200",
  Pending: "bg-orange-100 text-orange-600 hover:bg-orange-200",
  Processing: "bg-blue-100 text-blue-600 hover:bg-blue-200",
}

const ITEMS_PER_PAGE = 9

export default function WinningHistory({ selectedCountry, search }: Props) {
  const [currentPage, setCurrentPage] = useState(1)

  const filtered = data[selectedCountry].filter(
    (w) =>
      w.username.toLowerCase().includes(search.toLowerCase()) ||
      w.ticket.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  return (
    <>
      <Card className="shadow-xl border-0 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4">
          <div className="grid grid-cols-5 gap-4 font-semibold text-sm">
            <div>Username</div>
            <div>Ticket</div>
            <div>Amount Won</div>
            <div>Date</div>
            <div>Status</div>
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
              <div className="text-gray-700 text-sm">{row.ticket}</div>
              <div className="font-semibold text-gray-900">{row.amountWon}</div>
              <div className="text-gray-600 text-sm">{row.date}</div>
              <div>
                <Badge className={statusStyles[row.status]}>{row.status}</Badge>
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