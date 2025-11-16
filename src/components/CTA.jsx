import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[color:var(--y-magenta)] via-[color:var(--y-coral)] to-[color:var(--y-cyan)] p-[1px] shadow-xl ring-1 ring-black/5">
          <div className="rounded-3xl bg-white/90 backdrop-blur p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Ready to see YEPCO in action?</h3>
              <p className="mt-2 text-gray-700">Book a short walkthrough—tailored to your sport and workflow.</p>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--y-magenta)] px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              Book a demo
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
