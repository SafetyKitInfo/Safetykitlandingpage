import React from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Check,
  CheckCircle2,
  ClipboardCheck,
  CloudOff,
  Image as ImageIcon,
  ListChecks,
  ShieldCheck,
  UserCheck,
  Wrench,
} from 'lucide-react';

const features = [
  {
    icon: ImageIcon,
    title: 'Approved drawer standards',
    copy: 'Capture the expected condition once and maintain a verified checklist for every drawer.',
  },
  {
    icon: ListChecks,
    title: 'AI-assisted comparison',
    copy: 'Compare the current drawer against its reference image and expected contents.',
  },
  {
    icon: UserCheck,
    title: 'Human-verified findings',
    copy: 'Workers confirm every recommendation as missing, broken, present or requiring review.',
  },
  {
    icon: ClipboardCheck,
    title: 'Actionable follow-up',
    copy: 'Create reorder lists, assign corrective actions and retain the supporting inspection evidence.',
  },
];

const ToolShape = ({ className = '' }) => (
  <span className={`absolute rounded-full bg-slate-500/55 ${className}`} aria-hidden>
    <span className="absolute -right-2 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-sm border-2 border-current" />
  </span>
);

function DrawerImage({ current = false }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#17222b]">
      <div className="absolute inset-2 rounded-lg border border-slate-600/60 bg-[#202d37] shadow-inner">
        <div className="absolute inset-x-3 top-1/2 border-t border-slate-600/50" />
        <ToolShape className="left-[13%] top-[23%] h-2 w-[28%] rotate-[-8deg] text-slate-500" />
        {!current && <ToolShape className="right-[15%] top-[25%] h-2 w-[25%] rotate-[12deg] text-slate-500" />}
        <ToolShape className="bottom-[22%] left-[18%] h-2 w-[31%] rotate-[5deg] text-slate-500" />
        <span className={`absolute bottom-[18%] right-[16%] h-9 w-9 rounded-full border-[5px] ${current ? 'border-amber-400/45' : 'border-slate-500/55'}`} />
        {current && (
          <span className="absolute right-[13%] top-[18%] rounded-md border border-amber-400/50 bg-amber-400/10 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-amber-300">
            Possible missing
          </span>
        )}
      </div>
      <span className="absolute bottom-3 left-3 rounded-md bg-black/45 px-2 py-1 text-[9px] font-semibold text-slate-200 backdrop-blur">
        {current ? 'Current condition' : 'Approved reference'}
      </span>
    </div>
  );
}

function ToolsMockup() {
  const states = [
    ['Present', CheckCircle2, 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10'],
    ['Missing', AlertTriangle, 'text-amber-300 border-amber-400/30 bg-amber-400/10'],
    ['Broken', Wrench, 'text-rose-300 border-rose-400/30 bg-rose-400/10'],
    ['Review', UserCheck, 'text-sky-300 border-sky-400/30 bg-sky-400/10'],
  ];

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="absolute -inset-4 rounded-[2.25rem] bg-[#0b5f78]/10 blur-2xl" aria-hidden />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-700/80 bg-[#0d171f] p-2 shadow-[0_32px_80px_rgba(3,18,26,0.3)]">
        <div className="overflow-hidden rounded-[1.3rem] border border-white/10 bg-[#111c24] text-slate-100">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#37d5ca]/15 text-[#72e6df]"><Wrench size={15} aria-hidden /></span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#72e6df]">SafetySight Tools</p>
                <p className="text-xs font-semibold text-slate-200">Workshop A · Toolbox 04</p>
              </div>
            </div>
            <div className="hidden items-center gap-2 text-[10px] font-semibold text-slate-400 sm:flex">
              <CloudOff size={13} aria-hidden /> Offline capture ready
            </div>
          </div>

          <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Inspection progress</span>
                <span className="text-xs font-bold text-[#72e6df]">3 / 8</span>
              </div>
              <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-slate-700"><div className="h-full w-[38%] rounded-full bg-[#37d5ca]" /></div>
              <div className="space-y-1.5">
                {['Top tray', 'Drawer 01', 'Drawer 02', 'Drawer 03', 'Drawer 04'].map((drawer, index) => (
                  <div key={drawer} className={`flex items-center justify-between rounded-lg px-2.5 py-2 text-[11px] ${index === 3 ? 'bg-[#37d5ca]/10 font-semibold text-white ring-1 ring-[#37d5ca]/25' : 'text-slate-400'}`}>
                    <span>{drawer}</span>
                    {index < 3 ? <Check size={12} className="text-emerald-400" aria-hidden /> : index === 3 ? <span className="text-[9px] text-[#72e6df]">Reviewing</span> : <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />}
                  </div>
                ))}
              </div>
            </aside>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">Drawer 03</p>
                  <p className="text-[10px] text-slate-400">12 expected tools · AI suggestions require confirmation</p>
                </div>
                <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-2.5 py-1 text-[9px] font-bold text-amber-300">2 to review</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <DrawerImage />
                <DrawerImage current />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {states.map(([label, Icon, colors]) => (
                  <button key={label} type="button" className={`flex items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-[10px] font-bold ${colors}`} aria-label={`Mark finding as ${label}`}>
                    <Icon size={12} aria-hidden /> {label}
                  </button>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2.5">
                <span className="text-[10px] text-slate-400"><strong className="text-slate-200">12 of 12</strong> expected items checked</span>
                <span className="flex items-center gap-1 text-[10px] font-bold text-[#72e6df]">Confirm drawer <ArrowRight size={11} aria-hidden /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-slate-500">Illustrative interface — recommendations are reviewed by a person before submission.</p>
    </div>
  );
}

export default function SafetySightTools() {
  return (
    <section id="tools" className="scroll-mt-20 border-y border-[#d8e7ea] bg-white py-20 md:py-28" aria-labelledby="tools-heading">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sk-primary"><Wrench size={14} aria-hidden /> SafetySight Tools</span>
              <span className="rounded-full border border-[#d8e7ea] bg-[#f6faf9] px-3 py-1 text-xs font-semibold text-[#506575]">Part of the SafetySight product family</span>
            </div>
            <h2 id="tools-heading" className="max-w-xl text-4xl font-black tracking-tight text-[#102a43] sm:text-5xl md:text-6xl">Know what’s missing before work begins.</h2>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-relaxed text-[#506575] md:text-lg">Turn shared toolbox checks into a clear, repeatable digital workflow. SafetySight Tools compares each drawer with its approved standard, highlights possible missing or damaged equipment, and gives workers a fast way to verify the result.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="https://app.safetysight.net/tools/" className="inline-flex items-center justify-center gap-2 rounded-full bg-sk-primary px-6 py-3 font-bold text-white shadow-md shadow-sky-950/15 hover:bg-sk-primaryHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sk-primary">Explore SafetySight Tools <ArrowRight size={17} aria-hidden /></a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-[#cbdde2] bg-white px-6 py-3 font-bold text-[#102a43] shadow-sm hover:border-sk-primary hover:bg-[#f6faf9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sk-primary">Request a pilot</a>
            </div>
          </div>
        </div>

        <ToolsMockup />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#d8e7ea] bg-[#d8e7ea] sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="bg-white p-6 md:p-7">
              <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#cce9e8] bg-[#eff9f8] text-sk-primary"><Icon size={18} aria-hidden /></span>
              <h3 className="mb-2 text-base font-bold text-[#102a43]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#637381]">{copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <div className="flex items-start gap-3 rounded-xl border border-[#d8e7ea] bg-[#f6faf9] p-4"><ListChecks size={18} className="mt-0.5 shrink-0 text-sk-primary" aria-hidden /><p className="text-sm text-[#506575]"><strong className="text-[#102a43]">Continuous workflow.</strong> Move drawer by drawer without losing inspection progress.</p></div>
          <div className="flex items-start gap-3 rounded-xl border border-[#d8e7ea] bg-[#f6faf9] p-4"><ShieldCheck size={18} className="mt-0.5 shrink-0 text-sk-primary" aria-hidden /><p className="text-sm text-[#506575]"><strong className="text-[#102a43]">Organisational access.</strong> Microsoft sign-in with data separated by tenant.</p></div>
          <div className="flex items-start gap-3 rounded-xl border border-[#d8e7ea] bg-[#f6faf9] p-4"><CloudOff size={18} className="mt-0.5 shrink-0 text-sk-primary" aria-hidden /><p className="text-sm text-[#506575]"><strong className="text-[#102a43]">Offline-safe capture.</strong> Keep working across workshops and field environments.</p></div>
        </div>
      </div>
    </section>
  );
}
