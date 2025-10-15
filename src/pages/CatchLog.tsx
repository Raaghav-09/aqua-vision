import { Link } from 'react-router-dom'

type Entry = {
  id: string
  imageUrl: string
  name: string
  health: string
  lat: number
  lng: number
  timestamp: string
}

const sample: Entry[] = []

export default function CatchLog() {
  const entries = sample
  return (
    <div className="p-4 md:p-6 text-[#e6f7ff]">
      <div className="overflow-x-auto border border-cyan-900/40 bg-[#002030]/30 rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-[#003047]/60 text-cyan-200">
            <tr>
              <th className="text-left p-3">Fish Image</th>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Health</th>
              <th className="text-left p-3">Coordinates</th>
              <th className="text-left p-3">Date/Time</th>
              <th className="text-left p-3">Location</th>
            </tr>
          </thead>
          <tbody>
            {entries.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-6 text-center text-cyan-300/70">No entries yet.</td>
              </tr>
            ) : (
              entries.map((e) => (
                <tr key={e.id} className="border-t border-cyan-900/40">
                  <td className="p-3"><img src={e.imageUrl} alt={e.name} className="w-16 h-16 object-cover rounded" /></td>
                  <td className="p-3">{e.name}</td>
                  <td className="p-3">{e.health}</td>
                  <td className="p-3">{e.lat.toFixed(5)}, {e.lng.toFixed(5)}</td>
                  <td className="p-3">{e.timestamp}</td>
                  <td className="p-3">
                    <Link className="px-2 py-1 rounded border border-cyan-700/50 hover:bg-cyan-900/30 transition-colors" to={`/location?lat=${e.lat}&lng=${e.lng}&name=${encodeURIComponent(e.name)}&time=${encodeURIComponent(e.timestamp)}`}>📍 Location</Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}


