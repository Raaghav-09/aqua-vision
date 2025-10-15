import { useRef, useState } from 'react'

type Geo = { lat: number | null; lng: number | null }

export default function Identify() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [species, setSpecies] = useState<string>('-')
  const [health, setHealth] = useState<'Healthy' | 'Unhealthy' | '-'>('-')
  const [geo, setGeo] = useState<Geo>({ lat: null, lng: null })
  const [timestamp, setTimestamp] = useState<string>('-')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onFile = (file: File) => {
    const url = URL.createObjectURL(file)
    setImageUrl(url)
    setSpecies('Pending model…')
    setHealth('-')
    
    // Capture timestamp when image is uploaded
    setTimestamp(new Date().toLocaleString())
    
    // Get current location when image is uploaded
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setGeo({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => setGeo({ lat: null, lng: null })
      )
    }
  }

  const onDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFile(e.dataTransfer.files[0])
    }
  }

  const saveRecord = () => {
    console.log('Save record', { imageUrl, species, health, geo, timestamp })
    alert('Record saved locally (stub). Connect to backend later.')
  }

  return (
    <div className="p-4 md:p-6 text-[#e6f7ff]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1 border border-cyan-900/40 bg-[#002030]/50 rounded-lg p-3 min-h-64">
          <div className="mb-3 font-medium">Upload Image</div>
          <div
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
            className="aspect-video bg-[#001420]/80 border border-dashed border-cyan-700/50 rounded flex items-center justify-center mb-3 text-cyan-300/70"
          >
            {imageUrl ? (
              <img src={imageUrl} alt="preview" className="w-full h-full object-cover rounded" />
            ) : (
              <div className="text-center text-sm">Drag & drop or click to upload</div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              className="px-3 py-2 text-sm rounded-md border border-cyan-700/50 hover:bg-cyan-900/30 transition-colors"
              onClick={() => inputRef.current?.click()}
            >
              Choose File
            </button>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) onFile(file)
              }}
            />
          </div>
        </div>

        <div className="md:col-span-3 border border-cyan-900/40 bg-[#002030]/50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-cyan-300/70 text-sm">Fish Species</div>
            <div className="text-lg">{species}</div>
          </div>
          <div>
            <div className="text-cyan-300/70 text-sm">Health</div>
            <div className="text-lg">{health}</div>
          </div>
          <div>
            <div className="text-cyan-300/70 text-sm">Coordinates</div>
            <div className="text-lg">
              {geo.lat && geo.lng ? `${geo.lat.toFixed(5)}, ${geo.lng.toFixed(5)}` : '-'}
            </div>
          </div>
          <div>
            <div className="text-cyan-300/70 text-sm">Date & Time</div>
            <div className="text-lg">{timestamp || '-'}</div>
          </div>
        </div>
      </div>

      <div className="mt-4 border border-cyan-900/40 bg-[#002030]/50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="font-medium">Related Information</div>
          <button onClick={saveRecord} className="px-3 py-2 text-sm rounded-md border border-cyan-700/50 hover:bg-cyan-900/30 transition-colors">Save Record</button>
        </div>
        <div className="text-sm text-cyan-300/70">Habitat, size, region, and other details will appear here.</div>
      </div>
    </div>
  )
}


