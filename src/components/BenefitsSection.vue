<template>
  <section id="benefits" class="py-24 bg-slate-50 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <Activity class="w-3.5 h-3.5" />
          Zdrowy Styl Życia
        </div>
        <h2 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
          Dopasuj smoothie do <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">swojego rytmu dnia</span>
        </h2>
        <p class="text-base sm:text-lg text-slate-600">
          Niezależnie od tego, czy trenujesz, pracujesz umysłowo, czy potrzebujesz porannego resetu — natura ma dla Ciebie idealne rozwiązanie.
        </p>
      </div>

      <!-- Interactive Goal Tabs -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <button
          v-for="goal in goals"
          :key="goal.id"
          @click="activeGoalId = goal.id"
          class="p-5 rounded-3xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4"
          :class="activeGoalId === goal.id
            ? 'border-emerald-500 bg-white shadow-xl shadow-emerald-500/10 scale-[1.02]'
            : 'border-slate-200 bg-slate-100/60 hover:bg-white text-slate-600'"
        >
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" :class="goal.iconBg">
            {{ goal.emoji }}
          </div>
          <div>
            <h3 class="font-bold text-base text-slate-900 font-display">{{ goal.title }}</h3>
            <p class="text-xs text-slate-500 mt-1 leading-relaxed">{{ goal.subtitle }}</p>
          </div>
        </button>
      </div>

      <!-- Active Goal Showcase Card -->
      <div class="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-xl overflow-hidden">
        <div class="grid lg:grid-cols-12 gap-8 items-center">
          <!-- Image -->
          <div class="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md">
            <img
              :src="activeGoal.image"
              :alt="activeGoal.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white">Rekomendacja Eksperta</span>
              <h4 class="text-lg font-bold font-display mt-2">{{ activeGoal.recommendedSmoothie }}</h4>
            </div>
          </div>

          <!-- Content Details -->
          <div class="lg:col-span-7 space-y-6">
            <div class="space-y-2">
              <div class="text-xs font-bold text-emerald-600 uppercase tracking-wider">{{ activeGoal.timeOfDay }}</div>
              <h3 class="text-2xl sm:text-3xl font-black text-slate-900 font-display">{{ activeGoal.heading }}</h3>
              <p class="text-sm sm:text-base text-slate-600 leading-relaxed">{{ activeGoal.description }}</p>
            </div>

            <!-- Bullet Points -->
            <div class="grid sm:grid-cols-2 gap-3">
              <div
                v-for="(point, idx) in activeGoal.points"
                :key="idx"
                class="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100"
              >
                <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span class="text-xs text-slate-700 font-medium">{{ point }}</span>
              </div>
            </div>

            <div class="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#shop"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition cursor-pointer"
              >
                <span>Zamów rekomendowany zestaw</span>
                <ArrowRight class="w-4 h-4" />
              </a>

              <a
                href="#builder"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs transition cursor-pointer"
              >
                <span>Dostosuj proporcje w kreatorze</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Activity, CheckCircle2, ArrowRight } from 'lucide-vue-next'

const activeGoalId = ref('morning')

const goals = [
  {
    id: 'morning',
    emoji: '☀️',
    iconBg: 'bg-amber-100 text-amber-700',
    title: 'Poranny Rozruch',
    subtitle: 'Alkalizacja i czysta energia bez kawy',
    image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?auto=format&fit=crop&w=800&q=80',
    heading: 'Aktywuj metabolizm w pierwsze 15 minut',
    timeOfDay: 'Idealne o 07:00 - 09:00',
    recommendedSmoothie: 'Mango Tango Power + Imbir',
    description: 'Po nocy organizm potrzebuje natychmiastowego nawodnienia komórkowego i glukozy z owoców o niskim indeksie glikemicznym dla pobudzenia mózgu.',
    points: [
      'Uwalnia energię przez 4-5 godzin bez zjazdu cukrowego',
      'Wspiera perystaltykę jelit dzięki błonnikowi rozpuszczalnemu',
      'Witamina C pobudza syntezę kolagenu i odporność',
      'Naturalne enzymy trawienne ułatwiają przyswajanie śniadania'
    ]
  },
  {
    id: 'workout',
    emoji: '⚡',
    iconBg: 'bg-rose-100 text-rose-700',
    title: 'Przed Treningiem',
    subtitle: 'Maksymalna wydolność & dotlenienie mięśni',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    heading: 'Naturalny pre-workout bez sztucznych stymulantów',
    timeOfDay: '30-45 minut przed aktywnością',
    recommendedSmoothie: 'Strawberry Dream Bliss + Guarana',
    description: 'Połączenie fruktozy z całych truskawek i nasion chia dostarcza stopniowo uwalnianych węglowodanów złożonych oraz elektrolitów zapobiegających skurczom.',
    points: [
      'Zwiększa zapasy glikogenu w mięśniach',
      'Bogate w azotany wspierające przepływ krwi i tlenu',
      'Optymalne stężenie potasu i magnezu zapobiega zakwasom',
      'Lekkostrawne — zero uczucia ciężkości na żołądku'
    ]
  },
  {
    id: 'recovery',
    emoji: '💪',
    iconBg: 'bg-indigo-100 text-indigo-700',
    title: 'Regeneracja Mięśni',
    subtitle: '30g+ roślinnego białka & BCAA po wysiłku',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    heading: 'Odbudowa włókien mięśniowych w oknie anabolicznym',
    timeOfDay: 'Do 45 minut po treningu',
    recommendedSmoothie: 'Choco Peanut Beast (32g Białka)',
    description: 'Izolat białka grochu i ryżu w połączeniu z masłem orzechowym dostarcza pełnego spektrum aminokwasów egzogennych i redukuje mikrourazy potreningowe.',
    points: [
      'Kompletny profil aminokwasowy bogaty w leucynę',
      'Zawiera surowe kakao — naturalny magnez redukujący stres',
      'Antyoksydanty przyspieszają usuwanie metabolitów wysiłkowych',
      'Szybkie uczucie sytości bez obciążania układu pokarmowego'
    ]
  },
  {
    id: 'detox',
    emoji: '🌿',
    iconBg: 'bg-emerald-100 text-emerald-700',
    title: 'Głęboki Detox',
    subtitle: 'Chlorofil, zielone liście & wsparcie wątroby',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=800&q=80',
    heading: 'Oczyszczenie komórkowe i wsparcie flory bakteryjnej',
    timeOfDay: 'W porze podwieczorku lub kolacji',
    recommendedSmoothie: 'Pure Green Detox Glow + Spirulina',
    description: 'Szpinak, seler naciowy, kiwi i spirulina wspomagają naturalne procesy filtracyjne wątroby i nerek oraz pomagają przywrócić równowagę kwasowo-zasadową.',
    points: [
      'Wysoka zawartość chlorofilu wiążącego toksyny',
      'Wspiera florę bakteryjną i łagodzi wzdęcia',
      'Rozświetla cerę i pomaga w walce z niedoskonałościami',
      'Niska zawartość kalorii przy maksymalnej gęstości odżywczej'
    ]
  }
]

const activeGoal = computed(() => {
  return goals.find((g) => g.id === activeGoalId.value) || goals[0]
})
</script>
