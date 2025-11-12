import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../Components/Container";
import { ParallaxLayer } from "../Components/ParalaxLayer.tsx";
import { Reveal } from "../Components/Reveal.tsx";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft Vignette als Parallax-Hintergrund */}
      <ParallaxLayer
        speed={-0.25}
        className="pointer-events-none absolute inset-0 -top-[10vh]"
      >
        <div className="h-full w-full bg-[radial-gradient(35rem_25rem_at_60%_-10%,rgba(109,40,217,0.25),transparent_70%)]" />
      </ParallaxLayer>

      {/* Zarte diagonale Shapes als zusätzlicher Layer (optional) */}
      <ParallaxLayer
        speed={-0.12}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-24 top-32 h-64 w-64 rotate-12 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -left-16 bottom-16 h-48 w-48 -rotate-6 rounded-full bg-sky-400/10 blur-3xl" />
      </ParallaxLayer>

      <Container>
        <div className="py-16 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl text-left">
            <div>
              <Reveal>
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none">
                  <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                    Über mich
                  </span>
                </h1>
              </Reveal>

              <section className="max-w-3xl mx-auto px-4 py-12 text-zinc-200">
                <Reveal delay={0.02}>
                  <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
                    Hallo, ich bin{" "}
                    <span className="font-semibold text-white">Thomas</span>,
                    Softwareentwickler. Neben meinem Beruf programmiere ich aus
                    Leidenschaft – alle meine eigenen Projekte entstehen
                    ehrenamtlich oder für mich selbst, einfach weil ich Freude
                    daran habe, Ideen in funktionierende Anwendungen zu
                    verwandeln.
                  </p>
                </Reveal>

                <Reveal delay={0.06}>
                  <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
                    Ich arbeite mit{" "}
                    <span className="font-medium text-white">PHP</span>{" "}
                    (Laravel, Symfony),{" "}
                    <span className="font-medium text-white">TypeScript</span>,{" "}
                    <span className="font-medium text-white">React</span>,{" "}
                    <span className="font-medium text-white">React Native</span>{" "}
                    und <span className="font-medium text-white">Expo</span> –
                    oft in Verbindung mit{" "}
                    <span className="font-medium text-white">Docker</span>,{" "}
                    <span className="font-medium text-white">Redis</span>,{" "}
                    <span className="font-medium text-white">Traefik</span> und{" "}
                    <span className="font-medium text-white">PostgreSQL</span>.
                    Mich begeistert das Zusammenspiel aus stabiler
                    Backend-Architektur, durchdachtem Frontend-Design und
                    automatisierten Entwicklungsprozessen, die zusammen moderne,
                    wartbare Software ermöglichen.
                  </p>
                </Reveal>

                <hr className="my-10 border-white/10" />

                <Reveal>
                  <h2 className="text-2xl font-semibold text-white mb-2">
                    Speisewelt
                  </h2>
                </Reveal>
                <Reveal delay={0.04}>
                  <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
                    Ein besonderes Herzensprojekt ist{" "}
                    <span className="font-medium text-white">Speisewelt</span> –
                    eine Plattform, die ich gemeinsam mit zwei Kollegen
                    betreibe. Mit Speisewelt möchten wir digitale Speisekarten
                    an einem Ort zugänglich machen und damit Restaurants, Cafés
                    und Gästen gleichermaßen das Leben erleichtern. Ich bin
                    dabei verantwortlich für die App-Entwicklung mit React
                    Native und Expo, während meine Kollegen sich um Design,
                    Redaktion und Backend-Prozesse kümmern.
                  </p>
                </Reveal>
                <Reveal delay={0.06}>
                  <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
                    Speisewelt ist für mich mehr als nur ein Projekt – es
                    verbindet meine Leidenschaft für Softwareentwicklung mit
                    meiner Begeisterung für gutes Essen und moderne Technologie.
                  </p>
                </Reveal>
                <Reveal delay={0.08}>
                  <a
                    href="https://speisewelt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-indigo-300 hover:text-indigo-200 underline decoration-indigo-400/40"
                  >
                    speisewelt.com
                  </a>
                </Reveal>

                <hr className="my-10 border-white/10" />

                <Reveal>
                  <h2 className="text-2xl font-semibold text-white mb-2">
                    Technik &amp; Interessen
                  </h2>
                </Reveal>

                {/* Stagger: leichte Verzögerung je Listeneintrag */}
                <ul className="mt-4 list-disc pl-6 space-y-2 text-base sm:text-lg text-zinc-300">
                  <Reveal>
                    <li>
                      <span className="font-medium text-white">Sprachen:</span>{" "}
                      PHP, TypeScript, React, React Native, Python, Java
                    </li>
                  </Reveal>
                  <Reveal delay={0.04}>
                    <li>
                      <span className="font-medium text-white">
                        Frameworks &amp; Tools:
                      </span>{" "}
                      Laravel, Symfony, Filament, EasyAdmin, Expo
                    </li>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <li>
                      <span className="font-medium text-white">
                        DevOps &amp; Infrastruktur:
                      </span>{" "}
                      Docker, Traefik, GitLab CI/CD, Redis, PostgreSQL
                    </li>
                  </Reveal>
                  <Reveal delay={0.12}>
                    <li>
                      <span className="font-medium text-white">Systeme:</span>{" "}
                      macOS, Linux, FreeBSD, Proxmox, OpenMediaVault
                    </li>
                  </Reveal>
                  <Reveal delay={0.16}>
                    <li>
                      <span className="font-medium text-white">
                        Smart-Home &amp; Hardware:
                      </span>{" "}
                      Raspberry Pi, Home Assistant, n8n-Automationen, lokale
                      Sprachassistenten
                    </li>
                  </Reveal>
                </ul>

                <Reveal delay={0.06}>
                  <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed">
                    Ich betreibe zu Hause ein eigenes kleines Homelab,
                    experimentiere mit Raspberry Pis, FreeBSD-Servern und Home
                    Assistant. Das ist mein persönlicher Spielplatz – kein
                    Beruf, sondern reines Hobby, das mich ständig Neues
                    entdecken lässt.
                  </p>
                </Reveal>
              </section>
            </div>
          </div>
        </div>
      </Container>

      {/* Dezenter Section-Separator mit Parallax */}
      <ParallaxLayer
        speed={-0.18}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36 translate-y-10"
      >
        <div className="mx-auto h-full max-w-6xl opacity-20 [background:radial-gradient(40rem_12rem_at_50%_0,theme(colors.violet.600),transparent)]" />
      </ParallaxLayer>
    </section>
  );
}
