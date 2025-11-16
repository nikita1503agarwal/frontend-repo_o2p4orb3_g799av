import { motion } from 'framer-motion'

export default function WhyItMatters() {
  return (
    <section id="why" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why it matters</h2>
          <p className="mt-4 text-gray-700 text-lg">
            In live sports, speed and relevance win. Our automation reduces manual work, accelerates highlight creation, and pushes content faster across channels.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--y-magenta)]" /> Increase productivity in live production</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--y-cyan)]" /> Reduce cost and effort for content teams</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--y-coral)]" /> Better metadata for search and repurposing</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
            <dl className="grid grid-cols-2 gap-6">
              <Stat label="Clips faster" value="x10" accent="var(--y-magenta)" />
              <Stat label="Manual steps" value="-60%" accent="var(--y-cyan)" />
              <Stat label="Searchability" value="+80%" accent="var(--y-coral)" />
              <Stat label="Integration" value="Plug & play" accent="var(--y-cyan)" />
            </dl>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-10 bottom-0 h-1/3 bg-gradient-to-t from-[color:var(--y-magenta)]/10 to-transparent" />
    </section>
  )
}

function Stat({ label, value, accent }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold" style={{ color: accent }}>{value}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  )
}
