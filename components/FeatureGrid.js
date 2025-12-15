import DisplayCards from './ui/display-cards';
import { Sparkles, Zap, AlertTriangle, Recycle, CheckCircle, Eye, GraduationCap } from 'lucide-react';

export default function FeatureGrid(){
  const features = [
    {title:'Faster checks', desc:'Mobile scanning that completes kit checks in seconds — reduces staff time on manual audits.', icon: <Zap className="size-4 text-blue-300" />},
    {title:'Prevent expiries', desc:'Predictive expiry alerts that remove expired items before they cause incidents.', icon: <AlertTriangle className="size-4 text-blue-300" />},
    {title:'Reduce waste', desc:'Automated inventory alerts and reorder suggestions to cut wasted stock and cost.', icon: <Recycle className="size-4 text-blue-300" />},
    {title:'Pass audits', desc:'Audit-ready logs and exportable evidence to shorten audit prep and responses.', icon: <CheckCircle className="size-4 text-blue-300" />},
    {title:'Operational visibility', desc:'Real-time dashboard for centres and rooms to spot issues earlier.', icon: <Eye className="size-4 text-blue-300" />},
    {title:'Less training time', desc:'AI-assisted SOP guidance and clear checklists to onboard staff faster.', icon: <GraduationCap className="size-4 text-blue-300" />}
  ];

  const cards = features.map((f, index) => ({
    icon: f.icon,
    title: f.title,
    description: f.desc,
    date: '',
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className: index === 0 ? "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0" :
             index === 1 ? "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0" :
             "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10"
  }));

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">We use SafetyKit for…</h2>
        <p className="text-slate-600 mb-6">Core modules that make kit compliance simple and repeatable.</p>
        <DisplayCards cards={cards} />
      </div>
    </section>
  )
}
