import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function ExperienceIdentity({ action }: { action?: ReactNode }) {
  return (
    <section className="border-b border-white/5 bg-bg-panel/30 px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:gap-9">
        <Link
          to="/"
          aria-label="Return to Seif Eldien Ahmad Mohammad's home page"
          className="clip-hex block aspect-square w-36 shrink-0 overflow-hidden border border-red-brand/30 shadow-[0_0_28px_var(--red-glow)] sm:w-44"
        >
          <img
            src="/profile.jpeg"
            alt="Seif Eldien Ahmad Mohammad"
            className="h-full w-full object-cover"
          />
        </Link>
        <div className="text-center sm:text-left">
          <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-red-brand">
            0xdaphantom
          </p>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-[0.03em] sm:text-5xl">
            Seif Eldien Ahmad
            <br className="hidden sm:block" /> Mohammad
          </h2>
          <p className="mt-4 font-mono text-[0.75rem] uppercase tracking-[0.1em] text-text-dim">
            Cybersecurity · IT Support · Development
          </p>
          {action && (
            <div className="mt-5 flex justify-center sm:justify-start">
              {action}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
