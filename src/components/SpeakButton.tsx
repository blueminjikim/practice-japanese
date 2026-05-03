import { useState } from 'react'
import { SpeakerWaveIcon } from '@heroicons/react/24/outline'
import { SpeakerWaveIcon as SpeakerWaveSolid } from '@heroicons/react/24/solid'

function getJaVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices()
  const ja = voices.filter(v => v.lang.startsWith('ja'))
  return ja.find(v => v.name.startsWith('Google')) ?? ja[0] ?? null
}

export function SpeakButton({ text }: { text: string }) {
  const [playing, setPlaying] = useState(false)

  const handle = () => {
    const synth = window.speechSynthesis
    if (!synth) return

    if (synth.speaking || synth.pending) {
      synth.cancel()
      setPlaying(false)
      return
    }

    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'ja-JP'
    u.rate = 0.85
    const voice = getJaVoice()
    if (voice) u.voice = voice

    let t: ReturnType<typeof setInterval> | null = null
    u.onstart = () => setPlaying(true)
    u.onend   = () => { if (t) clearInterval(t); setPlaying(false) }
    u.onerror = () => { if (t) clearInterval(t); setPlaying(false) }

    synth.speak(u)

    // iOS Safari: prevent auto-pause mid-speech
    t = setInterval(() => {
      if (!synth.speaking) { if (t) { clearInterval(t); t = null } return }
      if (synth.paused) synth.resume()
    }, 250)
  }

  return (
    <button
      onClick={handle}
      className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors active:scale-90 ${
        playing ? 'text-black bg-gray-100' : 'text-gray-400 bg-transparent'
      }`}
    >
      {playing
        ? <SpeakerWaveSolid className="w-4 h-4" />
        : <SpeakerWaveIcon className="w-4 h-4" />}
    </button>
  )
}
