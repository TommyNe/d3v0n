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

              <p className="mt-4 text-base sm:text-lg text-zinc-300">
                Hallo, ich bin Thomas, Softwareentwickler und ehemaliger
                Metallbau Meister. Neben meinem Beruf programmiere ich aus
                Leidenschaft – alle meine eigenen Projekte entstehen
                ehrenamtlich oder für mich selbst, einfach weil ich Freude daran
                habe, Ideen in funktionierende Anwendungen zu verwandeln.
              </p>
              <p className="mt-4 text-base sm:text-lg text-zinc-300">
                Ich arbeite mit PHP (Laravel, Symfony), TypeScript, React, React
                Native und Expo, oft in Verbindung mit Docker, Redis, Traefik
                und PostgreSQL. Mich begeistert das Zusammenspiel aus stabiler
                Backend-Architektur, durchdachtem Frontend-Design und
                automatisierten Entwicklungsprozessen, die zusammen moderne,
                wartbare Software ermöglichen.
              </p>
              <hr />

              <h2 className="text-xl">Speisewelt</h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-300">
                Ein besonderes Herzensprojekt ist Speisewelt – eine Plattform,
                die ich gemeinsam mit zwei Kollegen betreibe. Mit Speisewelt
                möchten wir digitale Speisekarten an einem Ort zugänglich machen
                und damit Restaurants, Cafés und Gästen gleichermaßen das Leben
                erleichtern. Ich bin dabei verantwortlich für die
                App-Entwicklung mit React Native und Expo, während meine
                Kollegen sich um Design, Redaktion und Backend-Prozesse kümmern.
              </p>
              <p className="mt-4 text-base sm:text-lg text-zinc-300">
                Speisewelt ist für mich mehr als nur ein Projekt – es verbindet
                meine Leidenschaft für Softwareentwicklung mit meiner
                Begeisterung für gutes Essen und moderne Technologie.
              </p>

              <a href={"https://speisewelt.com"}> speisewelt.com </a>
              <hr />
              <h2>Technik & Interessen </h2>

              <ul>
                <li>
                  Sprachen: PHP, TypeScript, React, React Native, Python,
                  Java{" "}
                </li>
                <li>
                  Frameworks & Tools: Laravel, Symfony, Filament, EasyAdmin,
                  Expo{" "}
                </li>
                <li>
                  DevOps & Infrastruktur: Docker, Traefik, GitLab CI/CD, Redis,
                  PostgreSQL
                </li>{" "}
                <li>Systeme: macOS, Linux, FreeBSD, Proxmox, OpenMediaVault</li>
                <li>
                  {" "}
                  Smart-Home & Hardware: Raspberry Pi, Home Assistant,
                  n8n-Automationen, lokale Sprachassistenten
                </li>
              </ul>

              <p className="mt-4 text-base sm:text-lg text-zinc-300">
                Ich betreibe zu Hause ein eigenes kleines Homelab,
                experimentiere mit Raspberry Pis, FreeBSD-Servern und Home
                Assistant. Das ist mein persönlicher Spielplatz – kein Beruf,
                sondern reines Hobby, das mich ständig Neues entdecken lässt.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
