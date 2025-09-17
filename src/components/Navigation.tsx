import { List } from '@phosphor-icons/react'
import { useIsMobile } from '@/hooks/use-mobile'

const Navigation = () => {
  const isMobile = useIsMobile()
  
  const navItems = [
    'Fresh',
    'MX Player', 
    'Sell',
    'Bestsellers',
    "Today's Deals",
    'Mobiles',
    'Prime',
    'New Releases',
    'Customer Service',
    'Electronics',
    'Fashion',
    'Home & Kitchen',
    'Amazon Pay',
    'Computers',
    'Books',
    'Home Improvement'
  ]

  if (isMobile) {
    return (
      <nav className="bg-amazon-navy/90 text-white text-sm">
        <div className="px-4">
          <div className="flex items-center gap-4 py-2 overflow-x-auto">
            <div className="flex items-center gap-2 px-3 py-1 hover:border border-white/20 rounded cursor-pointer whitespace-nowrap">
              <List size={16} />
              <span className="font-medium">All</span>
            </div>
            {navItems.slice(0, 6).map((item, index) => (
              <div 
                key={index}
                className="whitespace-nowrap px-2 py-1 hover:border border-white/20 rounded cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="bg-amazon-navy/90 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 py-2">
          {/* All menu */}
          <div className="flex items-center gap-2 px-3 py-1 hover:border border-white/20 rounded cursor-pointer">
            <List size={16} />
            <span className="font-medium">All</span>
          </div>

          {/* Navigation items */}
          <div className="flex items-center gap-4 overflow-x-auto">
            {navItems.map((item, index) => (
              <div 
                key={index}
                className="whitespace-nowrap px-2 py-1 hover:border border-white/20 rounded cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation