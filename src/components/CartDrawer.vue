<template>
  <div>
    <!-- Backdrop -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isCartOpen"
        @click="closeCart"
        class="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm"
      ></div>
    </Transition>

    <!-- Slide-over Drawer Panel -->
    <Transition
      enter-active-class="transform transition duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transform transition duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="isCartOpen"
        class="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col justify-between"
      >
        <!-- Header -->
        <div class="p-6 border-b border-slate-100 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <ShoppingBag class="w-5 h-5 text-emerald-600" />
            <h3 class="font-bold text-lg text-slate-900 font-display">Twój Koszyk</h3>
            <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              {{ totalItemsCount }}
            </span>
          </div>

          <button
            @click="closeCart"
            class="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          >
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Free Shipping Tracker -->
        <div class="px-6 py-3 bg-emerald-50/60 border-b border-emerald-100 space-y-1.5">
          <div class="flex justify-between text-xs font-semibold text-emerald-900">
            <span v-if="amountNeededForFreeShipping > 0">
              Brakuje Ci <strong>{{ amountNeededForFreeShipping.toFixed(2) }} zł</strong> do darmowej dostawy!
            </span>
            <span v-else class="text-emerald-700 flex items-center gap-1 font-bold">
              🎉 Masz darmową dostawę kurierską!
            </span>
            <span>{{ freeShippingProgress.toFixed(0) }}%</span>
          </div>
          <div class="w-full h-2 bg-emerald-200/60 rounded-full overflow-hidden">
            <div
              class="h-full bg-emerald-500 rounded-full transition-all duration-300"
              :style="{ width: `${freeShippingProgress}%` }"
            ></div>
          </div>
        </div>

        <!-- Cart Items List (Scrollable) -->
        <div class="flex-1 overflow-y-auto p-6 space-y-4">
          <!-- Empty State -->
          <div v-if="items.length === 0" class="h-full flex flex-col items-center justify-center text-center space-y-4 text-slate-400 py-12">
            <div class="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-3xl">
              🍹
            </div>
            <div>
              <p class="font-bold text-slate-700 text-base">Twój koszyk jest pusty</p>
              <p class="text-xs text-slate-400 mt-1">Dodaj pyszne smoothie z menu lub stwórz własną kompozycję!</p>
            </div>
            <button
              @click="closeCart"
              class="px-6 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition cursor-pointer"
            >
              Przeglądaj menu
            </button>
          </div>

          <!-- Items -->
          <div
            v-for="item in items"
            :key="item.id"
            class="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-200"
            />

            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-2">
                <h4 class="font-bold text-sm text-slate-900 truncate font-display">{{ item.name }}</h4>
                <button
                  @click="removeFromCart(item.id)"
                  class="text-slate-400 hover:text-rose-500 transition p-1"
                >
                  <Trash2 class="w-4 h-4" />
                </button>
              </div>

              <div class="flex items-center gap-2 mt-0.5">
                <span class="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  {{ item.size }}
                </span>
                <span v-if="item.isCustom" class="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">
                  Kreator
                </span>
              </div>

              <p v-if="item.customDescription" class="text-[10px] text-slate-500 truncate mt-1">
                {{ item.customDescription }}
              </p>

              <!-- Quantity stepper & Price -->
              <div class="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/50">
                <div class="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-2 py-0.5">
                  <button
                    @click="updateQuantity(item.id, -1)"
                    class="text-slate-500 hover:text-slate-900 font-bold text-xs p-0.5"
                  >
                    -
                  </button>
                  <span class="text-xs font-bold text-slate-800 px-1">{{ item.quantity }}</span>
                  <button
                    @click="updateQuantity(item.id, 1)"
                    class="text-slate-500 hover:text-slate-900 font-bold text-xs p-0.5"
                  >
                    +
                  </button>
                </div>

                <div class="text-sm font-black text-slate-900 font-display">
                  {{ (item.price * item.quantity).toFixed(2) }} zł
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer / Checkout Section -->
        <div v-if="items.length > 0" class="p-6 border-t border-slate-100 bg-slate-50/50 space-y-4">
          <!-- Promo Code Input -->
          <div class="flex gap-2">
            <input
              v-model="promoInput"
              type="text"
              placeholder="Kod rabatowy (np. SMOOTHIE15)"
              class="flex-1 uppercase bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none focus:border-emerald-500"
            />
            <button
              @click="handleApplyCode"
              class="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition cursor-pointer"
            >
              Zastosuj
            </button>
          </div>

          <!-- Price Calculations -->
          <div class="space-y-1.5 text-xs text-slate-600">
            <div class="flex justify-between">
              <span>Wartość koszyka:</span>
              <span class="font-bold text-slate-900">{{ subtotal.toFixed(2) }} zł</span>
            </div>
            <div v-if="appliedDiscount > 0" class="flex justify-between text-emerald-600 font-bold">
              <span>Rabat ({{ discountCode }}):</span>
              <span>-{{ discountAmount.toFixed(2) }} zł</span>
            </div>
            <div class="flex justify-between">
              <span>Dostawa kurierska:</span>
              <span class="font-bold text-slate-900">
                {{ shippingCost === 0 ? 'Darmowa' : `${shippingCost.toFixed(2)} zł` }}
              </span>
            </div>
            <div class="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200 font-display">
              <span>Do zapłaty:</span>
              <span class="text-emerald-600 text-xl">{{ totalPrice.toFixed(2) }} zł</span>
            </div>
          </div>

          <!-- Checkout Button -->
          <button
            @click="isCheckoutModalOpen = true"
            class="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black text-sm shadow-xl shadow-emerald-600/25 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Przejdź do kasy</span>
            <ArrowRight class="w-4 h-4" />
          </button>
        </div>
      </div>
    </Transition>

    <!-- Checkout Modal -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isCheckoutModalOpen"
        class="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        @click.self="isCheckoutModalOpen = false"
      >
        <div class="bg-white max-w-lg w-full rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6">
          <div class="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 class="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
              <CheckCircle class="w-6 h-6 text-emerald-500" />
              Finalizacja Zamówienia
            </h3>
            <button @click="isCheckoutModalOpen = false" class="text-slate-400 hover:text-slate-700">
              <X class="w-5 h-5" />
            </button>
          </div>

          <form @submit.prevent="completeOrder" class="space-y-4 text-xs sm:text-sm">
            <div class="space-y-1">
              <label class="font-bold text-slate-700">Imię i nazwisko</label>
              <input v-model="orderForm.name" type="text" required placeholder="Jan Kowalski" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-emerald-500" />
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div class="space-y-1">
                <label class="font-bold text-slate-700">Telefon</label>
                <input v-model="orderForm.phone" type="tel" required placeholder="+48 123 456 789" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-emerald-500" />
              </div>
              <div class="space-y-1">
                <label class="font-bold text-slate-700">Adres dostawy</label>
                <input v-model="orderForm.address" type="text" required placeholder="ul. Kwiatowa 5/12" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-none focus:border-emerald-500" />
              </div>
            </div>

            <div class="space-y-1">
              <label class="font-bold text-slate-700">Metoda płatności</label>
              <div class="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  @click="orderForm.payment = 'blik'"
                  class="p-2.5 rounded-xl border text-center font-bold text-xs transition cursor-pointer"
                  :class="orderForm.payment === 'blik' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-200 text-slate-600'"
                >
                  ⚡ BLIK
                </button>
                <button
                  type="button"
                  @click="orderForm.payment = 'card'"
                  class="p-2.5 rounded-xl border text-center font-bold text-xs transition cursor-pointer"
                  :class="orderForm.payment === 'card' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-200 text-slate-600'"
                >
                  💳 Karta / Apple
                </button>
                <button
                  type="button"
                  @click="orderForm.payment = 'cash'"
                  class="p-2.5 rounded-xl border text-center font-bold text-xs transition cursor-pointer"
                  :class="orderForm.payment === 'cash' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-200 text-slate-600'"
                >
                  💵 Przy odbiorze
                </button>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex justify-between items-center text-sm">
              <span class="text-slate-600">Łącznie do zapłaty:</span>
              <span class="text-xl font-black text-emerald-600 font-display">{{ totalPrice.toFixed(2) }} zł</span>
            </div>

            <button
              type="submit"
              class="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-xl shadow-emerald-600/25 transition cursor-pointer"
            >
              Potwierdź i Zapłać ({{ totalPrice.toFixed(2) }} zł)
            </button>
          </form>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ShoppingBag, X, Trash2, ArrowRight, CheckCircle } from 'lucide-vue-next'
import { useCart } from '../composables/useCart'
import { useToast } from '../composables/useToast'
import { useConfetti } from '../composables/useConfetti'

const {
  isCartOpen,
  items,
  closeCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  totalItemsCount,
  subtotal,
  freeShippingProgress,
  amountNeededForFreeShipping,
  shippingCost,
  discountAmount,
  discountCode,
  appliedDiscount,
  totalPrice,
  applyPromoCode
} = useCart()

const { showToast } = useToast()
const { launchCelebration } = useConfetti()

const promoInput = ref('')
const isCheckoutModalOpen = ref(false)

const orderForm = reactive({
  name: '',
  phone: '',
  address: '',
  payment: 'blik'
})

const handleApplyCode = () => {
  if (!promoInput.value) return
  const result = applyPromoCode(promoInput.value)
  showToast(
    result.success ? 'Rabat naliczony!' : 'Uwaga',
    result.message,
    result.success ? 'success' : 'error'
  )
  if (result.success) {
    promoInput.value = ''
    launchCelebration()
  }
}

const completeOrder = () => {
  launchCelebration()
  showToast(
    'Zamówienie przyjęte do realizacji!',
    `Dziękujemy ${orderForm.name}! Twoje smoothie zostanie dostarczone w 30-40 minut na adres: ${orderForm.address}.`,
    'success',
    6000
  )
  clearCart()
  isCheckoutModalOpen.value = false
  closeCart()
}
</script>
