import { useNavigate } from 'react-router-dom'
import { useUserStore } from '../../stores/userStore'

export default function OnboardingPage() {
  const { setOnboarded } = useUserStore()
  const navigate = useNavigate()

  const handleStart = () => {
    setOnboarded()
    navigate('/learn')
  }

  return (
    <div className="min-h-dvh bg-white flex flex-col px-6">
      <div className="flex flex-col flex-1 justify-center items-center text-center gap-6">
        <div className="text-6xl">✈️</div>
        <h1 className="text-2xl font-bold text-gray-900 leading-snug">
          일본 여행 전<br />딱 필요한 일본어만
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          식당, 숙소, 쇼핑 — 반드시 마주치는 3가지 상황을<br />매일 5분으로 준비하세요.
        </p>
        <button
          onClick={handleStart}
          className="w-full bg-black text-white rounded-2xl py-4 font-medium text-base mt-4"
        >
          시작하기
        </button>
      </div>
    </div>
  )
}
