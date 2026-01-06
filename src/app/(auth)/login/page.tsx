'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

const BuzzycashLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      setIsLoading(true);
      const success = await login(email, password);
      if (!success) {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar with curved design */}
      <div className="relative w-1/4 min-w-[350px]">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500"></div>
        
        {/* Curved white circle cutout with LOGIN text */}
        <div className="absolute top-1/3 -right-6 w-40 h-14 border-2 border-white bg-white rounded-tl-4xl rounded-bl-4xl  flex items-center justify-center">
          <span className="text-lg font-semibold text-gray-900 -ml-6">LOGIN</span>
        </div>
         {/* <div className="absolute top-73 -right-10 w-20 h-24 border-2 border-white bg-white rounded-full flex items-center justify-center">
        </div> */}

      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                <Image 
                  src="/images/Buzzycash Logo (1).png" 
                  alt="Buzzycash Logo" 
                  width={80}
                  height={80}
                  className="object-contain w-20 h-20"
                  priority
                />
              </div>
             
            </div>
          </div>

          {/* Login Form */}
          <div className="space-y-8">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-orange-500 focus:outline-none text-gray-700 placeholder-gray-400 bg-transparent transition-colors"
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-orange-500 focus:outline-none text-gray-700 placeholder-gray-400 bg-transparent transition-colors"
              />
            </div>

            {/* Forgot Password and Submit Button */}
            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={() => console.log('Forgot password clicked')}
                className="text-orange-400 hover:text-orange-500 font-medium transition-colors"
              >
                Forgot Password
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-12 py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold rounded hover:from-orange-500 hover:to-red-600 transition-all shadow-md hover:shadow-lg"
              >
                {isLoading ? 'Logging in...' : 'Log In'}
              </button>
            </div>
          </div>
        </div>
      </div>
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
    </form>
  );
};

export default BuzzycashLogin;