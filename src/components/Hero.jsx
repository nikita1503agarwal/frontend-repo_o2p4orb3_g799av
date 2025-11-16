import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradients and animated blobs (brand colors) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-[color:var(--y-magenta)]/20 blur-3xl animate-[floaty_8s_ease-in-out_infinite]" />
        <div className="absolute -bottom-48 -right-36 h-[32rem] w-[32rem] rounded-full bg-[color:var(--y-cyan)]/20 blur-3xl animate-[floaty_9s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-[color:var(--y-coral)]/20 blur-3xl animate-[floaty_7s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-36">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 shadow-sm ring-1 ring-black/5">
              <span className="h-2 w-2 rounded-full bg-[color:var(--y-magenta)] animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-gray-700">Automation for sports media teams</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Automate highlights, graphics, and metadata
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--y-magenta)] via-[color:var(--y-coral)] to-[color:var(--y-cyan)]">for every match you cover</span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-gray-700 max-w-2xl">
              YEPCO speeds up live production with intelligent workflows that clip, brand, and publish your content in seconds.
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
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-white/90 backdrop-blur px-6 py-3 text-gray-900 font-semibold shadow ring-1 ring-black/5 hover:bg-white"
              >
                Book a demo
              </motion.a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Badge text="Faster workflows" color="var(--y-cyan)" />
              <Badge text="On-brand output" color="var(--y-magenta)" />
              <Badge text="Plug & play" color="var(--y-coral)" />
            </div>
          </motion.div>

          {/* Decorative card stack to imply product without using 3D car */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[color:var(--y-magenta)]/20 via-[color:var(--y-coral)]/20 to-[color:var(--y-cyan)]/20 blur-xl" />
              <div className="relative rounded-3xl bg-white shadow-xl ring-1 ring-black/5 p-6">
                <div className="h-40 rounded-2xl bg-gradient-to-br from-[color:var(--y-magenta)] to-[color:var(--y-cyan)] opacity-90" />
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <Pill>Clips</Pill>
                  <Pill>Lower-thirds</Pill>
                  <Pill>Scorebugs</Pill>
                  <Pill>Captions</Pill>
                  <Pill>Thumbnails</Pill>
                  <Pill>Metadata</Pill>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
                  <span>Automation status</span>
                  <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[color:var(--y-cyan)] animate-pulse" /> Live</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Badge({ text, color }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-sm font-medium text-gray-700 shadow ring-1 ring-black/5"
    >
      <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      {text}
    </motion.span>
  )
}

function Pill({ children }) {
  return (
    <div className="inline-flex items-center justify-center rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-black/5">
      {children}
    </div>
  )
}
