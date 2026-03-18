import { Building2, TrendingDown, Clock, CalendarCheck } from 'lucide-react';
import content from '../content/safetykit-copy.json';

const STAT_COLORS = [
  'text-blue-600',
  'text-emerald-600',
  'text-purple-600',
  'text-orange-600',
];

const ICON_COMPONENTS = [Building2, TrendingDown, Clock, CalendarCheck];

export default function MetricsRow(){
  const metrics = (content && content.hero && content.hero.metrics) || [];

  return (
    <section className="py-10 bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {metrics.map((m, i) => {
            const IconComponent = ICON_COMPONENTS[i % ICON_COMPONENTS.length];
            return (
              <div key={i} className="p-5 bg-slate-50 rounded-lg border border-slate-100">
                <div className={`flex justify-center mb-2 ${STAT_COLORS[i % STAT_COLORS.length]}`}>
                  <IconComponent size={22} strokeWidth={1.5} aria-hidden />
                </div>
                <div className={`text-2xl md:text-3xl font-bold ${STAT_COLORS[i % STAT_COLORS.length]}`}>{m.value}</div>
                <div className="text-xs text-slate-600 mt-1 leading-snug">{m.label}</div>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-slate-400 text-center mt-4">
          Indicators based on data entered into SafetyKit — not a legal compliance certification.
        </p>
      </div>
    </section>
  )
}
