import { motion } from 'framer-motion'

const steps = [
  { title: 'Ingest', desc: 'Connect live feeds and data sources.' },
  { title: 'Detect', desc: 'AI finds moments, players, and events.' },
  { title: 'Brand', desc: 'Apply templates and graphics automatically.' },
  { title: 'Publish', desc: 'Deliver to broadcast, social, and archive.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          How it works
        </motion.h2>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5"
            >
              <div className="text-sm text-gray-500">Step {i + 1}</div>
              <div className="mt-1 text-lg font-semibold text-gray-900">{s.title}</div>
              <div className="mt-2 text-gray-600">{s.desc}</div>
            </motion.li>
          ))}
        </ol>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-1/3 bg-gradient-to-b from-[color:var(--y-magenta)]/10 to-transparent" />
    </section>
  )
}
