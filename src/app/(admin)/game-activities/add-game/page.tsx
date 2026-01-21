    "use client"
    
    import { useState, useRef, ChangeEvent } from "react"
    import { useRouter } from "next/navigation"
    import { Card, CardContent } from "@/components/ui/card"
    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"
    import { Checkbox } from "@/components/ui/checkbox"
    import {
      Select,
      SelectContent,
      SelectItem,
      SelectTrigger,
      SelectValue,
    } from "@/components/ui/select"
    // import { Sidebar } from "@/components/sidebar" // Removed: now in layout.tsx
    import { Header } from "@/components/header"
    import { Upload, Minus, Plus } from 'lucide-react'
    import defaultImage from '@/assets/images/Buzzycash Logo (1).png'
    
    export default function AddGame() {
      const router = useRouter()
      const [noOfWinners, setNoOfWinners] = useState(0)
      const [imagePreview, setImagePreview] = useState<string | null>(null)
      const [gameType, setGameType] = useState('single-draw')
      const fileInputRef = useRef<HTMLInputElement>(null)
    
      const handleImageUploadClick = () => {
        fileInputRef.current?.click()
      }
    
      const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
          const reader = new FileReader()
          reader.onloadend = () => {
            setImagePreview(reader.result as string)
          }
          reader.readAsDataURL(file)
        } else {
          setImagePreview(null)
        }
      }
    
      return (
        <>
          <Header showBack onBack={() => router.push('/game-activities')} />
          
          <main className="flex-1 p-8 overflow-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ADD NEW TICKET GAME</h2>
            
            <Card className="shadow-xl border-0 p-6">
              <CardContent className="p-0 flex flex-col lg:flex-row gap-8">
                {/* Image Upload Section */}
                <div className="flex-shrink-0 flex flex-col items-center justify-start bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <div className="w-48 h-48 bg-gray-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    {imagePreview ? (
                      <img src={imagePreview || "/placeholder.svg"} alt="Game Thumbnail Preview" className="object-contain w-full h-full p-4" />
                    ) : (
                      <img src="/images/Buzzycash Logo (1).png" alt="Buzzycash Logo Placeholder" className="object-contain w-full h-full p-4" />
                    )}
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/jpeg, image/jpg, image/png"
                    className="hidden"
                  />
                  <Button onClick={handleImageUploadClick} className="bg-slate-700 hover:bg-slate-800 text-white shadow-lg shadow-slate-700/25 rounded-lg">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Image
                  </Button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Supported files: <span className="font-semibold">jpeg, jpg, png</span>. Image will be resized into 400x400px.
                  </p>
                </div>
    
                {/* Game add Form Fields */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 content-start">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input id="name" placeholder="Enter game name" className="bg-gray-50 border-gray-200 rounded-lg" />
                  </div>
                  <div>
                    <label htmlFor="game-type" className="block text-sm font-medium text-gray-700 mb-2">Game Type</label>
                    <Select value={gameType} onValueChange={setGameType}>
                      <SelectTrigger id="game-type" className="bg-gray-50 w-full border-gray-200 rounded-lg">
                        <SelectValue placeholder="--Select Game Type--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-draw">Single Draw</SelectItem>
                        <SelectItem value="multiple-draw">Multiple Draw</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="game-platform" className="block text-sm font-medium text-gray-700 mb-2">Game Platform</label>
                    <Select>
                      <SelectTrigger id="game-platform" className="bg-gray-50 w-full border-gray-200 rounded-lg">
                        <SelectValue placeholder="--Select Platform--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="platform-a">Platform A</SelectItem>
                        <SelectItem value="platform-b">Platform B</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                    <Input id="price" type="number" placeholder="Enter price" className="bg-gray-50 border-gray-200 rounded-lg" />
                  </div>
                    <div className="flex items-center gap-2 mt-6">
                <Checkbox id="game-automation" className="border-gray-300" />
                <label htmlFor="game-automation" className="text-sm font-medium text-gray-700">
                  Phase automation
                </label>
              </div>
                  {/* <div>
                    <label htmlFor="line-variation" className="block text-sm font-medium text-gray-700 mb-2">
                      Line variation <span className="text-red-500">*</span>
                    </label>
                    <Input id="line-variation" placeholder="Enter line variation" className="bg-gray-50 border-gray-200 rounded-lg" />
                  </div> */}
                  {/* <div>
                    <label htmlFor="no-of-balls" className="block text-sm font-medium text-gray-700 mb-2">
                      No. of Balls <span className="text-red-500">*</span>
                    </label>
                    <Input id="no-of-balls" type="number" placeholder="Enter number of balls" className="bg-gray-50 border-gray-200 rounded-lg" />
                  </div> */}
                  {/* <div>
                    <label htmlFor="ball-least-number" className="block text-sm font-medium text-gray-700 mb-2">
                      Ball Least Number <span className="text-red-500">*</span>
                    </label>
                    <Input id="ball-least-number" type="number" placeholder="Enter least number" className="bg-gray-50 border-gray-200 rounded-lg" />
                  </div> */}
                  {/* <div>
                    <label htmlFor="no-of-ball-selection" className="block text-sm font-medium text-gray-700 mb-2">
                      No. of Ball Selection <span className="text-red-500">*</span>
                    </label>
                    <Input id="no-of-ball-selection" type="number" placeholder="Enter number of selections" className="bg-gray-50 border-gray-200 rounded-lg" />
                  </div> */}
                </div>
              </CardContent>
    
            
    
              {/* Winning Configuration Section */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">WINNING CONFIGURATION</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                  <div>
                    <label htmlFor="winning-type" className="block text-sm font-medium text-gray-700 mb-2">
                      Winning Type <span className="text-red-500">*</span>
                    </label>
                    <Select defaultValue="money">
                      <SelectTrigger id="winning-type" className="bg-gray-50 w-full border-gray-200 rounded-lg">
                        <SelectValue placeholder="Select An Option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="money">Money</SelectItem>
                        <SelectItem value="voucher">Voucher</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {gameType === 'multiple-draw' && (
                    <div>
                      <label htmlFor="no-of-winners" className="block text-sm font-medium text-gray-700 mb-2">
                        No. of winners <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setNoOfWinners(prev => Math.max(0, prev - 1))}
                          className="h-10 w-10 rounded-l-lg rounded-r-none hover:bg-gray-100"
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </Button>
                        <Input
                          id="no-of-winners"
                          type="number"
                          value={noOfWinners}
                          onChange={(e) => setNoOfWinners(Number(e.target.value))}
                          className="flex-1 text-center border-x border-gray-200 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setNoOfWinners(prev => prev + 1)}
                          className="h-10 w-10 rounded-r-lg rounded-l-none hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </Button>
                      </div>
                    </div>
                  )}
                  <div>
                    <label htmlFor="win-percentage" className="block text-sm font-medium text-gray-700 mb-2">
                      Win Percentage <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center">
                      <Input id="win-percentage" type="number" placeholder="0" className="bg-gray-50 border-gray-200 rounded-l-lg rounded-r-none" />
                      <span className="bg-orange-500 text-white px-3 py-2 rounded-r-lg border border-gray-200 border-l-0">%</span>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="win-amount" className="block text-sm font-medium text-gray-700 mb-2">Win Amount</label>
                    <div className="flex items-center">
                      <Input id="win-amount" value="To be determined" readOnly className="bg-gray-50 border-gray-200 rounded-l-lg rounded-r-none" />
                      <span className="bg-orange-500 text-white px-3 py-2 rounded-r-lg border border-orange-500 border-l-0">NGN</span>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="mt-8 flex justify-end">
                <Button className="bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/25 rounded-lg px-8 py-3">
                  Uplaod Game
                </Button>
              </div>
            </Card>
          </main>
        </>
      )
    }
    