import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default icon paths for Leaflet in bundlers
// @ts-expect-error non-module asset resolution
delete (L.Icon.Default as any).prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

function useQuery() {
  return new URLSearchParams(window.location.search)
}

export default function LocationPage() {
  const q = useQuery()
  const lat = parseFloat(q.get('lat') || '0')
  const lng = parseFloat(q.get('lng') || '0')
  const name = q.get('name') || 'Unknown'
  const time = q.get('time') || ''
  const center = isFinite(lat) && isFinite(lng) ? [lat, lng] as [number, number] : [0, 0]

  return (
    <div className="p-4 md:p-6 text-[#e6f7ff]">
      <div className="h-[70vh] border border-cyan-900/40 rounded overflow-hidden">
        <MapContainer center={center} zoom={lat || lng ? 8 : 2} className="w-full h-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {(lat || lng) && (
            <Marker position={center}>
              <Popup>
                <div className="text-sm">
                  <div className="font-medium">{name}</div>
                  <div className="text-neutral-500">{time}</div>
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  )
}


