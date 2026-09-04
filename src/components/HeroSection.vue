<template>
  <section id="hero" class="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
    <!-- Ambient Background Blobs -->
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none -z-10 animate-float"></div>
    <div class="absolute top-1/3 -right-20 w-[30rem] h-[30rem] bg-rose-300/25 rounded-full blur-3xl pointer-events-none -z-10 animate-float-delayed"></div>
    <div class="absolute -bottom-20 left-1/3 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <!-- Left Content -->
        <div class="lg:col-span-7 space-y-8 text-center lg:text-left">
          <!-- Top Tag Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold shadow-sm">
            <span class="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>🌿 100% Certyfikowane Owoce Bio & Superfoods</span>
          </div>

          <!-- Main Headline -->
          <h1 class="text-4xl sm:text-6xl xl:text-7xl font-black text-slate-900 leading-[1.08] tracking-tight font-display">
            Prawdziwa <span class="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">energia</span> prosto z natury.
          </h1>

          <!-- Description -->
          <p class="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
            Świeżo blendowane koktajle z całych owoców, mleka roślinnego i adaptogenów. Bez dodatku cukru, sztucznych barwników i kompromisów.
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#shop"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition duration-200 cursor-pointer"
            >
              <Zap class="w-5 h-5 text-amber-300" />
              Odkryj Nasze Menu
            </a>

            <a
              href="#builder"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition duration-200 cursor-pointer"
            >
              <Sparkles class="w-5 h-5 text-emerald-500" />
              Kreator Smoothie
            </a>
          </div>

          <!-- Micro Features / Social Proof -->
          <div class="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
            <div class="text-left">
              <div class="text-2xl sm:text-3xl font-black text-slate-900 font-display">0g</div>
              <div class="text-xs text-slate-500 font-medium">Dodawanego cukru</div>
            </div>
            <div class="text-left border-x border-slate-200/80 px-4">
              <div class="text-2xl sm:text-3xl font-black text-emerald-600 font-display">30 min</div>
              <div class="text-xs text-slate-500 font-medium">Świeża dostawa</div>
            </div>
            <div class="text-left">
              <div class="text-2xl sm:text-3xl font-black text-slate-900 font-display">4.9/5</div>
              <div class="text-xs text-slate-500 font-medium">2 400+ recenzji</div>
            </div>
          </div>
        </div>

        <!-- Right Hero Visuals / Showcase Card -->
        <div class="lg:col-span-5 relative">
          <!-- Main Hero Image Container -->
          <div class="relative mx-auto max-w-md lg:max-w-none">
            <!-- Glass Background Card -->
            <div class="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-slate-900 to-slate-800 border border-white/20 p-2 sm:p-4 text-white">
              <div class="relative h-96 sm:h-[480px] rounded-2xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1000&q=80"
                  alt="Świeże Smoothie Truskawkowe"
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>

                <!-- Bestseller Ribbon -->
                <div class="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-500/90 backdrop-blur-md text-white text-xs font-black shadow-lg">
                  <Flame class="w-3.5 h-3.5" />
                  Bestseller Dnia
                </div>

                <!-- Bottom Smoothie Info on Card -->
                <div class="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 space-y-2">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-bold text-lg text-white font-display">Strawberry Dream Bliss</h3>
                      <p class="text-xs text-slate-200">Truskawka BIO, banan, mleko migdałowe, nasiona chia</p>
                    </div>
                    <div class="text-right">
                      <span class="text-xl font-black text-emerald-400 font-display">19.90 zł</span>
                    </div>
                  </div>

                  <button
                    @click="quickAddToCart"
                    class="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <Plus class="w-4 h-4" />
                    Dodaj do koszyka w 1 kliknięcie
                  </button>
                </div>
              </div>
            </div>

            <!-- Floating Pill 1: Healthy badge -->
            <div class="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl animate-float">
              <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <Heart class="w-5 h-5 text-rose-500 fill-rose-500" />
              </div>
              <div>
                <div class="text-xs font-bold text-slate-800">Zdrowe Serce & Witalność</div>
                <div class="text-[11px] text-slate-500">Bogate w antyoksydanty</div>
              </div>
            </div>

            <!-- Floating Pill 2: Plant Protein -->
            <div class="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl animate-float-delayed">
              <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck class="w-5 h-5" />
              </div>
              <div>
                <div class="text-xs font-bold text-slate-800">Czysta Etykieta</div>
                <div class="text-[11px] text-slate-500">Zero konserwantów</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Zap, Sparkles, Flame, Plus, Heart, ShieldCheck } from 'lucide-vue-next'
import { smoothies } from '../data/smoothies'
import { useCart } from '../composables/useCart'
import { useToast } from '../composables/useToast'

const { addToCart } = useCart()
const { showToast } = useToast()

const quickAddToCart = () => {
  const item = smoothies[0] // Strawberry Bliss
  addToCart(item, 'M (450ml)')
  showToast('Dodano do koszyka!', `${item.name} trafił do Twojego zamówienia.`, 'success')
}
</script>
