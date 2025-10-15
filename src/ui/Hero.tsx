type Props = {
  title: string
  height?: string
  overlayOpacity?: number
}

export default function Hero({ title, height = 'h-[70vh] md:h-[85vh]', overlayOpacity = 0.5 }: Props) {
  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      <video className="absolute inset-0 w-full h-full object-cover" src={'/videos/fish_frontpage.mp4'} autoPlay muted loop playsInline />
      <div className="absolute inset-0 deepsea-overlay" style={{ opacity: overlayOpacity }} />
      <div className="relative z-10 px-6 md:px-10 pt-12 h-full flex items-center justify-center text-center">
        <h1 className="text-[#e6f6ff] text-3xl md:text-5xl font-bold max-w-4xl drop-shadow-[0_2px_10px_rgba(0,80,140,0.35)]">{title}</h1>
      </div>
    </section>
  )
}


