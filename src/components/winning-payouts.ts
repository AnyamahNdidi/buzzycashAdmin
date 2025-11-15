export type Status = 'Approved' | 'Rejected' | 'Pending'
export type WinningType = 'Money' | 'Voucher'

export interface PayoutListRecord {
  id: number
  username: string
  handle: string
  amount: number
  winningType: WinningType
  date: string
  status: Status
  phone?: string
  email?: string
  accountNumber?: string
  bankName?: string
  accountName?: string
  voucherCode?: string
  notes?: string
}

export const payoutsList: PayoutListRecord[] = [
  { id: 1, username: 'Perfect Light', handle: '@chinis', amount: 5000.0, winningType: 'Money',   date: '12/02/23', status: 'Approved', phone: '+2347063671146', email: 'chine.cleave@gmail.com', accountName: 'Perfect Light', accountNumber: '1234567890', bankName: 'Ghana Bank', notes: 'Payment processed successfully' },
  { id: 2, username: 'Perfect Light', handle: '@chinis', amount: 5000.0, winningType: 'Voucher', date: '12/02/23', status: 'Rejected', phone: '+2347063671146', email: 'chine.cleave@gmail.com', voucherCode: 'VOUCHER-2023-001', notes: 'Duplicate redemption detected' },
  { id: 3, username: 'Perfect Light', handle: '@chinis', amount: 5000.0, winningType: 'Money',   date: '12/02/23', status: 'Approved', phone: '+2347063671146', email: 'chine.cleave@gmail.com', accountName: 'Perfect Light', accountNumber: '1234567890', bankName: 'Ghana Bank' },
  { id: 4, username: 'Perfect Light', handle: '@chinis', amount: 5000.0, winningType: 'Voucher', date: '12/02/23', status: 'Pending',  phone: '+2347063671146', email: 'chine.cleave@gmail.com', voucherCode: 'VOUCHER-2023-004' },
  { id: 5, username: 'Perfect Light', handle: '@chinis', amount: 5000.0, winningType: 'Money',   date: '12/02/23', status: 'Rejected', phone: '+2347063671146', email: 'chine.cleave@gmail.com', accountName: 'Perfect Light', accountNumber: '1234567890', bankName: 'Ghana Bank' },
  { id: 6, username: 'Perfect Light', handle: '@chinis', amount: 5000.0, winningType: 'Voucher', date: '12/02/23', status: 'Approved', phone: '+2347063671146', email: 'chine.cleave@gmail.com', voucherCode: 'VOUCHER-2023-006' },
  { id: 7, username: 'Perfect Light', handle: '@chinis', amount: 5000.0, winningType: 'Money',   date: '12/02/23', status: 'Pending',  phone: '+2347063671146', email: 'chine.cleave@gmail.com', accountName: 'Perfect Light', accountNumber: '1234567890', bankName: 'Ghana Bank' },
  { id: 8, username: 'Perfect Light', handle: '@chinis', amount: 5000.0, winningType: 'Voucher', date: '12/02/23', status: 'Rejected', phone: '+2347063671146', email: 'chine.cleave@gmail.com', voucherCode: 'VOUCHER-2023-008' },
]

export interface PayoutDetailRecord {
  id: string | number
  username: string
  transactionNumber: string
  date: string
  winningType: WinningType
  withdrawalMethod: string
  bankName?: string
  accountNumber?: string
  accountName?: string
  voucherCode?: string
  originalAmount: number
  charge: number
  rate: string
  amountPayable: number
  status: Status
}

export const payoutDetails: Record<string, PayoutDetailRecord> = {
  '1': { id: '1', username: 'Perfect Light', transactionNumber: 'BZC-2509-161925', date: 'September 16, 2024 at 18:53', winningType: 'Money',   withdrawalMethod: 'Bank Transfer', bankName: 'Ghana Bank', accountNumber: '*** *** 7890', accountName: 'Perfect Light', originalAmount: 5000, charge: -500, rate: '2x', amountPayable: 4500, status: 'Approved' },
  '2': { id: '2', username: 'Perfect Light', transactionNumber: 'BZC-2509-161926', date: 'September 16, 2024 at 19:10', winningType: 'Voucher', withdrawalMethod: 'Voucher',        voucherCode: 'VOUCHER-2023-001', originalAmount: 5000, charge: 0,    rate: '1x', amountPayable: 5000, status: 'Rejected' },
  '3': { id: '3', username: 'Perfect Light', transactionNumber: 'BZC-2509-161927', date: 'September 17, 2024 at 10:05', winningType: 'Money',   withdrawalMethod: 'Bank Transfer', bankName: 'Ghana Bank', accountNumber: '*** *** 7890', accountName: 'Perfect Light', originalAmount: 5000, charge: -500, rate: '2x', amountPayable: 4500, status: 'Approved' },
  '4': { id: '4', username: 'Perfect Light', transactionNumber: 'BZC-2509-161928', date: 'September 17, 2024 at 11:20', winningType: 'Voucher', withdrawalMethod: 'Voucher',        voucherCode: 'VOUCHER-2023-004', originalAmount: 5000, charge: 0,    rate: '1x', amountPayable: 5000, status: 'Pending' },
  '5': { id: '5', username: 'Perfect Light', transactionNumber: 'BZC-2509-161929', date: 'September 17, 2024 at 12:15', winningType: 'Money',   withdrawalMethod: 'Bank Transfer', bankName: 'Ghana Bank', accountNumber: '*** *** 7890', accountName: 'Perfect Light', originalAmount: 5000, charge: -500, rate: '2x', amountPayable: 4500, status: 'Rejected' },
  '6': { id: '6', username: 'Perfect Light', transactionNumber: 'BZC-2509-161930', date: 'September 18, 2024 at 09:40', winningType: 'Voucher', withdrawalMethod: 'Voucher',        voucherCode: 'VOUCHER-2023-006', originalAmount: 5000, charge: 0,    rate: '1x', amountPayable: 5000, status: 'Approved' },
  '7': { id: '7', username: 'Perfect Light', transactionNumber: 'BZC-2509-161931', date: 'September 18, 2024 at 10:20', winningType: 'Money',   withdrawalMethod: 'Bank Transfer', bankName: 'Ghana Bank', accountNumber: '*** *** 7890', accountName: 'Perfect Light', originalAmount: 5000, charge: -500, rate: '2x', amountPayable: 4500, status: 'Pending' },
  '8': { id: '8', username: 'Perfect Light', transactionNumber: 'BZC-2509-161932', date: 'September 19, 2024 at 15:32', winningType: 'Voucher', withdrawalMethod: 'Voucher',        voucherCode: 'VOUCHER-2023-008', originalAmount: 5000, charge: 0,    rate: '1x', amountPayable: 5000, status: 'Rejected' },
}