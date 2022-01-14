import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="bg-green-300 border-green-600 border-b p-4 m-4 rounded">
        Hello World
      </div>
      <div className="bg-green-300 border-green-600 p-4 m-4 rounded-lg">
        Hello World
      </div>
      <div className="border-2 border-gray-600 p-4 m-4 bg-gray-500 hover:bg-red-600 hover:border-red-700 text-yellow-50 rounded-md">
        Hoverable
      </div>
      <div className="bg-blue-500 group">
        <p className="text-blue-300 group-hover:text-white">Click for more</p>
      </div>
    </main>
  )
}

export default Home
