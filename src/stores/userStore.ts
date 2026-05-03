import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserStore {
  hasOnboarded: boolean
  setOnboarded: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      hasOnboarded: false,
      setOnboarded: () => set({ hasOnboarded: true }),
    }),
    { name: 'tabigo-user' }
  )
)
