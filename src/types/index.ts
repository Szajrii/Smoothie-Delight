export type CategoryType = 'all' | 'energy' | 'detox' | 'protein' | 'immunity' | 'refresh'

export interface NutritionInfo {
  calories: number
  protein: number // grams
  carbs: number // grams
  fat: number // grams
  fiber?: number // grams
  sugar?: number // grams
  vitamins: string[]
}

export interface Smoothie {
  id: string
  name: string
  tagline: string
  description: string
  price: number
  originalPrice?: number
  rating: number
  reviewsCount: number
  category: CategoryType
  image: string
  gradient: string
  nutrition: NutritionInfo
  ingredients: string[]
  badge?: string
  isPopular?: boolean
  isNew?: boolean
  isCustom?: boolean
  customDescription?: string
}

export type SmoothieSize = 'S (300ml)' | 'M (450ml)' | 'L (600ml)'

export interface IngredientOption {
  id: string
  name: string
  category: 'base' | 'fruit' | 'superfood' | 'sweetener'
  emoji: string
  extraPrice: number
  calories: number
  protein: number
}

export interface CustomSmoothieConfig {
  name: string
  base: IngredientOption
  fruits: IngredientOption[]
  superfoods: IngredientOption[]
  sweetener?: IngredientOption
  size: SmoothieSize
}

export interface CartItem {
  id: string
  smoothieId?: string
  name: string
  price: number
  quantity: number
  size: SmoothieSize
  image: string
  isCustom?: boolean
  customDescription?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  readTime: string
  date: string
  author: {
    name: string
    role: string
    avatar: string
  }
  image: string
  tags: string[]
}

export interface ToastNotification {
  id: string
  type: 'success' | 'error' | 'info'
  title: string
  message: string
}

export interface FaqItem {
  question: string
  answer: string
}
