import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { SpeakButton } from '../../components/SpeakButton'
import { getScenario } from '../../data'
import { useProgressStore } from '../../stores/progressStore'
import type { Expression } from '../../data/types'

type Phase =
  | { kind: 'expose'; idx: number }
  | { kind: 'meaning'; idx: number }
  | { kind: 'assemble'; idx: number }
  | { kind: 'result' }

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

// 콘텐츠만 렌더링 — 버튼은 부모(LessonPage)가 담당
function ExposeContent({ expr, total, current }: {
  expr: Expression
  total: number
  current: number
}) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-xs text-gray-400 text-center">{current + 1} / {total}</p>
      <div className="bg-gray-50 rounded-3xl p-8 flex flex-col items-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <p className="text-2xl font-medium text-gray-900">{expr.ja}</p>
          <SpeakButton text={expr.ja} />
        </div>
        <p className="text-xl text-gray-500">{expr.ko_pron}</p>
        <p className="text-sm text-gray-400">{expr.ko}</p>
        {expr.tip && (
          <p className="text-xs text-gray-400 mt-2 bg-white rounded-xl px-3 py-2 border border-gray-100">
            💡 {expr.tip}
          </p>
        )}
      </div>
    </div>
  )
}

function MeaningContent({ expr, allExpressions, onAnswer }: {
  expr: Expression
  allExpressions: Expression[]
  onAnswer: (correct: boolean) => void
}) {
  type Option = { id: string; ko: string }
  const [correctSelected, setCorrectSelected] = useState(false)
  const [wrongKos, setWrongKos] = useState<string[]>([])
  const [options] = useState<Option[]>(() => {
    const correct: Option = { id: expr.id, ko: expr.ko }
    if (expr.distractors.length >= 3) {
      return shuffle([correct, ...expr.distractors.slice(0, 3).map((d, i) => ({ id: `d${i}`, ko: d.ko }))])
    }
    return shuffle([correct, ...allExpressions.filter((e) => e.id !== expr.id).slice(0, 3).map(e => ({ id: e.id, ko: e.ko }))])
  })

  const handleSelect = (ko: string) => {
    if (correctSelected || wrongKos.includes(ko)) return
    if (ko === expr.ko) {
      setCorrectSelected(true)
      setTimeout(() => onAnswer(true), 700)
    } else {
      setWrongKos((p) => [...p, ko])
      onAnswer(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <p className="text-xs text-gray-400 mb-3">무슨 뜻인가요?</p>
        <p className="text-3xl font-medium text-gray-900">{expr.ko_pron}</p>
        <div className="flex items-center justify-center gap-1.5 mt-1">
          <p className="text-sm text-gray-500">{expr.ja}</p>
          <SpeakButton text={expr.ja} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => handleSelect(opt.ko)}
            className={`rounded-2xl p-4 text-sm font-medium text-center border-2 transition-all duration-200 ${
              opt.ko === expr.ko && correctSelected
                ? 'border-emerald-500 bg-emerald-500 text-white scale-[1.03]'
                : wrongKos.includes(opt.ko)
                ? 'border-red-200 bg-red-50 text-red-400 opacity-50'
                : correctSelected
                ? 'border-gray-100 bg-gray-50 text-gray-400'
                : 'border-gray-100 bg-gray-50 text-gray-900'
            }`}
          >
            {opt.ko}
          </button>
        ))}
      </div>
    </div>
  )
}

function AssemblyContent({ expr, onAnswer, onReadyChange }: {
  expr: Expression
  onAnswer: (correct: boolean) => void
  onReadyChange: (ready: boolean) => void
}) {
  const target = expr.assembly ?? { ja: expr.ja, ko: expr.ko, chunks: expr.chunks }

  const [selected, setSelected] = useState<number[]>([])
  const [shuffledChunks] = useState(() =>
    shuffle(target.chunks.map((c, i) => ({ ...c, origIdx: i })))
  )
  const [isWrong, setIsWrong] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const addChunk = (idx: number) => {
    if (selected.includes(idx)) return
    const next = [...selected, idx]
    setSelected(next)
    setIsWrong(false)
    onReadyChange(next.length === target.chunks.length)
  }

  const removeChunk = (pos: number) => {
    const next = selected.filter((_, i) => i !== pos)
    setSelected(next)
    setIsWrong(false)
    onReadyChange(next.length === target.chunks.length)
  }

  const submit = () => {
    if (selected.length !== target.chunks.length) return
    const correct = selected.every((idx, i) => shuffledChunks[idx].origIdx === i)
    if (correct) {
      setIsCorrect(true)
      setTimeout(() => onAnswer(true), 600)
    } else {
      setIsWrong(true)
    }
  }

  ;(window as any).__assemblySubmit = submit

  return (
    <div className="flex flex-col gap-5">
      <div className="text-center">
        <p className="text-xs text-gray-400 mb-3">순서대로 탭해서 만들어보세요</p>
        <p className="text-xl font-medium text-gray-900">{target.ko}</p>
      </div>

      <div className={`min-h-20 rounded-2xl px-3 py-2 flex items-center gap-2 flex-wrap transition-colors duration-200 ${
        isCorrect ? 'bg-emerald-50' : isWrong ? 'bg-red-50' : 'bg-gray-50'
      }`}>
        {selected.length === 0 ? (
          <p className="text-sm text-gray-300 w-full text-center py-3">아래 카드를 순서대로 탭하세요</p>
        ) : (
          <>
            {selected.map((idx, pos) => (
              <div
                key={pos}
                className={`flex-shrink-0 rounded-xl px-3 py-2 text-sm font-medium flex items-center gap-1.5 ${
                  isCorrect ? 'bg-emerald-500 text-white' : isWrong ? 'bg-red-100 text-red-600' : 'bg-black text-white'
                }`}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <span>{shuffledChunks[idx].ja}</span>
                  <span className={`text-xs ${isCorrect ? 'text-emerald-100' : isWrong ? 'text-red-400' : 'text-gray-400'}`}>{shuffledChunks[idx].ko_pron}</span>
                </div>
                {!isCorrect && (
                  <button
                    onClick={() => removeChunk(pos)}
                    className={`text-xs leading-none opacity-60 active:opacity-100 ${isWrong ? 'text-red-400' : 'text-gray-400'}`}
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            {isCorrect && <p className="w-full text-xs text-emerald-600 text-center pt-1 font-medium">정답!</p>}
            {isWrong && (
              <p className="w-full text-xs text-red-400 text-center pt-1">순서가 틀렸어요. X를 눌러 다시 맞춰보세요</p>
            )}
          </>
        )}
      </div>

      <div className="min-h-20 flex items-center gap-2 flex-wrap content-center">
        {shuffledChunks.map((chunk, idx) => (
          <button
            key={idx}
            onClick={() => addChunk(idx)}
            disabled={selected.includes(idx)}
            className={`rounded-xl px-3 py-2 text-sm font-medium flex flex-col items-center gap-0.5 border-2 transition-opacity ${
              selected.includes(idx)
                ? 'opacity-25 border-gray-100 bg-gray-50 text-gray-400'
                : 'border-gray-200 bg-white text-gray-900 active:scale-95'
            }`}
          >
            <span>{chunk.ja}</span>
            <span className="text-xs text-gray-400">{chunk.ko_pron}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function LessonPage() {
  const { scenarioId } = useParams()
  const navigate = useNavigate()
  const { markScenarioComplete, addWeakExpression, removeWeakExpression, addPassportStamp, setScenarioProgress, clearScenarioProgress } = useProgressStore()

  const scenario = getScenario(scenarioId!)
  const expressions = scenario?.steps.flatMap((s) => s.expressions) ?? []

  const [phase, setPhase] = useState<Phase>({ kind: 'expose', idx: 0 })
  const [wrongIds, setWrongIds] = useState<string[]>([])
  const [assemblyReady, setAssemblyReady] = useState(false)

  if (!scenario || expressions.length === 0) {
    navigate('/learn')
    return null
  }

  const N = expressions.length
  const quizStep =
    phase.kind === 'meaning'  ? phase.idx * 2 :
    phase.kind === 'assemble' ? phase.idx * 2 + 1 :
    phase.kind === 'result'   ? N * 2 : 0
  const progressPercent = Math.round((quizStep / (N * 2)) * 100)

  const advance = () => {
    setAssemblyReady(false)
    if (phase.kind === 'expose') {
      if (phase.idx < N - 1) setPhase({ kind: 'expose', idx: phase.idx + 1 })
      else setPhase({ kind: 'meaning', idx: 0 })
    } else if (phase.kind === 'meaning') {
      setPhase({ kind: 'assemble', idx: phase.idx })
    } else if (phase.kind === 'assemble') {
      if (phase.idx < N - 1) setPhase({ kind: 'meaning', idx: phase.idx + 1 })
      else setPhase({ kind: 'result' })
    }
  }

  const handleMeaningAnswer = (correct: boolean) => {
    if (phase.kind !== 'meaning') return
    if (!correct) {
      setWrongIds((p) => p.includes(expressions[phase.idx].id) ? p : [...p, expressions[phase.idx].id])
      return
    }
    advance()
  }

  const handleAssemblyAnswer = (correct: boolean) => {
    if (phase.kind !== 'assemble') return
    const expr = expressions[phase.idx]
    if (!correct) {
      addWeakExpression(expr.id)
      setWrongIds((p) => p.includes(expr.id) ? p : [...p, expr.id])
    } else {
      removeWeakExpression(expr.id)
    }
    advance()
  }

  const handleExit = () => {
    if (phase.kind !== 'result') setScenarioProgress(scenario.id, progressPercent)
    navigate('/learn')
  }

  const handleFinish = () => {
    markScenarioComplete(scenario.id)
    clearScenarioProgress(scenario.id)
    addPassportStamp(scenario.id)
    navigate('/learn')
  }

  const phaseKey =
    phase.kind === 'expose' ? `expose-${phase.idx}` :
    phase.kind === 'meaning' ? `meaning-${phase.idx}` :
    phase.kind === 'assemble' ? `assemble-${phase.idx}` : 'result'

  // 하단 CTA 버튼 결정
  const renderCTA = () => {
    if (phase.kind === 'expose') {
      return (
        <div className="flex flex-col gap-2">
          <button
            onClick={advance}
            className="w-full bg-black text-white rounded-2xl py-4 font-semibold tracking-tight active:scale-[0.97] transition-transform duration-150"
          >
            {phase.idx < N - 1 ? '다음' : '퀴즈 시작'}
          </button>
          <button
            onClick={() => { setAssemblyReady(false); setPhase({ kind: 'meaning', idx: 0 }) }}
            className="w-full text-gray-400 text-sm py-3 active:scale-[0.97] transition-transform duration-150"
          >
            바로 퀴즈 시작하기
          </button>
        </div>
      )
    }
    if (phase.kind === 'assemble') {
      return (
        <button
          onClick={() => (window as any).__assemblySubmit?.()}
          disabled={!assemblyReady}
          className="w-full bg-black text-white rounded-2xl py-4 font-semibold tracking-tight disabled:opacity-30 active:scale-[0.97] transition-transform duration-150"
        >
          확인
        </button>
      )
    }
    if (phase.kind === 'result') {
      return (
        <button
          onClick={handleFinish}
          className="w-full bg-black text-white rounded-2xl py-4 font-semibold tracking-tight active:scale-[0.97] transition-transform duration-150"
        >
          완료
        </button>
      )
    }
    return null
  }

  return (
    <div className="min-h-dvh bg-white flex flex-col">
      {/* 헤더 */}
      <div className="px-5 pt-12 pb-4">
        <div className="flex items-center gap-3">
          <button onClick={handleExit} className="text-gray-400 w-8 flex-shrink-0 flex items-center">
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          {phase.kind === 'expose' ? (
            <p className="flex-1 text-sm font-medium text-gray-500 text-center">표현 미리 공부하기</p>
          ) : phase.kind !== 'result' ? (
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-black rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          ) : (
            <div className="flex-1" />
          )}
          <div className="w-8 flex-shrink-0" />
        </div>
      </div>

      {/* 스크롤 가능한 콘텐츠 */}
      <div className="flex-1 overflow-y-auto px-5 pt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={phaseKey}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.15 }}
          >
            {phase.kind === 'expose' && (
              <ExposeContent
                expr={expressions[phase.idx]}
                total={N}
                current={phase.idx}
              />
            )}
            {phase.kind === 'meaning' && (
              <MeaningContent
                expr={expressions[phase.idx]}
                allExpressions={expressions}
                onAnswer={handleMeaningAnswer}
              />
            )}
            {phase.kind === 'assemble' && (
              <AssemblyContent
                key={`assembly-${phase.idx}`}
                expr={expressions[phase.idx]}
                onAnswer={handleAssemblyAnswer}
                onReadyChange={setAssemblyReady}
              />
            )}
            {phase.kind === 'result' && (
              <div className="flex flex-col items-center gap-6 pt-8 pb-4 text-center">
                <motion.div
                  className="text-6xl"
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.05 }}
                >
                  {wrongIds.length === 0 ? '🎉' : '👍'}
                </motion.div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 tracking-tight">
                    {wrongIds.length === 0 ? '완벽해요!' : '잘 했어요!'}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {N}개 표현 완료
                    {wrongIds.length > 0 && ` · ${wrongIds.length}개 약점 저장됨`}
                  </p>
                </div>
                {wrongIds.length > 0 && (
                  <div className="w-full bg-gray-50 rounded-2xl p-4 text-left">
                    <p className="text-xs text-gray-400 mb-2">약점으로 저장됨</p>
                    {expressions
                      .filter((e) => wrongIds.includes(e.id))
                      .map((e) => (
                        <div key={e.id} className="flex justify-between py-1.5 border-b border-gray-100 last:border-0">
                          <span className="text-sm text-gray-900">{e.ko_pron}</span>
                          <span className="text-sm text-gray-400">{e.ko}</span>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 항상 하단 고정 CTA */}
      <div className="px-5 pt-3 pb-safe-8 bg-white">
        {renderCTA()}
      </div>
    </div>
  )
}
