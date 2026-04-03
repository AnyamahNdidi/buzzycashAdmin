"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"

type Country = "nigeria" | "ghana"

interface GameEntry {
  id: number
  ticket: string
  username: string
  amount: string
  purchasedAt: string
}

interface Props {
  selectedCountry: Country
  search: string
}

const data: Record<Country, GameEntry[]> = {
  nigeria: Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    ticket: "BUZZYCASH",
    username: "ayomakun",
    amount: "50000NGN",
    purchasedAt: "12/02/23 14:30:00",
  })),
  ghana: Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    ticket: "BUZZYCASH GH",
    username: "kwame_g",
    amount: "5000GHS",
    purchasedAt: "14/02/23 10:15:00",
  })),
}

const ITEMS_PER_PAGE = 9

export default function GameHistory({ selectedCountry, search }: Props) {
  const [currentPage, setCurrentPage] = useState(1)

  const filtered = data[selectedCountry].filter(
    (g) =>
      g.username.toLowerCase().includes(search.toLowerCase()) ||
      g.ticket.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  return (
    <>
      <Card className="shadow-xl border-0 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4">
          <div className="grid grid-cols-5 gap-4 font-semibold text-sm">
            <div>Ticket</div>
            <div>Username</div>
            <div>Amount</div>
            <div>Purchased At</div>
            <div>Details</div>
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
              <div className="font-medium text-gray-900">{row.ticket}</div>
              <div className="text-gray-700">{row.username}</div>
              <div className="font-semibold text-gray-900">{row.amount}</div>
              <div className="text-gray-600 text-sm">{row.purchasedAt}</div>
              <div className="flex items-center gap-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-r-none border-gray-200 text-gray-700 hover:bg-gray-100 px-4"
                >
                  Details
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-l-none border-l-0 border-orange-400 bg-orange-400 hover:bg-orange-500 text-white px-2"
                    >
                      <ChevronDown className="w-3 h-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Ticket</DropdownMenuItem>
                    <DropdownMenuItem>View Draw</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Cancel</DropdownMenuItem>
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