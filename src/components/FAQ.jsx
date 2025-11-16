import { motion } from 'framer-motion'

const faqs = [
  { q: 'What sports do you support?', a: 'Football, basketball, hockey, tennis, and more via data-driven templates.' },
  { q: 'Do you integrate with our tools?', a: 'Yes. We connect with major production systems, cloud storage, and social APIs.' },
  { q: 'How fast is highlight creation?', a: 'Clips and graphics are generated in seconds after detected events.' },
  { q: 'Is it on-prem or cloud?', a: 'Both options are available depending on your workflow and compliance.' },
]

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          FAQ
        </motion.h2>

        <div className="mt-10 grid gap-4">
          {faqs.map((f, i) => (
            <motion.details
              key={f.q}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl bg-white p-5 shadow-lg ring-1 ring-black/5 open:ring-[color:var(--y-magenta)]/20"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-gray-900 flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-sm text-[color:var(--y-magenta)] group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-gray-600">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-10 bottom-0 h-1/3 bg-gradient-to-t from-[color:var(--y-cyan)]/10 to-transparent" />
    </section>
  )
}
