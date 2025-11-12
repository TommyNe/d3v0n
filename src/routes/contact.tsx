import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../Components/Container";
import { useState } from "react";
import { ParallaxLayer } from "../Components/ParalaxLayer";
import { Reveal } from "../Components/Reveal";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as never);

    const nextErrors: Record<string, string> = {};

    if (!String(data.name).trim()) nextErrors.name = "Bitte Namen eingeben.";
    if (!/^\S+@\S+\.\S+$/.test(String(data.email)))
      nextErrors.email = "Bitte gültige E-Mail angeben.";
    if (!String(data.message).trim())
      nextErrors.message = "Bitte eine Nachricht schreiben.";
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <main id="kontakt" className="bg-neutral-950 text-zinc-300">
      {/* Hero */}
      <section className="relative border-b border-white/5 py-14 sm:py-20 overflow-hidden">
        {/* Parallax-Hintergrund */}
        <ParallaxLayer speed={-0.22} className="pointer-events-none absolute inset-0 -top-[10vh]">
          <div className="h-full w-full bg-[radial-gradient(35rem_25rem_at_60%_-10%,rgba(109,40,217,0.22),transparent_70%)]" />
        </ParallaxLayer>

        <Container>
          <Reveal>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Kontakt
            </h1>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="mt-4 text-base sm:text-lg">
              Du hast eine Idee, brauchst Support oder willst einfach Hallo sagen?
              Schreib mir gern – ich melde mich zeitnah.
            </p>
          </Reveal>
          {/* Live-Region für Status */}
          <div className="sr-only" role="status" aria-live="polite">
            {status === "loading" ? "Nachricht wird gesendet" : status === "ok" ? "Nachricht gesendet" : status === "error" ? "Fehler beim Senden" : ""}
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Kontaktkasten */}
            <Reveal className="lg:col-span-2 rounded-2xl border border-white/5 bg-white/5 p-6">
              <h2 className="text-xl text-white font-medium">Direkt kontaktieren</h2>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <div className="text-zinc-400">Name</div>
                  <div className="text-white">Thomas Nehrenberg</div>
                </div>
                <div>
                  <div className="text-zinc-400">E-Mail</div>
                  <a
                    className="text-white underline decoration-white/30 underline-offset-2 hover:opacity-90"
                    href="mailto:info@d3v0n.de"
                  >
                    info@d3v0n.de
                  </a>
                </div>
              </div>
              <p className="mt-6 text-xs text-zinc-400">
                Hinweis: Es werden keine externen Kontakt-Form-Dienste verwendet. Deine Daten laufen ausschließlich über meinen eigenen Server.
              </p>
            </Reveal>

            {/* Formular */}
            <Reveal className="lg:col-span-3 rounded-2xl border border-white/5 p-6">
              <h2 className="text-xl text-white font-medium">Nachricht senden</h2>

              <form onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
                {/* Honeypot */}
                <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <label className="block text-sm text-zinc-300" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "err-name" : undefined}
                    className={`mt-1 w-full rounded-xl bg-white/5 px-3 py-2 text-white ring-1 outline-none placeholder:text-zinc-500 focus:ring-white/25 ${errors.name ? "ring-rose-500/40" : "ring-white/10"}`}
                    placeholder="Max Mustermann"
                  />
                  {errors.name && <p id="err-name" className="mt-1 text-xs text-rose-400">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm text-zinc-300" htmlFor="email">E-Mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "err-email" : undefined}
                    className={`mt-1 w-full rounded-xl bg-white/5 px-3 py-2 text-white ring-1 outline-none placeholder:text-zinc-500 focus:ring-white/25 ${errors.email ? "ring-rose-500/40" : "ring-white/10"}`}
                    placeholder="max@example.com"
                  />
                  {errors.email && <p id="err-email" className="mt-1 text-xs text-rose-400">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm text-zinc-300" htmlFor="subject">Betreff (optional)</label>
                  <input
                    id="subject"
                    name="subject"
                    className="mt-1 w-full rounded-xl bg-white/5 px-3 py-2 text-white ring-1 ring-white/10 outline-none placeholder:text-zinc-500 focus:ring-white/25"
                    placeholder="Worum geht es?"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-300" htmlFor="message">Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "err-message" : undefined}
                    className={`mt-1 w-full rounded-xl bg-white/5 px-3 py-2 text-white ring-1 outline-none placeholder:text-zinc-500 focus:ring-white/25 ${errors.message ? "ring-rose-500/40" : "ring-white/10"}`}
                    placeholder="Deine Nachricht…"
                  />
                  {errors.message && <p id="err-message" className="mt-1 text-xs text-rose-400">{errors.message}</p>}
                </div>

                <div className="flex items-start gap-2">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-white focus:ring-white/25"
                    aria-describedby="privacy-hint"
                  />
                  <label htmlFor="privacy" className="text-sm">
                    Ich habe die{" "}
                    <a href="/datenschutz" className="text-white underline underline-offset-2 hover:opacity-90">
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen.
                  </label>
                </div>
                <p id="privacy-hint" className="sr-only">Bitte bestätigen, bevor du sendest.</p>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === "loading" || !(document?.getElementById("privacy") as HTMLInputElement)?.checked}
                    className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-zinc-100 disabled:opacity-60"
                  >
                    {status === "loading" ? "Wird gesendet …" : "Nachricht senden"}
                  </button>

                  {status === "ok" && <span className="text-sm text-emerald-400">Danke! Deine Nachricht wurde gesendet.</span>}
                  {status === "error" && <span className="text-sm text-rose-400">Uups, da ging etwas schief. Bitte später erneut versuchen oder per E-Mail melden.</span>}
                </div>
              </form>
            </Reveal>
          </div>

          {/* Karte/Map */}
          <ParallaxLayer speed={-0.16} className="mt-10 rounded-2xl border border-white/5 bg-white/5 p-2">
            <div className="aspect-[16/6] w-full rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent)] grid place-items-center text-sm text-zinc-400">
              Karte folgt
            </div>
          </ParallaxLayer>
        </Container>
      </section>
    </main>
  );
}
