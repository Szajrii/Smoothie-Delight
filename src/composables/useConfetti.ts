import confetti from 'canvas-confetti'

export function useConfetti() {
  const launchCelebration = () => {
    try {
      // First burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#f43f5e', '#f59e0b', '#8b5cf6', '#3b82f6']
      })

      // Secondary bursts for rich effect
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        })
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        })
      }, 250)
    } catch {
      // fallback if canvas not supported
    }
  }

  return {
    launchCelebration
  }
}
