import { createFileRoute, Link } from "@tanstack/react-router";
import { ExperienceIdentity } from "../../components/ExperienceIdentity";

export const Route = createFileRoute("/experience/")({
  component: ExperienceIndex,
});

const cards = [
  {
    title: "Penetration Testing",
    href: "/experience/pentest",
    description: "Hands-on offensive security work focusing on recon, exploitation, and security assessments.",
    highlights: ["Reconnaissance", "Enumeration", "Exploitation", "Reporting"],
  },
  {
    title: "IT Support",
    href: "/experience/it",
    description: "Operational support and systems work covering troubleshooting, networking, and user-facing tech support.",
    highlights: ["Troubleshooting", "Networking", "System Support", "Documentation"],
  },
  {
    title: "Development",
    href: "/experience/development",
    description: "Tooling, scripting, and automation built to support security workflows and productivity.",
    highlights: ["Python", "Bash", "Automation", "Security Tools"],
  },
];

function ExperienceIndex() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <header className="border-b border-white/5 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-red-brand">
            ← Home
          </Link>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-text-dim">
            Experience
          </span>
        </div>
      </header>

      <ExperienceIdentity />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mb-10 space-y-4">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-red-brand">02 / Experience</p>
          <h1 className="font-display text-4xl uppercase tracking-[0.04em] sm:text-5xl">Experience</h1>
          <p className="max-w-2xl text-base leading-8 text-text-dim">
            My work sits across security operations, user support, and development work. Each track below
            reflects a different area of hands-on learning and practical execution.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.href}
              className="group flex min-h-[320px] flex-col justify-between rounded-none border border-white/5 bg-bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-brand/40"
            >
              <div>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-red-brand">// Case</span>
                <h2 className="mt-5 font-display text-[1.8rem] uppercase leading-tight">{card.title}</h2>
                <p className="mt-4 text-[0.9rem] leading-7 text-text-dim">{card.description}</p>
              </div>

              <div className="mt-6 space-y-3">
                {card.highlights.map((item) => (
                  <div key={item} className="border-t border-white/5 pt-3 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-steel-light">
                    {item}
                  </div>
                ))}
              </div>

              <span className="mt-8 inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-text transition-colors group-hover:text-red-brand">
                View details →
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
