export interface Chunk {
  ja: string
  ko_pron: string
  ko: string
}

export interface Assembly {
  ja: string
  ko: string
  chunks: Chunk[]
}

export interface Expression {
  id: string
  scenario: 'restaurant' | 'hotel' | 'shopping' | 'anime'
  step: string
  ja: string
  ko_pron: string
  ko: string
  chunks: Chunk[]
  assembly?: Assembly
  distractors: Chunk[]
  tip?: string
  tags: string[]
}

export interface ScenarioStep {
  id: string
  label: string
  expressions: Expression[]
}

export interface Scenario {
  id: string
  level: 'beginner' | 'intermediate'
  title: string
  emoji: string
  steps: ScenarioStep[]
}
