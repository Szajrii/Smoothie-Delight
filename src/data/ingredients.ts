import type { IngredientOption } from '../types'

export const baseOptions: IngredientOption[] = [
  { id: 'almond-milk', name: 'Mleko migdałowe BIO', category: 'base', emoji: '🥛', extraPrice: 0, calories: 35, protein: 1.2 },
  { id: 'coconut-water', name: 'Woda kokosowa 100%', category: 'base', emoji: '🥥', extraPrice: 2.00, calories: 45, protein: 0.5 },
  { id: 'oat-milk', name: 'Mleko owsiane Barista', category: 'base', emoji: '🌾', extraPrice: 0, calories: 60, protein: 1.5 },
  { id: 'greek-yogurt', name: 'Jogurt grecki bez laktozy', category: 'base', emoji: '🥣', extraPrice: 2.50, calories: 95, protein: 9.0 },
  { id: 'apple-juice', name: 'Tłoczony sok jabłkowy NFC', category: 'base', emoji: '🍏', extraPrice: 1.50, calories: 75, protein: 0.2 }
]

export const fruitOptions: IngredientOption[] = [
  { id: 'strawberry', name: 'Świeża Truskawka', category: 'fruit', emoji: '🍓', extraPrice: 3.50, calories: 32, protein: 0.7 },
  { id: 'banana', name: 'Dojrzały Banan', category: 'fruit', emoji: '🍌', extraPrice: 2.50, calories: 89, protein: 1.1 },
  { id: 'mango', name: 'Soczyste Mango', category: 'fruit', emoji: '🥭', extraPrice: 4.00, calories: 60, protein: 0.8 },
  { id: 'kiwi', name: 'Zielone Kiwi', category: 'fruit', emoji: '🥝', extraPrice: 3.00, calories: 42, protein: 0.8 },
  { id: 'blueberry', name: 'Dzikie Jagody', category: 'fruit', emoji: '🫐', extraPrice: 4.50, calories: 57, protein: 0.7 },
  { id: 'pineapple', name: 'Tropikalny Ananas', category: 'fruit', emoji: '🍍', extraPrice: 3.50, calories: 50, protein: 0.5 },
  { id: 'avocado', name: 'Kremowe Awokado Hass', category: 'fruit', emoji: '🥑', extraPrice: 4.50, calories: 120, protein: 2.0 },
  { id: 'spinach', name: 'Świeży Szpinak Baby', category: 'fruit', emoji: '🥬', extraPrice: 2.50, calories: 23, protein: 2.9 }
]

export const superfoodOptions: IngredientOption[] = [
  { id: 'plant-protein', name: 'Izolat białka roślinnego (+15g)', category: 'superfood', emoji: '💪', extraPrice: 4.00, calories: 60, protein: 15.0 },
  { id: 'chia-seeds', name: 'Nasiona Chia Organic', category: 'superfood', emoji: '✨', extraPrice: 2.50, calories: 45, protein: 1.8 },
  { id: 'spirulina', name: 'Hawajska Spirulina', category: 'superfood', emoji: '🌿', extraPrice: 3.00, calories: 20, protein: 3.0 },
  { id: 'peanut-butter', name: 'Masło orzechowe 100%', category: 'superfood', emoji: '🥜', extraPrice: 3.50, calories: 95, protein: 4.0 },
  { id: 'guarana-boost', name: 'Ekstrakt z Guarany (Energia)', category: 'superfood', emoji: '⚡', extraPrice: 3.00, calories: 10, protein: 0.1 },
  { id: 'acai-powder', name: 'Organiczne Acai w proszku', category: 'superfood', emoji: '🫐', extraPrice: 4.00, calories: 35, protein: 1.0 }
]

export const sweetenerOptions: IngredientOption[] = [
  { id: 'none', name: 'Bez słodzenia (Tylko owoce)', category: 'sweetener', emoji: '🌱', extraPrice: 0, calories: 0, protein: 0 },
  { id: 'honey', name: 'Miód z lokalnej pasieki', category: 'sweetener', emoji: '🍯', extraPrice: 1.50, calories: 45, protein: 0.1 },
  { id: 'agave', name: 'Syrop z agawy BIO', category: 'sweetener', emoji: '🌵', extraPrice: 2.00, calories: 40, protein: 0 },
  { id: 'erythritol', name: 'Erytrytol (0 kcal)', category: 'sweetener', emoji: '💎', extraPrice: 1.50, calories: 0, protein: 0 }
]
