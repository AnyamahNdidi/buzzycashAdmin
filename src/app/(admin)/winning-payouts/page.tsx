'use client'

import { useState } from 'react'
// import AdminLayout from '@/components/admin-layout'
import WinningPayoutsTable from '@/components/winning-payouts-table'
import { Header } from '@/components/header'
import { useRouter } from "next/navigation"
export default function WinningPayoutsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [countryFilter, setCountryFilter] = useState('all')
  const router = useRouter()

  return (
    <>
      <Header showBack onBack={() => router.push("/")} />
        {/* Main Content */}
        <main className="bg-white rounded-lg border border-gray-200 p-6 overflow-auto">
          {/* Filters */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">Country:</span>
              <div className="flex gap-2">
                <img src="/flag-ghana.svg" alt="Ghana" className="w-6 h-6" />
                <img src="/flag-nigeria.svg" alt="Nigeria" className="w-6 h-6" />
              </div>
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 ml-auto">
              <input
                type="text"
                placeholder="Search here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="p-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Table */}
          <WinningPayoutsTable currentPage={currentPage} searchQuery={searchQuery} />

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentPage(1)}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                currentPage === 1
                  ? 'bg-orange-400 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              1
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className={`px-3 py-1 roun    ded text-sm font-medium transition-colors ${
                currentPage === 2
                  ? 'bg-orange-400 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              2
            </button>
            <button className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </main>
   
    </>
  )
}
