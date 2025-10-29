import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../Components/Container";

export const Route = createFileRoute("/about")({
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
                  Über mich
                </span>
              </h1>
              <section className="max-w-3xl mx-auto px-4 py-12 text-zinc-200">
                <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Hallo, ich bin{" "}
                  <span className="font-semibold text-white">Thomas</span>,
                  Softwareentwickler. Neben meinem Beruf programmiere ich aus
                  Leidenschaft – alle meine eigenen Projekte entstehen
                  ehrenamtlich oder für mich selbst, einfach weil ich Freude
                  daran habe, Ideen in funktionierende Anwendungen zu
                  verwandeln.
                </p>

                <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Ich arbeite mit{" "}
                  <span className="font-medium text-white">PHP</span> (Laravel,
                  Symfony),{" "}
                  <span className="font-medium text-white">TypeScript</span>,{" "}
                  <span className="font-medium text-white">React</span>,{" "}
                  <span className="font-medium text-white">React Native</span>{" "}
                  und <span className="font-medium text-white">Expo</span> – oft
                  in Verbindung mit{" "}
                  <span className="font-medium text-white">Docker</span>,{" "}
                  <span className="font-medium text-white">Redis</span>,{" "}
                  <span className="font-medium text-white">Traefik</span> und{" "}
                  <span className="font-medium text-white">PostgreSQL</span>.
                  Mich begeistert das Zusammenspiel aus stabiler
                  Backend-Architektur, durchdachtem Frontend-Design und
                  automatisierten Entwicklungsprozessen, die zusammen moderne,
                  wartbare Software ermöglichen.
                </p>

                <hr className="my-10 border-white/10" />

                <h2 className="text-2xl font-semibold text-white mb-2">
                  Speisewelt
                </h2>
                <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Ein besonderes Herzensprojekt ist{" "}
                  <span className="font-medium text-white">Speisewelt</span> –
                  eine Plattform, die ich gemeinsam mit zwei Kollegen betreibe.
                  Mit Speisewelt möchten wir digitale Speisekarten an einem Ort
                  zugänglich machen und damit Restaurants, Cafés und Gästen
                  gleichermaßen das Leben erleichtern. Ich bin dabei
                  verantwortlich für die App-Entwicklung mit React Native und
                  Expo, während meine Kollegen sich um Design, Redaktion und
                  Backend-Prozesse kümmern.
                </p>

                <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Speisewelt ist für mich mehr als nur ein Projekt – es
                  verbindet meine Leidenschaft für Softwareentwicklung mit
                  meiner Begeisterung für gutes Essen und moderne Technologie.
                </p>

                <a
                  href="https://speisewelt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-300 hover:text-indigo-200 underline decoration-indigo-400/40"
                >
                  speisewelt.com
                </a>

                <hr className="my-10 border-white/10" />

                <h2 className="text-2xl font-semibold text-white mb-2">
                  Technik &amp; Interessen
                </h2>

                <ul className="mt-4 list-disc pl-6 space-y-2 text-base sm:text-lg text-zinc-300">
                  <li>
                    <span className="font-medium text-white">Sprachen:</span>{" "}
                    PHP, TypeScript, React, React Native, Python, Java
                  </li>
                  <li>
                    <span className="font-medium text-white">
                      Frameworks &amp; Tools:
                    </span>{" "}
                    Laravel, Symfony, Filament, EasyAdmin, Expo
                  </li>
                  <li>
                    <span className="font-medium text-white">
                      DevOps &amp; Infrastruktur:
                    </span>{" "}
                    Docker, Traefik, GitLab CI/CD, Redis, PostgreSQL
                  </li>
                  <li>
                    <span className="font-medium text-white">Systeme:</span>{" "}
                    macOS, Linux, FreeBSD, Proxmox, OpenMediaVault
                  </li>
                  <li>
                    <span className="font-medium text-white">
                      Smart-Home &amp; Hardware:
                    </span>{" "}
                    Raspberry Pi, Home Assistant, n8n-Automationen, lokale
                    Sprachassistenten
                  </li>
                </ul>

                <p className="mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Ich betreibe zu Hause ein eigenes kleines Homelab,
                  experimentiere mit Raspberry Pis, FreeBSD-Servern und Home
                  Assistant. Das ist mein persönlicher Spielplatz – kein Beruf,
                  sondern reines Hobby, das mich ständig Neues entdecken lässt.
                </p>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
