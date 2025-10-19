import React from "react";

export function Card({
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
            <div className="text-xs text-zinc-400 leading-relaxed">
              {subtitle}
            </div>
          )}
        </div>
      </div>
      <div className="text-sm leading-6 text-zinc-300">{children}</div>
    </div>
  );
}
