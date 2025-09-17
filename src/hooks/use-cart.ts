import { useKV } from '@github/spark/hooks'
import { toast } from 'sonner'

export interface CartItem {
  id: string
  title: string
  price: number
  originalPrice?: number
  image: string
  quantity: number
  category?: string
}

export const useCart = () => {
  const [cart, setCart] = useKV<CartItem[]>("shopping-cart", [])

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setCart((currentCart = []) => {
      const existingItem = currentCart.find(item => item.id === product.id)
      
      if (existingItem) {
        toast.success(`Updated quantity for ${product.title}`)
        return currentCart.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        toast.success(`Added ${product.title} to cart`)
        return [...currentCart, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (productId: string) => {
    setCart((currentCart = []) => {
      const item = currentCart.find(item => item.id === productId)
      if (item) {
        toast.success(`Removed ${item.title} from cart`)
      }
      return currentCart.filter(item => item.id !== productId)
    })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    setCart((currentCart = []) => 
      currentCart.map(item =>
        item.id === productId 
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
    toast.success('Cart cleared')
  }

  const getCartTotal = () => {
    return (cart || []).reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartItemCount = () => {
    return (cart || []).reduce((total, item) => total + item.quantity, 0)
  }

  const isInCart = (productId: string) => {
    return (cart || []).some(item => item.id === productId)
  }

  const getCartItem = (productId: string) => {
    return (cart || []).find(item => item.id === productId)
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
    isInCart,
    getCartItem
  }
}