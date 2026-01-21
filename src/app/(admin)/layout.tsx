import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Sidebar } from '@/components/sidebar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin management dashboard',
}

export default function AdimLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <Sidebar /> 
          <div className="flex-1 flex flex-col">
            {children} 
          </div>
        </div>
      </body>
    </html>
  )
}
