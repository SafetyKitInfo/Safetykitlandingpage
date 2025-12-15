import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack"
import DonutChartDemo from "./donut-demo"

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Compliance that runs itself",
    description:
      "SafetyKit continuously monitors inspections, expiries, and risk rules in the background, ensuring nothing is missed and compliance is maintained without manual follow-up.",
  },
  {
    id: "process-2",
    title: "Remove expiry risk before it becomes a problem",
    description:
      "Predictive alerts surface items approaching expiry early, giving teams time to act and preventing unsafe or non-compliant equipment from ever being used.",
  },
  {
    id: "process-3",
    title: "Lower operational cost through smarter inventory control",
    description:
      "Usage patterns and automated alerts reduce over-ordering, prevent stockpiling, and cut unnecessary replacement costs across sites.",
  },
  {
    id: "process-4",
    title: "Always audit-ready",
    description:
      "Every inspection, action, and update is automatically logged, time-stamped, and exportable, dramatically reducing audit preparation time and stress.",
  },
  {
    id: "process-5",
    title: "Clear visibility across every centre",
    description:
      "A single real-time view shows compliance status by centre, room, or asset, helping leaders identify risk trends and intervene early.",
  },
  {
    id: "process-6",
    title: "Faster onboarding, consistent execution",
    description:
      "Guided workflows and clear SOPs reduce training time, support casual and rotating staff, and ensure procedures are followed the same way everywhere.",
  },
]

const WORK_PROJECTS = [
  {
    id: "work-project-3",
    title: "YCF DEV",
    services: ["Portfolio", "Partnership", "UI UX Design"],
    imageUrl:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "work-project-1",
    title: "Stridath Ecommerce",
    services: ["E-Commerce", "Branding", "UI UX Design", "Development"],
    imageUrl:
      "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "work-project-2",
    title: "Marketing Agency",
    services: ["Partnership", "UI UX Design", "Development"],
    imageUrl:
      "https://images.unsplash.com/photo-1683803055067-1ca1c17cb2b9?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

const ACHIEVEMENTS = [
  {
    id: "achivement-1",
    title: "4",
    description: "site of the day",
    bg: "rgb(58,148,118)",
  },
  {
    id: "achivement-2",
    title: "60+",
    description: "website created",
    bg: "rgb(195,97,158)",
  },
  {
    id: "achivement-3",
    title: "5+",
    description: "years of experience",
    bg: "rgb(202,128,53)",
  },
  {
    id: "achivement-4",
    title: "6+",
    description: "component created",
    bg: "rgb(135,95,195)",
  },
]
const Process = () => {
  return (
    <div className="container min-h-svh place-content-center bg-stone-50 px-6 text-stone-900 xl:px-12">
      <div className="text-center mb-8">
        <h5 className=" text-xs uppercase tracking-wide">safetykit features</h5>
        <h2 className="mb-6 mt-4 text-4xl font-bold tracking-tight">
          How SafetyKit Streamlines{" "}
          <span className="text-indigo-500">Kit Compliance</span>
        </h2>
        <p className="max-w-prose text-sm mx-auto">
          SafetyKit makes kit compliance simple and repeatable with core modules designed for healthcare and safety environments. From mobile checks to audit-ready reports, ensure safety and efficiency.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 xl:gap-12">
        <div className="md:col-span-1 flex justify-center self-start md:sticky md:top-0 md:py-12">
          <DonutChartDemo />
        </div>
        <div className="md:col-span-2">
          <ContainerScroll className="min-h-[200vh] space-y-8 py-12">
            {PROCESS_PHASES.map((phase, index) => (
              <CardSticky
                key={phase.id}
                index={index + 2}
                className="rounded-2xl border p-8 shadow-md backdrop-blur-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="my-6 text-2xl font-bold tracking-tighter">
                    {phase.title}
                  </h2>
                  <h3 className="text-2xl font-bold text-indigo-500">
                    {String(index + 1).padStart(2, "0")}
                  </h3>
                </div>

                <p className="text-foreground">{phase.description}</p>
              </CardSticky>
            ))}
          </ContainerScroll>
        </div>
      </div>
    </div>
  )
}

const Work = () => {
  return (
    <div className="container min-h-svh place-content-center bg-slate-900 p-12 text-stone-50">
      <div className="text-center">
        <h5 className=" text-xs uppercase tracking-wide">latest projects</h5>
        <h2 className="mb-4 mt-1 text-4xl font-bold tracking-tight">
          Get a glimpse of <span className="text-indigo-500">our work</span>
        </h2>
        <p className="mx-auto max-w-prose text-sm text-muted/80">
          From ecommerce to startup landing pages and singl/multi page websites,
          building fully responsive and functional website that showcase your
          product and your unique identity.
        </p>
      </div>
      <ContainerScroll className="min-h-[500vh] py-12">
        {WORK_PROJECTS.map((project, index) => (
          <CardSticky
            key={project.id}
            index={index}
            className="w-full overflow-hidden rounded-sm border border-x-indigo-900 border-y-indigo-500 bg-indigo-950"
            incrementY={60}
            incrementZ={5}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
              <h2 className="text-2xl font-bold tracking-tighter">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-1">
                {project.services.map((service) => (
                  <div
                    key={service}
                    className="flex rounded-xl bg-indigo-900 px-2 py-1"
                  >
                    <span className="text-xs tracking-tighter text-muted">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <img
              className="size-full object-cover"
              width="100%"
              height="100%"
              src={project.imageUrl}
            />
          </CardSticky>
        ))}
      </ContainerScroll>
    </div>
  )
}

const Achievements = () => {
  return (
    
      <ContainerScroll className="min-h-[400vh] place-items-center space-y-8 p-12 text-center text-zinc-50">
        {ACHIEVEMENTS.map((achievement, index) => (
          <CardSticky
            key={achievement.id}
            incrementY={20}
            index={index + 2}
            className="flex h-72 w-[420px] flex-col place-content-center justify-evenly rounded-2xl  border border-current p-8 shadow-md"
            style={{ rotate: index + 2, background: achievement.bg }}
          >
            <h1 className="text-left text-6xl font-semibold opacity-80">
              {achievement.title}
            </h1>
            <div className="place-items-end text-right">
              <h3 className="max-w-[10ch] text-wrap  text-4xl font-semibold capitalize tracking-tight">
                {achievement.description}
              </h3>
            </div>
          </CardSticky>
        ))}
      </ContainerScroll>
    
  )
}
export { Process, Work, Achievements }