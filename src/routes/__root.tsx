import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { Container } from "../Components/Container.tsx";
import { Logo } from "../Components/Logo.tsx";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="min-h-dvh min-w-dvw bg-neutral-950 text-zinc-300 antialiased [--shine:radial-gradient(60%_60%_at_70%_10%,rgba(90,60,255,0.25),transparent_60%)] [background-image:var(--shine)]">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
        <Container>
          <div className="flex h-16 items-center justify-between gap-4">
            <Link to="/" className="text-xl">
              <Logo />
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <Link className="text-zinc-300 hover:text-white" to="/about">
                Über mich
              </Link>
              <a className="text-zinc-300 hover:text-white" href="#stack">
                Tech‑Stack
              </a>
              <a className="text-zinc-300 hover:text-white" href="#agents">
                AI Agents
              </a>
              <a className="text-zinc-300 hover:text-white" href="#kontakt">
                Kontakt
              </a>
            </nav>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-white/10 hover:ring-white/25">
              <span className="sr-only">Menü öffnen</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
        </Container>
      </header>
      <Outlet />
      {/* Footer */}
      <footer id="kontakt" className="border-t border-white/5 py-10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-sm text-zinc-400">
              © {new Date().getFullYear()} d3vOn by Thomas Nehrenberg — Alle
              Rechte vorbehalten.
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a className="text-zinc-400 hover:text-white" href="#">
                Impressum
              </a>
              <a className="text-zinc-400 hover:text-white" href="#">
                Datenschutz
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
