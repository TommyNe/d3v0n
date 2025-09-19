import React from "react";


// Tailwind v4-ready single-file React landing page template
// - Drop this component into a Vite/Next/CRA app with Tailwind v4 configured
// - Global CSS should contain: `@import "tailwindcss";`
// - Optional: define brand colors via `@theme` in your global CSS


// Reusable UI bits
function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    );
}


function Card({
                  icon,
                  title,
                  subtitle,
                  children,
              }: {
    icon?: React.ReactNode;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    children?: React.ReactNode;
}) {
    return (
        <div className="relative rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] hover:ring-white/20 transition">
            <div className="mb-4 flex items-center gap-3">
                {icon && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/15">
                        {icon}
                    </div>
                )}
                <div>
                    <div className="font-semibold text-white tracking-tight">{title}</div>
                    {subtitle && (
                        <div className="text-xs text-zinc-400 leading-relaxed">{subtitle}</div>
                    )}
                </div>
            </div>
            <div className="text-sm leading-6 text-zinc-300">{children}</div>
        </div>
    );
}


function Logo() {
    return (
        <div className="font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">D3VON</span>
        </div>
    );
}


function IconSpark() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 2v6m0 8v6M2 12h6m8 0h6M6 6l4 4m4 4 4 4M6 18l4-4m4-4 4-4" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
    );
}


function IconNote() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M14 3v6h6" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
    );
}


function IconLightning() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
    );
}

export default function Landing() {
    return (
        <div className="min-h-dvh bg-neutral-950 text-zinc-300 antialiased [--shine:radial-gradient(60%_60%_at_70%_10%,rgba(90,60,255,0.25),transparent_60%)] [background-image:var(--shine)]">
            {/* Top nav */}
            <header className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
                <Container>
                    <div className="flex h-16 items-center justify-between gap-4">
                        <a href="#" className="text-xl"><Logo /></a>
                        <nav className="hidden md:flex items-center gap-8 text-sm">
                            <a className="text-zinc-300 hover:text-white" href="#projekte">Projekte</a>
                            <a className="text-zinc-300 hover:text-white" href="#stack">Tech‑Stack</a>
                            <a className="text-zinc-300 hover:text-white" href="#agents">AI Agents</a>
                            <a className="text-zinc-300 hover:text-white" href="#kontakt">Kontakt</a>
                        </nav>
                        <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-white/10 hover:ring-white/25">
                            <span className="sr-only">Menü öffnen</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                        </button>
                    </div>
                </Container>
            </header>

    {/* Hero */}
    <section className="relative overflow-hidden">
        {/* soft vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(35rem_25rem_at_60%_-10%,rgba(109,40,217,0.25),transparent_70%)]"/>
        <Container>
            <div className="py-16 sm:py-24 lg:py-28">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none">
                        <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">d3vOn</span>
                    </h1>
                    <p className="mt-6 text-sm sm:text-base text-zinc-400">
                        PHP · TypeScript (React) · Python · Java
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-zinc-300">
                        Ich baue hochwertige Web- & Mobile‑Lösungen, experimentiere mit AI‑Agents
                        und dokumentiere hier ausgewählte Projekte.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <a
                            href="#projekte"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 ring-1 ring-white/10 hover:brightness-110 active:brightness-95"
                        >
                            Projekte ansehen
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    </section>


    {/* Projects */}
    <section id="projekte" className="pb-20">
        <Container>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-white">Projekte</h2>
            <div className="grid gap-6 md:grid-cols-2">
                <Card
                    icon={<IconSpark />}
                    title="Dorf App Tinnen"
                    subtitle="React Native · Expo · Laravel · PostgreSQL · FilamentPHP"
                >
                    Community‑App für das Dorf Tinnen: News, Veranstaltungen, Vereinsleben,
                    Push‑Benachrichtigungen & Deep‑Links.
                </Card>
                <Card
                    icon={<IconLightning />}
                    title="ETWAH — Pfarreiengemeinschaft Haren"
                    subtitle="Symfony · Redis · MySQL · easyAdminBundle"
                >
                    Relaunch/Optimierung der Website; barrierearme UI, Caching mit Redis,
                    flexible Redaktions‑Workflows; Raumbuchungen.
                </Card>
                <Card icon={<IconNote />} title="Speisewelt App" subtitle="React Native · Expo">
                    Mobile App mit Speisekarten, Offline‑Favoriten, Einreichen von Speisekarten.
                </Card>
                <Card icon={<IconLightning />} title="Vereinsseite des DJK Tinnen" subtitle="Symfony · MySQL · Twig">
                    Schnelle, pflegeleichte Vereinsseite: Spielpläne, Mannschaftsprofile, Events & Medien.
                </Card>
            </div>
        </Container>
    </section>


    {/* Footer */}
    <footer id="kontakt" className="border-t border-white/5 py-10">
        <Container>
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="text-sm text-zinc-400">© {new Date().getFullYear()} d3vOn by Thomas Nehrenberg — Alle Rechte vorbehalten.</div>
                <div className="flex items-center gap-4 text-sm">
                    <a className="text-zinc-400 hover:text-white" href="#">Impressum</a>
                    <a className="text-zinc-400 hover:text-white" href="#">Datenschutz</a>
                </div>
            </div>
        </Container>
    </footer>
</div>
);
}