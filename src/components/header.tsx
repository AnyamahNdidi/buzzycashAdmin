"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

interface HeaderProps {
  title?: string
  showBack?: boolean
  onBack?: () => void
}

export function Header({ title = "Master Admin", showBack = false, onBack }: HeaderProps) {
  const { logout } = useAuth();
  const router = useRouter();
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200/50 px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {showBack && (
            <>
              <Button variant="ghost" onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                ← Back
              </Button>
              <div className="h-8 w-px bg-gray-200"></div>
            </>
          )}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search here..."
              className="pl-12 w-96 h-12 bg-gray-50/50 border-gray-200 rounded-xl focus:bg-white transition-colors"
            />
          </div>
          <div className="h-8 w-px bg-gray-200"></div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {title}
          </h1>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 px-4 py-2 h-12 rounded-xl hover:bg-gray-50 transition-colors">
              <Avatar className="w-9 h-9 ring-2 ring-gray-200">
                <AvatarFallback className="bg-gradient-to-br from-gray-900 to-gray-700 text-white font-semibold">A</AvatarFallback>
              </Avatar>
              <span className="font-semibold text-gray-900">Admin</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 rounded-xl shadow-xl border-gray-200/50">
            <DropdownMenuItem className="rounded-lg">Profile</DropdownMenuItem>
            <DropdownMenuItem className="rounded-lg">Settings</DropdownMenuItem>
            <DropdownMenuItem 
              className="rounded-lg text-red-600 focus:bg-red-50"
              onSelect={(e) => {
                e.preventDefault();
                logout();
                router.push('/login');
              }}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
