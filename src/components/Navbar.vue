<template>
  <header
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
    :class="isScrolled ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' : 'bg-transparent py-5'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <!-- Logo -->
      <a href="#hero" class="flex items-center gap-2.5 group">
        <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition duration-300">
          <Citrus class="w-6 h-6 animate-pulse" />
        </div>
        <div>
          <span class="text-xl font-black tracking-tight text-slate-900 flex items-center gap-1 font-display">
            Smoothie<span class="text-emerald-500">Delight</span>
          </span>
          <span class="text-[10px] tracking-wider uppercase font-bold text-slate-400 block -mt-1">
            100% Organic & Fresh
          </span>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="px-4 py-1.5 text-sm font-semibold rounded-full text-slate-600 hover:text-emerald-600 hover:bg-white transition duration-200 shadow-none hover:shadow-sm"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Right Actions: Cart & Mobile Toggle -->
      <div class="flex items-center gap-3">
        <!-- Cart Button -->
        <button
          @click="openCart"
          class="relative p-2.5 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 transition duration-200 border border-slate-200/60 shadow-sm flex items-center gap-2 cursor-pointer group"
          aria-label="Koszyk zakupowy"
        >
          <ShoppingBag class="w-5 h-5 group-hover:scale-110 transition duration-200" />
          <span class="hidden sm:inline-block text-xs font-bold font-sans">
            {{ subtotal > 0 ? `${subtotal.toFixed(2)} zł` : 'Koszyk' }}
          </span>
          
          <span
            v-if="totalItemsCount > 0"
            class="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce"
          >
            {{ totalItemsCount }}
          </span>
        </button>

        <!-- CTA Button Desktop -->
        <a
          href="#builder"
          class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-sm font-bold shadow-md shadow-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/35 hover:-translate-y-0.5 transition duration-200"
        >
          <Sparkles class="w-4 h-4" />
          Stwórz Własne
        </a>

        <!-- Mobile Menu Hamburger -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
          aria-label="Otwórz menu"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-5 shadow-2xl mt-3 space-y-3"
      >
        <div class="flex flex-col gap-2">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click="isMobileMenuOpen = false"
            class="px-4 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition"
          >
            {{ link.label }}
          </a>
        </div>
        <div class="pt-3 border-t border-slate-100">
          <a
            href="#builder"
            @click="isMobileMenuOpen = false"
            class="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 text-white font-bold shadow-md shadow-emerald-500/25"
          >
            <Sparkles class="w-4 h-4" />
            Stwórz Własne Smoothie
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Citrus, ShoppingBag, Sparkles, Menu, X } from 'lucide-vue-next'
import { useCart } from '../composables/useCart'

const { totalItemsCount, subtotal, openCart } = useCart()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Start', href: '#hero' },
  { label: 'Menu', href: '#shop' },
  { label: 'Kreator', href: '#builder' },
  { label: 'O nas', href: '#stats' },
  { label: 'Korzyści', href: '#benefits' },
  { label: 'Blog', href: '#blog' },
  { label: 'Kontakt', href: '#contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
