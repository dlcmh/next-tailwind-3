import type { NextPage } from 'next'

const Responsive: NextPage = () => {
  return (
    <main className="bg-slate-400">
      <section className="m-2 sm:m-4 md:m-8 lg:m-16 xl:m-32 bg-white sm:bg-yellow-200">
        <div className="border-2 p-4">Responsive</div>
      </section>
    </main>
  )
}

export default Responsive
