import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../Components/Container";
import { Card } from "../Components/Card.tsx";
import { DjkTinnen } from "../Components/DjkTinnen.tsx";
import { Etwah } from "../Components/Etwah.tsx";
import { IconNote } from "../Components/IconNote.tsx";
import { Speisewelt } from "../Components/Speisewelt.tsx";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* soft vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(35rem_25rem_at_60%_-10%,rgba(109,40,217,0.25),transparent_70%)]" />
        <Container>
          <div className="py-16 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none">
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                  d3vOn
                </span>
              </h1>
              <p className="mt-6 text-sm sm:text-base text-zinc-400">
                PHP · TypeScript (React) · Python · Java
              </p>
              <p className="mt-4 text-base sm:text-lg text-zinc-300">
                Ich baue hochwertige Web- & Mobile‑Lösungen, experimentiere mit
                AI‑Agents und dokumentiere hier ausgewählte Projekte.
              </p>
              <div className="mt-8 flex justify-center">
                {/*<a*/}
                {/*    href="#projekte"*/}
                {/*    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 ring-1 ring-white/10 hover:brightness-110 active:brightness-95"*/}
                {/*>*/}
                {/*    Projekte ansehen*/}
                {/*</a>*/}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section id="projekte" className="pb-20">
        <Container>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-white">
            Projekte
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card
              icon={<IconNote />}
              title="Dorf App Tinnen"
              subtitle="React Native · Expo · Laravel · PostgreSQL · FilamentPHP"
            >
              Community‑App für das Dorf Tinnen: News, Veranstaltungen,
              Vereinsleben, Push‑Benachrichtigungen & Deep‑Links.
            </Card>
            <Card
              icon={<Etwah />}
              title="ETWAH — Pfarreiengemeinschaft Haren"
              subtitle="Symfony · Redis · MySQL · easyAdminBundle"
            >
              Relaunch/Optimierung der Website; barrierearme UI, Caching mit
              Redis, flexible Redaktions‑Workflows; Raumbuchungen.
            </Card>
            <Card
              icon={<Speisewelt />}
              title="Speisewelt App"
              subtitle="React Native · Expo"
            >
              Mobile App mit Speisekarten, Offline‑Favoriten, Einreichen von
              Speisekarten.
            </Card>
            <Card
              icon={<DjkTinnen />}
              title="Vereinsseite des DJK Tinnen"
              subtitle="Symfony · MySQL · Twig"
            >
              Schnelle, pflegeleichte Vereinsseite: Spielpläne,
              Mannschaftsprofile, Events & Medien.
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
