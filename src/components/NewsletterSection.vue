<template>
  <section class="py-16 bg-slate-900 text-white relative overflow-hidden">
    <!-- Ambient glowing accents -->
    <div class="absolute -top-10 -right-10 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-10 -left-10 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="rounded-3xl bg-gradient-to-r from-emerald-950/80 to-slate-900 border border-emerald-500/20 p-8 sm:p-14 shadow-2xl">
        <div class="grid lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles class="w-3.5 h-3.5" />
              -15% Na Pierwsze Zamówienie
            </div>
            <h2 class="text-2xl sm:text-4xl font-black font-display tracking-tight text-white">
              Dołącz do Klubu Smoothie Delight
            </h2>
            <p class="text-sm sm:text-base text-slate-300 max-w-xl">
              Zapisz się, aby otrzymać kod rabatowy <strong>SMOOTHIE15</strong>, cotygodniowe przepisy dietetyczne i dostęp do limitowanych smaków sezonowych.
            </p>
          </div>

          <div class="lg:col-span-5">
            <form @submit.prevent="handleSubscribe" class="space-y-3">
              <div class="flex flex-col sm:flex-row gap-2">
                <input
                  v-model="email"
                  type="email"
                  required
                  placeholder="Wpisz swój adres e-mail..."
                  class="flex-1 bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:bg-white/15 transition"
                />
                <button
                  type="submit"
                  class="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-slate-950 font-black text-sm transition duration-200 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Odbierz -15%</span>
                  <Send class="w-4 h-4" />
                </button>
              </div>
              <p class="text-[11px] text-slate-400 text-center lg:text-left">
                🔒 Zero spamu. Możesz wypisać się w dowolnym momencie jednym kliknięciem.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Sparkles, Send } from 'lucide-vue-next'
import { useToast } from '../composables/useToast'
import { useConfetti } from '../composables/useConfetti'

const { showToast } = useToast()
const { launchCelebration } = useConfetti()

const email = ref('')

const handleSubscribe = () => {
  if (!email.value) return
  launchCelebration()
  showToast(
    'Dziękujemy za zapis!',
    `Kod SMOOTHIE15 został aktywowany dla adresu: ${email.value}`,
    'success'
  )
  email.value = ''
}
</script>
