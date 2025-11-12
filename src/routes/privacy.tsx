import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../Components/Container.tsx";
// Motion-Helpers (wie in den anderen Seiten verwendet)
import { ParallaxLayer } from "../Components/ParalaxLayer.tsx";
import { Reveal } from "../Components/Reveal";

export const Route = createFileRoute("/privacy")({
  component: RouteComponent,
});

function RouteComponent() {
  const lastUpdated = "Oktober 2025"; // ggf. per CI automatisch setzen

  return (
    <section className="relative overflow-hidden">
      {/* Parallax-Hintergrund */}
      <ParallaxLayer
        speed={-0.24}
        className="pointer-events-none absolute inset-0 -top-[10vh]"
      >
        <div className="h-full w-full bg-[radial-gradient(35rem_25rem_at_60%_-10%,rgba(109,40,217,0.25),transparent_70%)]" />
      </ParallaxLayer>

      <Container>
        <div className="py-16 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl text-left">
            <div>
              <Reveal>
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none">
                  <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
                    Datenschutzerklärung
                  </span>
                </h1>
              </Reveal>

              {/* Inhaltsverzeichnis */}
              <Reveal>
                <nav
                  aria-label="Inhalt"
                  className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 text-zinc-200"
                >
                  <ol className="list-decimal pl-5 space-y-1 text-sm sm:text-base">
                    <li>
                      <a
                        className="underline decoration-white/20 hover:opacity-90"
                        href="#verantwortlicher"
                      >
                        Verantwortlicher
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline decoration-white/20 hover:opacity-90"
                        href="#allgemein"
                      >
                        Allgemeines zur Datenverarbeitung
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline decoration-white/20 hover:opacity-90"
                        href="#logfiles"
                      >
                        Bereitstellung der Website &amp; Logfiles
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline decoration-white/20 hover:opacity-90"
                        href="#cookies"
                      >
                        Cookies &amp; lokaler Speicher
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline decoration-white/20 hover:opacity-90"
                        href="#analytics"
                      >
                        Google Analytics
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline decoration-white/20 hover:opacity-90"
                        href="#hosting"
                      >
                        Hosting
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline decoration-white/20 hover:opacity-90"
                        href="#rechte"
                      >
                        Rechte der betroffenen Personen
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline decoration-white/20 hover:opacity-90"
                        href="#sicherheit"
                      >
                        Sicherheit
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline decoration-white/20 hover:opacity-90"
                        href="#stand"
                      >
                        Aktualität &amp; Änderungen
                      </a>
                    </li>
                  </ol>
                </nav>
              </Reveal>

              {/* Inhalt */}
              <section
                className="mt-10 space-y-6 text-zinc-200"
                id="verantwortlicher"
              >
                <Reveal>
                  <h2 className="text-xl font-semibold text-white">
                    1. Verantwortlicher
                  </h2>
                </Reveal>
                <Reveal>
                  <p>
                    <span className="font-medium">Thomas Nehrenberg</span>
                    <br />
                    E-Mail:{" "}
                    <a
                      href="mailto:info@d3v0n.de"
                      className="text-indigo-300 hover:text-indigo-200 underline decoration-indigo-400/40"
                    >
                      info@d3v0n.de
                    </a>
                    <br />
                    Verantwortlich im Sinne der DSGVO und sonstiger
                    datenschutzrechtlicher Bestimmungen.
                  </p>
                </Reveal>
              </section>

              <section className="mt-8 space-y-4" id="allgemein">
                <Reveal>
                  <h2 className="text-xl font-semibold text-white">
                    2. Allgemeines zur Datenverarbeitung
                  </h2>
                </Reveal>
                <Reveal>
                  <p>
                    Personenbezogene Daten werden nur verarbeitet, soweit dies
                    zur Bereitstellung einer funktionsfähigen Website sowie
                    meiner Inhalte und Leistungen erforderlich ist oder eine
                    gesetzliche Grundlage dies erlaubt.
                  </p>
                </Reveal>
              </section>

              <section className="mt-8 space-y-4" id="logfiles">
                <Reveal>
                  <h2 className="text-xl font-semibold text-white">
                    3. Bereitstellung der Website und Logfiles
                  </h2>
                </Reveal>

                <Reveal>
                  <h3 className="text-lg font-medium text-zinc-100">
                    a) Beschreibung und Umfang
                  </h3>
                </Reveal>
                <Reveal>
                  <p>
                    Beim Aufruf von{" "}
                    <span className="font-medium">d3v0n.de</span> übermittelt
                    dein Browser automatisch Daten, die temporär in
                    Server-Logfiles gespeichert werden:
                  </p>
                </Reveal>
                <Reveal>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>IP-Adresse des anfragenden Geräts</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Abgerufene URL/Datei</li>
                    <li>Referrer-URL</li>
                    <li>Browsertyp und ggf. Betriebssystem</li>
                  </ul>
                </Reveal>

                <Reveal>
                  <h3 className="text-lg font-medium text-zinc-100">
                    b) Rechtsgrundlage
                  </h3>
                </Reveal>
                <Reveal>
                  <p>
                    Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
                    Stabilität, Sicherheit und Funktionsfähigkeit).
                  </p>
                </Reveal>

                <Reveal>
                  <h3 className="text-lg font-medium text-zinc-100">
                    c) Zweck
                  </h3>
                </Reveal>
                <Reveal>
                  <p>
                    Technische Auslieferung der Website, Abwehr von Missbrauch,
                    Sicherstellung des Betriebs.
                  </p>
                </Reveal>

                <Reveal>
                  <h3 className="text-lg font-medium text-zinc-100">
                    d) Speicherdauer
                  </h3>
                </Reveal>
                <Reveal>
                  <p>
                    Löschung erfolgt, sobald der Zweck entfällt; bei
                    Bereitstellung der Website i. d. R. nach Sitzungsende.
                  </p>
                </Reveal>
              </section>

              <section className="mt-8 space-y-4" id="cookies">
                <Reveal>
                  <h2 className="text-xl font-semibold text-white">
                    4. Cookies &amp; lokaler Speicher
                  </h2>
                </Reveal>
                <Reveal>
                  <p>
                    Es werden keine Tracking-Cookies eingesetzt. Technisch
                    notwendige Werte können lokal in deinem Browser (Local
                    Storage) gespeichert werden, verlassen dein Gerät nicht und
                    werden nicht ausgewertet.
                  </p>
                </Reveal>
              </section>

              <section className="mt-8 space-y-4" id="analytics">
                <Reveal>
                  <h2 className="text-xl font-semibold text-white">
                    5. Google Analytics
                  </h2>
                </Reveal>
                <Reveal>
                  <p>
                    Diese Website nutzt{" "}
                    <span className="font-medium">Google Analytics</span> der
                    Google Ireland Limited (Gordon House, Barrow Street, Dublin
                    4, Irland). Google Analytics verwendet Cookies bzw. ähnliche
                    Technologien, um die Nutzung der Website zu analysieren. Die
                    dabei erhobenen Informationen werden in der Regel an Server
                    von Google in den USA übertragen und dort gespeichert.
                  </p>
                </Reveal>
                <Reveal>
                  <p>
                    Es wird die IP-Anonymisierung (
                    <code className="bg-black/30 px-1 rounded">
                      anonymizeIp
                    </code>
                    ) verwendet; die IP-Adresse wird innerhalb der EU/des EWR
                    vor Übermittlung gekürzt.
                  </p>
                </Reveal>

                <Reveal>
                  <p className="font-medium">Rechtsgrundlage:</p>
                </Reveal>
                <Reveal>
                  <p>
                    Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Du kannst deine
                    Einwilligung jederzeit mit Wirkung für die Zukunft
                    widerrufen (z. B. über die Cookie-Einstellungen auf dieser
                    Website).
                  </p>
                </Reveal>

                <Reveal>
                  <p className="font-medium">Weitere Informationen:</p>
                </Reveal>
                <Reveal>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-300 hover:text-indigo-200 underline decoration-indigo-400/40"
                      >
                        Datenschutzerklärung von Google
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://marketingplatform.google.com/about/analytics/terms/de/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-300 hover:text-indigo-200 underline decoration-indigo-400/40"
                      >
                        Nutzungsbedingungen für Google Analytics
                      </a>
                    </li>
                  </ul>
                </Reveal>
              </section>

              <section className="mt-8 space-y-4" id="hosting">
                <Reveal>
                  <h2 className="text-xl font-semibold text-white">
                    6. Hosting
                  </h2>
                </Reveal>
                <Reveal>
                  <p>
                    Hosting auf einem{" "}
                    <span className="font-medium">VPS der Strato AG</span>,
                    Pascalstraße 10, 10587 Berlin, Deutschland. Betrieb mit
                    Docker &amp; Traefik. Verarbeitung auf Grundlage von Art. 6
                    Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherer und
                    zuverlässiger Bereitstellung). Mit Strato besteht ein
                    Auftragsverarbeitungsvertrag (Art. 28 DSGVO).
                  </p>
                </Reveal>
              </section>

              <section className="mt-8 space-y-4" id="rechte">
                <Reveal>
                  <h2 className="text-xl font-semibold text-white">
                    7. Rechte der betroffenen Personen
                  </h2>
                </Reveal>
                <Reveal>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Auskunft (Art. 15 DSGVO)</li>
                    <li>Berichtigung (Art. 16 DSGVO)</li>
                    <li>Löschung (Art. 17 DSGVO)</li>
                    <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Widerspruch (Art. 21 DSGVO)</li>
                    <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  </ul>
                </Reveal>
                <Reveal>
                  <p>
                    Du hast zudem das Recht auf Beschwerde bei einer
                    Datenschutzaufsichtsbehörde.
                  </p>
                </Reveal>
              </section>

              <section className="mt-8 space-y-4" id="sicherheit">
                <Reveal>
                  <h2 className="text-xl font-semibold text-white">
                    8. Sicherheit
                  </h2>
                </Reveal>
                <Reveal>
                  <p>
                    Es werden geeignete technische und organisatorische
                    Maßnahmen (TOM) getroffen, um deine Daten vor Verlust,
                    Zerstörung, Manipulation und unbefugtem Zugriff zu schützen.
                    Die Maßnahmen werden entsprechend der technologischen
                    Entwicklung fortlaufend verbessert.
                  </p>
                </Reveal>
              </section>

              <section className="mt-8 space-y-4" id="stand">
                <Reveal>
                  <h2 className="text-xl font-semibold text-white">
                    9. Aktualität und Änderungen
                  </h2>
                </Reveal>
                <Reveal>
                  <p>
                    Diese Datenschutzerklärung ist aktuell und hat den Stand:{" "}
                    <span className="font-medium">{lastUpdated}</span>.
                    Anpassungen sind möglich, sofern sich Website, Dienste oder
                    Rechtslage ändern.
                  </p>
                </Reveal>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
