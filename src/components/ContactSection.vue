<template>
  <section id="contact" class="py-24 bg-slate-50 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <MessageSquare class="w-3.5 h-3.5" />
          Kontakt & FAQ
        </div>
        <h2 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
          Masz pytania? <span class="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Napisz do nas</span>
        </h2>
        <p class="text-base sm:text-lg text-slate-600">
          Chętnie pomożemy w doborze smoothie, zamówieniach firmowych lub odpowiemy na pytania dotyczące składu.
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-12 items-start">
        <!-- Contact Info & Form (6 cols) -->
        <div class="lg:col-span-6 space-y-6">
          <!-- Form Card -->
          <div class="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-xl space-y-6">
            <h3 class="text-xl font-bold text-slate-900 font-display">Wyślij wiadomość</h3>

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                  <label class="text-xs font-bold text-slate-700">Twoje Imię</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="np. Michał"
                    class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                  />
                </div>
                <div class="space-y-1.5">
                  <label class="text-xs font-bold text-slate-700">Adres E-mail</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="twoj@email.pl"
                    class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                  />
                </div>
              </div>

              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700">Temat rozmowy</label>
                <select
                  v-model="form.topic"
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition"
                >
                  <option value="catering">Catering do biura / impreza</option>
                  <option value="diet">Konsultacja składu & alergeny</option>
                  <option value="order">Pytanie o zamówienie</option>
                  <option value="other">Inny temat</option>
                </select>
              </div>

              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-700">Wiadomość</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="4"
                  placeholder="Opisz, w czym możemy Ci pomóc..."
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Wyślij Wiadomość</span>
                <Send class="w-4 h-4" />
              </button>
            </form>
          </div>

          <!-- Quick contact details -->
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl bg-white border border-slate-200 text-slate-800 space-y-1">
              <div class="text-xs font-bold text-slate-400">📞 Telefon</div>
              <div class="text-sm font-bold">+48 500 123 456</div>
              <div class="text-[11px] text-slate-500">Pn - Pt: 08:00 - 19:00</div>
            </div>
            <div class="p-4 rounded-2xl bg-white border border-slate-200 text-slate-800 space-y-1">
              <div class="text-xs font-bold text-slate-400">📍 Smoothie Bar</div>
              <div class="text-sm font-bold">Warszawa, ul. Nowy Świat 42</div>
              <div class="text-[11px] text-slate-500">Odbiór osobisty & Dostawa</div>
            </div>
          </div>
        </div>

        <!-- FAQ Accordion (6 cols) -->
        <div class="lg:col-span-6 space-y-4">
          <h3 class="text-xl font-bold text-slate-900 font-display mb-6">Często zadawane pytania (FAQ)</h3>

          <div
            v-for="(item, idx) in faqItems"
            :key="idx"
            class="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-sm transition"
          >
            <button
              @click="toggleFaq(idx)"
              class="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:text-emerald-600 transition"
            >
              <span>{{ item.question }}</span>
              <ChevronDown
                class="w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200"
                :class="{ 'rotate-180 text-emerald-600': openFaqIndex === idx }"
              />
            </button>

            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div v-if="openFaqIndex === idx" class="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {{ item.answer }}
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { MessageSquare, Send, ChevronDown } from 'lucide-vue-next'
import { faqItems } from '../data/faq'
import { useToast } from '../composables/useToast'
import { useConfetti } from '../composables/useConfetti'

const { showToast } = useToast()
const { launchCelebration } = useConfetti()

const openFaqIndex = ref<number | null>(0)

const form = reactive({
  name: '',
  email: '',
  topic: 'catering',
  message: ''
})

const toggleFaq = (idx: number) => {
  openFaqIndex.value = openFaqIndex.value === idx ? null : idx
}

const handleSubmit = () => {
  launchCelebration()
  showToast(
    'Wiadomość wysłana!',
    `Dziękujemy ${form.name}. Odpowiemy na adres ${form.email} w ciągu 2 godzin.`,
    'success'
  )
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>
