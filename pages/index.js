import LandingPage from '../components/LandingPage'
import { HeroScrollDemo } from '../components/ui/demo'
// Case studies removed from main page

export default function Home(){
  return (
    <main>
      <HeroScrollDemo />
      <div className="max-w-7xl mx-auto px-4">
        <LandingPage />

        {/* Case studies removed */}
      </div>
    </main>
  )
}
