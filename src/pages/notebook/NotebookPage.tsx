import { useState } from 'react'
import { useProgressStore } from '../../stores/progressStore'
import { SpeakButton } from '../../components/SpeakButton'
import { scenarios } from '../../data'
import type { Expression } from '../../data/types'

export default function NotebookPage() {
  const { weakExpressions, completedScenarios, scenarioProgress } = useProgressStore()
  const [selected, setSelected] = useState<Expression | null>(null)

  const allExpressions: Expression[] = scenarios.flatMap((s) =>
    s.steps.flatMap((step) => step.expressions)
  )

  const touchedIds = new Set([
    ...completedScenarios,
    ...Object.entries(scenarioProgress).filter(([, v]) => v > 0).map(([k]) => k),
  ])

  const learned = allExpressions.filter((e) =>
    scenarios.some((s) =>
      touchedIds.has(s.id) && s.steps.some((step) => step.expressions.some((ex) => ex.id === e.id))
    )
  )

  const weak = allExpressions.filter((e) => weakExpressions.includes(e.id))

  return (
    <div className="px-5 pt-12 pb-6 flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-gray-900">단어장</h1>

      {weak.length > 0 && (
        <section>
          <p className="text-xs text-gray-400 mb-3 font-medium">약점 표현 ({weak.length})</p>
          <div className="flex flex-col gap-2">
            {weak.map((expr) => (
              <ExprRow key={expr.id} expr={expr} isWeak onTap={() => setSelected(expr)} />
            ))}
          </div>
        </section>
      )}

      <section>
        <p className="text-xs text-gray-400 mb-3 font-medium">학습한 표현 ({learned.length})</p>
        {learned.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-8">아직 학습한 표현이 없어요</p>
        ) : (
          <div className="flex flex-col gap-2">
            {learned.map((expr) => (
              <ExprRow key={expr.id} expr={expr} onTap={() => setSelected(expr)} />
            ))}
          </div>
        )}
      </section>

      {selected && (
        <ExprDetail expr={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}

function ExprRow({ expr, isWeak, onTap }: { expr: Expression; isWeak?: boolean; onTap: () => void }) {
  return (
    <button
      onClick={onTap}
      className={`rounded-2xl p-4 w-full text-left active:scale-[0.98] transition-transform duration-150 ${isWeak ? 'bg-red-50' : 'bg-gray-50'}`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="font-medium text-gray-900 text-sm">{expr.ja}</p>
          <p className="text-xs text-gray-500 mt-0.5">{expr.ko_pron}</p>
        </div>
        <p className="text-sm text-gray-500">{expr.ko}</p>
      </div>
    </button>
  )
}

function ExprDetail({ expr, onClose }: { expr: Expression; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative w-full max-w-[430px] px-4 pb-4" style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}>
        <div
          className="rounded-3xl pt-3 px-6 pb-6 flex flex-col gap-4 border border-white/40"
          style={{ backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', backgroundColor: 'rgba(255,255,255,0.75)' }}
          onClick={(e) => e.stopPropagation()}
        >
        <div className="w-8 h-1 bg-gray-400/40 rounded-full mx-auto" />

        <div className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-medium text-gray-900">{expr.ja}</p>
            <SpeakButton text={expr.ja} />
          </div>
          <p className="text-lg text-gray-500">{expr.ko_pron}</p>
          <p className="text-sm text-gray-400">{expr.ko}</p>
        </div>

        {expr.chunks.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {expr.chunks.map((chunk, i) => (
              <div key={i} className="bg-gray-100 rounded-xl px-3 py-2 text-center">
                <p className="text-sm font-medium text-gray-800">{chunk.ja}</p>
                <p className="text-xs text-gray-400 mt-0.5">{chunk.ko_pron}</p>
                <p className="text-xs text-gray-500">{chunk.ko}</p>
              </div>
            ))}
          </div>
        )}

        {expr.tip && (
          <p className="text-xs text-gray-400 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
            💡 {expr.tip}
          </p>
        )}
        </div>
      </div>
    </div>
  )
}
