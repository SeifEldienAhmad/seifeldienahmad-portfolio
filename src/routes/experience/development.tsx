import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { ExperienceIdentity } from "../../components/ExperienceIdentity";

export const Route = createFileRoute("/experience/development")({
  component: DevelopmentPage,
});

const cvPath =
  "/CV/Seif%20Eldien%20Ahmad%20Mohammad%20-%20Software%20Developer%20CV.pdf";
const cvFilename = "Seif Eldien Ahmad Mohammad - Software Developer CV.pdf";

const credentials = [
  {
    title: "Python Essentials 1",
    image: "/images/certificates/Python Essentials 1.jpeg",
  },
  {
    title: "Python Essentials 2",
    image: "/images/certificates/Python Essential 2.jpg",
  },
  {
    title: "Networking Basics — Cisco",
    image: "/images/certificates/Networking Basics.jpg",
  },
];

const technologies = [
  "Python",
  "Bash",
  "Java (Basic)",
  "Git / GitHub",
  "Linux",
];

function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <header className="border-b border-white/5 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            to="/experience"
            className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-red-brand"
          >
            ← Experience
          </Link>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-text-dim">
            Development
          </span>
        </div>
      </header>

      <ExperienceIdentity
        action={
          <a
            href={cvPath}
            download={cvFilename}
            className="clip-cut-sm inline-flex items-center gap-2 border border-red-brand/40 bg-red-brand/10 px-4 py-2.5 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-red-brand transition-colors hover:border-red-brand hover:bg-red-brand hover:text-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-brand"
          >
            <Download aria-hidden="true" size={16} />
            Download Development CV
          </a>
        }
      />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <section
          aria-labelledby="development-title"
          className="border-b border-white/10 pb-10"
        >
          <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-red-brand">
            Programming / Automation / Technical projects
          </p>
          <h1
            id="development-title"
            className="max-w-4xl font-display text-3xl font-bold uppercase leading-tight tracking-[0.02em] sm:text-4xl lg:text-5xl"
          >
            Development
          </h1>
          <p className="mt-5 max-w-3xl text-[0.95rem] leading-8 text-text-dim">
            I use scripting and software projects to automate basic security
            tasks and explore practical tooling. My current IT support role at
            Arslan Tech is one part of a broader professional journey; this page
            highlights development work, independent projects, and relevant
            programming study.
          </p>
        </section>

        <section
          aria-labelledby="projects-title"
          className="border-b border-white/10 py-10"
        >
          <div className="mb-6">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-red-brand">
              Selected work
            </p>
            <h2
              id="projects-title"
              className="mt-2 font-display text-2xl font-semibold uppercase tracking-[0.04em] sm:text-3xl"
            >
              Tools &amp; Projects
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-text-dim">
              A small selection of personal and security-focused development
              work. These are practical projects and utilities, not commercial
              production systems.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="flex flex-col border border-white/8 bg-bg-panel p-5">
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-red-brand">
                Security automation
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold uppercase">
                Python Security Utilities
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-text-dim">
                Python scripts for automating basic security tasks such as
                scanning and parsing data.
              </p>
            </article>

            <article className="flex flex-col border border-white/8 bg-bg-panel p-5">
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-red-brand">
                Offensive security tooling
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold uppercase">
                ghost0 Assistant
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-text-dim">
                An AI-assisted penetration testing project with local LLM
                integration, tool orchestration, command workflows, and
                offensive security automation features.
              </p>
              <a
                href="https://github.com/SeifEldienAhmad/ghost0-Assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-mono text-[0.68rem] uppercase tracking-[0.08em] text-red-brand hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-brand"
              >
                View repository →
              </a>
            </article>

            <article className="flex flex-col border border-white/8 bg-bg-panel p-5">
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-red-brand">
                Scripting
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold uppercase">
                MyBashScripts
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-text-dim">
                A collection of Bash scripts for automating tasks and supporting
                productivity in Linux environments.
              </p>
              <a
                href="https://github.com/SeifEldienAhmad/BashScripts"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-mono text-[0.68rem] uppercase tracking-[0.08em] text-red-brand hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-brand"
              >
                View repository →
              </a>
            </article>
          </div>
        </section>

        <section
          aria-labelledby="skills-title"
          className="border-b border-white/10 py-10"
        >
          <div className="mb-6">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-red-brand">
              Tools &amp; languages
            </p>
            <h2
              id="skills-title"
              className="mt-2 font-display text-2xl font-semibold uppercase tracking-[0.04em] sm:text-3xl"
            >
              Development Toolkit
            </h2>
          </div>
          <ul className="flex flex-wrap gap-2.5">
            {technologies.map((technology) => (
              <li
                key={technology}
                className="border border-white/10 bg-bg-panel px-3.5 py-2 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-steel-light"
              >
                {technology}
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-text-dim">
            Python study covered fundamentals, basic object-oriented
            programming, and data structures, with more than 40 practical labs
            and exercises completed. My programming work is focused on practical
            scripts and tools.
          </p>
        </section>

        <section
          aria-labelledby="development-credentials-title"
          className="pt-10"
        >
          <div className="mb-6">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-red-brand">
              Training &amp; certifications
            </p>
            <h2
              id="development-credentials-title"
              className="mt-2 font-display text-2xl font-semibold uppercase tracking-[0.04em] sm:text-3xl"
            >
              Development Credentials
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map((credential) => (
              <a
                key={credential.title}
                href={credential.image}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-32 items-center gap-4 border border-white/8 bg-bg-panel p-4 transition-colors hover:border-red-brand/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-brand"
              >
                <img
                  src={credential.image}
                  alt=""
                  loading="lazy"
                  className="h-20 w-24 shrink-0 border border-white/10 bg-black object-contain"
                />
                <span className="font-display text-sm uppercase leading-6 text-text transition-colors group-hover:text-red-brand">
                  {credential.title}
                </span>
                <span className="sr-only">
                  Open certificate image in a new tab
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
