<template>
  <section id="shop" class="py-24 bg-white relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold uppercase tracking-wider">
          <Sparkles class="w-3.5 h-3.5" />
          Gotowe Menu Smoothie
        </div>
        <h2 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
          Wybierz swój ulubiony <span class="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">smak i moc</span>
        </h2>
        <p class="text-base sm:text-lg text-slate-600">
          Każda butelka to ręcznie wyselekcjonowane owoce, świeże zioła i naturalne superfoods skomponowane przez dietetyków.
        </p>
      </div>

      <!-- Categories Filter Tabs -->
      <div class="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 sm:pb-0 mb-12 no-scrollbar">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="selectedCategory = cat.id"
          class="px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition duration-200 cursor-pointer flex items-center gap-2"
          :class="selectedCategory === cat.id
            ? 'bg-slate-900 text-white shadow-md'
            : 'bg-slate-100 hover:bg-slate-200 text-slate-700'"
        >
          <span>{{ cat.emoji }}</span>
          <span>{{ cat.label }}</span>
        </button>
      </div>

      <!-- Smoothie Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="smoothie in filteredSmoothies"
          :key="smoothie.id"
          class="group rounded-3xl bg-slate-50 border border-slate-200/80 overflow-hidden hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between"
        >
          <!-- Card Image & Badges -->
          <div class="relative h-64 overflow-hidden bg-slate-100">
            <img
              :src="smoothie.image"
              :alt="smoothie.name"
              class="w-full h-full object-cover group-hover:scale-108 transition duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

            <!-- Top Badges -->
            <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span
                v-if="smoothie.badge"
                class="px-3 py-1 rounded-full text-xs font-black text-white shadow-md bg-gradient-to-r"
                :class="smoothie.gradient"
              >
                {{ smoothie.badge }}
              </span>
              <span v-else class="text-transparent">.</span>

              <div class="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold shadow-sm">
                <Star class="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>{{ smoothie.rating }}</span>
                <span class="text-slate-400 text-[10px]">({{ smoothie.reviewsCount }})</span>
              </div>
            </div>

            <!-- Bottom Nutri Pills on Image -->
            <div class="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-white text-xs font-semibold">
              <span class="px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md">🔥 {{ smoothie.nutrition.calories }} kcal</span>
              <span class="px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md">💪 {{ smoothie.nutrition.protein }}g białka</span>
            </div>
          </div>

          <!-- Card Body -->
          <div class="p-6 flex-1 flex flex-col justify-between space-y-5">
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition font-display">
                {{ smoothie.name }}
              </h3>
              <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {{ smoothie.description }}
              </p>
            </div>

            <!-- Ingredients Tags -->
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="ing in smoothie.ingredients"
                :key="ing"
                class="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px] font-medium"
              >
                {{ ing }}
              </span>
            </div>

            <!-- Size Selector -->
            <div class="space-y-1.5">
              <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Rozmiar:</div>
              <div class="grid grid-cols-3 gap-2">
                <button
                  v-for="size in sizes"
                  :key="size"
                  @click="selectedSizes[smoothie.id] = size"
                  class="py-1 px-2 rounded-xl text-xs font-bold border transition cursor-pointer text-center"
                  :class="(selectedSizes[smoothie.id] || 'M (450ml)') === size
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'"
                >
                  {{ size }}
                </button>
              </div>
            </div>

            <!-- Price and Add Button -->
            <div class="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
              <div>
                <div class="text-[11px] text-slate-400">Cena za butelkę:</div>
                <div class="text-2xl font-black text-slate-900 font-display">
                  {{ calculatePrice(smoothie, selectedSizes[smoothie.id] || 'M (450ml)') }} zł
                </div>
              </div>

              <button
                @click="handleAdd(smoothie)"
                class="flex-1 max-w-[150px] py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold shadow-md shadow-emerald-600/20 flex items-center justify-center gap-1.5 transition duration-150 cursor-pointer"
              >
                <ShoppingBag class="w-4 h-4" />
                Do koszyka
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { Sparkles, Star, ShoppingBag } from 'lucide-vue-next'
import { smoothies } from '../data/smoothies'
import type { Smoothie, SmoothieSize, CategoryType } from '../types'
import { useCart } from '../composables/useCart'
import { useToast } from '../composables/useToast'

const { addToCart } = useCart()
const { showToast } = useToast()

const selectedCategory = ref<CategoryType>('all')
const selectedSizes = reactive<Record<string, SmoothieSize>>({})

const sizes: SmoothieSize[] = ['S (300ml)', 'M (450ml)', 'L (600ml)']

const categories = [
  { id: 'all' as CategoryType, label: 'Wszystkie', emoji: '🍹' },
  { id: 'immunity' as CategoryType, label: 'Odporność', emoji: '🍓' },
  { id: 'energy' as CategoryType, label: 'Energia', emoji: '⚡' },
  { id: 'detox' as CategoryType, label: 'Detox', emoji: '🌿' },
  { id: 'protein' as CategoryType, label: 'Proteiny', emoji: '💪' },
  { id: 'refresh' as CategoryType, label: 'Orzeźwienie', emoji: '❄️' }
]

const filteredSmoothies = computed(() => {
  if (selectedCategory.value === 'all') return smoothies
  return smoothies.filter((s) => s.category === selectedCategory.value)
})

const calculatePrice = (smoothie: Smoothie, size: SmoothieSize) => {
  const mult = size.startsWith('S') ? 0.85 : size.startsWith('L') ? 1.3 : 1.0
  return (smoothie.price * mult).toFixed(2)
}

const handleAdd = (smoothie: Smoothie) => {
  const size = selectedSizes[smoothie.id] || 'M (450ml)'
  addToCart(smoothie, size)
  showToast('Dodano do koszyka!', `${smoothie.name} (${size}) został dodany.`, 'success')
}
</script>
