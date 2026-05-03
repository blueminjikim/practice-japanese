import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgressStore } from '../../stores/progressStore'
import { scenarios } from '../../data'
import type { Scenario } from '../../data'
import resImg from '../../assets/res 1.png'
import hotelImg from '../../assets/hotel 1.png'
import shoppingImg from '../../assets/shopping 1.png'
import anime1Img from '../../assets/anime1.png'
import anime2Img from '../../assets/anime2.png'

const themeIcon: Record<string, string> = {
  restaurant: resImg,
  hotel: hotelImg,
  shopping: shoppingImg,
  anime: anime1Img,
  anime_mid: anime2Img,
}

const LEVELS = [
  { key: 'beginner' as const,     label: '아직 한국인', disabled: false },
  { key: 'intermediate' as const, label: '조금 일본인', disabled: false },
  { key: 'advanced' as const,     label: '완전 일본인', disabled: true  },
]

function ScenarioCard({ scenario }: { scenario: Scenario }) {
  const { completedScenarios, scenarioProgress, resetScenario } = useProgressStore()
  const navigate = useNavigate()

  const isDone = completedScenarios.includes(scenario.id)
  const progress = scenarioProgress[scenario.id] ?? 0
  const isInProgress = !isDone && progress > 0
  const expressionCount = scenario.steps.reduce((acc, s) => acc + s.expressions.length, 0)

  return (
    <div className="bg-gray-50 rounded-3xl p-5">
      <button
        onClick={() => navigate(`/lesson/${scenario.id}`)}
        className="flex items-center gap-4 w-full text-left active:scale-[0.97] transition-transform duration-150"
      >
        {(() => {
          const iconKey = themeIcon[scenario.id] ? scenario.id : scenario.id.replace('_mid', '')
          return themeIcon[iconKey]
            ? <img src={themeIcon[iconKey]} className="w-12 h-12 rounded-2xl object-cover" />
            : <span className="text-4xl">{scenario.emoji}</span>
        })()}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 tracking-tight">{scenario.title}</p>
          <p className="text-sm text-gray-400 mt-0.5">{expressionCount}개 표현</p>
          {isInProgress && (
            <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-black rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
        {!isDone && !isInProgress && (
          <span className="flex-shrink-0 text-xs text-gray-400 bg-white border border-gray-100 px-3 py-1.5 rounded-full">시작</span>
        )}
        {isDone && (
          <span className="flex-shrink-0 text-xs font-medium text-gray-500">완료 ✓</span>
        )}
      </button>

      {isDone && (
        <button
          onClick={() => { resetScenario(scenario.id); navigate(`/lesson/${scenario.id}`) }}
          className="mt-3 w-full text-xs text-gray-400 bg-white border border-gray-100 rounded-2xl py-2.5 active:scale-[0.98] transition-transform duration-150"
        >
          다시하기
        </button>
      )}
    </div>
  )
}

export default function LearnPage() {
  const [activeLevel, setActiveLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner')

  return (
    <div className="px-5 pt-12 pb-6 flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">니혼진처럼</h1>
        <p className="text-sm text-gray-400 mt-0.5">쓰거나 읽지 못해도 상관없어요. <br/>바로 말하는 실전 압축 여행 · 애니 일본어</p>
      </div>

      <div className="flex gap-1 bg-gray-100 rounded-2xl p-1">
        {LEVELS.map(({ key, label, disabled }) => (
          <button
            key={key}
            onClick={() => !disabled && setActiveLevel(key)}
            disabled={disabled}
            className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeLevel === key
                ? 'bg-white text-gray-900 shadow-sm'
                : disabled
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-gray-400 active:scale-[0.96]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {scenarios
          .filter((s) => s.level === activeLevel)
          .map((scenario) => (
            <ScenarioCard key={scenario.id} scenario={scenario} />
          ))}
      </div>
    </div>
  )
}
