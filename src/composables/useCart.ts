import { ref, computed, watch } from 'vue'
import type { CartItem, Smoothie, SmoothieSize } from '../types'

const STORAGE_KEY = 'smoothie_delight_cart'

const isCartOpen = ref(false)
const items = ref<CartItem[]>([])
const appliedDiscount = ref<number>(0)
const discountCode = ref<string>('')

// Load initial from localStorage
try {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    items.value = JSON.parse(saved)
  }
} catch {
  items.value = []
}

// Watch & persist
watch(
  items,
  (newItems) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems))
    } catch {
      // ignore
    }
  },
  { deep: true }
)

export function useCart() {
  const openCart = () => {
    isCartOpen.value = true
  }

  const closeCart = () => {
    isCartOpen.value = false
  }

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value
  }

  const addToCart = (
    smoothie: Smoothie | { name: string; price: number; image: string; isCustom?: boolean; customDescription?: string; id?: string },
    size: SmoothieSize = 'M (450ml)',
    quantity = 1
  ) => {
    const sizeMultiplier = size.startsWith('S') ? 0.85 : size.startsWith('L') ? 1.3 : 1.0
    const finalUnitPrice = Math.round(smoothie.price * sizeMultiplier * 100) / 100

    const existingIndex = items.value.findIndex(
      (item) => item.name === smoothie.name && item.size === size && item.customDescription === (smoothie.customDescription || '')
    )

    if (existingIndex > -1) {
      items.value[existingIndex].quantity += quantity
    } else {
      const newItem: CartItem = {
        id: 'item_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
        smoothieId: smoothie.id,
        name: smoothie.name,
        price: finalUnitPrice,
        quantity,
        size,
        image: smoothie.image,
        isCustom: smoothie.isCustom,
        customDescription: smoothie.customDescription
      }
      items.value.push(newItem)
    }

    openCart()
  }

  const updateQuantity = (id: string, delta: number) => {
    const item = items.value.find((i) => i.id === id)
    if (!item) return

    const newQty = item.quantity + delta
    if (newQty <= 0) {
      removeFromCart(id)
    } else {
      item.quantity = newQty
    }
  }

  const removeFromCart = (id: string) => {
    items.value = items.value.filter((i) => i.id !== id)
  }

  const clearCart = () => {
    items.value = []
    appliedDiscount.value = 0
    discountCode.value = ''
  }

  const totalItemsCount = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  const subtotal = computed(() => {
    return Math.round(items.value.reduce((sum, item) => sum + item.price * item.quantity, 0) * 100) / 100
  })

  const freeShippingThreshold = 60.0
  const freeShippingProgress = computed(() => {
    return Math.min(100, (subtotal.value / freeShippingThreshold) * 100)
  })

  const amountNeededForFreeShipping = computed(() => {
    return Math.max(0, Math.round((freeShippingThreshold - subtotal.value) * 100) / 100)
  })

  const shippingCost = computed(() => {
    if (subtotal.value === 0 || subtotal.value >= freeShippingThreshold) return 0
    return 9.90
  })

  const discountAmount = computed(() => {
    return Math.round(subtotal.value * appliedDiscount.value * 100) / 100
  })

  const totalPrice = computed(() => {
    return Math.max(0, Math.round((subtotal.value - discountAmount.value + shippingCost.value) * 100) / 100)
  })

  const applyPromoCode = (code: string): { success: boolean; message: string } => {
    const clean = code.trim().toUpperCase()
    if (clean === 'SMOOTHIE15' || clean === 'DELIGHT') {
      appliedDiscount.value = 0.15
      discountCode.value = clean
      return { success: true, message: 'Kod rabatowy -15% został naliczony!' }
    } else if (clean === 'FIT2026' || clean === 'BIO20') {
      appliedDiscount.value = 0.20
      discountCode.value = clean
      return { success: true, message: 'Kod VIP -20% został naliczony!' }
    } else {
      return { success: false, message: 'Nieprawidłowy kod rabatowy. Wypróbuj kod: SMOOTHIE15' }
    }
  }

  return {
    isCartOpen,
    items,
    openCart,
    closeCart,
    toggleCart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItemsCount,
    subtotal,
    freeShippingThreshold,
    freeShippingProgress,
    amountNeededForFreeShipping,
    shippingCost,
    discountAmount,
    discountCode,
    appliedDiscount,
    totalPrice,
    applyPromoCode
  }
}
