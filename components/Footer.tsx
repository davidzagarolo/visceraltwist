export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-20 border-t border-neutral-200 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-neutral-200 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        <div className="flex flex-col gap-1">
          <span>David Zagarolo</span>
          <a
            href="mailto:davidzagarolo@gmail.com"
            className="hover:text-neutral-900 transition"
          >
            davidzagarolo@gmail.com
          </a>
        </div>

        <div className="text-neutral-200">
          © {year} David Zagarolo. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
