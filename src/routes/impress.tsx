import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../Components/Container.tsx";

export const Route = createFileRoute("/impress")({
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
                  Impressum
                </span>
              </h1>
              <section className="max-w-3xl mx-auto px-4 py-12 text-zinc-200">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      Angaben gemäß § 5 DDG
                    </h3>
                    <p className="leading-relaxed">
                      Thomas Nehrenberg
                      <br />
                      Am Tinner Loh 5<br />
                      49733 Haren
                      <br />
                      Deutschland
                    </p>
                  </div>

                  <div>
                    <p className="leading-relaxed">
                      <span className="font-semibold text-zinc-100">Tel.:</span>
                      <a
                        href="tel:+4917656296185"
                        className="text-indigo-300 hover:text-indigo-200 underline decoration-indigo-400/40"
                      >
                        +49 (0) 176 56296185
                      </a>
                      <br />
                      <span className="font-semibold text-zinc-100">
                        E-Mail:
                      </span>
                      <a
                        href="mailto:thomas.nehrenberg@gmail.com"
                        className="text-indigo-300 hover:text-indigo-200 underline decoration-indigo-400/40"
                      >
                        thomas.nehrenberg@gmail.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      Technische Umsetzung
                    </h3>
                    <ul className="list-disc pl-6 space-y-1 text-zinc-300">
                      <li>Thomas Nehrenberg</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      Urheberrecht &amp; Bildernachweis
                    </h3>
                    <p className="leading-relaxed">
                      Die auf dieser Website verwendeten Bilder, Fotos, Grafiken
                      sowie Texte sind urheberrechtlich geschützt. Die Rechte an
                      diesen Inhalten liegen, soweit nicht anders angegeben, bei
                      Thomas Nehrenberg.
                    </p>
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
