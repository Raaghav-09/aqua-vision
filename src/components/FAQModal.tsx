type Props = { open: boolean; onClose: () => void }

export default function FAQModal({ open, onClose }: Props) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-[#000814]/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-[90vw] max-w-2xl bg-[#002030]/95 border border-cyan-900/40 rounded-lg p-6 text-[#e6f7ff] shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">FAQs</h2>
          <button onClick={onClose} className="px-2 py-1 rounded border border-cyan-700/50 hover:bg-cyan-900/30 transition-colors">Close</button>
        </div>
        <div className="space-y-4 text-sm">
          <div>
            <div className="font-medium">What is AquaVision?</div>
            <p className="text-cyan-300/70">A platform to identify fish, log catches, and explore locations.</p>
          </div>
          <div>
            <div className="font-medium">How do I save a catch?</div>
            <p className="text-cyan-300/70">Use the Identify page to upload an image and save the record.</p>
          </div>
        </div>
      </div>
    </div>
  )
}


