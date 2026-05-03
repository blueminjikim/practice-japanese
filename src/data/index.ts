import { restaurant } from './restaurant'
import { hotel } from './hotel'
import { shopping } from './shopping'
import { anime } from './anime'
import { restaurant_mid } from './restaurant_mid'
import { hotel_mid } from './hotel_mid'
import { shopping_mid } from './shopping_mid'
import { anime_mid } from './anime_mid'
import type { Scenario } from './types'

export const scenarios: Scenario[] = [
  restaurant, hotel, shopping, anime,
  restaurant_mid, hotel_mid, shopping_mid, anime_mid,
]

export function getScenario(id: string): Scenario | undefined {
  return scenarios.find((s) => s.id === id)
}

export * from './types'
