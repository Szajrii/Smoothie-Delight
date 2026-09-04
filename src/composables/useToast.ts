import { ref } from 'vue'
import type { ToastNotification } from '../types'

const toasts = ref<ToastNotification[]>([])

export function useToast() {
  const showToast = (title: string, message: string, type: 'success' | 'error' | 'info' = 'success', duration = 3500) => {
    const id = 'toast_' + Date.now() + '_' + Math.random().toString(36).substring(2, 5)
    const toast: ToastNotification = { id, title, message, type }
    toasts.value.push(toast)

    setTimeout(() => {
      removeToast(id)
    }, duration)
  }

  const removeToast = (id: string) => {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }

  return {
    toasts,
    showToast,
    removeToast
  }
}
