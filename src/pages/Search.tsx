import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

type Result = { id: string; name: string; image?: string; description?: string }

export default function Search() {
  const [searchParams] = useSearchParams()
  const [q, setQ] = useState('')
  const [results, setResults] = useState<Result[]>([])

  useEffect(() => {
    const queryParam = searchParams.get('q')
    if (queryParam) {
      setQ(queryParam)
      runSearch(queryParam)
    }
  }, [searchParams])

  const runSearch = (query?: string) => {
    const searchQuery = query || q
    // Stubbed local results. Replace with API later
    setResults(searchQuery ? [{ id: '1', name: searchQuery, description: 'Sample fish info' }] : [])
  }

  return (
    <div className="p-4 md:p-6 text-[#e6f7ff]">
      <div className="max-w-xl mx-auto text-center">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && runSearch()}
          placeholder="Search fish"
          className="w-full px-4 py-3 rounded-md bg-[#001420]/80 border border-cyan-700/50 outline-none text-[#e6f7ff] placeholder:text-cyan-300/50"
        />
        <button onClick={runSearch} className="w-full mt-3 px-4 py-2.5 rounded-md border border-cyan-700/50 bg-cyan-900/20 hover:bg-cyan-900/40 transition-colors font-medium">Search</button>
      </div>
      <div className="mt-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {results.map((r) => (
            <div key={r.id} className="border border-cyan-900/40 rounded-lg p-4 bg-[#002030]/50">
              <div className="font-medium">{r.name}</div>
              <div className="text-sm text-cyan-300/70">{r.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


