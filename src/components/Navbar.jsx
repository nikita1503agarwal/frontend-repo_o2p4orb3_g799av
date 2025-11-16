import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <div className="sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-4 mb-2 flex items-center justify-between rounded-2xl bg-white/70 backdrop-blur shadow-sm ring-1 ring-black/5 px-4 sm:px-6 py-3"
        >
          <a href="#top" className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[color:var(--y-magenta)]" />
            <span className="font-extrabold tracking-tight text-gray-900">YEPCO</span>
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#offerings" className="hover:text-gray-900">Offerings</a>
            <a href="#why" className="hover:text-gray-900">Why</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </div>
          <a href="#cta" className="inline-flex items-center rounded-full bg-[color:var(--y-magenta)] px-4 py-2 text-white text-sm font-semibold shadow hover:shadow-md">Book a demo</a>
        </motion.nav>
      </div>
    </div>
  )
}
