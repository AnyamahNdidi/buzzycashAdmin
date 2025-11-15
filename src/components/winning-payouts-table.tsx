'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { payoutsList } from './winning-payouts'


interface PayoutRecord {
  id: number
  username: string
  handle: string
  amount: number
  winningType: 'Money' | 'Voucher'
  date: string
  status: 'Approved' | 'Rejected' | 'Pending'
  phone?: string
  email?: string
  accountNumber?: string
  bankName?: string
  accountName?: string
  voucherCode?: string
  notes?: string
}

const mockData: PayoutRecord[] = [
  {
    id: 1,
    username: 'Perfect Light',
    handle: '@chinis',
    amount: 5000.00,
    winningType: 'Money',
    date: '12/02/23',
    status: 'Approved',
    phone: '+2347063671146',
    email: 'chine.cleave@gmail.com',
    accountName: 'Perfect Light',
    accountNumber: '1234567890',
    bankName: 'Ghana Bank',
    notes: 'Payment processed successfully',
  },
  {
    id: 2,
    username: 'Perfect Light',
    handle: '@chinis',
    amount: 5000.00,
    winningType: 'Voucher',
    date: '12/02/23',
    status: 'Rejected',
    phone: '+2347063671146',
    email: 'chine.cleave@gmail.com',
    voucherCode: 'VOUCHER-2023-001',
    notes: 'Duplicate redemption detected',
  },
  {
    id: 3,
    username: 'Perfect Light',
    handle: '@chinis',
    amount: 5000.00,
    winningType: 'Money',
    date: '12/02/23',
    status: 'Approved',
    phone: '+2347063671146',
    email: 'chine.cleave@gmail.com',
    accountName: 'Perfect Light',
    accountNumber: '1234567890',
    bankName: 'Ghana Bank',
  },
  {
    id: 4,
    username: 'Perfect Light',
    handle: '@chinis',
    amount: 5000.00,
    winningType: 'Voucher',
    date: '12/02/23',
    status: 'Pending',
    phone: '+2347063671146',
    email: 'chine.cleave@gmail.com',
    voucherCode: 'VOUCHER-2023-004',
  },
  {
    id: 5,
    username: 'Perfect Light',
    handle: '@chinis',
    amount: 5000.00,
    winningType: 'Money',
    date: '12/02/23',
    status: 'Rejected',
    phone: '+2347063671146',
    email: 'chine.cleave@gmail.com',
    accountName: 'Perfect Light',
    accountNumber: '1234567890',
    bankName: 'Ghana Bank',
  },
  {
    id: 6,
    username: 'Perfect Light',
    handle: '@chinis',
    amount: 5000.00,
    winningType: 'Voucher',
    date: '12/02/23',
    status: 'Approved',
    phone: '+2347063671146',
    email: 'chine.cleave@gmail.com',
    voucherCode: 'VOUCHER-2023-006',
  },
  {
    id: 7,
    username: 'Perfect Light',
    handle: '@chinis',
    amount: 5000.00,
    winningType: 'Money',
    date: '12/02/23',
    status: 'Pending',
    phone: '+2347063671146',
    email: 'chine.cleave@gmail.com',
    accountName: 'Perfect Light',
    accountNumber: '1234567890',
    bankName: 'Ghana Bank',
  },
  {
    id: 8,
    username: 'Perfect Light',
    handle: '@chinis',
    amount: 5000.00,
    winningType: 'Voucher',
    date: '12/02/23',
    status: 'Rejected',
    phone: '+2347063671146',
    email: 'chine.cleave@gmail.com',
    voucherCode: 'VOUCHER-2023-008',
  },
]

interface WinningPayoutsTableProps {
  currentPage: number
  searchQuery: string
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Approved':
      return 'bg-green-100 text-green-700 border border-green-200'
    case 'Rejected':
      return 'bg-red-100 text-red-700 border border-red-200'
    case 'Pending':
      return 'bg-orange-100 text-orange-700 border border-orange-200'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

export default function WinningPayoutsTable({
    currentPage,
    searchQuery,
  }: WinningPayoutsTableProps) {
    // Choose data source: external payoutsList if present, else local mockData
    const filteredData = useMemo(() => {
      const data = (Array.isArray(payoutsList) && payoutsList.length ? payoutsList : mockData) as PayoutRecord[]
      const q = searchQuery.trim().toLowerCase()
      if (!q) return data
      return data.filter(
        (item) =>
          item.username.toLowerCase().includes(q) ||
          item.handle.toLowerCase().includes(q)
      )
    }, [searchQuery])
  
    // Simple pagination using currentPage
    const pageSize = 10
    const paginatedData = useMemo(() => {
      const start = (currentPage - 1) * pageSize
      return filteredData.slice(start, start + pageSize)
    }, [filteredData, currentPage])
  
    return (
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-orange-400 text-white">
              <th className="px-6 py-3 text-left text-sm font-semibold">Username</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Winning Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((record) => (
              <tr key={record.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-900">{record.username}</p>
                    <p className="text-sm text-green-600">{record.handle}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium">{record.amount.toFixed(2)} GHS</td>
                <td className="px-6 py-4 text-gray-700">{record.winningType}</td>
                <td className="px-6 py-4 text-gray-700">{record.date}</td>
                <td className="px-6 py-4">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${getStatusColor(record.status)}`}>
                    {record.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Link
                    href={`/winning-payouts/${record.id}`}
                    className="px-3 py-1.5 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 text-sm font-medium transition-colors inline-block"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
