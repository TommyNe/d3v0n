import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../Components/Container";
import { ParallaxLayer } from "../Components/ParalaxLayer.tsx";
import { Reveal } from "../Components/Reveal";
import { Card } from "../Components/Card";
import { Brain, Network, Workflow, Server, Zap } from "lucide-react";

export const Route = createFileRoute("/agents")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="relative overflow-hidden">
      {/* sanfter Parallax-Schein */}
      <ParallaxLayer
        speed={-0.25}
        className="pointer-events-none absolute inset-0 -top-[10vh]"
      >
        <div className="h-full w-full bg-[radial-gradient(35rem_25rem_at_60%_-10%,rgba(109,40,217,0.25),transparent_70%)]" />
      </ParallaxLayer>

      <Container>
        <div className="py-16 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-5xl text-left space-y-10">
            {/* Hero */}
            <Reveal>
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none">
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                  AI Agents
                </span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="max-w-3xl text-base sm:text-lg text-zinc-300">
                Ich entwickle eigene <strong>AI Agents</strong>, die
                Hausautomation, APIs und Webdienste intelligent verbinden – mit
                Fokus auf
                <strong> Home Assistant</strong>, <strong>n8n</strong> und
                individuellen <strong>Laravel/Symfony-Schnittstellen</strong>.
              </p>
            </Reveal>

            {/* Übersicht */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Reveal>
                <Card
                  icon={<Brain className="h-5 w-5 text-sky-300" />}
                  title="Sprach- und Entscheidungs-Agenten"
                  subtitle="Home Assistant / Voice Control"
                  accent="sky"
                >
                  Aufbau intelligenter Sprachschnittstellen für die
                  Haussteuerung. Lokale Agenten reagieren kontextsensitiv auf
                  Befehle, steuern Geräte oder Szenen und arbeiten mit
                  <code className="mx-1 text-white">Wyoming</code>,
                  <code className="mx-1 text-white">Rhasspy</code> und
                  <code className="mx-1 text-white">ReSpeaker</code>-Satelliten.
                </Card>
              </Reveal>

              <Reveal>
                <Card
                  icon={<Workflow className="h-5 w-5 text-emerald-300" />}
                  title="Automatisierte Workflows"
                  subtitle="n8n Flows & Webhooks"
                  accent="emerald"
                >
                  Agenten rufen n8n-Workflows auf, um Aufgaben auszuführen oder
                  Sensor-Daten zu verarbeiten – etwa für Energie-Optimierung,
                  Alarmierungen oder Routine-Aktionen im Haushalt.
                </Card>
              </Reveal>

              <Reveal>
                <Card
                  icon={<Network className="h-5 w-5 text-violet-300" />}
                  title="MCP-Schnittstellen"
                  subtitle="Laravel / Symfony / API-Bridge"
                  accent="violet"
                >
                  Entwicklung maßgeschneiderter MCP-Interfaces zur Integration
                  von KI-Modellen in klassische Backends. Die Agenten greifen
                  auf Datenbanken, Geräte-APIs oder externe Systeme zu – mit
                  klaren Policies und Authentifizierung.
                </Card>
              </Reveal>

              <Reveal>
                <Card
                  icon={<Server className="h-5 w-5 text-cyan-300" />}
                  title="Private Cloud & Edge AI"
                  subtitle="VPS · Proxmox · Raspberry Pi"
                  accent="sky"
                >
                  Meine AI-Infrastruktur läuft auf lokalen und Cloud-Instanzen –
                  Container-basiert mit Docker, Traefik und Redis für
                  Status-Synchronisation zwischen Haus- und Cloud-Agents.
                </Card>
              </Reveal>

              <Reveal>
                <Card
                  icon={<Zap className="h-5 w-5 text-amber-300" />}
                  title="Realtime-Automation"
                  subtitle="MQTT · WebSockets · Event Streams"
                  accent="emerald"
                >
                  Agenten reagieren in Echtzeit auf Sensor- oder
                  Logik-Ereignisse (z. B. Bewegung, Energieverbrauch,
                  Wetterdaten) und treffen selbstständige Entscheidungen für
                  Licht, Klima oder Sicherheit.
                </Card>
              </Reveal>
            </div>

            {/* Abschnitt: Architektur */}
            <Reveal>
              <section className="mt-16 space-y-6 max-w-3xl">
                <h2 className="text-2xl font-semibold text-white">
                  Architektur & Philosophie
                </h2>
                <p>
                  Jeder Agent arbeitet modular und eventgetrieben. Über
                  n8n-Flows oder MCP-Endpoints kommunizieren sie mit
                  <strong> Home Assistant</strong> und anderen Diensten.
                  Entscheidungen basieren auf aktuellen Zuständen und Regeln –
                  etwa „Licht nur bei Anwesenheit & Sonnenuntergang“.
                </p>
                <p>
                  Ziel ist eine <strong>menschlich-natürliche Steuerung</strong>
                  : Sprache, Automatisierung und Kontext fließen zusammen, ohne
                  Cloud-Zwang. So entstehen lokale, resiliente
                  Smart-Home-Systeme, die trotzdem lernfähig und offen bleiben.
                </p>
              </section>
            </Reveal>

            {/* Abschnitt: Technologien */}
            <Reveal>
              <section className="mt-16 space-y-6 max-w-3xl">
                <h2 className="text-2xl font-semibold text-white">
                  Technologien & Integrationen
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-zinc-300 text-sm">
                  <li>Home Assistant (lokale Automatisierung & Intents)</li>
                  <li>n8n für Workflows, Webhooks & Event-Verkettung</li>
                  <li>
                    Laravel / Symfony MCP-Adapter für KI-/API-Kommunikation
                  </li>
                  <li>
                    OpenAI / Anthropic / Local LLMs für Entscheidungslogik
                  </li>
                  <li>MQTT, WebSockets und Redis für Realtime-Sync</li>
                  <li>Docker + Traefik Deployment auf VPS oder Proxmox</li>
                </ul>
              </section>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <section className="mt-20 rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 text-center">
                <h2 className="text-2xl font-semibold text-white">
                  Eigene Experimente & Erfahrungen
                </h2>
                <p className="mt-3 text-sm text-zinc-300 max-w-2xl mx-auto">
                  Viele meiner Ideen entstehen aus Neugier und
                  Experimentierfreude – ich kombiniere Hausautomation,
                  AI-Agenten und moderne Schnittstellen, um Systeme zu schaffen,
                  die selbstständig denken, reagieren und lernen.
                </p>
                <p className="mt-3 text-sm text-zinc-300 max-w-2xl mx-auto">
                  Mich interessiert, wie Architektur, Schnittstellen-Design und
                  lokale Integration zusammenspielen können, um Technik
                  natürlicher und effizienter zu machen. Dabei stehen nicht
                  Produkte im Vordergrund, sondern das Lernen, Forschen und
                  Ausprobieren.
                </p>
              </section>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
