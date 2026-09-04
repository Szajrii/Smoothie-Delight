<template>
  <section id="builder" class="py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
    <!-- Ambient glow behind customizer -->
    <div class="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles class="w-3.5 h-3.5" />
          Kreator Własnego Smoothie
        </div>
        <h2 class="text-3xl sm:text-5xl font-black tracking-tight font-display text-white">
          Skomponuj swój <span class="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 bg-clip-text text-transparent">unikalny eliksir</span>
        </h2>
        <p class="text-base sm:text-lg text-slate-300">
          Wybierz bazę, świeże owoce i superfoods. Obserwuj wartości odżywcze i stwórz napój idealnie skrojony pod Twoje cele.
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-8 items-start">
        <!-- Builder Controls Column (8 cols) -->
        <div class="lg:col-span-8 space-y-8">
          <!-- Step 1: Base Selection -->
          <div class="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">1</span>
                <h3 class="text-lg sm:text-xl font-bold font-display">Wybierz bazę płynną</h3>
              </div>
              <span class="text-xs text-slate-400">Wymagane (1)</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <button
                v-for="base in baseOptions"
                :key="base.id"
                @click="selectedBase = base"
                class="p-4 rounded-2xl border text-left transition duration-200 cursor-pointer flex flex-col justify-between space-y-2"
                :class="selectedBase.id === base.id
                  ? 'border-emerald-400 bg-emerald-500/15 shadow-lg shadow-emerald-500/10'
                  : 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-300'"
              >
                <div class="flex items-center justify-between">
                  <span class="text-2xl">{{ base.emoji }}</span>
                  <span class="text-xs font-bold" :class="base.extraPrice > 0 ? 'text-emerald-400' : 'text-slate-400'">
                    {{ base.extraPrice > 0 ? `+${base.extraPrice.toFixed(2)} zł` : 'W cenie' }}
                  </span>
                </div>
                <div>
                  <div class="font-bold text-sm text-white">{{ base.name }}</div>
                  <div class="text-[11px] text-slate-400">{{ base.calories }} kcal | {{ base.protein }}g białka</div>
                </div>
              </button>
            </div>
          </div>

          <!-- Step 2: Fruits Selection (1 to 3) -->
          <div class="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">2</span>
                <h3 class="text-lg sm:text-xl font-bold font-display">Wybierz owoce & warzywa BIO</h3>
              </div>
              <span class="text-xs text-slate-400">Wybierz od 1 do 4 (wybrano: {{ selectedFruits.length }})</span>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button
                v-for="fruit in fruitOptions"
                :key="fruit.id"
                @click="toggleFruit(fruit)"
                class="p-3.5 rounded-2xl border text-left transition duration-200 cursor-pointer flex flex-col justify-between space-y-2"
                :class="isFruitSelected(fruit.id)
                  ? 'border-rose-400 bg-rose-500/20 shadow-lg shadow-rose-500/10 text-white'
                  : 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-300'"
              >
                <div class="flex items-center justify-between">
                  <span class="text-2xl">{{ fruit.emoji }}</span>
                  <Check v-if="isFruitSelected(fruit.id)" class="w-4 h-4 text-rose-400" />
                </div>
                <div>
                  <div class="font-bold text-xs text-white">{{ fruit.name }}</div>
                  <div class="text-[10px] text-emerald-400 font-semibold">+{{ fruit.extraPrice.toFixed(2) }} zł</div>
                </div>
              </button>
            </div>
          </div>

          <!-- Step 3: Superfoods & Boosters -->
          <div class="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">3</span>
                <h3 class="text-lg sm:text-xl font-bold font-display">Dodaj Superfoods & Białko</h3>
              </div>
              <span class="text-xs text-slate-400">Opcjonalnie</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <button
                v-for="sup in superfoodOptions"
                :key="sup.id"
                @click="toggleSuperfood(sup)"
                class="p-3.5 rounded-2xl border text-left transition duration-200 cursor-pointer flex items-center gap-3"
                :class="isSuperfoodSelected(sup.id)
                  ? 'border-amber-400 bg-amber-500/20 shadow-md text-white'
                  : 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-300'"
              >
                <span class="text-2xl">{{ sup.emoji }}</span>
                <div class="flex-1">
                  <div class="font-bold text-xs text-white">{{ sup.name }}</div>
                  <div class="text-[10px] text-amber-400 font-semibold">+{{ sup.extraPrice.toFixed(2) }} zł</div>
                </div>
                <Check v-if="isSuperfoodSelected(sup.id)" class="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          <!-- Step 4: Sweetener & Size -->
          <div class="grid sm:grid-cols-2 gap-6">
            <!-- Sweetener -->
            <div class="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
              <h4 class="font-bold text-sm text-slate-200 flex items-center gap-2">
                <span>🍯</span> Poziom słodyczy
              </h4>
              <div class="space-y-2">
                <button
                  v-for="sweet in sweetenerOptions"
                  :key="sweet.id"
                  @click="selectedSweetener = sweet"
                  class="w-full p-2.5 rounded-xl border text-xs font-semibold text-left transition flex items-center justify-between cursor-pointer"
                  :class="selectedSweetener.id === sweet.id
                    ? 'border-emerald-400 bg-emerald-500/20 text-white'
                    : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'"
                >
                  <span>{{ sweet.emoji }} {{ sweet.name }}</span>
                  <span v-if="sweet.extraPrice > 0" class="text-emerald-400">+{{ sweet.extraPrice.toFixed(2) }} zł</span>
                </button>
              </div>
            </div>

            <!-- Size -->
            <div class="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
              <h4 class="font-bold text-sm text-slate-200 flex items-center gap-2">
                <span>🥤</span> Rozmiar kubka
              </h4>
              <div class="grid grid-cols-3 gap-2">
                <button
                  v-for="s in sizeList"
                  :key="s"
                  @click="selectedSize = s"
                  class="p-3 rounded-2xl border text-center transition cursor-pointer"
                  :class="selectedSize === s
                    ? 'border-emerald-400 bg-emerald-500/20 text-white font-bold'
                    : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'"
                >
                  <div class="text-xs">{{ s.split(' ')[0] }}</div>
                  <div class="text-[10px] text-slate-400">{{ s.split(' ')[1] }}</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Summary Sticky Column (4 cols) -->
        <div class="lg:col-span-4 sticky top-28 space-y-6">
          <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl space-y-6">
            <!-- Top Cup Preview Card -->
            <div class="relative text-center py-4">
              <div class="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-4xl shadow-lg shadow-emerald-500/30 animate-bounce">
                🍹
              </div>
              <div class="mt-3">
                <input
                  v-model="customName"
                  type="text"
                  placeholder="Nazwij swoje smoothie..."
                  class="w-full text-center bg-white/10 border border-white/20 rounded-xl py-2 px-3 text-sm font-bold text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            <!-- Live Ingredients Summary List -->
            <div class="space-y-3 border-y border-white/10 py-4 text-xs">
              <div class="flex justify-between text-slate-300">
                <span class="text-slate-400">Baza:</span>
                <span class="font-bold text-white">{{ selectedBase.name }}</span>
              </div>
              <div class="flex justify-between text-slate-300">
                <span class="text-slate-400">Owoce:</span>
                <span class="font-bold text-white text-right max-w-[180px]">
                  {{ selectedFruits.length ? selectedFruits.map(f => f.name).join(', ') : 'Brak' }}
                </span>
              </div>
              <div class="flex justify-between text-slate-300">
                <span class="text-slate-400">Superfoods:</span>
                <span class="font-bold text-white text-right max-w-[180px]">
                  {{ selectedSuperfoods.length ? selectedSuperfoods.map(s => s.name).join(', ') : 'Brak' }}
                </span>
              </div>
              <div class="flex justify-between text-slate-300">
                <span class="text-slate-400">Pojemność:</span>
                <span class="font-bold text-white">{{ selectedSize }}</span>
              </div>
            </div>

            <!-- Macro Nutritional Breakdown -->
            <div class="space-y-2">
              <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Szacowane Wartości Makro:</div>
              <div class="grid grid-cols-2 gap-2">
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div class="text-xs text-slate-400">Kalorie</div>
                  <div class="text-lg font-black text-emerald-400 font-display">{{ totalCalories }} kcal</div>
                </div>
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div class="text-xs text-slate-400">Białko</div>
                  <div class="text-lg font-black text-teal-300 font-display">{{ totalProtein }} g</div>
                </div>
              </div>
            </div>

            <!-- Price & Add Button -->
            <div class="space-y-4 pt-2">
              <div class="flex items-center justify-between">
                <span class="text-sm text-slate-300 font-medium">Łączna cena:</span>
                <span class="text-3xl font-black text-white font-display">{{ calculatedPrice.toFixed(2) }} zł</span>
              </div>

              <button
                @click="addCustomToCart"
                :disabled="selectedFruits.length === 0"
                class="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Plus class="w-5 h-5" />
                Dodaj Własne Smoothie
              </button>
              
              <p v-if="selectedFruits.length === 0" class="text-[11px] text-amber-300 text-center">
                Wybierz przynajmniej 1 owoc, aby dodać do koszyka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Sparkles, Check, Plus } from 'lucide-vue-next'
import { baseOptions, fruitOptions, superfoodOptions, sweetenerOptions } from '../data/ingredients'
import type { IngredientOption, SmoothieSize } from '../types'
import { useCart } from '../composables/useCart'
import { useToast } from '../composables/useToast'
import { useConfetti } from '../composables/useConfetti'

const { addToCart } = useCart()
const { showToast } = useToast()
const { launchCelebration } = useConfetti()

const basePrice = 12.00
const sizeList: SmoothieSize[] = ['S (300ml)', 'M (450ml)', 'L (600ml)']

const customName = ref('')
const selectedBase = ref<IngredientOption>(baseOptions[0])
const selectedFruits = ref<IngredientOption[]>([fruitOptions[0], fruitOptions[1]])
const selectedSuperfoods = ref<IngredientOption[]>([superfoodOptions[1]])
const selectedSweetener = ref<IngredientOption>(sweetenerOptions[0])
const selectedSize = ref<SmoothieSize>('M (450ml)')

const isFruitSelected = (id: string) => selectedFruits.value.some((f) => f.id === id)
const isSuperfoodSelected = (id: string) => selectedSuperfoods.value.some((s) => s.id === id)

const toggleFruit = (fruit: IngredientOption) => {
  const index = selectedFruits.value.findIndex((f) => f.id === fruit.id)
  if (index > -1) {
    selectedFruits.value.splice(index, 1)
  } else {
    if (selectedFruits.value.length < 4) {
      selectedFruits.value.push(fruit)
    } else {
      showToast('Limit składników', 'Możesz wybrać maksymalnie 4 rodzaje owoców/warzyw.', 'info')
    }
  }
}

const toggleSuperfood = (sup: IngredientOption) => {
  const index = selectedSuperfoods.value.findIndex((s) => s.id === sup.id)
  if (index > -1) {
    selectedSuperfoods.value.splice(index, 1)
  } else {
    selectedSuperfoods.value.push(sup)
  }
}

const totalCalories = computed(() => {
  let c = selectedBase.value.calories
  selectedFruits.value.forEach((f) => (c += f.calories))
  selectedSuperfoods.value.forEach((s) => (c += s.calories))
  c += selectedSweetener.value.calories
  const mult = selectedSize.value.startsWith('S') ? 0.85 : selectedSize.value.startsWith('L') ? 1.3 : 1.0
  return Math.round(c * mult)
})

const totalProtein = computed(() => {
  let p = selectedBase.value.protein
  selectedFruits.value.forEach((f) => (p += f.protein))
  selectedSuperfoods.value.forEach((s) => (p += s.protein))
  p += selectedSweetener.value.protein
  const mult = selectedSize.value.startsWith('S') ? 0.85 : selectedSize.value.startsWith('L') ? 1.3 : 1.0
  return Math.round(p * mult * 10) / 10
})

const calculatedPrice = computed(() => {
  let p = basePrice + selectedBase.value.extraPrice
  selectedFruits.value.forEach((f) => (p += f.extraPrice))
  selectedSuperfoods.value.forEach((s) => (p += s.extraPrice))
  p += selectedSweetener.value.extraPrice
  const mult = selectedSize.value.startsWith('S') ? 0.85 : selectedSize.value.startsWith('L') ? 1.3 : 1.0
  return Math.round(p * mult * 100) / 100
})

const addCustomToCart = () => {
  const name = customName.value.trim() || 'Moja Autorska Kompozycja'
  const desc = `${selectedBase.value.name}, ${selectedFruits.value.map(f => f.name).join(' + ')}${selectedSuperfoods.value.length ? ' + ' + selectedSuperfoods.value.map(s => s.name).join(', ') : ''}`

  addToCart(
    {
      id: 'custom_' + Date.now(),
      name,
      price: calculatedPrice.value,
      image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?auto=format&fit=crop&w=800&q=80',
      isCustom: true,
      customDescription: desc
    },
    selectedSize.value
  )

  launchCelebration()
  showToast('Skomponowano smoothie!', `"${name}" zostało dodane do koszyka.`, 'success')
}
</script>
