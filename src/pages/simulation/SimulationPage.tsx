export default function SimulationPage() {
  return (
    <div className="px-5 pt-12 pb-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-900">시뮬레이션</h1>
      <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
        <span className="text-5xl">💬</span>
        <p className="font-medium text-gray-900">준비 중이에요</p>
        <p className="text-sm text-gray-400">
          학습 단계를 먼저 완료하면<br />채팅 시뮬레이션이 열려요
        </p>
      </div>
    </div>
  )
}
