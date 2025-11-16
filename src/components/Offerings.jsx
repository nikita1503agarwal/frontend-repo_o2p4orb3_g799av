import { motion } from 'framer-motion'

const items = [
  {
    title: 'Real-time Highlights',
    desc: 'Automatic highlight reels generated live from broadcast feeds.',
  },
  {
    title: 'Social & Graphics Automation',
    desc: 'Instant social clips and broadcast graphics driven by live data.',
  },
  {
    title: 'Transcripts & Metadata',
    desc: 'Structured tags for players, actions, and events for fast search.',
  },
  {
    title: 'Deep Integrations',
    desc: 'Connects with major production platforms and sports data feeds.',
  },
]

export default function Offerings() {
  return (
    <section id="offerings" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          What we offer
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 hover:shadow-xl transition"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[color:var(--y-magenta)] to-[color:var(--y-cyan)] mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-1/3 bg-gradient-to-b from-[color:var(--y-cyan)]/10 to-transparent" />
    </section>
  )
}
