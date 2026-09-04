<template>
  <footer class="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
        <!-- Brand Col -->
        <div class="lg:col-span-2 space-y-4">
          <div class="flex items-center gap-2.5">
            <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-md">
              <Citrus class="w-6 h-6" />
            </div>
            <div>
              <span class="text-xl font-black tracking-tight text-white font-display">
                Smoothie<span class="text-emerald-400">Delight</span>
              </span>
              <span class="text-[10px] tracking-wider uppercase font-bold text-slate-400 block">
                100% Organic & Fresh
              </span>
            </div>
          </div>

          <p class="text-xs text-slate-400 max-w-sm leading-relaxed">
            Świeże koktajle owocowo-warzywne przygotowywane z certyfikowanych upraw ekologicznych. Naturalne wsparcie Twojego zdrowia, energii i odporności.
          </p>

          <div class="flex items-center gap-3 pt-2 text-slate-400">
            <a href="#" class="w-9 h-9 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition">
              <Instagram class="w-4 h-4" />
            </a>
            <a href="#" class="w-9 h-9 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition">
              <Facebook class="w-4 h-4" />
            </a>
            <a href="#" class="w-9 h-9 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition">
              <Youtube class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-3">
          <h4 class="text-sm font-bold text-white font-display">Nawigacja</h4>
          <ul class="space-y-2 text-xs text-slate-400">
            <li><a href="#hero" class="hover:text-emerald-400 transition">Strona główna</a></li>
            <li><a href="#shop" class="hover:text-emerald-400 transition">Katalog smoothie</a></li>
            <li><a href="#builder" class="hover:text-emerald-400 transition">Kreator na zamówienie</a></li>
            <li><a href="#benefits" class="hover:text-emerald-400 transition">Korzyści zdrowotne</a></li>
            <li><a href="#stats" class="hover:text-emerald-400 transition">O marce & Liczby</a></li>
          </ul>
        </div>

        <!-- Categories -->
        <div class="space-y-3">
          <h4 class="text-sm font-bold text-white font-display">Kategorie</h4>
          <ul class="space-y-2 text-xs text-slate-400">
            <li><a href="#shop" class="hover:text-emerald-400 transition">Smoothie Proteinowe</a></li>
            <li><a href="#shop" class="hover:text-emerald-400 transition">Zielony Detox & Chlorofil</a></li>
            <li><a href="#shop" class="hover:text-emerald-400 transition">Bomba Witaminowa</a></li>
            <li><a href="#shop" class="hover:text-emerald-400 transition">Orzeźwienie & Izotoniki</a></li>
            <li><a href="#builder" class="hover:text-emerald-400 transition">Superfoods & Adaptogeny</a></li>
          </ul>
        </div>

        <!-- Quality Guarantee -->
        <div class="space-y-3">
          <h4 class="text-sm font-bold text-white font-display">Gwarancja Jakości</h4>
          <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div class="flex items-center gap-2 text-emerald-400 text-xs font-bold">
              <ShieldCheck class="w-4 h-4" />
              <span>Gwarancja Świeżości</span>
            </div>
            <p class="text-[11px] text-slate-400 leading-normal">
              Jeśli Twoje smoothie nie spełni oczekiwań w 100%, zblendujemy nowe na nasz koszt lub zwrócimy środki.
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          © 2026 Smoothie Delight. Wszelkie prawa zastrzeżone.
        </div>
        <div class="flex gap-6">
          <a href="#" class="hover:text-slate-400 transition">Polityka prywatności</a>
          <a href="#" class="hover:text-slate-400 transition">Regulamin zakupów</a>
          <a href="#" class="hover:text-slate-400 transition">Certyfikaty EKO</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Citrus, Instagram, Facebook, Youtube, ShieldCheck } from 'lucide-vue-next'
</script>
