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
          title="Harmony Early Learning — Kit Compliance"
          metrics={[{value:'90% faster', label:'kit checks'},{value:'100%', label:'expiry capture'},{value:'$1,800', label:'annual savings'}]}
          quote={'"We don\'t think about kit compliance anymore — SafetyKit handles it." — Regional Manager'}
        >
          <p>Harmony Early Learning runs multiple centres and struggled with manual kit checks, inconsistent expiry monitoring, and time-consuming audit prep. SafetyKit automated scanning, tracking and reporting so the team now runs quick checks and pulls audit reports in seconds.</p>
        </CaseStudyTemplate>
      </div>
    </main>
  )
}
