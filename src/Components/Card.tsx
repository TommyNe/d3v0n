import React from "react";
import { motion, useReducedMotion } from "motion/react";
import clsx from "clsx";

type Accent = "zinc" | "sky" | "violet" | "emerald";

type BaseProps = {
  icon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  /**
   * Wenn gesetzt, rendert als <a> (interaktive Karte).
   * Beispiel: href="/projekte/speisewelt"
   */
  href?: string;
  /**
   * Zusätzliche Klassen (z. B. für Grid-Layout).
   */
  className?: string;
  /**
   * Visueller Akzent (Rand/Glow dezent).
   */
  accent?: Accent;
  /**
   * Interaktive Hover-/Press-Effekte aktivieren (auch ohne href).
   */
  interactive?: boolean;
  /**
   * Optionales onClick (setzt automatisch role="button" & tabIndex bei fehlendem href).
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * Für externe Links (nur wenn href gesetzt ist).
   */
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  "aria-label"?: string;
};

export function Card({
  icon,
  title,
  subtitle,
  children,
  href,
  className,
  accent = "zinc",
  interactive,
  onClick,
  target,
  rel,
  ...aria
}: BaseProps) {
  const prefersReduced = useReducedMotion();
  const isInteractive = Boolean(href || onClick || interactive);

  const AccentRing =
    accent === "sky"
      ? "ring-white/10 hover:ring-white/20 before:from-sky-400/20"
      : accent === "violet"
        ? "ring-white/10 hover:ring-white/20 before:from-violet-400/20"
        : accent === "emerald"
          ? "ring-white/10 hover:ring-white/20 before:from-emerald-400/20"
          : "ring-white/10 hover:ring-white/20 before:from-white/10";

  const Comp: any = href ? motion.a : motion.div;

  return (
    <Comp
      href={href}
      target={href ? target : undefined}
      rel={href ? rel : undefined}
      onClick={onClick as any}
      // A11y für Button-Variante ohne href:
      role={!href && onClick ? "button" : undefined}
      tabIndex={!href && onClick ? 0 : undefined}
      // Motion nur, wenn interaktiv & nicht reduced:
      whileHover={
        isInteractive && !prefersReduced ? { y: -4, scale: 1.01 } : undefined
      }
      whileTap={isInteractive && !prefersReduced ? { scale: 0.995 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={clsx(
        "group relative rounded-2xl p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]",
        "bg-white/5 ring-1",
        "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[radial-gradient(60%_80%_at_50%_-10%,var(--tw-gradient-from),transparent_70%)]",
        AccentRing,
        isInteractive &&
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
        className,
      )}
      {...aria}
    >
      <div className="mb-4 flex items-center gap-3">
        {icon && (
          <div
            className={clsx(
              "flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-inset",
              "bg-white/10 ring-white/15",
              // kleiner Hover-Glimmer
              isInteractive &&
                "group-hover:bg-white/[0.14] group-hover:ring-white/20 transition",
            )}
          >
            {icon}
          </div>
        )}
        <div>
          <div className="font-semibold text-white tracking-tight">{title}</div>
          {subtitle && (
            <div className="text-xs text-zinc-400 leading-relaxed">
              {subtitle}
            </div>
          )}
        </div>
      </div>

      <div className="text-sm leading-6 text-zinc-300">{children}</div>

      {/* dezenter Gradient-Glow am unteren Rand bei Hover */}
      {isInteractive && (
        <div
          aria-hidden
          className={clsx(
            "pointer-events-none absolute inset-x-3 bottom-3 h-px opacity-0 transition-opacity",
            "bg-gradient-to-r from-transparent via-white/25 to-transparent",
            "group-hover:opacity-100",
          )}
        />
      )}
    </Comp>
  );
}
