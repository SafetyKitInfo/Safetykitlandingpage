import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Compliance that runs itself",
      description:
        "SafetyKit continuously monitors inspections, expiries, and risk rules in the background, ensuring nothing is missed and compliance is maintained without manual follow-up.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Remove expiry risk before it becomes a problem",
      description:
        "Predictive alerts surface items approaching expiry early, giving teams time to act and preventing unsafe or non-compliant equipment from ever being used.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Lower operational cost through smarter inventory control",
      description:
        "Usage patterns and automated alerts reduce over-ordering, prevent stockpiling, and cut unnecessary replacement costs across sites.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Always audit-ready",
      description:
        "Every inspection, action, and update is automatically logged, time-stamped, and exportable, dramatically reducing audit preparation time and stress.",
      icon: <IconCloud />,
    },
    {
      title: "Clear visibility across every centre",
      description:
        "A single real-time view shows compliance status by centre, room, or asset, helping leaders identify risk trends and intervene early.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Faster onboarding, consistent execution",
      description:
        "Guided workflows and clear SOPs reduce training time, support casual and rotating staff, and ensure procedures are followed the same way everywhere.",
      icon: <IconHelp />,
    },
    {
      title: "Mobile-first design",
      description:
        "Offline-capable mobile app for real-time checks, scans, and updates, ensuring compliance even in low-connectivity environments.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Comprehensive reporting",
      description:
        "Generate detailed reports on kit status, expiry trends, and compliance metrics to demonstrate safety excellence to auditors and stakeholders.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};