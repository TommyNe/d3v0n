import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "../Components/Container.tsx";
// NEW: Motion-Helpers (wie auf /about, /impress, /privacy)
import { ParallaxLayer } from "../Components/ParalaxLayer.tsx";
import { Reveal } from "../Components/Reveal";

export const Route = createFileRoute("/techstack")({
  component: RouteComponent,
});

function RouteComponent() {
  // DRY: Übersichtskarten als Datenquelle
  const overview = [
    ["Frontend", "React, TypeScript, TanStack Router, Tailwind, Vite"],
    ["Mobile", "React Native, Expo (EAS), Expo Router"],
    ["Backend (PHP)", "Laravel, Symfony, Filament / EasyAdmin"],
    ["Daten", "PostgreSQL, MySQL, Redis"],
    ["DevOps", "Docker, Traefik, GitLab CI/CD, GitHub Actions, NGINX Unit"],
    ["Plattform", "macOS, Linux, FreeBSD, Proxmox, OpenMediaVault, VPS"],
  ] as const;

  // TOC
  const toc = [
    ["overview", "Übersicht"],
    ["frontend", "Frontend (Web)"],
    ["mobile", "Mobile (React Native)"],
    ["backend", "Backend (PHP)"],
    ["data", "Datenhaltung"],
    ["devops", "DevOps & Infrastruktur"],
    ["qa", "Qualitätssicherung"],
    ["cta", "Kontakt / CTA"],
  ] as const;

  return (
    <section className="relative overflow-hidden">
      {/* Parallax-Vignette */}
      <ParallaxLayer
        speed={-0.24}
        className="pointer-events-none absolute inset-0 -top-[10vh]"
      >
        <div className="h-full w-full bg-[radial-gradient(35rem_25rem_at_60%_-10%,rgba(109,40,217,0.25),transparent_70%)]" />
      </ParallaxLayer>

      <Container>
        <div className="py-16 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl text-left">
            {/* Header */}
            <Reveal>
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none">
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                  Tech-Stack
                </span>
              </h1>
            </Reveal>

            {/* Intro */}
            <Reveal>
              <section
                className="border-b border-white/5 py-10 sm:py-14"
                aria-describedby="stack-intro"
              >
                <p
                  id="stack-intro"
                  className="mt-2 max-w-3xl text-base sm:text-lg text-zinc-300"
                >
                  Diese Seite beschreibt meinen produktiven Stack in Frontend,
                  Mobile, Backend, Datenhaltung, DevOps, Infrastruktur &
                  Qualitätssicherung — technisch dokumentarisch, mit Fokus auf
                  Stabilität, Wartbarkeit und moderne Toolchains.
                </p>
              </section>
            </Reveal>

            {/* Layout: Sticky TOC links + Content */}
            <div className="relative grid gap-8 py-10 sm:py-12 lg:grid-cols-[16rem,1fr]">
              {/* Sticky TOC */}
              <aside className="top-24 hidden lg:block lg:sticky">
                <nav
                  aria-label="Inhalt"
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm"
                >
                  <ol className="space-y-2">
                    {toc.map(([id, label]) => (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className="text-zinc-300 underline decoration-white/20 underline-offset-2 hover:text-white"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </aside>

              {/* Content */}
              <div className="min-w-0">
                {/* Übersicht */}
                <section id="overview" className="py-6">
                  <Reveal>
                    <h2 className="text-xl sm:text-2xl font-medium text-white">
                      Übersicht
                    </h2>
                  </Reveal>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {overview.map(([title, desc]) => (
                      <Reveal key={title}>
                        <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                          <div className="text-white font-medium">{title}</div>
                          <div className="mt-1 text-sm text-zinc-400">
                            {desc}
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </section>

                {/* Frontend */}
                <section
                  id="frontend"
                  className="py-12 sm:py-16 border-t border-white/5 scroll-mt-24"
                >
                  <Reveal>
                    <h2 className="text-xl sm:text-2xl font-medium text-white">
                      Frontend (Web)
                    </h2>
                  </Reveal>
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <Reveal>
                      <div className="rounded-2xl border border-white/5 p-5">
                        <h3 className="text-white font-medium">
                          Kerntechnologien
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                          <li>
                            •{" "}
                            <span className="text-white">
                              React + TypeScript
                            </span>{" "}
                            – komponentenbasiert, typsicher, wartbar
                          </li>
                          <li>
                            •{" "}
                            <span className="text-white">TanStack Router</span>{" "}
                            – Dateisystem-Routing, Data-Loading, SPA/SSR-ready
                          </li>
                          <li>
                            • <span className="text-white">Tailwind CSS</span> –
                            konsistentes Designsystem, keine CSS-Drift
                          </li>
                          <li>
                            • <span className="text-white">Vite</span> –
                            schnelle DX, HMR, feingranulares Code-Splitting
                          </li>
                          <li>
                            • Tests: <span className="text-white">Vitest</span>{" "}
                            (Unit) &{" "}
                            <span className="text-white">Playwright</span> (E2E)
                          </li>
                        </ul>
                      </div>
                    </Reveal>
                    <Reveal>
                      <div className="rounded-2xl border border-white/5 p-5">
                        <h3 className="text-white font-medium">
                          Warum dieser Stack?
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                          <li>
                            • Hohe Entwicklungsgeschwindigkeit dank Vite &
                            Tailwind
                          </li>
                          <li>
                            • Robuste Navigation & Datenflüsse mit TanStack
                            Router
                          </li>
                          <li>
                            • Saubere Typen & Refactor-Sicherheit mit TypeScript
                          </li>
                          <li>
                            • Gute Testbarkeit (Unit/E2E) und CI-freundliche
                            Builds
                          </li>
                        </ul>
                      </div>
                    </Reveal>
                  </div>

                  <Reveal>
                    <div className="mt-6 rounded-2xl border border-white/5 p-5">
                      <h3 className="text-white font-medium">
                        Routing-Konventionen
                      </h3>
                      <p className="mt-2 text-sm text-zinc-300">
                        SPA-Routes werden serverseitig auf{" "}
                        <code className="text-white">/index.html</code> gefallt
                        (z. B. via <code className="text-white">try_files</code>
                        ). Externe Anker (z. B.{" "}
                        <code className="text-white">#stack</code>)
                        funktionieren ohne Server-Rewrite.
                      </p>
                      <pre className="mt-4 overflow-x-auto rounded-xl bg-black/40 p-4 text-xs text-zinc-200">
                        {`# Beispiel NGINX (Static Hosting für SPA)
location / {
  root   /www;
  index  index.html;
  try_files $uri $uri/ /index.html =404;
}`}
                      </pre>
                    </div>
                  </Reveal>
                </section>

                {/* Mobile */}
                <section
                  id="mobile"
                  className="py-12 sm:py-16 border-t border-white/5 scroll-mt-24"
                >
                  <Reveal>
                    <h2 className="text-xl sm:text-2xl font-medium text-white">
                      Mobile (React Native)
                    </h2>
                  </Reveal>
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <Reveal>
                      <div className="rounded-2xl border border-white/5 p-5">
                        <h3 className="text-white font-medium">Stack</h3>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                          <li>
                            • <span className="text-white">React Native</span>{" "}
                            mit <span className="text-white">Expo</span> (EAS
                            Build, OTA)
                          </li>
                          <li>
                            • Navigation: Expo/React Navigation oder Expo Router
                          </li>
                          <li>
                            • State: leichtgewichtig (z. B. Jotai/Zustand) je
                            Projekt
                          </li>
                        </ul>
                      </div>
                    </Reveal>
                    <Reveal>
                      <div className="rounded-2xl border border-white/5 p-5">
                        <h3 className="text-white font-medium">Ziele</h3>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                          <li>• Schnelle Releases (EAS) & OTA-Updates</li>
                          <li>
                            • Gemeinsamer TS-Code für Web/Native wo sinnvoll
                          </li>
                          <li>• Stabile Performance & Crash-Monitoring</li>
                        </ul>
                      </div>
                    </Reveal>
                  </div>
                </section>

                {/* Backend */}
                <section
                  id="backend"
                  className="py-12 sm:py-16 border-t border-white/5 scroll-mt-24"
                >
                  <Reveal>
                    <h2 className="text-xl sm:text-2xl font-medium text-white">
                      Backend (PHP)
                    </h2>
                  </Reveal>
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <Reveal>
                      <div className="rounded-2xl border border-white/5 p-5">
                        <h3 className="text-white font-medium">
                          Frameworks & Patterns
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                          <li>
                            • <span className="text-white">Laravel</span>{" "}
                            (API-First, Queues/Horizon, Jobs, Events)
                          </li>
                          <li>
                            • <span className="text-white">Symfony</span>{" "}
                            (saubere Bundles, Messenger, Config-Flex)
                          </li>
                          <li>
                            • Admin-UIs:{" "}
                            <span className="text-white">Filament</span> /{" "}
                            <span className="text-white">EasyAdmin</span>
                          </li>
                          <li>
                            • Auth: <span className="text-white">Sanctum</span>{" "}
                            / <span className="text-white">Fortify</span>,
                            Policies/Gates
                          </li>
                          <li>
                            • Tests: <span className="text-white">Pest</span> &
                            PHPUnit (Feature/API)
                          </li>
                        </ul>
                      </div>
                    </Reveal>
                    <Reveal>
                      <div className="rounded-2xl border border-white/5 p-5">
                        <h3 className="text-white font-medium">
                          Warum PHP + Laravel/Symfony?
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                          <li>• Reife Ökosysteme & große Community</li>
                          <li>
                            • Schneller CRUD/Admin-Durchstich mit
                            Filament/EasyAdmin
                          </li>
                          <li>• Gute Teststory, Queues, Caching, Eventing</li>
                          <li>
                            • Klare Trennung von Domain-Logik und Transport
                          </li>
                        </ul>
                      </div>
                    </Reveal>
                  </div>
                </section>

                {/* Datenhaltung */}
                <section
                  id="data"
                  className="py-12 sm:py-16 border-t border-white/5 scroll-mt-24"
                >
                  <Reveal>
                    <h2 className="text-xl sm:text-2xl font-medium text-white">
                      Datenhaltung
                    </h2>
                  </Reveal>
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <Reveal>
                      <div className="rounded-2xl border border-white/5 p-5">
                        <h3 className="text-white font-medium">PostgreSQL</h3>
                        <p className="mt-2 text-sm text-zinc-300">
                          Primäre relationale Datenbank: Migrations,
                          Constraints, Views, performante Indizes (GIN/BTREE),
                          JSONB für flexible Felder.
                        </p>
                      </div>
                    </Reveal>
                    <Reveal>
                      <div className="rounded-2xl border border-white/5 p-5">
                        <h3 className="text-white font-medium">Redis</h3>
                        <p className="mt-2 text-sm text-zinc-300">
                          Caching (App/HTTP), Sessions, Queues/Rate-Limiting.
                          Fokus auf deterministische Cache-Keys & klare
                          TTL-Strategien.
                        </p>
                      </div>
                    </Reveal>
                  </div>
                </section>

                {/* DevOps & Infrastruktur */}
                <section
                  id="devops"
                  className="py-12 sm:py-16 border-t border-white/5 scroll-mt-24"
                >
                  <Reveal>
                    <h2 className="text-xl sm:text-2xl font-medium text-white">
                      DevOps & Infrastruktur
                    </h2>
                  </Reveal>

                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <Reveal>
                      <div className="rounded-2xl border border-white/5 p-5">
                        <h3 className="text-white font-medium">
                          Container & Ingress
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                          <li>
                            • <span className="text-white">Docker Compose</span>{" "}
                            pro Projekt (App, DB, Redis, Worker)
                          </li>
                          <li>
                            • <span className="text-white">Traefik</span> als
                            Reverse-Proxy (TLS, ACME, Middlewares,
                            Docker-Labels)
                          </li>
                          <li>
                            • <span className="text-white">NGINX Unit</span> für
                            PHP-Apps (leichtgewichtig, JSON-Config)
                          </li>
                        </ul>
                      </div>
                    </Reveal>

                    <Reveal>
                      <div className="rounded-2xl border border-white/5 p-5">
                        <h3 className="text-white font-medium">CI/CD</h3>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                          <li>
                            • <span className="text-white">GitLab CI/CD</span>:
                            Build → Test → Image → Deploy
                          </li>
                          <li>
                            • Image-Versionierung per Commit-SHA/Tag, .env via
                            Secrets
                          </li>
                          <li>
                            • Healthchecks & Zero-Downtime-Rollouts pro Service
                          </li>
                        </ul>
                      </div>
                    </Reveal>
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <Reveal>
                      <div className="rounded-2xl border border-white/5 p-5">
                        <h3 className="text-white font-medium">Plattformen</h3>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                          <li>
                            • <span className="text-white">VPS</span> (z. B.
                            Strato) als Produktions-Host
                          </li>
                          <li>
                            •{" "}
                            <span className="text-white">
                              macOS / Linux / FreeBSD
                            </span>{" "}
                            dev & homelab
                          </li>
                          <li>
                            • <span className="text-white">Proxmox</span> +{" "}
                            <span className="text-white">OpenMediaVault</span>{" "}
                            für VM/Storage
                          </li>
                        </ul>
                      </div>
                    </Reveal>

                    <Reveal>
                      <div className="rounded-2xl border border-white/5 p-5">
                        <h3 className="text-white font-medium">
                          Sicherheit & Compliance
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                          <li>
                            • HTTPS by default (ACME/Let’s Encrypt, HSTS über
                            Proxy)
                          </li>
                          <li>
                            • Minimal-Images, non-root-User, restriktive
                            Netzwerke
                          </li>
                          <li>• Secrets via CI, getrennte Stages/Envs</li>
                        </ul>
                      </div>
                    </Reveal>
                  </div>
                </section>

                {/* Qualitätssicherung */}
                <section
                  id="qa"
                  className="py-12 sm:py-16 border-t border-white/5 scroll-mt-24"
                >
                  <Reveal>
                    <h2 className="text-xl sm:text-2xl font-medium text-white">
                      Qualitätssicherung
                    </h2>
                  </Reveal>
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <Reveal>
                      <div className="rounded-2xl border border-white/5 p-5">
                        <h3 className="text-white font-medium">
                          Tests & Linting
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                          <li>
                            • Frontend: Vitest (Unit), Playwright (E2E), ESLint,
                            Prettier
                          </li>
                          <li>
                            • Backend: Pest/PHPUnit, PHPStan/Psalm, PHP-CS-Fixer
                          </li>
                          <li>• Pipelines brechen bei Test-/Lint-Fehlern</li>
                        </ul>
                      </div>
                    </Reveal>
                    <Reveal>
                      <div className="rounded-2xl border border-white/5 p-5">
                        <h3 className="text-white font-medium">
                          Build-Artefakte & Releases
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                          <li>
                            • Deterministische Builds (Lockfiles,
                            reproduzierbare Images)
                          </li>
                          <li>
                            • Versionierung per Tag/SHA, Changelogs aus Commits
                          </li>
                          <li>• Rollback-Strategien über Image-Pinning</li>
                        </ul>
                      </div>
                    </Reveal>
                  </div>
                </section>

                {/* CTA */}
                <section
                  id="cta"
                  className="py-12 sm:py-16 border-t border-white/5 scroll-mt-24"
                >
                  <Reveal>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
                      <h2 className="text-xl sm:text-2xl font-medium text-white">
                        Fragen zum Stack?
                      </h2>
                      <p className="mt-2 text-sm sm:text-base text-zinc-300">
                        Ich teile gerne Erfahrungen, Benchmarks und
                        Deployment-Rezepte – von Traefik-Labels bis
                        Redis-TTL-Strategien.
                      </p>
                      <div className="mt-4">
                        <Link
                          to="/contact"
                          className="inline-flex items-center rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15"
                        >
                          Kontakt aufnehmen
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
