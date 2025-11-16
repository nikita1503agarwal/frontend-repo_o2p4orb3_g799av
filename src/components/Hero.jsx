import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Color wash overlays */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        <div className="absolute inset-0 bg-[color:var(--y-magenta)]/25" />
        <div className="absolute inset-0 bg-[color:var(--y-cyan)]/20" />
        <div className="absolute inset-0 bg-[color:var(--y-coral)]/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[color:var(--y-magenta)] animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-gray-700">German engineering for sports media</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              YEPCO automates live sports content
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--y-magenta)] via-[color:var(--y-coral)] to-[color:var(--y-cyan)]">
                highlights, graphics, and metadata
              </span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-gray-700 max-w-2xl">
              From real-time highlights to social-ready visuals, we connect your production stack and let automation do the heavy lifting.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href="#offerings"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--y-magenta)] px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition"
              >
                Explore what we offer
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href="#why"
                className="inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur px-6 py-3 text-gray-900 font-semibold shadow hover:bg-white"
              >
                Why it matters
              </motion.a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Badge text="YEPCO" />
              <Badge text="LinkedIn" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

function Badge({ text }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm font-medium text-gray-700 shadow"
    >
      <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--y-cyan)]" />
      {text}
      <span className="ml-1 text-xs text-gray-500">+2</span>
    </motion.span>
  )
}
