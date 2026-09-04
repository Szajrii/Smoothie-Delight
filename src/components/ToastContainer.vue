<template>
  <div class="fixed top-20 right-4 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0">
    <TransitionGroup
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="pointer-events-auto flex items-start gap-3 p-4 rounded-2xl shadow-xl border bg-white/95 backdrop-blur-md transition-all"
        :class="{
          'border-emerald-200 text-emerald-950': toast.type === 'success',
          'border-rose-200 text-rose-950': toast.type === 'error',
          'border-blue-200 text-blue-950': toast.type === 'info'
        }"
      >
        <div
          class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
          :class="{
            'bg-emerald-100 text-emerald-600': toast.type === 'success',
            'bg-rose-100 text-rose-600': toast.type === 'error',
            'bg-blue-100 text-blue-600': toast.type === 'info'
          }"
        >
          <CheckCircle v-if="toast.type === 'success'" class="w-5 h-5" />
          <AlertCircle v-else-if="toast.type === 'error'" class="w-5 h-5" />
          <Info v-else class="w-5 h-5" />
        </div>

        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-bold">{{ toast.title }}</h4>
          <p class="text-xs text-slate-600 mt-0.5 leading-relaxed">{{ toast.message }}</p>
        </div>

        <button
          @click="removeToast(toast.id)"
          class="text-slate-400 hover:text-slate-600 p-1 rounded-lg transition"
        >
          <X class="w-4 h-4" />
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '../composables/useToast'
import { CheckCircle, AlertCircle, Info, X } from 'lucide-vue-next'

const { toasts, removeToast } = useToast()
</script>
