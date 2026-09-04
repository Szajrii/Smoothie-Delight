import type { Smoothie } from '../types'

export const smoothies: Smoothie[] = [
  {
    id: 'strawberry-bliss',
    name: 'Strawberry Dream Bliss',
    tagline: 'Soczysta truskawka z bananem i nasionami chia',
    description: 'Nasz flagowy klasyk. Połączenie słodkich truskawek BIO, dojrzałego banana, mleka migdałowego i superfood chia dla maksymalnej witalności.',
    price: 19.90,
    originalPrice: 24.90,
    rating: 4.9,
    reviewsCount: 142,
    category: 'immunity',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-rose-500 to-pink-400',
    nutrition: {
      calories: 210,
      protein: 5.2,
      carbs: 38,
      fat: 3.4,
      fiber: 6.8,
      sugar: 24,
      vitamins: ['Witamina C (180%)', 'Potas', 'Magnez', 'Omega-3']
    },
    ingredients: ['Truskawki BIO', 'Banan', 'Mleko migdałowe', 'Nasiona Chia', 'Kropla miodu'],
    badge: 'Bestseller',
    isPopular: true
  },
  {
    id: 'tropical-mango-boost',
    name: 'Mango Tango Power',
    tagline: 'Słoneczne mango, marakuja & witamina C',
    description: 'Eksplozja tropikalnej energii! Dojrzałe mango Alfonso połączone z ananasem, marakują i imbirem, które pobudza metabolizm od pierwszego łyka.',
    price: 22.50,
    rating: 4.8,
    reviewsCount: 98,
    category: 'energy',
    image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-amber-500 to-orange-400',
    nutrition: {
      calories: 245,
      protein: 4.0,
      carbs: 49,
      fat: 1.8,
      fiber: 5.2,
      sugar: 32,
      vitamins: ['Witamina A (120%)', 'Witamina C (240%)', 'Kwas foliowy']
    },
    ingredients: ['Mango Alfonso', 'Ananas', 'Marakuja', 'Świeży imbir', 'Woda kokosowa'],
    badge: 'Hit Sezonu',
    isPopular: true
  },
  {
    id: 'green-detox-glow',
    name: 'Pure Green Detox Glow',
    tagline: 'Szpinak baby, kiwi, zielone jabłko & spirulina',
    description: 'Głębokie oczyszczenie i naturalny detoks. Świeży szpinak baby, chrupiące zielone jabłko, ogórek, kiwi i spirulina hawajska.',
    price: 21.00,
    rating: 4.9,
    reviewsCount: 115,
    category: 'detox',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-emerald-500 to-teal-400',
    nutrition: {
      calories: 165,
      protein: 6.8,
      carbs: 31,
      fat: 1.2,
      fiber: 7.4,
      sugar: 18,
      vitamins: ['Chlorofil', 'Żelazo (45%)', 'Witamina K', 'Witamina C']
    },
    ingredients: ['Szpinak baby', 'Kiwi', 'Zielone jabłko', 'Ogórek', 'Spirulina', 'Sok z limonki'],
    badge: 'Detox 100%',
    isPopular: true
  },
  {
    id: 'protein-peanut-beast',
    name: 'Choco Peanut Beast',
    tagline: '32g białka, masło orzechowe, surowe kakao & owies',
    description: 'Idealny wybór po mocnym treningu. Roślinny izolat białka, 100% masło z orzechów arachidowych, surowe kakao i bezglutenowe płatki owsiane.',
    price: 24.90,
    rating: 5.0,
    reviewsCount: 167,
    category: 'protein',
    image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-amber-700 to-yellow-600',
    nutrition: {
      calories: 410,
      protein: 32.5,
      carbs: 42,
      fat: 14.0,
      fiber: 8.9,
      sugar: 16,
      vitamins: ['Białko 32g', 'B-Complex', 'Magnez (65%)', 'Cynk']
    },
    ingredients: ['Izolat białka roślinnego', 'Masło orzechowe 100%', 'Banan', 'Surowe kakao', 'Mleko owsiane', 'Płatki owsiane'],
    badge: '32g Białka',
    isPopular: true
  },
  {
    id: 'blueberry-antioxidant-shield',
    name: 'Wild Blueberry Shield',
    tagline: 'Dzikie jagody leśne, acai & mleko kokosowe',
    description: 'Najpotężniejsza dawka antyoksydantów wspierających wzrok, mózg i spowalniających procesy starzenia. Aksamitne i obłędnie pyszne.',
    price: 23.90,
    rating: 4.85,
    reviewsCount: 76,
    category: 'immunity',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-purple-600 to-indigo-500',
    nutrition: {
      calories: 220,
      protein: 4.5,
      carbs: 39,
      fat: 4.8,
      fiber: 7.1,
      sugar: 22,
      vitamins: ['Antyoksydanty ORAC 8500', 'Witamina E', 'Antocyjany']
    },
    ingredients: ['Dzikie jagody', 'Jagody Acai', 'Banan', 'Mleko kokosowe', 'Siemię lniane'],
    badge: 'Superfoods'
  },
  {
    id: 'citrus-mint-hydra',
    name: 'Citrus Mint Refresh',
    tagline: 'Grejpfrut różowy, mięta, limonka & aloes',
    description: 'Ultra orzeźwiający izotonik z natury. Soczysty grejpfrut, świeża mięta prosto z krzaczka, sok z aloesu i woda kokosowa gaszą pragnienie na wiele godzin.',
    price: 18.50,
    rating: 4.75,
    reviewsCount: 54,
    category: 'refresh',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-lime-500 to-emerald-400',
    nutrition: {
      calories: 135,
      protein: 2.1,
      carbs: 28,
      fat: 0.5,
      fiber: 4.2,
      sugar: 19,
      vitamins: ['Elektrolity', 'Witamina C (190%)', 'Kwas cytrynowy']
    },
    ingredients: ['Różowy grejpfrut', 'Świeża mięta', 'Sok z aloesu', 'Woda kokosowa', 'Limonka'],
    isNew: true
  }
]
