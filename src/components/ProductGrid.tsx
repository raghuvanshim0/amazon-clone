import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useKV } from '@github/spark/hooks'

interface Product {
  id: string
  title: string
  price: number
  originalPrice: number
  image: string
  rating: number
  category: string
}

interface Deal {
  id: string
  title: string
  discount: string
  validUntil: string
  category: string
}

const ProductGrid = () => {
  const [featuredProducts] = useKV<Product[]>("featured-products", [])
  const [dealsOfTheDay] = useKV<Deal[]>("deals-of-the-day", [])

  const categories = [
    {
      title: "Revamp your home in style",
      items: [
        {
          title: "Cushion covers, bedsheets & more",
          image: "🛏️",
          description: "Cushion covers, bedsheets & more"
        },
        {
          title: "Figurines, vases & more",
          image: "🏺",
          description: "Figurines, vases & more"
        },
        {
          title: "Home storage",
          image: "📦",
          description: "Home storage"
        },
        {
          title: "Lighting solutions",
          image: "💡",
          description: "Lighting solutions"
        }
      ]
    },
    {
      title: "Appliances for your home | Up to 55% off",
      items: [
        {
          title: "Air conditioners",
          image: "❄️",
          description: "Air conditioners"
        },
        {
          title: "Refrigerators",
          image: "🧊",
          description: "Refrigerators"
        },
        {
          title: "Microwaves",
          image: "📱",
          description: "Microwaves"
        },
        {
          title: "Washing machines",
          image: "🔄",
          description: "Washing machines"
        }
      ]
    },
    {
      title: "Starting ₹149 | Headphones",
      items: [
        {
          title: "Starting ₹249 | boAt",
          image: "🎧",
          description: "Starting ₹249 | boAt",
          brand: "boAt"
        },
        {
          title: "Starting ₹349 | boult",
          image: "🎵",
          description: "Starting ₹349 | boult",
          brand: "BOULT"
        },
        {
          title: "Starting ₹749 | Noise",
          image: "🔊",
          description: "Starting ₹749 | Noise",
          brand: "NOISE"
        },
        {
          title: "Starting ₹849 | Zebronics",
          image: "🎤",
          description: "Starting ₹849 | Zebronics",
          brand: "ZEBRONICS"
        }
      ]
    },
    {
      title: "Under ₹499 | Deals on home improvement essentials",
      items: [
        {
          title: "Under ₹199 | Cleaning supplies",
          image: "🧽",
          description: "Under ₹199 | Cleaning supplies"
        },
        {
          title: "Under ₹399 | Bathroom accessories",
          image: "🚿",
          description: "Under ₹399 | Bathroom accessories"
        },
        {
          title: "Hardware & tools",
          image: "🔧",
          description: "Hardware & tools"
        },
        {
          title: "Garden & outdoor",
          image: "🌱",
          description: "Garden & outdoor"
        }
      ]
    }
  ]

  return (
    <div className="bg-amazon-light-gray py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-amazon-dark-gray">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="space-y-2 group">
                      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-4xl hover:bg-gray-200 transition-colors cursor-pointer group-hover:scale-105 transition-transform">
                        {item.image}
                      </div>
                      <div className="text-xs text-amazon-dark-gray leading-tight">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
                {categoryIndex === 2 && (
                  <div className="mt-4 pt-4 border-t">
                    <div className="text-sm text-blue-600 hover:text-blue-800 hover:underline cursor-pointer">
                      See all offers
                    </div>
                  </div>
                )}
                {categoryIndex !== 2 && (
                  <div className="mt-4 pt-4 border-t">
                    <div className="text-sm text-blue-600 hover:text-blue-800 hover:underline cursor-pointer">
                      Shop now
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Products Section */}
        {featuredProducts && featuredProducts.length > 0 && (
          <div className="mt-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Featured Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {featuredProducts.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="text-center mb-3">
                        <div className="text-6xl mb-2">{product.image}</div>
                        <h3 className="font-medium text-sm text-amazon-dark-gray mb-2">{product.title}</h3>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-lg font-bold text-red-600">₹{product.price}</span>
                          <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                        </div>
                        <div className="text-xs text-yellow-600 mt-1">
                          ★★★★☆ ({product.rating})
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Today's Deals Section */}
        {dealsOfTheDay && dealsOfTheDay.length > 0 && (
          <div className="mt-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-red-600">Today's Deals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {dealsOfTheDay.map((deal) => (
                    <div key={deal.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer bg-red-50">
                      <div className="text-center">
                        <div className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold mb-2">
                          {deal.discount} OFF
                        </div>
                        <h3 className="font-medium text-sm text-amazon-dark-gray mb-2">{deal.title}</h3>
                        <div className="text-xs text-gray-600">
                          Category: {deal.category}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Additional content row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sign in card */}
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-medium mb-4">Sign in for your best experience</h3>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-amazon-dark-gray font-medium py-2 px-4 rounded transition-colors">
                Sign in securely
              </button>
            </CardContent>
          </Card>

          {/* New to Amazon card */}
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">New to Amazon?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-colors">
                  Your Account
                </div>
                <div className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-colors">
                  Your Orders
                </div>
                <div className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-colors">
                  Your Wish List
                </div>
                <div className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-colors">
                  Your Recommendations
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer service card */}
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Customer Service</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-colors">
                  Help Center
                </div>
                <div className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-colors">
                  Contact Us
                </div>
                <div className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-colors">
                  Returns & Replacements
                </div>
                <div className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition-colors">
                  Manage Your Content
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProductGrid