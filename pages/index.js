import LandingPage from '../components/LandingPage'
import HeroCopy from '../components/HeroCopy'
import CaseStudyTemplate from '../components/CaseStudyTemplate'

export default function Home(){
  return (
    <main>
      <HeroCopy />
      <div className="max-w-7xl mx-auto px-4">
        <LandingPage />

        <CaseStudyTemplate
          logo="/logos/logo1.svg"
          title="Customer Example — Kit Compliance"
          metrics={[]}
          quote={'"We simplified kit checks and made audit reporting repeatable." — Regional Manager'}
        >
          <p>The customer runs multiple sites and previously relied on manual kit checks and spreadsheets. SafetyKit automated scanning, tracking and reporting so the team now pulls audit-ready reports quickly.</p>
        </CaseStudyTemplate>
      </div>
    </main>
  )
}
