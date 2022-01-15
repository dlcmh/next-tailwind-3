import type { NextPage } from 'next'
import Link from 'next/link'

const ResponsiveLayout: NextPage = () => {
  return (
    <main>
      <section className="flex justify-between items-center h-28 bg-blue-400 px-20">
        <h1>Tailwind Layout</h1>
        <nav className="flex justify-between items-center w-56">
          <a>
            <Link href="/">Home</Link>
          </a>
          <a>
            <Link href="/">About</Link>
          </a>
          <a>
            <Link href="/">Contact Us</Link>
          </a>
        </nav>
      </section>
    </main>
  )
}

export default ResponsiveLayout
