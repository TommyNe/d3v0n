import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "../Components/Container.tsx";

export const Route = createFileRoute("/techstack")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="relative overflow-hidden">
      {/* soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(35rem_25rem_at_60%_-10%,rgba(109,40,217,0.25),transparent_70%)]" />
      <Container>
        <div className="py-16 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl text-left">
            <div>
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none">
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                  Tech-Stack
                </span>
              </h1>
              <section className="border-b border-white/5 py-14 sm:py-20">
                <div className="mx-auto max-w-5xl px-4">
                  <p className="mt-4 text-base sm:text-lg text-zinc-300">
                    Diese Seite beschreibt meinen produktiven Stack in Frontend,
                    Mobile, Backend, Datenhaltung, DevOps, Infrastruktur &
                    Qualitätssicherung — technisch dokumentarisch, mit Fokus auf
                    Stabilität, Wartbarkeit und moderne Toolchains.
                  </p>
                </div>
              </section>

              {/* Übersicht */}
              <section className="py-12 sm:py-16">
                <div className="mx-auto max-w-5xl px-4">
                  <h2 className="text-xl sm:text-2xl font-medium text-white">
                    Übersicht
                  </h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      [
                        "Frontend",
                        "React, TypeScript, TanStack Router, Tailwind, Vite",
                      ],
                      ["Mobile", "React Native, Expo (EAS), Expo Router"],
                      [
                        "Backend (PHP)",
                        "Laravel, Symfony, Filament / EasyAdmin",
                      ],
                      ["Daten", "PostgreSQL, MySQL, Redis"],
                      [
                        "DevOps",
                        "Docker, Traefik, GitLab CI/CD, GitHub Actions, NGINX Unit",
                      ],
                      [
                        "Plattform",
                        "macOS, Linux, FreeBSD, Proxmox, OpenMediaVault, VPS",
                      ],
                    ].map(([title, desc]) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-white/5 bg-white/5 p-4"
                      >
                        <div className="text-white font-medium">{title}</div>
                        <div className="mt-1 text-sm text-zinc-400">{desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* ... (Frontend, Mobile, Backend unverändert) ... */}

              {/* Datenhaltung */}
              <section className="py-12 sm:py-16 border-t border-white/5">
                <div className="mx-auto max-w-5xl px-4">
                  <h2 className="text-xl sm:text-2xl font-medium text-white">
                    Datenhaltung
                  </h2>
                  <div className="mt-6 grid gap-6 lg:grid-cols-3">
                    <div className="rounded-2xl border border-white/5 p-5">
                      <h3 className="text-white font-medium">PostgreSQL</h3>
                      <p className="mt-2 text-sm text-zinc-300">
                        Primäre relationale Datenbank: Migrations, Constraints,
                        Views, performante Indizes (GIN/BTREE) und JSONB für
                        flexible Strukturen. Ideal für komplexe Anwendungen und
                        Reports.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/5 p-5">
                      <h3 className="text-white font-medium">
                        MySQL / MariaDB
                      </h3>
                      <p className="mt-2 text-sm text-zinc-300">
                        Wird eingesetzt für kleinere oder bestehende Projekte
                        mit kompatiblen Legacy-Schnittstellen. Schneller Start,
                        breite Unterstützung in Hosting-Umgebungen, bewährte
                        Engine für CMS- oder API-Backends.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/5 p-5">
                      <h3 className="text-white font-medium">Redis</h3>
                      <p className="mt-2 text-sm text-zinc-300">
                        Caching, Session-Storage und Queue-Handling. Fokus auf
                        deterministische Keys, klare TTLs und Monitoring der
                        Memory-Usage für stabile Laufzeiten.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* DevOps & Infrastruktur */}
              <section className="py-12 sm:py-16 border-t border-white/5">
                <div className="mx-auto max-w-5xl px-4">
                  <h2 className="text-xl sm:text-2xl font-medium text-white">
                    DevOps & Infrastruktur
                  </h2>

                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
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
                          Reverse Proxy mit ACME, TLS & Middlewares
                        </li>
                        <li>
                          • <span className="text-white">NGINX Unit</span> als
                          flexibler PHP-App-Server mit JSON-Konfiguration
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-white/5 p-5">
                      <h3 className="text-white font-medium">CI/CD</h3>
                      <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                        <li>
                          • <span className="text-white">GitLab CI/CD</span>:
                          Container-Builds, Tests, Deployment per SSH
                        </li>
                        <li>
                          • <span className="text-white">GitHub Actions</span>:
                          leichtgewichtige CI für Open-Source & Mirror-Repos
                        </li>
                        <li>
                          • Build-Pipelines erzeugen Images mit Tags/SHAs und
                          Secrets aus Envs
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-white/5 p-5">
                      <h3 className="text-white font-medium">Plattformen</h3>
                      <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                        <li>
                          • <span className="text-white">VPS</span> (z. B.
                          Strato) als Produktionshost
                        </li>
                        <li>
                          •{" "}
                          <span className="text-white">
                            macOS / Linux / FreeBSD
                          </span>{" "}
                          für Dev & Homelab
                        </li>
                        <li>
                          • <span className="text-white">Proxmox</span> +{" "}
                          <span className="text-white">OpenMediaVault</span> für
                          Virtualisierung & Storage
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-white/5 p-5">
                      <h3 className="text-white font-medium">
                        Sicherheit & Compliance
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                        <li>• HTTPS-only über Traefik & Let's Encrypt</li>
                        <li>
                          • Non-Root-Container, restriktive Netzwerke, minimale
                          Images
                        </li>
                        <li>• CI-Secrets getrennt nach Stages & Umgebungen</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Frontend */}
              <section className="py-12 sm:py-16 border-t border-white/5">
                <div className="mx-auto max-w-5xl px-4">
                  <h2 className="text-xl sm:text-2xl font-medium text-white">
                    Frontend (Web)
                  </h2>
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-white/5 p-5">
                      <h3 className="text-white font-medium">
                        Kerntechnologien
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                        <li>
                          •{" "}
                          <span className="text-white">React + TypeScript</span>{" "}
                          – komponentenbasiert, typsicher, wartbar
                        </li>
                        <li>
                          • <span className="text-white">TanStack Router</span>{" "}
                          – Dateisystem-Routing, Data-Loading, SPA/SSR-ready
                        </li>
                        <li>
                          • <span className="text-white">Tailwind CSS</span> –
                          konsistentes Designsystem, keine CSS-Drift
                        </li>
                        <li>
                          • <span className="text-white">Vite</span> – schnelle
                          DX, HMR, feingranulares Code-Splitting
                        </li>
                        <li>
                          • Tests: <span className="text-white">Vitest</span>{" "}
                          (Unit) &{" "}
                          <span className="text-white">Playwright</span> (E2E)
                        </li>
                      </ul>
                    </div>
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
                          • Robuste Navigation & Datenflüsse mit TanStack Router
                        </li>
                        <li>
                          • Saubere Typen, Autocomplete & Refactor-Sicherheit
                          mit TypeScript
                        </li>
                        <li>
                          • Gute Testbarkeit (Unit/E2E) und CI-freundliche
                          Builds
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/5 p-5">
                    <h3 className="text-white font-medium">
                      Routing-Konventionen
                    </h3>
                    <p className="mt-2 text-sm text-zinc-300">
                      SPA-Routes werden serverseitig auf{" "}
                      <code className="text-white">/index.html</code> gefallt
                      (z. B. via <code className="text-white">try_files</code>).
                      Externe Anker (z. B.{" "}
                      <code className="text-white">#stack</code>) funktionieren
                      ohne Server-Rewrite.
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
                </div>
              </section>

              {/* Mobile */}
              <section className="py-12 sm:py-16 border-t border-white/5">
                <div className="mx-auto max-w-5xl px-4">
                  <h2 className="text-xl sm:text-2xl font-medium text-white">
                    Mobile (React Native)
                  </h2>
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-white/5 p-5">
                      <h3 className="text-white font-medium">Stack</h3>
                      <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                        <li>
                          • <span className="text-white">React Native</span> mit{" "}
                          <span className="text-white">Expo</span> (EAS Build,
                          OTA)
                        </li>
                        <li>
                          • Navigation: Expo/React Navigation oder Expo Router
                        </li>
                        <li>
                          • State: leichtgewichtig (z. B. Jotai/Zustand) je nach
                          Projekt
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-white/5 p-5">
                      <h3 className="text-white font-medium">Ziele</h3>
                      <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                        <li>• Schnelle Releases (EAS) und OTA-Updates</li>
                        <li>
                          • Gemeinsamer TS-Code für Web/Native wo sinnvoll
                        </li>
                        <li>• Stabile Performance & Crash-Monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Backend */}
              <section className="py-12 sm:py-16 border-t border-white/5">
                <div className="mx-auto max-w-5xl px-4">
                  <h2 className="text-xl sm:text-2xl font-medium text-white">
                    Backend (PHP)
                  </h2>
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
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
                          • <span className="text-white">Symfony</span> (saubere
                          Bundles, Messenger, Config-Flex)
                        </li>
                        <li>
                          • Admin-UIs:{" "}
                          <span className="text-white">Filament</span> /{" "}
                          <span className="text-white">EasyAdmin</span>
                        </li>
                        <li>
                          • Auth: <span className="text-white">Sanctum</span> /{" "}
                          <span className="text-white">Fortify</span>,
                          Policies/Gates
                        </li>
                        <li>
                          • Tests: <span className="text-white">Pest</span> &
                          PHPUnit, Feature-/API-Tests, Fakery
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-white/5 p-5">
                      <h3 className="text-white font-medium">
                        Warum PHP + Laravel/Symfony?
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                        <li>• Reife Ökosysteme & große Community</li>
                        <li>
                          • Schneller CRUD-/Admin-Durchstich mit
                          Filament/EasyAdmin
                        </li>
                        <li>• Gute Teststory, Queues, Caching, Eventing</li>
                        <li>
                          • Klare Trennung von Domain-Logik und Transport
                          (HTTP/CLI/Queue)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Datenhaltung */}
              <section className="py-12 sm:py-16 border-t border-white/5">
                <div className="mx-auto max-w-5xl px-4">
                  <h2 className="text-xl sm:text-2xl font-medium text-white">
                    Datenhaltung
                  </h2>
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-white/5 p-5">
                      <h3 className="text-white font-medium">PostgreSQL</h3>
                      <p className="mt-2 text-sm text-zinc-300">
                        Primäre relationalen Datenbank: Migrations, Constraints,
                        Views, performante Indizes (GIN/BTREE), JSONB für
                        flexible Felder.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/5 p-5">
                      <h3 className="text-white font-medium">Redis</h3>
                      <p className="mt-2 text-sm text-zinc-300">
                        Caching (App/HTTP), Sessions, Queues/Rate-Limiting.
                        Fokus auf deterministische Cache-Keys & klare
                        TTL-Strategien.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* DevOps & Infrastruktur */}
              <section className="py-12 sm:py-16 border-t border-white/5">
                <div className="mx-auto max-w-5xl px-4">
                  <h2 className="text-xl sm:text-2xl font-medium text-white">
                    DevOps & Infrastruktur
                  </h2>

                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
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
                          Reverse-Proxy (TLS, ACME, Middlewares, Docker-Labels)
                        </li>
                        <li>
                          • <span className="text-white">NGINX Unit</span> für
                          PHP-Apps (leichtgewichtig, JSON-Config)
                        </li>
                      </ul>
                    </div>

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
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
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
                          <span className="text-white">OpenMediaVault</span> für
                          VM/Storage
                        </li>
                      </ul>
                    </div>

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
                          • Minimal-Images, non-root-User, restriktive Netzwerke
                        </li>
                        <li>• Secrets via CI, getrennte Stages/Envs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Qualitätssicherung */}
              <section className="py-12 sm:py-16 border-t border-white/5">
                <div className="mx-auto max-w-5xl px-4">
                  <h2 className="text-xl sm:text-2xl font-medium text-white">
                    Qualitätssicherung
                  </h2>
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
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
                    <div className="rounded-2xl border border-white/5 p-5">
                      <h3 className="text-white font-medium">
                        Build-Artefakte & Releases
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                        <li>
                          • Deterministische Builds (Lockfiles, reproduzierbare
                          Images)
                        </li>
                        <li>
                          • Versionierung per Tag/SHA, Changelogs aus Commits
                        </li>
                        <li>• Rollback-Strategien über Image-Pinning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Kontakt / CTA */}
              <section className="py-12 sm:py-16 border-t border-white/5">
                <div className="mx-auto max-w-5xl px-4">
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
                </div>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
