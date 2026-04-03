"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Mail } from "lucide-react"

type Country = "nigeria" | "ghana"

interface Notification {
  id: number
  title: string
  message: string
  username: string
  date: string
  read: boolean
}

interface Props {
  selectedCountry: Country
  search: string
}

const data: Record<Country, Notification[]> = {
  nigeria: Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: "Winning Notification",
    message: "Congrats! You won 5000NGN in BUZZYCASH DAILY PHASE#1234",
    username: "ayomakun",
    date: "12/02/23 14:30:00",
    read: i % 2 !== 0,
  })),
  ghana: Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: "Winning Notification",
    message: "Congrats! You won 500GHS in BUZZYCASH GH DAILY PHASE#5678",
    username: "kwame_g",
    date: "14/02/23 10:15:00",
    read: i % 2 !== 0,
  })),
}

const ITEMS_PER_PAGE = 6

export default function NotificationHistory({ selectedCountry, search }: Props) {
  const [currentPage, setCurrentPage] = useState(1)

  const filtered = data[selectedCountry].filter(
    (n) =>
      n.username.toLowerCase().includes(search.toLowerCase()) ||
      n.message.toLowerCase().includes(search.toLowerCase()) ||
      n.title.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  return (
    <>
      <div className="flex flex-col gap-3">
        {paginated.map((notif) => (
          <div
            key={notif.id}
            className={`rounded-xl border p-5 transition-all hover:shadow-md ${
              !notif.read
                ? "bg-orange-50 border-orange-200"
                : "bg-white border-gray-100"
            }`}
          >
            {/* Title row */}
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-900">{notif.title}</h3>
              {!notif.read && (
                <Badge className="bg-orange-100 text-orange-600 border-orange-200 text-xs">
                  New
                </Badge>
              )}
            </div>

            {/* Message */}
            <p className="text-gray-700 text-sm mb-3">{notif.message}</p>

            {/* Meta row */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span className="font-medium text-gray-700">{notif.username}</span>
              <span>{notif.date}</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                {notif.read ? (
                  <span className="text-gray-400">read</span>
                ) : (
                  <span className="text-orange-500 font-medium">unread</span>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>

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