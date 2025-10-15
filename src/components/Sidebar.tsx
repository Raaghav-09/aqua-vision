import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaHome, FaFish, FaBook, FaMapMarkedAlt, FaPen, FaSearch, FaUserCircle } from 'react-icons/fa'
import { useCookies } from 'react-cookie'

const navItems = [
  { to: '/', label: 'Home', icon: <FaHome /> },
  { to: '/identify', label: 'Identify', icon: <FaFish /> },
  { to: '/catch-log', label: 'Catch Log', icon: <FaBook /> },
  { to: '/location', label: 'Location', icon: <FaMapMarkedAlt /> },
  { to: '/blogs', label: 'Blogs', icon: <FaPen /> },
  { to: '/search', label: 'Search', icon: <FaSearch /> },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const [cookies] = useCookies(['flux_jwt_session'])
  const isAuthed = Boolean(cookies.flux_jwt_session)

  return (
    <aside className={`h-screen bg-neutral-950 border-r border-neutral-800 text-neutral-200 fixed left-0 top-0 z-40 transition-all ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="h-16 flex items-center justify-between px-3 border-b border-neutral-800">
        <div className="flex items-center gap-2 overflow-hidden">
          <img src="/logo.svg" alt="AquaVision" width={28} height={28} className="shrink-0" />
          {isOpen && <span className="font-semibold text-sm">AquaVision</span>}
        </div>
        <button aria-label="Toggle sidebar" onClick={() => setIsOpen((v) => !v)} className="p-2 rounded hover:bg-neutral-900">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isAuthed && (
        <div className="flex items-center gap-3 p-3 border-b border-neutral-800">
          <FaUserCircle className="text-neutral-400" size={28} />
          {isOpen && <div className="text-sm">
            <div className="font-medium">User</div>
            <div className="text-neutral-400">Logged in</div>
          </div>}
        </div>
      )}

      <nav className="p-2 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-neutral-900 text-white' : 'text-neutral-300 hover:text-white hover:bg-neutral-900'}`}
          >
            <span className="text-lg">{item.icon}</span>
            {isOpen && <span className="text-sm">{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}


