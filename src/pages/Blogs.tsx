import { useCookies } from 'react-cookie'
import { useState } from 'react'

type Blog = { id: string; title: string; author: string; date: string; description: string }
const sample: Blog[] = []

export default function Blogs() {
  const [cookies] = useCookies(['flux_jwt_session'])
  const authed = Boolean(cookies.flux_jwt_session)
  const [query, setQuery] = useState('')
  const items = sample.filter((b) => b.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="p-4 md:p-6 text-[#e6f7ff]">
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search blogs by title, fish type, or author"
            className="w-full max-w-xl px-3 py-2 rounded-md bg-[#001420]/80 border border-cyan-700/50 text-sm outline-none text-[#e6f7ff] placeholder:text-cyan-300/50"
          />
          {authed && (
            <button className="px-3 py-2 text-sm rounded-md border border-cyan-700/50 hover:bg-cyan-900/30 transition-colors whitespace-nowrap">+ New Blog</button>
          )}
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.length === 0 ? (
            <div className="text-cyan-300/70 col-span-full text-center py-8">No posts yet.</div>
          ) : (
            items.map((b) => (
              <article key={b.id} className="border border-cyan-900/40 rounded-lg p-4 bg-[#002030]/50">
                <h3 className="font-semibold mb-1">{b.title}</h3>
                <div className="text-xs text-cyan-300/70 mb-2">{b.author} • {b.date}</div>
                <p className="text-sm text-cyan-100 mb-3 line-clamp-3">{b.description}</p>
                <button className="px-2 py-1 text-sm rounded border border-cyan-700/50 hover:bg-cyan-900/30 transition-colors">Read More</button>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  )
}


