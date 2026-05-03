import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import OnboardingPage from './pages/onboarding/OnboardingPage'
import LearnPage from './pages/lesson/LearnPage'
import LessonPage from './pages/lesson/LessonPage'
import NotebookPage from './pages/notebook/NotebookPage'
import BottomNav from './components/BottomNav'
import { useUserStore } from './stores/userStore'

function AppLayout() {
  const { pathname } = useLocation()
  const isLesson = pathname.startsWith('/lesson/')

  return (
    <div className="flex flex-col min-h-dvh bg-white">
      <div className={`flex-1 overflow-y-auto ${isLesson ? '' : 'pb-28'}`}>
        <Routes>
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/lesson/:scenarioId" element={<LessonPage />} />
          <Route path="/notebook" element={<NotebookPage />} />
          <Route path="*" element={<Navigate to="/learn" replace />} />
        </Routes>
      </div>
      {!isLesson && <BottomNav />}
    </div>
  )
}

export default function App() {
  const { hasOnboarded } = useUserStore()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/onboarding/*" element={<OnboardingPage />} />
        <Route
          path="/*"
          element={hasOnboarded ? <AppLayout /> : <Navigate to="/onboarding" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}
