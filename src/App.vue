<template>
  <div class="min-h-screen flex flex-col justify-between relative bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Views -->
    <div class="flex-1">
      <router-view />
    </div>

    <!-- Footer -->
    <Footer />

    <!-- Slide-over Cart Drawer -->
    <CartDrawer />

    <!-- Toast Notifications -->
    <ToastContainer />

    <!-- Back to Top Floating Button -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-90"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-90"
    >
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer"
        aria-label="Przewiń do góry"
      >
        <ArrowUp class="w-5 h-5" />
      </button>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import CartDrawer from './components/CartDrawer.vue'
import ToastContainer from './components/ToastContainer.vue'

const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
