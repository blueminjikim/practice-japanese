import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../../stores/userStore'

type Level = 'beginner' | 'intermediate'

const LEVELS: { key: Level; title: string; desc: string }[] = [
  { key: 'beginner',     title: 'Lv. 아직 한국인',  desc: '일본어 처음이거나 기초부터' },
  { key: 'intermediate', title: 'Lv. 조금 일본인', desc: '기본은 알고 실전을 원한다면' },
]

export default function OnboardingPage() {
  const { setOnboarded } = useUserStore()
  const navigate = useNavigate()
  const [step, setStep] = useState<'welcome' | 'level'>('welcome')
  const [selected, setSelected] = useState<Level>('beginner')

  const handleFinish = () => {
    setOnboarded(selected)
    navigate('/learn')
  }

  if (step === 'level') {
    return (
      <div className="min-h-dvh bg-white flex flex-col px-6">
        <div className="flex flex-col flex-1 justify-center gap-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">내 일본어 레벨은?</h1>
            <p className="text-sm text-gray-400 mt-2">나중에 언제든 바꿀 수 있어요</p>
          </div>

          <div className="flex flex-col gap-3">
            {LEVELS.map(({ key, title, desc }) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`w-full rounded-2xl p-5 text-left border transition-all duration-150 active:scale-[0.98] ${
                  selected === key
                    ? 'border-gray-400 bg-white text-gray-900'
                    : 'border-gray-100 bg-gray-50 text-gray-900'
                }`}
              >
                <p className="font-semibold">{title}</p>
                <p className="text-sm mt-0.5 text-gray-400">{desc}</p>
              </button>
            ))}
          </div>

          <button
            onClick={handleFinish}
            className="w-full bg-black text-white rounded-2xl py-4 font-medium text-base"
          >
            시작하기
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-dvh bg-white flex flex-col px-6">
      <div className="flex flex-col flex-1 justify-center items-center text-center gap-6">
        <img src="/favicon.png" className="w-20 h-20 rounded-3xl" />
        <h1 className="text-2xl font-bold text-gray-900 leading-snug">
          읽고 쓸줄 몰라도 돼요<br />여행 전 꼭 필요한 일본어만
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          식당, 숙소, 쇼핑 — 반드시 마주치는 3가지 상황을<br />간단하게 준비하세요. 애니메이션은 덤이에요!
        </p>
        <button
          onClick={() => setStep('level')}
          className="w-full bg-black text-white rounded-2xl py-4 font-medium text-base mt-4"
        >
          다음
        </button>
      </div>
    </div>
  )
}
