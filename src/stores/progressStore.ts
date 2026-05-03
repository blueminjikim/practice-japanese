import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ProgressStore {
  completedScenarios: string[]
  scenarioProgress: Record<string, number>  // scenarioId → 0~100
  weakExpressions: string[]
  passportStamps: string[]
  markScenarioComplete: (scenarioId: string) => void
  setScenarioProgress: (scenarioId: string, percent: number) => void
  clearScenarioProgress: (scenarioId: string) => void
  resetScenario: (scenarioId: string) => void
  addWeakExpression: (id: string) => void
  removeWeakExpression: (id: string) => void
  addPassportStamp: (scenarioId: string) => void
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set) => ({
      completedScenarios: [],
      scenarioProgress: {},
      weakExpressions: [],
      passportStamps: [],
      markScenarioComplete: (scenarioId) =>
        set((s) => ({
          completedScenarios: s.completedScenarios.includes(scenarioId)
            ? s.completedScenarios
            : [...s.completedScenarios, scenarioId],
        })),
      setScenarioProgress: (scenarioId, percent) =>
        set((s) => ({ scenarioProgress: { ...s.scenarioProgress, [scenarioId]: percent } })),
      clearScenarioProgress: (scenarioId) =>
        set((s) => {
          const next = { ...s.scenarioProgress }
          delete next[scenarioId]
          return { scenarioProgress: next }
        }),
      addWeakExpression: (id) =>
        set((s) => ({
          weakExpressions: s.weakExpressions.includes(id)
            ? s.weakExpressions
            : [...s.weakExpressions, id],
        })),
      removeWeakExpression: (id) =>
        set((s) => ({ weakExpressions: s.weakExpressions.filter((e) => e !== id) })),
      resetScenario: (scenarioId) =>
        set((s) => {
          const next = { ...s.scenarioProgress }
          delete next[scenarioId]
          return {
            completedScenarios: s.completedScenarios.filter((id) => id !== scenarioId),
            passportStamps: s.passportStamps.filter((id) => id !== scenarioId),
            scenarioProgress: next,
          }
        }),
      addPassportStamp: (scenarioId) =>
        set((s) => ({
          passportStamps: s.passportStamps.includes(scenarioId)
            ? s.passportStamps
            : [...s.passportStamps, scenarioId],
        })),
    }),
    { name: 'tabigo-progress' }
  )
)
