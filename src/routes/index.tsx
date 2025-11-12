import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../Components/Container";
import { Card } from "../Components/Card.tsx";
import { DjkTinnen } from "../Components/DjkTinnen.tsx";
import { Etwah } from "../Components/Etwah.tsx";
import { IconNote } from "../Components/IconNote.tsx";
import { Speisewelt } from "../Components/Speisewelt.tsx";

// NEW
import { ParallaxLayer } from "../Components/ParalaxLayer.tsx";
import { Reveal } from "../Components/Reveal";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* Soft Vignette als Parallax-Hintergrund */}
        <ParallaxLayer
          speed={-0.25}
          className="pointer-events-none absolute inset-0 -top-[10vh]"
        >
          <div className="h-full w-full bg-[radial-gradient(35rem_25rem_at_60%_-10%,rgba(109,40,217,0.25),transparent_70%)]" />
        </ParallaxLayer>

        <Container>
          <div className="py-16 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none">
                  <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                    d3vOn
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.05}>
                <p className="mt-6 text-sm sm:text-base text-zinc-400">
                  PHP · TypeScript (React) · Python · Java
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-4 text-base sm:text-lg text-zinc-300">
                  Ich baue hochwertige Web- &amp; Mobile-Lösungen,
                  experimentiere mit AI-Agents und dokumentiere hier ausgewählte
                  Projekte.
                </p>
              </Reveal>

              {/* Dezente Foreground-Bewegung für CTA-Block (falls reaktiviert) */}
              <ParallaxLayer speed={-0.15}>
                <div className="mt-8 flex justify-center">
                  {/* Platzhalter für CTA */}
                </div>
              </ParallaxLayer>
            </div>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section id="projekte" className="pb-20">
        <Container>
          <Reveal>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-white">
              Projekte
            </h2>
          </Reveal>

          {/* Sanftes Staggering der Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <Card
                icon={<IconNote />}
                title="Dorf App Tinnen"
                subtitle="React Native · Expo · Laravel · PostgreSQL · FilamentPHP"
                accent={"violet"}
                onClick={() => console.log("test")}
              >
                Community-App für das Dorf Tinnen: News, Veranstaltungen,
                Vereinsleben, Push-Benachrichtigungen &amp; Deep-Links.
              </Card>
            </Reveal>

            <Reveal delay={0.06}>
              <Card
                icon={<Etwah />}
                title="ETWAH — Pfarreiengemeinschaft Haren"
                subtitle="Symfony · Redis · MySQL · easyAdminBundle"
                accent={"violet"}
                onClick={() => console.log("test")}
              >
                Relaunch/Optimierung der Website; barrierearme UI, Caching mit
                Redis, flexible Redaktions-Workflows; Raumbuchungen.
              </Card>
            </Reveal>

            <Reveal delay={0.12}>
              <Card
                icon={<Speisewelt />}
                title="Speisewelt App"
                subtitle="React Native · Expo"
                accent={"violet"}
                onClick={() => console.log("test")}
              >
                Mobile App mit Speisekarten, Offline-Favoriten, Einreichen von
                Speisekarten.
              </Card>
            </Reveal>

            <Reveal delay={0.18}>
              <Card
                icon={<DjkTinnen />}
                title="Vereinsseite des DJK Tinnen"
                subtitle="Symfony · MySQL · Twig"
                onClick={() => console.log("test")}
                accent={"violet"}
              >
                Schnelle, pflegeleichte Vereinsseite: Spielpläne,
                Mannschaftsprofile, Events &amp; Medien.
              </Card>
            </Reveal>
          </div>
        </Container>

        {/* Leichter Section-Separator mit Parallax */}
        <ParallaxLayer
          speed={-0.18}
          className="pointer-events-none absolute inset-x-0 h-40 translate-y-10"
        >
          <div className="mx-auto h-full max-w-6xl opacity-20 [background:radial-gradient(40rem_12rem_at_50%_0,theme(colors.violet.600),transparent)]" />
        </ParallaxLayer>
      </section>
    </>
  );
}
