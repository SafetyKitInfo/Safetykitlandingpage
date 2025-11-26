import LandingPage from '../components/LandingPage'
import HeroCopy from '../components/HeroCopy'
// Case studies removed from main page

export default function Home(){
  return (
    <main>
      <HeroCopy />
      <div className="max-w-7xl mx-auto px-4">
        <LandingPage />

        {/* Case studies removed */}
      </div>
    </main>
  )
}
