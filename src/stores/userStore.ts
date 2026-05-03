import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Level = 'beginner' | 'intermediate' | 'advanced'

interface UserStore {
  hasOnboarded: boolean
  defaultLevel: Level
  setOnboarded: (level: Level) => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      hasOnboarded: false,
      defaultLevel: 'beginner',
      setOnboarded: (level) => set({ hasOnboarded: true, defaultLevel: level }),
    }),
    { name: 'tabigo-user' }
  )
)
