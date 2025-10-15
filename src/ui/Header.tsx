import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa'

function NavItem({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-1.5 rounded-md text-sm font-medium transition-all ${isActive ? 'text-cyan-100 bg-cyan-900/40 shadow-sm' : 'text-cyan-200/80 hover:text-cyan-100 hover:bg-cyan-900/20'}`
      }
      onClick={onClick}
      end={to === '/'}
    >
      {children}
    </NavLink>
  )
}

export default function Header() {
  const [cookies, , removeCookie] = useCookies(['flux_jwt_session'])
  const isAuthed = Boolean(cookies.flux_jwt_session)
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
    }
  }

  return (
    <header className="h-16 px-4 md:px-8 border-b flex items-center justify-between deepsea-surface sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden p-2 rounded-md hover:bg-cyan-900/30 transition-colors text-cyan-100"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.svg" alt="AquaVision" width={32} height={32} className="transition-transform group-hover:scale-110" />
          <span className="font-bold text-base bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">AquaVision</span>
        </Link>
      </div>

      <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-6">
        <div className="relative w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search fish species..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-[#001420]/70 border border-cyan-700/40 text-[#e6f7ff] placeholder:text-cyan-300/50 outline-none focus:border-cyan-500/70 focus:bg-[#001420]/90 focus:ring-1 focus:ring-cyan-500/30 transition-all"
          />
          <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400/60 text-sm" />
        </div>
      </form>

      <nav className="hidden lg:flex items-center gap-1">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/identify">Identify</NavItem>
        <NavItem to="/catch-log">Catch Log</NavItem>
        <NavItem to="/blogs">Blogs</NavItem>
        <NavItem to="/location">Location</NavItem>
        <NavItem to="/faqs">FAQs</NavItem>
        <div className="h-6 w-px bg-cyan-700/30 mx-1"></div>
        {isAuthed ? (
          <button onClick={() => removeCookie('flux_jwt_session', { path: '/' })} className="ml-1 px-3 py-1.5 text-xs rounded-md border border-cyan-700/50 hover:bg-cyan-900/30 transition-colors">Log Out</button>
        ) : (
          <>
            <button onClick={() => navigate('/login')} className="ml-1 px-3 py-1.5 text-xs rounded-md border border-cyan-700/50 hover:bg-cyan-900/30 transition-colors">Login</button>
            <button onClick={() => navigate('/signup')} className="px-3 py-1.5 text-xs rounded-md border border-cyan-700/50 bg-cyan-900/20 hover:bg-cyan-900/40 transition-colors">Sign Up</button>
          </>
        )}
      </nav>

      {menuOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-16 border-b border-t deepsea-surface backdrop-blur-md">
          <div className="px-4 py-3 flex flex-col gap-1">
            <form onSubmit={(e) => { handleSearch(e); setMenuOpen(false) }} className="md:hidden mb-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search fish species..."
                  className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-[#001420]/70 border border-cyan-700/40 text-[#e6f7ff] placeholder:text-cyan-300/50 outline-none focus:border-cyan-500/70 transition-all"
                />
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400/60 text-sm" />
              </div>
            </form>
            <NavItem to="/" onClick={() => setMenuOpen(false)}>Home</NavItem>
            <NavItem to="/identify" onClick={() => setMenuOpen(false)}>Identify</NavItem>
            <NavItem to="/catch-log" onClick={() => setMenuOpen(false)}>Catch Log</NavItem>
            <NavItem to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</NavItem>
            <NavItem to="/location" onClick={() => setMenuOpen(false)}>Location</NavItem>
            <NavItem to="/faqs" onClick={() => setMenuOpen(false)}>FAQs</NavItem>
            <div className="h-px my-2 bg-cyan-700/30" />
            {isAuthed ? (
              <button onClick={() => { removeCookie('flux_jwt_session', { path: '/' }); setMenuOpen(false) }} className="px-3 py-2 text-sm rounded-md border border-cyan-700/50 hover:bg-cyan-900/30 text-left transition-colors font-medium">Log Out</button>
            ) : (
              <div className="flex gap-2">
                <button onClick={() => { navigate('/login'); setMenuOpen(false) }} className="flex-1 px-3 py-2 text-sm rounded-md border border-cyan-700/50 hover:bg-cyan-900/30 transition-colors font-medium">Login</button>
                <button onClick={() => { navigate('/signup'); setMenuOpen(false) }} className="flex-1 px-3 py-2 text-sm rounded-md border border-cyan-700/50 bg-cyan-900/20 hover:bg-cyan-900/40 transition-colors font-medium">Sign Up</button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}


