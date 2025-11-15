'use client'

import { useParams, useRouter } from 'next/navigation'
import { ChevronLeft, Download } from 'lucide-react'
import { Header } from '@/components/header'
import { payoutDetails } from '@/components/winning-payouts'


interface WithdrawalRecord {
  id: string | number
  username: string
  transactionNumber: string
  date: string
  winningType: string
  withdrawalMethod: string
  bankName?: string
  accountNumber?: string
  accountName?: string
  voucherCode?: string
  originalAmount: number
  charge: number
  rate: string
  amountPayable: number
  status: 'Approved' | 'Rejected' | 'Pending'
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Approved':
      return { bg: 'bg-green-100', text: 'text-green-800', banner: 'bg-green-50' }
    case 'Rejected':
      return { bg: 'bg-red-100', text: 'text-red-800', banner: 'bg-red-50' }
    case 'Pending':
      return { bg: 'bg-orange-100', text: 'text-orange-800', banner: 'bg-orange-50' }
    default:
      return { bg: 'bg-gray-100', text: 'text-gray-800', banner: 'bg-gray-50' }
  }
}

export default function WithdrawalDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  // Get record from shared data or create empty one
  const record: WithdrawalRecord = payoutDetails[id] || {
    id: id,
    username: 'User',
    transactionNumber: 'TXN-000000',
    date: 'N/A',
    winningType: 'Money',
    withdrawalMethod: 'Bank Transfer',
    bankName: 'Bank Name',
    accountNumber: 'Account Number',
    accountName: 'Account Name',
    originalAmount: 0,
    charge: 0,
    rate: '1x',
    amountPayable: 0,
    status: 'Pending',
  }

  const handleConfirm = () => {
    console.log('Withdrawal confirmed for ID:', id)
    // Add your confirmation logic here
  }

  const handleDecline = () => {
    console.log('Withdrawal declined for ID:', id)
    // Add your decline logic here
  }

  const statusColor = getStatusColor(record.status)

  return (
    <>
      <Header showBack onBack={() => router.push("/")} />
      <main className=" bg-gray-50 p-6 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Withdrawal Details</h1>
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
        </div>

        {/* Divider */}
        <div className="border-b-2 border-orange-400 mb-6"></div>

        {/* Status Banner */}
        <div className={`${statusColor.banner} border-l-4 ${statusColor.bg.replace('bg-', 'border-')} rounded-lg p-4 mb-8 flex justify-between items-center font-semibold text-lg`}>
          <span className={statusColor.text}>Status: {record.status}</span>
          <span className="text-xl text-gray-900">#{record.originalAmount.toLocaleString()}</span>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Left Column - Basic Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-300">
              Basic Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1">Date</label>
                <input
                  type="text"
                  value={record.date}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1">Transaction Number</label>
                <input
                  type="text"
                  value={record.transactionNumber}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1">Username</label>
                <input
                  type="text"
                  value={record.username}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1">Winning Type</label>
                <input
                  type="text"
                  value={record.winningType}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Payment Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-300">
              Payment Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1">Withdrawal Method</label>
                <input
                  type="text"
                  value={record.withdrawalMethod}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1">Bank Name</label>
                <input
                  type="text"
                  value={record.bankName || 'N/A'}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1">Account Number</label>
                <input
                  type="text"
                  value={record.accountNumber || 'N/A'}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1">Account Name</label>
                <input
                  type="text"
                  value={record.accountName || 'N/A'}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Amount Breakdown */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Original Amount</span>
              <span className="text-gray-900 font-semibold">#{record.originalAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Charge</span>
              <span className="text-red-600 font-semibold">${record.charge}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Rate</span>
              <span className="text-gray-900 font-semibold">{record.rate}</span>
            </div>
            <div className="border-t border-gray-300 pt-3 flex justify-between items-center">
              <span className="text-gray-900 font-semibold">Amount Payable</span>
              <span className="text-green-600 font-bold text-lg">#{record.amountPayable.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* View Receipt Button */}
        <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 mb-8 hover:bg-gray-100 rounded-lg transition-colors">
          <Download className="w-5 h-5" />
          <span className="text-sm font-medium">View Receipt</span>
        </button>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-end">
          <button
            onClick={handleDecline}
            className="px-6 py-2.5 bg-red-400 text-white font-medium rounded-lg hover:bg-red-500 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleConfirm}
            className="px-6 py-2.5 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
          >
            Confirm
          </button>
        </div>
      </main>
    </>
  )
}