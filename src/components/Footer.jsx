export default function Footer() {
  return (
    <footer className="py-10 bg-gradient-to-b from-transparent to-white/60">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="text-2xl font-extrabold tracking-tight text-gray-900">YEPCO</div>
          <p className="mt-1 text-gray-600">Saebener Strasse 29a, 81547 Munich, Germany</p>
        </div>
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} YEPCO GmbH. All rights reserved.</div>
      </div>
    </footer>
  )
}
