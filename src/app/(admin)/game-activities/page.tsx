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
import { ChevronDown, Search, Plus, ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react'

type Country = 'nigeria' | 'ghana';

export default function GameActivities() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("ticket")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCountry, setSelectedCountry] = useState<Country>('nigeria')

  const gameTabs = [
    { id: "ticket", label: "Ticket Games", icon: "🎫" },
    { id: "lottery", label: "Lottery Games", icon: "🎰" },
    { id: "virtual", label: "Virtual Games", icon: "🎮" },
    { id: "trivia", label: "Trivia Games", icon: "🧠" },
  ]

  const gameData = {
    nigeria: {
      ticket: [
        { id: 1, name: "Weekend Allowee", type: "Single Draw", price: "200.00 NGN", status: "Enabled", icon: "🎯" },
        { id: 2, name: "Corolla Budget", type: "Single Draw", price: "100,000.00 NGN", status: "Enabled", icon: "🎯" },
        { id: 3, name: "Detty Ember", type: "Single Draw", price: "15,000.00 NGN", status: "Disabled", icon: "🎯" },
        { id: 4, name: "Prayer Request", type: "Multiple Draw", price: "3,000.00 NGN", status: "Enabled", icon: "🎯" },
        { id: 5, name: "Daily 2K", type: "Multiple Draw", price: "500.00 NGN", status: "Enabled", icon: "🎯" },
      ],
      lottery: [
        { id: 1, name: "Buzzy Balls", type: "Single Draw", price: "200.00 NGN", status: "Enabled", icon: "�" },
        { id: 2, name: "Bingo Pick", type: "Single Draw", price: "100,000.00 NGN", status: "Enabled", icon: "�" },
        { id: 3, name: "Detty Ember", type: "Single Draw", price: "15,000.00 NGN", status: "Disabled", icon: "🎯" },
        { id: 4, name: "Prayer Request", type: "Multiple Draw", price: "3,000.00 NGN", status: "Enabled", icon: "🎯" },
      ],
      virtual: [
        { id: 1, name: "Lucky Scratch", type: "Single Draw", price: "200.00 NGN", status: "Enabled", icon: "�" },
        { id: 2, name: "Aviator", type: "Single Draw", price: "100,000.00 NGN", status: "Enabled", icon: "✈️" },
        { id: 3, name: "Spin 2 Win", type: "Multiple Draw", price: "3,000.00 NGN", status: "Enabled", icon: "🎡" },
      ],
      trivia: [
        { id: 1, name: "Naija Trivia", type: "Single Draw", price: "200.00 NGN", status: "Enabled", icon: "🎯" },
        { id: 2, name: "Naija Knowledge", type: "Single Draw", price: "500.00 NGN", status: "Enabled", icon: "🎯" },
      ]
    },
    ghana: {
      ticket: [
        { id: 1, name: "Weekend Allowee", type: "Single Draw", price: "20.00 GHS", status: "Enabled", icon: "�" },
        { id: 2, name: "Corolla Budget", type: "Single Draw", price: "10,000.00 GHS", status: "Enabled", icon: "🎯" },
        { id: 3, name: "Detty Ember", type: "Single Draw", price: "1,500.00 GHS", status: "Disabled", icon: "🎯" },
        { id: 4, name: "Prayer Request", type: "Multiple Draw", price: "300.00 GHS", status: "Enabled", icon: "�" },
      ],
      lottery: [
        { id: 1, name: "Buzzy Balls GH", type: "Single Draw", price: "20.00 GHS", status: "Enabled", icon: "�" },
        { id: 2, name: "Bingo Pick GH", type: "Single Draw", price: "10,000.00 GHS", status: "Enabled", icon: "�" },
      ],
      virtual: [
        { id: 1, name: "Lucky Scratch GH", type: "Single Draw", price: "20.00 GHS", status: "Enabled", icon: "🎰" },
        { id: 2, name: "Aviator GH", type: "Single Draw", price: "10,000.00 GHS", status: "Enabled", icon: "✈️" },
      ],
      trivia: [
        { id: 1, name: "Ghana Trivia", type: "Single Draw", price: "20.00 GHS", status: "Enabled", icon: "🎯" },
        { id: 2, name: "Ghana Knowledge", type: "Single Draw", price: "50.00 GHS", status: "Enabled", icon: "🎯" },
      ]
    }
  }

  const currentGames = gameData[selectedCountry][activeTab as keyof typeof gameData.nigeria] || []

  const handleEditClick = (gameType: string, gameId: number) => {
    if (gameType === "ticket") {
      router.push(`/game-activities/update-ticket-game?id=${gameId}`)
    } else if (gameType === "lottery") {
      router.push(`/game-activities/update-lottery-game?id=${gameId}`)
    }
    // For virtual and trivia, do nothing or show a message for now
  }

  return (
    <>
      <Header showBack onBack={() => router.push('/')} />
      
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
        {/* Country Selector */}
        
        {/* Game Tabs */}
        <div className="flex items-center gap-4 mb-8">
          {gameTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
           <div className="flex items-center justify-end ">
          <div className="flex items-center gap-3 bg-white p-2 rounded-xl  border border-gray-200/50">
            <span className="text-sm font-medium text-gray-600">Country:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedCountry('nigeria')}
                className={`p-1 rounded-md transition-all ${
                  selectedCountry === 'nigeria' 
                    ? 'ring-2 ring-blue-500 scale-105' 
                    : 'opacity-80 hover:opacity-100'
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
                onClick={() => setSelectedCountry('ghana')}
                className={`p-1 rounded-md transition-all ${
                  selectedCountry === 'ghana' 
                    ? 'ring-2 ring-blue-500 scale-105' 
                    : 'opacity-80 hover:opacity-100'
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
              {selectedCountry === 'nigeria' ? 'Nigeria (NGN)' : 'Ghana (GHS)'}
            </div>
          </div>
        </div>
            <Badge variant="secondary" className=" text-orange-700 border-orange-700 py-2 px-2 hover:bg-orange-200">
              Pending Draw
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search here..."
                className="pl-10 w-80 bg-gray-50/50 border-gray-200 rounded-lg focus:bg-white transition-colors"
              />
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 rounded-lg">
              <Plus className="w-4 h-4 mr-2" />
              Add New
            </Button>
          </div>
        </div>

        {/* Games Table */}
        <Card className="shadow-xl border-0 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4">
            <div className="grid grid-cols-6 gap-4 font-semibold">
              <div>Name</div>
              <div>Type</div>
              <div>Price</div>
              <div>Status</div>
              <div>Action</div>
              <div></div>
            </div>
          </div>
          <CardContent className="p-0">
            {currentGames.map((game, index) => (
              <div
                key={game.id}
                className={`grid grid-cols-6 gap-4 p-4 items-center border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold">
                    <span className="text-lg">{game.icon}</span>
                  </div>
                  <span className="font-medium text-gray-900">{game.name}</span>
                </div>
                <div>
                  <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                    {game.type}
                  </Badge>
                </div>
                <div className="font-semibold text-gray-900">{game.price}</div>
                <div>
                  <Badge
                    variant={game.status === "Enabled" ? "default" : "destructive"}
                    className={
                      game.status === "Enabled"
                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                        : "bg-red-100 text-red-700 hover:bg-red-200"
                    }
                  >
                    {game.status}
                  </Badge>
                </div>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100">
                        Action
                        <ChevronDown className="w-3 h-3 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem 
                        onClick={() => handleEditClick(activeTab, game.id)}
                        disabled={activeTab === "virtual" || activeTab === "trivia"}
                      >
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
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
