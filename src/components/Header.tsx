import { useState } from 'react'
import { MapPin, MagnifyingGlass, ShoppingCart, CaretDown, List } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useKV } from '@github/spark/hooks'
import { useIsMobile } from '@/hooks/use-mobile'
import { useCart } from '@/hooks/use-cart'
import CartDrawer from './CartDrawer'

interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
}

interface UserPreferences {
  location: string
  language: string
  currency: string
  recentSearches: string[]
  favoriteCategories: string[]
}

const Header = () => {
  const isMobile = useIsMobile()
  const [cart] = useKV<CartItem[]>("cart", [])
  const [userPrefs] = useKV<UserPreferences>("user-preferences", { 
    location: "Bengaluru 562130", 
    language: "EN",
    currency: "INR",
    recentSearches: [],
    favoriteCategories: []
  })

  const cartItemCount = cart?.length || 0

  if (isMobile) {
    return (
      <header className="bg-amazon-navy text-white">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            {/* Mobile menu icon */}
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <List size={20} />
            </Button>
            
            {/* Amazon Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold">amazon</span>
              <span className="text-xs">.in</span>
            </div>

            {/* Cart */}
            <div className="flex items-center gap-1">
              <div className="relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-amazon-orange text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px]">
                  {cartItemCount}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile search bar */}
          <div className="flex">
            <div className="flex-1 relative">
              <Input 
                placeholder="Search Amazon.in"
                className="border-0 rounded-l-md h-9 text-black pr-12"
              />
            </div>
            <Button className="bg-amazon-orange hover:bg-amazon-orange/90 border-0 rounded-r-md rounded-l-none px-3">
              <MagnifyingGlass size={16} />
            </Button>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mt-2 text-xs">
            <MapPin size={12} />
            <span className="text-gray-300">Deliver to {userPrefs?.location || "Bengaluru 562130"}</span>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="bg-amazon-navy text-white">
      {/* Top banner */}
      <div className="bg-amazon-navy px-4 py-2">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left section - Logo and location */}
          <div className="flex items-center gap-4">
            {/* Amazon Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold">amazon</span>
              <span className="text-sm">.in</span>
            </div>
            
            {/* Delivery location */}
            <div className="flex items-center gap-2 px-2 py-1 hover:border border-white/20 rounded cursor-pointer">
              <MapPin size={16} />
              <div className="text-xs">
                <div className="text-gray-300">Delivering to {userPrefs?.location || "Bengaluru 562130"}</div>
                <div className="font-medium">Update location</div>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex">
              <Button 
                variant="outline" 
                className="bg-gray-200 text-gray-700 border-0 rounded-l-md rounded-r-none px-3 hover:bg-gray-300"
              >
                All
                <CaretDown size={14} className="ml-1" />
              </Button>
              <div className="flex-1 relative">
                <Input 
                  placeholder="Search Amazon.in"
                  className="border-0 rounded-none h-10 text-black"
                />
              </div>
              <Button className="bg-amazon-orange hover:bg-amazon-orange/90 border-0 rounded-r-md rounded-l-none px-4">
                <MagnifyingGlass size={20} />
              </Button>
            </div>
          </div>

          {/* Right section - Language, Account, Orders, Cart */}
          <div className="flex items-center gap-6">
            {/* Language selector */}
            <div className="flex items-center gap-1 px-2 py-1 hover:border border-white/20 rounded cursor-pointer">
              <span className="text-xs">🇮🇳</span>
              <span className="text-sm font-medium">{userPrefs?.language || "EN"}</span>
              <CaretDown size={12} />
            </div>

            {/* Account & Lists */}
            <div className="px-2 py-1 hover:border border-white/20 rounded cursor-pointer">
              <div className="text-xs">Hello, sign in</div>
              <div className="text-sm font-medium flex items-center">
                Account & Lists
                <CaretDown size={12} className="ml-1" />
              </div>
            </div>

            {/* Returns & Orders */}
            <div className="px-2 py-1 hover:border border-white/20 rounded cursor-pointer">
              <div className="text-xs">Returns</div>
              <div className="text-sm font-medium">& Orders</div>
            </div>

            {/* Cart */}
            <div className="flex items-center gap-1 px-2 py-1 hover:border border-white/20 rounded cursor-pointer">
              <div className="relative">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-amazon-orange text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              </div>
              <span className="text-sm font-medium">Cart</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header