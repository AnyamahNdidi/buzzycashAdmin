"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Country = "nigeria" | "ghana"

interface Transaction {
  id: number
  username: string
  trx: string
  transactionDate: string
  amount: string
  postBalance: string
  type: "Deposit" | "Withdrawal" | "Transfer"
}

interface Props {
  selectedCountry: Country
  search: string
}

const data: Record<Country, Transaction[]> = {
  nigeria: Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    username: "ayomakun",
    trx: "TRX13468900",
    transactionDate: "12/02/23 14:30:00",
    amount: "5000.00 NGN",
    postBalance: "50000NGN",
    type: i % 3 === 0 ? "Withdrawal" : i % 3 === 1 ? "Transfer" : "Deposit",
  })),
  ghana: Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    username: "kwame_g",
    trx: "TRX98765400",
    transactionDate: "14/02/23 10:15:00",
    amount: "500.00 GHS",
    postBalance: "5000GHS",
    type: i % 2 === 0 ? "Deposit" : "Withdrawal",
  })),
}

const typeStyles: Record<Transaction["type"], string> = {
  Deposit: "bg-green-100 text-green-700 hover:bg-green-200",
  Withdrawal: "bg-red-100 text-red-600 hover:bg-red-200",
  Transfer: "bg-blue-100 text-blue-600 hover:bg-blue-200",
}

const ITEMS_PER_PAGE = 9

export default function TransactionHistory({ selectedCountry, search }: Props) {
  const [currentPage, setCurrentPage] = useState(1)

  const filtered = data[selectedCountry].filter(
    (t) =>
      t.username.toLowerCase().includes(search.toLowerCase()) ||
      t.trx.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  return (
    <>
      <Card className="shadow-xl border-0 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4">
          <div className="grid grid-cols-6 gap-4 font-semibold text-sm">
            <div>Username</div>
            <div>Trx</div>
            <div>Transaction Date</div>
            <div>Amount</div>
            <div>Post Balance</div>
            <div>Details</div>
          </div>
        </div>
        <CardContent className="p-0">
          {paginated.map((row, index) => (
            <div
              key={row.id}
              className={`grid grid-cols-6 gap-4 p-4 items-center border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
              }`}
            >
              <div className="text-gray-700 font-medium">{row.username}</div>
              <div className="text-gray-600 text-sm">{row.trx}</div>
              <div className="text-gray-600 text-sm">{row.transactionDate}</div>
              <div className="font-semibold text-gray-900">{row.amount}</div>
              <div className="font-semibold text-gray-900">{row.postBalance}</div>
              <div>
                <Badge className={typeStyles[row.type]}>{row.type}</Badge>
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