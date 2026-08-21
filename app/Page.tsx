export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-green-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">AREWA WAKE UP</h1>
      <p className="text-xl mb-8">Northern Nigeria Movement for Unity & Progress</p>
      
      <div className="flex gap-4">
        <a href="/signup" className="bg-white text-green-900 px-6 py-3 rounded-lg font-bold">
          Join Us
        </a>
        <a href="/donate" className="border-2 border-white px-6 py-3 rounded-lg font-bold">
          Donate
        </a>
      </div>
    </main>
  )
}
