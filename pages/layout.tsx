import type { NextPage } from 'next'
import Link from 'next/link'

// https://www.infoworld.com/article/3622288/tailwind-css-learn-the-joys-of-functional-responsive-css.html

const ResponsiveLayout: NextPage = () => {
  return (
    <main>
      <section className="flex justify-between items-center h-16 bg-blue-400 px-2 md:px-4">
        <h1>Tailwind Layout</h1>
        <nav className="flex justify-between items-center w-56">
          <Link href="/">
            <a className="bg-yellow-50">Home</a>
          </Link>
          <Link href="/">
            <a className="bg-yellow-100">About</a>
          </Link>
          <Link href="/">
            <a className="bg-yellow-200">Contact Us</a>
          </Link>
        </nav>
      </section>
    </main>
  )
}

export default ResponsiveLayout
