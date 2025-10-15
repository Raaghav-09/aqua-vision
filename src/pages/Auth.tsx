import { useState } from 'react'
import { useCookies } from 'react-cookie'

export function Login() {
  const [, setCookie] = useCookies(['flux_jwt_session'])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCookie('flux_jwt_session', 'demo', { path: '/' })
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={onSubmit} className="w-full max-w-md p-8 bg-[#002030]/70 border border-cyan-900/40 rounded-lg text-[#e6f7ff] backdrop-blur-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">Login to AquaVision</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5 text-cyan-200">Email</label>
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              type="email"
              className="w-full px-4 py-2.5 rounded-md bg-[#001420]/80 border border-cyan-700/50 text-[#e6f7ff] placeholder:text-cyan-300/50 focus:outline-none focus:border-cyan-500/70 transition-colors" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-cyan-200">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
              className="w-full px-4 py-2.5 rounded-md bg-[#001420]/80 border border-cyan-700/50 text-[#e6f7ff] placeholder:text-cyan-300/50 focus:outline-none focus:border-cyan-500/70 transition-colors" 
            />
          </div>
          <button className="w-full px-4 py-2.5 rounded-md border border-cyan-700/50 bg-cyan-900/20 hover:bg-cyan-900/40 transition-colors font-medium">Login</button>
        </div>
      </form>
    </div>
  )
}

export function Signup() {
  const [, setCookie] = useCookies(['flux_jwt_session'])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCookie('flux_jwt_session', 'demo', { path: '/' })
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={onSubmit} className="w-full max-w-md p-8 bg-[#002030]/70 border border-cyan-900/40 rounded-lg text-[#e6f7ff] backdrop-blur-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">Create Account</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5 text-cyan-200">Email</label>
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              type="email"
              className="w-full px-4 py-2.5 rounded-md bg-[#001420]/80 border border-cyan-700/50 text-[#e6f7ff] placeholder:text-cyan-300/50 focus:outline-none focus:border-cyan-500/70 transition-colors" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-cyan-200">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
              className="w-full px-4 py-2.5 rounded-md bg-[#001420]/80 border border-cyan-700/50 text-[#e6f7ff] placeholder:text-cyan-300/50 focus:outline-none focus:border-cyan-500/70 transition-colors" 
            />
          </div>
          <button className="w-full px-4 py-2.5 rounded-md border border-cyan-700/50 bg-cyan-900/20 hover:bg-cyan-900/40 transition-colors font-medium">Create Account</button>
        </div>
      </form>
    </div>
  )
}


