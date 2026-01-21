// header.tsx
"use client"

import { useState } from 'react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown, Menu, X } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

interface HeaderProps {
  title?: string
  showBack?: boolean
  onBack?: () => void
  onMenuToggle?: () => void
  isSidebarOpen?: boolean
}

export function Header({ 
  title = "Master Admin", 
  showBack = false, 
  onBack, 
  onMenuToggle,
  isSidebarOpen = false
}: HeaderProps) {
  const { logout } = useAuth();
  const router = useRouter();

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200/50 px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            id="sidebar-toggle"
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>

          {showBack && (
            <>
              <Button 
                variant="ghost" 
                onClick={onBack} 
                className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                ← Back
              </Button>
              <div className="hidden sm:block h-8 w-px bg-gray-200"></div>
            </>
          )}
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
            <Input
              placeholder="Search here..."
              className="pl-10 sm:pl-12 w-40 sm:w-64 md:w-80 h-10 sm:h-12 bg-gray-50/50 border-gray-200 rounded-xl focus:bg-white transition-colors text-sm sm:text-base"
            />
          </div>
          
          <div className="hidden sm:block h-8 w-px bg-gray-200"></div>
          <h1 className="hidden sm:block text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {title}
          </h1>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="lg:hidden">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-1.5 sm:py-2 h-10 sm:h-12 rounded-xl hover:bg-gray-50 transition-colors">
                <Avatar className="w-8 h-8 sm:w-9 sm:h-9 ring-2 ring-gray-200">
                  <AvatarFallback className="bg-gradient-to-br from-gray-900 to-gray-700 text-white text-sm sm:text-base font-semibold">
                    A
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline font-medium sm:font-semibold text-gray-900">Admin</span>
                <ChevronDown className="hidden sm:block w-4 h-4 text-gray-500" />
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
      </div>
    </header>
  )
}