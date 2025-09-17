import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Plus } from '@phosphor-icons/react'
import { useKV } from '@github/spark/hooks'
import { useCart } from '@/hooks/use-cart'

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
  const [featuredProducts, setFeaturedProducts] = useKV<Product[]>("featured-products", [])
  const [dealsOfTheDay, setDealsOfTheDay] = useKV<Deal[]>("deals-of-the-day", [])
  const { addToCart, isInCart } = useCart()

  // Initialize sample data if empty
  if ((!featuredProducts || featuredProducts.length === 0)) {
    const sampleProducts: Product[] = [
      {
        id: "sample-1",
        title: "Samsung Galaxy M14 5G",
        price: 13990,
        originalPrice: 16990,
        image: "📱",
        rating: 4.2,
        category: "Electronics"
      },
      {
        id: "sample-2", 
        title: "Sony WH-CH720N Headphones",
        price: 8990,
        originalPrice: 12990,
        image: "🎧",
        rating: 4.5,
        category: "Electronics"
      },
      {
        id: "sample-3",
        title: "Philips Air Fryer HD9252/90",
        price: 7995,
        originalPrice: 12995,
        image: "🍳",
        rating: 4.3,
        category: "Appliances"
      }
    ]
    setFeaturedProducts(sampleProducts)
  }

  if ((!dealsOfTheDay || dealsOfTheDay.length === 0)) {
    const sampleDeals: Deal[] = [
      {
        id: "deal-1",
        title: "Electronics Sale",
        discount: "Up to 60%",
        validUntil: "Today Only",
        category: "Electronics"
      },
      {
        id: "deal-2",
        title: "Fashion Mega Sale", 
        discount: "40-80%",
        validUntil: "Limited Time",
        category: "Fashion"
      },
      {
        id: "deal-3",
        title: "Home & Kitchen",
        discount: "50%",
        validUntil: "This Weekend",
        category: "Home"
      }
    ]
    setDealsOfTheDay(sampleDeals)
  }

  const categories = [
    {
      title: "Revamp your home in style",
      items: [
        {
          id: "cushions-1",
          title: "Cushion covers, bedsheets & more",
          image: "🛏️",
          description: "Cushion covers, bedsheets & more",
          price: 599,
          originalPrice: 899,
          category: "Home & Kitchen"
        },
        {
          id: "figurines-1",
          title: "Figurines, vases & more",
          image: "🏺",
          description: "Figurines, vases & more",
          price: 1299,
          originalPrice: 1899,
          category: "Home & Kitchen"
        },
        {
          id: "storage-1",
          title: "Home storage",
          image: "📦",
          description: "Home storage",
          price: 799,
          originalPrice: 1199,
          category: "Home & Kitchen"
        },
        {
          id: "lighting-1",
          title: "Lighting solutions",
          image: "💡",
          description: "Lighting solutions",
          price: 1599,
          originalPrice: 2299,
          category: "Home & Kitchen"
        }
      ]
    },
    {
      title: "Appliances for your home | Up to 55% off",
      items: [
        {
          id: "ac-1",
          title: "Air conditioners",
          image: "❄️",
          description: "Air conditioners",
          price: 25999,
          originalPrice: 45999,
          category: "Appliances"
        },
        {
          id: "fridge-1",
          title: "Refrigerators",
          image: "🧊",
          description: "Refrigerators",
          price: 18999,
          originalPrice: 28999,
          category: "Appliances"
        },
        {
          id: "microwave-1",
          title: "Microwaves",
          image: "📱",
          description: "Microwaves",
          price: 7999,
          originalPrice: 12999,
          category: "Appliances"
        },
        {
          id: "washing-1",
          title: "Washing machines",
          image: "🔄",
          description: "Washing machines",
          price: 15999,
          originalPrice: 22999,
          category: "Appliances"
        }
      ]
    },
    {
      title: "Starting ₹149 | Headphones",
      items: [
        {
          id: "boat-1",
          title: "boAt Headphones",
          image: "🎧",
          description: "Starting ₹249 | boAt",
          price: 249,
          originalPrice: 499,
          category: "Electronics",
          brand: "boAt"
        },
        {
          id: "boult-1",
          title: "BOULT Headphones",
          image: "🎵",
          description: "Starting ₹349 | boult",
          price: 349,
          originalPrice: 699,
          category: "Electronics",
          brand: "BOULT"
        },
        {
          id: "noise-1",
          title: "Noise Headphones",
          image: "🔊",
          description: "Starting ₹749 | Noise",
          price: 749,
          originalPrice: 1299,
          category: "Electronics",
          brand: "NOISE"
        },
        {
          id: "zebronics-1",
          title: "Zebronics Headphones",
          image: "🎤",
          description: "Starting ₹849 | Zebronics",
          price: 849,
          originalPrice: 1499,
          category: "Electronics",
          brand: "ZEBRONICS"
        }
      ]
    },
    {
      title: "Under ₹499 | Deals on home improvement essentials",
      items: [
        {
          id: "cleaning-1",
          title: "Cleaning supplies",
          image: "🧽",
          description: "Under ₹199 | Cleaning supplies",
          price: 199,
          originalPrice: 299,
          category: "Home Improvement"
        },
        {
          id: "bathroom-1",
          title: "Bathroom accessories",
          image: "🚿",
          description: "Under ₹399 | Bathroom accessories",
          price: 399,
          originalPrice: 599,
          category: "Home Improvement"
        },
        {
          id: "tools-1",
          title: "Hardware & tools",
          image: "🔧",
          description: "Hardware & tools",
          price: 299,
          originalPrice: 499,
          category: "Home Improvement"
        },
        {
          id: "garden-1",
          title: "Garden & outdoor",
          image: "🌱",
          description: "Garden & outdoor",
          price: 399,
          originalPrice: 699,
          category: "Home Improvement"
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
                      <div className="flex items-center justify-between">
                        <div className="text-xs">
                          <span className="font-bold text-amazon-orange">₹{item.price}</span>
                          {item.originalPrice && (
                            <span className="text-gray-500 line-through ml-1">₹{item.originalPrice}</span>
                          )}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className={`w-full text-xs h-7 ${
                          isInCart(item.id)
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'bg-amazon-orange hover:bg-amazon-orange/90'
                        }`}
                        onClick={() => addToCart({
                          id: item.id,
                          title: item.title,
                          price: item.price,
                          originalPrice: item.originalPrice,
                          image: item.image,
                          category: item.category
                        })}
                      >
                        {isInCart(item.id) ? (
                          <>
                            <ShoppingCart size={12} className="mr-1" />
                            In Cart
                          </>
                        ) : (
                          <>
                            <Plus size={12} className="mr-1" />
                            Add to Cart
                          </>
                        )}
                      </Button>
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
                        <Button
                          size="sm"
                          className={`w-full mt-3 ${
                            isInCart(product.id)
                              ? 'bg-green-600 hover:bg-green-700'
                              : 'bg-amazon-orange hover:bg-amazon-orange/90'
                          }`}
                          onClick={() => addToCart({
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            originalPrice: product.originalPrice,
                            image: product.image,
                            category: product.category
                          })}
                        >
                          {isInCart(product.id) ? (
                            <>
                              <ShoppingCart size={14} className="mr-1" />
                              In Cart
                            </>
                          ) : (
                            <>
                              <Plus size={14} className="mr-1" />
                              Add to Cart
                            </>
                          )}
                        </Button>
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