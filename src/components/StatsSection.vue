<template>
  <section id="stats" ref="sectionRef" class="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white relative overflow-hidden">
    <!-- Geometric Background Highlights -->
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span class="px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
          Make It Count
        </span>
        <h2 class="text-3xl sm:text-4xl font-black font-display">
          Liczby, które mówią o naszej pasji
        </h2>
        <p class="text-emerald-100 text-sm sm:text-base">
          Dbamy o najwyższą jakość każdego owocu i zadowolenie każdego klienta od 2019 roku.
        </p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-center space-y-2 hover:bg-white/15 transition duration-300"
        >
          <div class="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            {{ formatValue(stat.current) }}{{ stat.suffix }}
          </div>
          <div class="text-xs sm:text-sm font-bold text-emerald-100">{{ stat.label }}</div>
          <div class="text-[11px] text-emerald-200/80">{{ stat.sub }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
let hasAnimated = false

const stats = reactive([
  { target: 154, current: 0, suffix: ' tys.+', label: 'Zblendowanych butelek', sub: 'zawsze świeże na zamówienie' },
  { target: 99, current: 0, suffix: '%', label: 'Zadowolonych klientów', sub: 'ocena 4.9 w Google' },
  { target: 100, current: 0, suffix: '%', label: 'Owoce & Superfoods BIO', sub: 'od certyfikowanych dostawców' },
  { target: 0, current: 0, suffix: ' g', label: 'Dodawanego cukru', sub: '100% naturalny smak natury' }
])

const formatValue = (val: number) => {
  return Math.floor(val)
}

const animateCounters = () => {
  if (hasAnimated) return
  hasAnimated = true

  const duration = 2000
  const startTime = performance.now()

  const step = (now: number) => {
    const elapsed = now - startTime
    const progress = Math.min(1, elapsed / duration)
    // Ease out quart
    const ease = 1 - Math.pow(1 - progress, 4)

    stats.forEach((stat) => {
      stat.current = stat.target * ease
    })

    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      stats.forEach((stat) => {
        stat.current = stat.target
      })
    }
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounters()
      }
    },
    { threshold: 0.2 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>
