'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      if (email && password) {
        setTimeout(() => {
          router.push('/')
          setIsLoading(false)
        }, 500)
      } else {
        setError('Please enter both email and password')
        setIsLoading(false)
      }
    } catch (err) {
      setError('Login failed. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Column - Image Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-orange-100 to-orange-50 items-center justify-center p-12">
        <div className="text-center space-y-8 max-w-md">
          <div className="relative h-96 w-72 mx-auto">
            {/* Using placeholder image - replace with actual image */}
            <div className="relative h-full w-full rounded-2xl bg-gradient-to-b from-orange-400 to-orange-300 flex items-center justify-center overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%207566-e0QulL8ufFuPW74Em4o3UclaD2iA7z.png"
                alt="Admin Portal"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">
              Set Your Admin Portal
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Manage payouts, users, and transactions with ease. Your complete admin control hub.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Login Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-12">
        <div className="w-full max-w-md">
          {/* Header with Logo Area */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-lg mb-6">
              S
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Admin Login
            </h1>
            <p className="text-gray-600 text-sm">
              Secure access to your management dashboard
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email or Username
              </label>
              <Input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 disabled:opacity-50 mt-6"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>

            <Button
              type="button"
              onClick={() => router.push('/dashboard')}
              className="w-full mt-3 bg-gray-200 text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-all duration-300"
            >
              Quick Login (Skip for now)
            </Button>
          </form>

          {/* Footer Links */}
          <div className="mt-8 space-y-4">
            <div className="text-center">
              <Link
                href="/forgot-password"
                className="text-orange-600 text-sm font-medium hover:text-orange-700 transition-colors"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="text-center text-gray-600 text-sm">
              Need help?{' '}
              <Link href="/support" className="text-orange-600 font-medium hover:text-orange-700 transition-colors">
                Contact support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
