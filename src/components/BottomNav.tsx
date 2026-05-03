import { NavLink } from 'react-router-dom'
import { HomeIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { HomeIcon as HomeSolid, BookOpenIcon as BookOpenSolid } from '@heroicons/react/24/solid'

const tabs = [
  { to: '/learn', label: '홈', Icon: HomeIcon, IconActive: HomeSolid },
  { to: '/notebook', label: '내 단어장', Icon: BookOpenIcon, IconActive: BookOpenSolid },
]

export default function BottomNav() {
  return (
    <div
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 flex justify-center"
      style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
    >
      <nav className="bg-white rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex items-center p-1.5 gap-1">
        {tabs.map(({ to, label, Icon, IconActive }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `w-24 flex flex-col items-center justify-center py-2 rounded-full gap-0.5 text-xs font-medium transition-all duration-200 active:scale-95 ${
                isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-400'
              }`
            }
          >
            {({ isActive }) => {
              const I = isActive ? IconActive : Icon
              return (
                <>
                  <I className="w-5 h-5" />
                  <span>{label}</span>
                </>
              )
            }}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
