/**
 * Family footer — the same strip on every 7Band family site
 * (Sales Tree Coherence Audit, Section 4).
 */

export const FLOW_URL = "https://theflow.7bandfinancialagency.com";
export const EAST_CONSULTING_URL = "https://www.eastconsultingllc.com";
const HUB_URL = "https://www.7bandfinancialagency.com";

const family = [
  { name: "THE FLOW", what: "free weekly webinar", href: FLOW_URL },
  { name: "7Band Financial Agency", what: "life insurance", href: HUB_URL },
  { name: "Arise Credit Pro", what: "credit", href: "/" },
  { name: "East Consulting LLC", what: "business structure", href: EAST_CONSULTING_URL },
];

export default function FamilyFooter() {
  return (
    <div className="border-t border-blue-800/50 bg-blue-950 px-4 py-5">
      <p className="mx-auto max-w-5xl text-center text-xs leading-relaxed text-blue-300 sm:text-sm">
        <span className="font-bold text-white">Part of the 7Band family</span>
        {family.map(({ name, what, href }) => (
          <span key={name}>
            {" · "}
            <a
              href={href}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="font-semibold text-blue-200 underline-offset-2 hover:text-white hover:underline"
            >
              {name}
            </a>{" "}
            — {what}
          </span>
        ))}
      </p>
    </div>
  );
}
