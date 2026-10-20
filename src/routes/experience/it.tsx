import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { CredentialPreview } from "../../components/CredentialPreview";
import { ExperienceIdentity } from "../../components/ExperienceIdentity";

export const Route = createFileRoute("/experience/it")({
  component: ITPage,
});

const cvPath = "/CV/Seif%20Eldien%20Ahmad%20Mohammad%20-%20IT.pdf";
const cvFilename = "Seif Eldien Ahmad Mohammad - IT.pdf";

const credentials = [
  {
    title: "IT Support Training — NTI",
    image: "/images/certificates/Seif Eldein Ahmad Mohammad - IT.jpg",
  },
  {
    title: "Networking Basics — Cisco",
    image: "/images/certificates/Networking Basics.jpg",
  },
  {
    title: "Networking Devices & Initial Configuration",
    image:
      "/images/certificates/Networking_Devices_and_Initial_Configuration_certificate.jpg",
  },
  {
    title: "Python Essentials 1",
    image: "/images/certificates/Python Essentials 1.jpeg",
  },
  {
    title: "Python Essentials 2",
    image: "/images/certificates/Python Essential 2.jpg",
  },
];

const fieldNotes = [
  {
    id: "workstation-deployment",
    title: "Windows Support & Workstation Deployment",
    context:
      "Workstation setup tasks included Windows installations, initial configuration, and follow-up support at deployment.",
    details: [
      "Installed Windows on desktop workstations and used Windows Update Assistant for system updates and drivers.",
      "Connected a PC case and monitor before installing Windows as part of workstation setup.",
      "Investigated a problematic Office 2021 installation and removed the installed files.",
      "Changed a local Windows account password using Ctrl + Alt + Delete.",
      "Continued workstation setup after a hardware issue had been identified and resolved by a colleague.",
    ],
    outcome:
      "Workstation setup continued after the hardware issue was resolved by a colleague.",
    tags: ["Windows Support", "Workstation Deployment", "Troubleshooting"],
  },
  {
    id: "printer-support",
    title: "Printer Installation & Troubleshooting",
    context:
      "Printer work covered client workstations and cashier stations in a restaurant environment.",
    details: [
      "Installed Kyocera printer drivers on client workstations and installed and configured a Kyocera printer over USB.",
      "Explained printer operation and basic troubleshooting procedures to a client.",
      "Installed printers and related equipment for restaurant cashier stations, then performed a basic network connectivity check.",
      "Investigated faint or weak print output and worked on restoring print quality.",
    ],
    outcome:
      "Clients received guidance on printer operation and basic troubleshooting. The faint-output issue was investigated; no resolution is claimed here.",
    tags: ["Printer Support", "Kyocera", "Client Support"],
  },
  {
    id: "cctv-ip-camera",
    title: "CCTV & IP Camera Configuration",
    context:
      "Camera tasks involved IP camera setup, site review, and installation support across construction and restaurant environments.",
    details: [
      "Configured 10 Tiandy IP cameras by assigning IP addresses and setting administrator accounts.",
      "Compared technical drawings with the construction site layout to review proposed camera positions.",
      "Assisted with cable routing and participated in completing CCTV camera installation at the construction site.",
      "Installed two analog CCTV cameras in a restaurant storage facility.",
      "Gained practical exposure to both analog and IP CCTV systems.",
    ],
    outcome:
      "The 10 Tiandy cameras were assigned IP addresses and administrator accounts. NVR integration was handled by a senior colleague.",
    tags: ["CCTV", "IP Cameras", "Site Survey", "Installation"],
  },
  {
    id: "network-physical-infrastructure",
    title: "Networking & Physical Infrastructure",
    context:
      "Hands-on network work focused on physical connections, cable termination, rack tasks, and basic connectivity checks.",
    details: [
      "Practiced RJ45 Ethernet cable termination and crimping.",
      "Traced a non-working network point to a disconnected connection inside the rack and reconnected it.",
      "Participated in physical network infrastructure installation, including rack setup and patching.",
      "Performed basic network connectivity checks during client-site installations.",
      "Assisted with cable routing and physical infrastructure work during CCTV installations.",
    ],
    outcome:
      "The disconnected rack connection was reconnected. Work described here did not involve advanced switching, VLANs, routing, or network design.",
    tags: ["Networking", "Infrastructure", "RJ45", "Troubleshooting"],
  },
  {
    id: "server-rack-voip",
    title: "Server Rack & VoIP Infrastructure",
    context:
      "A VoIP server was relocated to a new location in a call-center environment.",
    details: [
      "Assisted with moving the VoIP server and mounting it in a rack.",
      "Helped test physical connectivity and connection points after the relocation.",
      "Participated in rack organization and physical infrastructure installation.",
      "Gained introductory exposure to VoIP systems used in the call center.",
    ],
    outcome:
      "Physical connectivity and connection points were tested after relocation. I assisted with the move; I did not configure the VoIP server.",
    tags: ["VoIP", "Server Rack", "Infrastructure"],
  },
  {
    id: "biometric-attendance",
    title: "Biometric Attendance & HR Systems",
    context:
      "Investigated a fingerprint attendance device that was not appearing in the HR system.",
    details: [
      "Tested the fingerprint attendance device and checked its connection.",
      "Identified that the connection required re-termination/re-crimping.",
    ],
    outcome:
      "The investigation pointed to a physical connection requiring re-termination. No HR software or backend changes are claimed.",
    tags: ["Troubleshooting", "Biometrics", "Physical Connectivity"],
  },
  {
    id: "client-site-projects",
    title: "Client-Site Infrastructure Projects",
    context:
      "Participated in field work across new-company installations, restaurants, construction sites, storage facilities, and workstation deployments.",
    details: [
      "Supported a new-company infrastructure project involving CCTV, networking, and sound-system installations.",
      "Assisted the team with rack setup, patching, and physical infrastructure deployment.",
      "Set up equipment for restaurant cashier stations, including printers and basic network checks.",
      "Worked across client environments including construction sites, restaurants, storage facilities, and workstation deployments.",
    ],
    outcome:
      "The work log reflects participation in team installation tasks. It does not attribute sound-system programming or configuration to my role.",
    tags: ["Client-Site Work", "Infrastructure", "CCTV", "Networking"],
  },
];

function ITPage() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <header className="border-b border-white/5 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <Link
            to="/experience"
            className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-red-brand"
          >
            ← Experience
          </Link>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-text-dim">
            IT Support
          </span>
        </div>
      </header>

      <ExperienceIdentity
        image="/profile-IT.png"
        imageAspectRatio="landscape"
        action={
          <a
            href={cvPath}
            download={cvFilename}
            className="clip-cut-sm inline-flex items-center gap-2 border border-red-brand/40 bg-red-brand/10 px-4 py-2.5 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-red-brand transition-colors hover:border-red-brand hover:bg-red-brand hover:text-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-brand"
          >
            <Download aria-hidden="true" size={16} />
            Download IT CV
          </a>
        }
      />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <section
          aria-labelledby="it-experience-title"
          className="grid gap-8 border-b border-white/10 pb-10 md:grid-cols-[1fr_auto] md:items-center"
        >
          <div>
            <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-red-brand">
              Current role / Arslan Tech
            </p>
            <h1
              id="it-experience-title"
              className="max-w-3xl font-display text-3xl font-bold uppercase leading-tight tracking-[0.02em] sm:text-4xl lg:text-5xl"
            >
              IT Experience — Field Notes &amp; Technical Work
            </h1>
            <p className="mt-5 max-w-3xl text-[0.95rem] leading-8 text-text-dim">
              My current IT support role at Arslan Tech is one part of a broader
              professional journey. These field notes document hands-on support,
              infrastructure deployment, troubleshooting, and client-site
              installations completed as part of the technical team.
            </p>
          </div>
          <div className="flex items-center gap-3 border border-white/5 bg-bg-panel px-4 py-3 md:max-w-48 md:flex-col md:gap-2 md:text-center">
            <img
              src="/images/arslan-tech-logo.png"
              alt="Arslan Tech"
              className="h-14 w-14 shrink-0 object-contain"
              loading="lazy"
            />
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-text-dim">
              Technical team
            </span>
          </div>
        </section>

        <section aria-labelledby="field-notes-title" className="pt-10">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-red-brand">
                Work log
              </p>
              <h2
                id="field-notes-title"
                className="mt-2 font-display text-2xl font-semibold uppercase tracking-[0.04em] sm:text-3xl"
              >
                Field Notes
              </h2>
            </div>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-text-dim">
              Practical work · Team-based delivery
            </span>
          </div>

          <div className="space-y-5">
            {fieldNotes.map((note, index) => (
              <article
                key={note.id}
                aria-labelledby={`${note.id}-title`}
                className="border border-white/8 bg-bg-panel p-5 sm:p-7"
              >
                <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
                  <div>
                    <p className="font-mono text-[0.66rem] uppercase tracking-[0.15em] text-red-brand">
                      Note {String(index + 1).padStart(2, "0")} /{" "}
                      {String(fieldNotes.length).padStart(2, "0")}
                    </p>
                    <h3
                      id={`${note.id}-title`}
                      className="mt-3 font-display text-xl font-semibold uppercase leading-snug sm:text-2xl"
                    >
                      {note.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-text-dim">
                      {note.context}
                    </p>
                    <ul
                      className="mt-5 flex flex-wrap gap-2"
                      aria-label="Categories"
                    >
                      {note.tags.map((tag) => (
                        <li
                          key={tag}
                          className="border border-white/10 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.08em] text-steel-light"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-text-dim">
                      Work performed
                    </h4>
                    <ul className="mt-3 space-y-3">
                      {note.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex gap-3 text-sm leading-7 text-text/90"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-red-brand"
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 border-t border-white/8 pt-4 text-sm leading-7 text-text-dim">
                      <span className="font-mono text-[0.64rem] uppercase tracking-[0.1em] text-red-brand">
                        Scope / outcome:
                      </span>{" "}
                      {note.outcome}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="it-credentials-title"
          className="mt-14 border-t border-white/10 pt-10"
        >
          <div className="mb-6">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-red-brand">
              Training &amp; certifications
            </p>
            <h2
              id="it-credentials-title"
              className="mt-2 font-display text-2xl font-semibold uppercase tracking-[0.04em] sm:text-3xl"
            >
              IT Credentials
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-text-dim">
              Relevant training and certifications supporting my ongoing work
              and development in IT.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map((credential) => (
              <CredentialPreview
                key={credential.title}
                credential={credential}
                className="group flex min-h-32 w-full items-center gap-4 border border-white/8 bg-bg-panel p-4 text-left transition-colors hover:border-red-brand/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-brand"
                thumbnailClassName="h-20 w-24 shrink-0 border border-white/10 bg-black object-contain"
                titleClassName="font-display text-sm uppercase leading-6 text-text transition-colors group-hover:text-red-brand"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
