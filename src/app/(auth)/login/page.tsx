'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAuthRedux } from '@/lib/redux/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff } from 'lucide-react';

// Zod schema for login validation
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const BuzzycashLogin: React.FC = () => {
  const { login, isAuthenticated, isLoading } = useAuthRedux();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError: setFormError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  const onSubmit = async (data: LoginFormData) => {
    try {
      const success = await login(data.email, data.password);
      if (!success) {
        setFormError('root', { message: 'Invalid email or password' });
      }
    } catch (err) {
      setFormError('root', { message: 'An error occurred during login' });
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex min-h-screen bg-gray-50">
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
                {...register('email')}
                className={`w-full px-0 py-3 border-0 border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-orange-500 focus:outline-none text-gray-700 placeholder-gray-400 bg-transparent transition-colors`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  {...register('password')}
                  className={`w-full px-0 py-3 pr-10 border-0 border-b-2 ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:border-orange-500 focus:outline-none text-gray-700 placeholder-gray-400 bg-transparent transition-colors`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
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
              disabled={isSubmitting || isLoading}
              className="px-12 py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold rounded hover:from-orange-500 hover:to-red-600 transition-all shadow-md hover:shadow-lg disabled:opacity-50"
            >
              {isSubmitting || isLoading ? 'Logging in...' : 'Log In'}
            </button>
            </div>
          </div>
        </div>
      </div>
      {errors.root && (
        <div className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {errors.root.message}
        </div>
      )}
    </form>
  );
};

export default BuzzycashLogin;