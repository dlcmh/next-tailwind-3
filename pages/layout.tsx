import type { NextPage } from 'next'
import Link from 'next/link'

// https://www.infoworld.com/article/3622288/tailwind-css-learn-the-joys-of-functional-responsive-css.html

const ResponsiveLayout: NextPage = () => {
  return (
    <main>
      <section className="flex justify-between items-center h-16 bg-blue-400 px-2 md:px-4">
        <h1>Tailwind Layout</h1>
        <nav className="flex justify-between items-center w-56">
          <a className="bg-yellow-50">
            <Link href="/">Home</Link>
          </a>
          <a className="bg-yellow-100">
            <Link href="/">About</Link>
          </a>
          <a className="bg-yellow-200">
            <Link href="/">Contact Us</Link>
          </a>
        </nav>
      </section>
    </main>
  )
}

export default ResponsiveLayout
