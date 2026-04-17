"use client";

import { ScrollReveal } from "./Animations";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ label, title, subtitle, center = true }: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <ScrollReveal>
        <span className="accent-label">{label}</span>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-text-primary">
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p
            className={`mt-4 max-w-2xl text-lg text-text-secondary ${
              center ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
