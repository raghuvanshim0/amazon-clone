import { useState } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(1)
  }

  const prevSlide = () => {
    setCurrentSlide(0)
  }

  return (
    <div className="relative h-96 overflow-hidden">
      {/* Hero slide - Festival banner */}
      <div className="absolute inset-0 amazon-gradient">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="grid grid-cols-2 gap-8 w-full">
            {/* Left content */}
            <div className="text-white space-y-6">
              {/* Festival badge */}
              <div className="inline-flex items-center gap-2 bg-white/90 text-amazon-navy px-4 py-2 rounded-full">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  Great
                </div>
                <div className="text-sm font-medium">
                  Indian Festival<br />
                  <span className="text-xs">Starts 27° Sept</span>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl font-bold">Under ₹399</h1>
                <h2 className="text-2xl">Kurtas & sets</h2>
              </div>

              <div className="flex gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-xs text-white/80">Top</div>
                  <div className="font-medium">Brands</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-xs text-white/80">Latest</div>
                  <div className="font-medium">Trends</div>
                </div>
              </div>

              {/* SBI Card offer */}
              <div className="bg-white rounded-lg p-3 text-amazon-navy">
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-blue-600 text-white px-2 py-1 text-xs rounded">SBI</span>
                  <span className="bg-blue-600 text-white px-2 py-1 text-xs rounded">SBI Card</span>
                  <span className="font-medium">10% Instant Discount*</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  on Debit/Credit Card & Credit Card EMI
                </div>
                <div className="text-xs text-gray-500 mt-1">*T&C apply</div>
              </div>
            </div>

            {/* Right content - Product showcase */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-right mb-2">
                  <span className="bg-yellow-400 text-amazon-navy px-2 py-1 text-sm font-medium rounded">
                    Deals Revealed
                  </span>
                </div>
                
                {/* Product image placeholder */}
                <div className="aspect-square bg-white/20 rounded-lg flex items-center justify-center">
                  <div className="text-6xl">👘</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
          onClick={prevSlide}
        >
          <CaretLeft size={24} />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
          onClick={nextSlide}
        >
          <CaretRight size={24} />
        </Button>
      </div>
    </div>
  )
}

export default HeroBanner