import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../Components/Container.tsx";

export const Route = createFileRoute("/privacy")({
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
              <section className="mt-10 space-y-4" id="verantwortlicher">
                <h2 className="text-xl font-semibold text-white">
                  1. Verantwortlicher
                </h2>
                <p>
                  <span className="font-medium">Thomas Nehrenberg</span>
                  <br />
                  E-Mail:
                  <a
                    href="mailto:thomas.nehrenberg@gmail.com"
                    className="text-indigo-300 hover:text-indigo-200 underline decoration-indigo-400/40"
                  >
                    thomas.nehrenberg@gmail.com
                  </a>
                  <br />
                  Verantwortlich im Sinne der DSGVO und sonstiger
                  datenschutzrechtlicher Bestimmungen.
                </p>
              </section>

              <section className="mt-8 space-y-4" id="allgemein">
                <h2 className="text-xl font-semibold text-white">
                  2. Allgemeines zur Datenverarbeitung
                </h2>
                <p>
                  Personenbezogene Daten werden nur verarbeitet, soweit dies zur
                  Bereitstellung einer funktionsfähigen Website sowie meiner
                  Inhalte und Leistungen erforderlich ist oder eine gesetzliche
                  Grundlage dies erlaubt.
                </p>
              </section>

              <section className="mt-8 space-y-4" id="logfiles">
                <h2 className="text-xl font-semibold text-white">
                  3. Bereitstellung der Website und Logfiles
                </h2>
                <h3 className="text-lg font-medium text-zinc-100">
                  a) Beschreibung und Umfang
                </h3>
                <p>
                  Beim Aufruf von <span className="font-medium">d3v0n.de</span>{" "}
                  übermittelt dein Browser automatisch Daten, die temporär in
                  Server-Logfiles gespeichert werden:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP-Adresse des anfragenden Geräts</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Abgerufene URL/Datei</li>
                  <li>Referrer-URL</li>
                  <li>Browsertyp und ggf. Betriebssystem</li>
                </ul>
                <h3 className="text-lg font-medium text-zinc-100">
                  b) Rechtsgrundlage
                </h3>
                <p>
                  Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
                  Stabilität, Sicherheit und Funktionsfähigkeit).
                </p>
                <h3 className="text-lg font-medium text-zinc-100">c) Zweck</h3>
                <p>
                  Technische Auslieferung der Website, Abwehr von Missbrauch,
                  Sicherstellung des Betriebs.
                </p>
                <h3 className="text-lg font-medium text-zinc-100">
                  d) Speicherdauer
                </h3>
                <p>
                  Löschung erfolgt, sobald der Zweck entfällt; bei
                  Bereitstellung der Website i. d. R. nach Sitzungsende.
                </p>
              </section>

              <section className="mt-8 space-y-4" id="cookies">
                <h2 className="text-xl font-semibold text-white">
                  4. Cookies &amp; lokaler Speicher
                </h2>
                <p>
                  Es werden keine Tracking-Cookies eingesetzt. Technisch
                  notwendige Werte können lokal in deinem Browser (Local
                  Storage) gespeichert werden, verlassen dein Gerät nicht und
                  werden nicht ausgewertet.
                </p>
              </section>

              <section className="mt-8 space-y-4" id="analytics">
                <h2 className="text-xl font-semibold text-white">
                  5. Google Analytics
                </h2>
                <p>
                  Diese Website nutzt{" "}
                  <span className="font-medium">Google Analytics</span> der
                  Google Ireland Limited (Gordon House, Barrow Street, Dublin 4,
                  Irland). Google Analytics verwendet Cookies bzw. ähnliche
                  Technologien, um die Nutzung der Website zu analysieren. Die
                  dabei erhobenen Informationen werden in der Regel an Server
                  von Google in den USA übertragen und dort gespeichert.
                </p>
                <p>
                  Es wird die IP-Anonymisierung (
                  <code className="bg-black/30 px-1 rounded">anonymizeIp</code>)
                  verwendet; die IP-Adresse wird innerhalb der EU/des EWR vor
                  Übermittlung gekürzt.
                </p>
                <p className="font-medium">Rechtsgrundlage:</p>
                <p>
                  Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Du kannst deine
                  Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen
                  (z. B. über die Cookie-Einstellungen deines Browsers bzw. die
                  Löschung der Analytics-Cookies).
                </p>
                <p className="font-medium">Weitere Informationen:</p>
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
              </section>

              <section className="mt-8 space-y-4" id="hosting">
                <h2 className="text-xl font-semibold text-white">6. Hosting</h2>
                <p>
                  Hosting auf einem{" "}
                  <span className="font-medium">VPS der Strato AG</span>,
                  Pascalstraße 10, 10587 Berlin, Deutschland. Betrieb mit Docker
                  &amp; Traefik. Verarbeitung auf Grundlage von Art. 6 Abs. 1
                  lit. f DSGVO (berechtigtes Interesse an sicherer und
                  zuverlässiger Bereitstellung). Mit Strato besteht ein
                  Auftragsverarbeitungsvertrag (Art. 28 DSGVO).
                </p>
              </section>

              <section className="mt-8 space-y-4" id="rechte">
                <h2 className="text-xl font-semibold text-white">
                  7. Rechte der betroffenen Personen
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Auskunft (Art. 15 DSGVO)</li>
                  <li>Berichtigung (Art. 16 DSGVO)</li>
                  <li>Löschung (Art. 17 DSGVO)</li>
                  <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Widerspruch (Art. 21 DSGVO)</li>
                  <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                </ul>
                <p>
                  Du hast zudem das Recht auf Beschwerde bei einer
                  Datenschutzaufsichtsbehörde.
                </p>
              </section>

              <section className="mt-8 space-y-4" id="sicherheit">
                <h2 className="text-xl font-semibold text-white">
                  8. Sicherheit
                </h2>
                <p>
                  Es werden geeignete technische und organisatorische Maßnahmen
                  (TOM) getroffen, um deine Daten vor Verlust, Zerstörung,
                  Manipulation und unbefugtem Zugriff zu schützen. Die Maßnahmen
                  werden entsprechend der technologischen Entwicklung
                  fortlaufend verbessert.
                </p>
              </section>

              <section className="mt-8 space-y-4" id="stand">
                <h2 className="text-xl font-semibold text-white">
                  9. Aktualität und Änderungen
                </h2>
                <p>
                  Diese Datenschutzerklärung ist aktuell und hat den Stand:{" "}
                  <span className="font-medium">Oktober 2025</span>. Anpassungen
                  sind möglich, sofern sich Website, Dienste oder Rechtslage
                  ändern.
                </p>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
