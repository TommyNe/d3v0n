import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../Components/Container.tsx";

// NEW: Motion-Helpers
import { ParallaxLayer } from "../Components/ParalaxLayer.tsx";
import { Reveal } from "../Components/Reveal";

export const Route = createFileRoute("/impress")({
  component: RouteComponent,
});

function RouteComponent() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thomas Nehrenberg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Am Tinner Loh 5",
      postalCode: "49733",
      addressLocality: "Haren",
      addressCountry: "DE",
    },
    email: "info@d3v0n.de",
    telephone: "+49 176 56296185",
    url: "https://d3v0n.de",
  };

  return (
    <section className="relative overflow-hidden">
      {/* Parallax-Background */}
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
                    Impressum
                  </span>
                </h1>
              </Reveal>

              <section className="max-w-3xl mx-auto px-4 py-12 text-zinc-200">
                <div className="space-y-8">
                  <Reveal>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">
                        Angaben gemäß § 5 DDG
                      </h3>
                      <address className="not-italic leading-relaxed">
                        Thomas Nehrenberg
                        <br />
                        Am Tinner Loh 5<br />
                        49733 Haren
                        <br />
                        Deutschland
                      </address>
                    </div>
                  </Reveal>

                  <Reveal delay={0.04}>
                    <div>
                      <h3 className="sr-only">Kontakt</h3>
                      <p className="leading-relaxed">
                        <span className="font-semibold text-zinc-100">
                          Tel.:
                        </span>{" "}
                        <a
                          href="tel:+4917656296185"
                          className="text-indigo-300 hover:text-indigo-200 underline decoration-indigo-400/40"
                        >
                          +49 (0) 176 56296185
                        </a>
                        <br />
                        <span className="font-semibold text-zinc-100">
                          E-Mail:
                        </span>{" "}
                        <a
                          href="mailto:info@d3v0n.de"
                          className="text-indigo-300 hover:text-indigo-200 underline decoration-indigo-400/40"
                        >
                          info@d3v0n.de
                        </a>
                      </p>
                    </div>
                  </Reveal>

                  <Reveal delay={0.08}>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">
                        Technische Umsetzung
                      </h3>
                      <ul className="list-disc pl-6 space-y-1 text-zinc-300">
                        <li>Thomas Nehrenberg</li>
                      </ul>
                    </div>
                  </Reveal>

                  <Reveal delay={0.12}>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">
                        Urheberrecht &amp; Bildernachweis
                      </h3>
                      <p className="leading-relaxed">
                        Die auf dieser Website verwendeten Bilder, Fotos,
                        Grafiken sowie Texte sind urheberrechtlich geschützt.
                        Die Rechte an diesen Inhalten liegen, soweit nicht
                        anders angegeben, bei Thomas Nehrenberg.
                      </p>
                    </div>
                  </Reveal>

                  {/* Optional: Verbraucherstreitbeilegung / Haftungshinweise */}
                  <Reveal delay={0.16}>
                    <div className="text-sm text-zinc-400">
                      <p>
                        Hinweis: Ich bin nicht verpflichtet und nicht bereit, an
                        Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle teilzunehmen.
                      </p>
                    </div>
                  </Reveal>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Container>

      {/* SEO: JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
