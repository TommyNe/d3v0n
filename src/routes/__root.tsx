import {
  Outlet,
  createRootRoute,
  Link,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Container } from "../Components/Container.tsx";
import { Logo } from "../Components/Logo.tsx";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Aktiver Pfad für aria-current & Styling
  const { location } = useRouterState();
  const pathname = location.pathname;

  // Sticky-Header: ein-/ausblenden nach Scrollrichtung
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    const down = y > prev;
    setHeaderHidden(down && y > 80);
  });

  // ESC schließt Menü, Body-Scroll lock, Focus-Trap
  useEffect(() => {
    if (menuOpen) {
      const prev = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) =>
        e.key === "Escape" && setMenuOpen(false);
      document.addEventListener("keydown", onKey);

      // Focus in Drawer holen
      const first = drawerRef.current?.querySelector<HTMLElement>(
        'a,button,[tabindex]:not([tabindex="-1"])',
      );
      first?.focus();

      return () => {
        document.documentElement.style.overflow = prev;
        document.removeEventListener("keydown", onKey);
        // Fokus zurück auf Burger
        menuBtnRef.current?.focus();
      };
    }
  }, [menuOpen]);

  // einfache Focus-Trap
  useEffect(() => {
    if (!menuOpen) return;
    const root = drawerRef.current!;
    const onFocus = (e: FocusEvent) => {
      if (!root.contains(e.target as Node)) {
        // Fokus zurück in Drawer
        const first = root.querySelector<HTMLElement>(
          'a,button,[tabindex]:not([tabindex="-1"])',
        );
        first?.focus();
      }
    };
    document.addEventListener("focusin", onFocus);
    return () => document.removeEventListener("focusin", onFocus);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const linkBase = "text-zinc-300 hover:text-white";
  const linkActive =
    "text-white underline underline-offset-8 decoration-white/20";

  return (
    <div className="min-h-dvh bg-neutral-950 text-zinc-300 antialiased [--shine:radial-gradient(60%_60%_at_70%_10%,rgba(90,60,255,0.25),transparent_60%)] [background-image:var(--shine)]">
      {/* Skip-Link für Tastatur */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-neutral-900"
      >
        Zum Inhalt springen
      </a>

      {/* Top nav (mit Motion) */}
      <motion.header
        className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50"
        animate={{ y: headerHidden ? -64 : 0 }}
        transition={{ type: "spring", stiffness: 600, damping: 40 }}
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-4">
            <Link to="/" className="text-xl" aria-label="Startseite">
              <Logo />
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <Link
                className={`${linkBase} ${pathname === "/about" ? linkActive : ""}`}
                aria-current={pathname === "/about" ? "page" : undefined}
                to="/about"
              >
                Über mich
              </Link>
              <Link
                className={`${linkBase} ${pathname === "/techstack" ? linkActive : ""}`}
                aria-current={pathname === "/techstack" ? "page" : undefined}
                to="/techstack"
              >
                Tech-Stack
              </Link>
              <Link
                className={`${linkBase} ${pathname === "/agents" ? linkActive : ""}`}
                aria-current={pathname === "/agents" ? "page" : undefined}
                to="/agents"
              >
                AI Agents
              </Link>
              <Link
                className={`${linkBase} ${pathname === "/contact" ? linkActive : ""}`}
                aria-current={pathname === "/contact" ? "page" : undefined}
                to="/contact"
              >
                Kontakt
              </Link>
            </nav>

            <button
              ref={menuBtnRef}
              type="button"
              aria-label="Menü öffnen"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-white/10 hover:ring-white/25"
            >
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
      </motion.header>

      {/* Mobile modal menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden
          />
          <div
            id="mobile-menu"
            ref={drawerRef}
            className="absolute right-0 top-0 h-full w-72 max-w-[85%] bg-neutral-900 ring-1 ring-white/10 shadow-xl p-4 antialiased [--shine:radial-gradient(60%_60%_at_70%_10%,rgba(90,60,255,0.25),transparent_60%)] [background-image:var(--shine)]"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-200">Menü</span>
              <button
                type="button"
                aria-label="Menü schließen"
                onClick={closeMenu}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-white/10 hover:ring-white/25"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>

            <nav className="mt-4 flex flex-col gap-2 text-sm">
              <Link
                to="/about"
                className={`rounded-md px-3 py-2 ${pathname === "/about" ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5 hover:text-white"}`}
                onClick={closeMenu}
                aria-current={pathname === "/about" ? "page" : undefined}
              >
                Über mich
              </Link>
              <Link
                to="/techstack"
                className={`rounded-md px-3 py-2 ${pathname === "/techstack" ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5 hover:text-white"}`}
                onClick={closeMenu}
                aria-current={pathname === "/techstack" ? "page" : undefined}
              >
                Tech-Stack
              </Link>
              <Link
                to="/agents"
                className={`rounded-md px-3 py-2 ${pathname === "/contact" ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5 hover:text-white"}`}
                onClick={closeMenu}
                aria-current={pathname === "/agent" ? "page" : undefined}
              >
                AI Agents
              </Link>
              <Link
                to="/contact"
                className={`rounded-md px-3 py-2 ${pathname === "/contact" ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5 hover:text-white"}`}
                onClick={closeMenu}
                aria-current={pathname === "/contact" ? "page" : undefined}
              >
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Main */}
      <main id="main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer id="kontakt" className="border-t border-white/5 py-10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-sm text-zinc-400">
              © {new Date().getFullYear()} d3vOn by Thomas Nehrenberg — Alle
              Rechte vorbehalten.
            </div>
            <div className="flex items-center gap-4 text-sm">
              <Link className="text-zinc-400 hover:text-white" to="/impress">
                Impressum
              </Link>
              <Link className="text-zinc-400 hover:text-white" to="/privacy">
                Datenschutz
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
