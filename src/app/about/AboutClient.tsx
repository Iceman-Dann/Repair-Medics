"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/Animations";
import SectionHeading from "@/components/SectionHeading";
import { business } from "@/lib/business";

export default function AboutClient() {
  return (
    <>
      <section className="gradient-mesh relative pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className="mb-2 text-sm text-text-secondary">
              <Link href="/" className="transition-colors hover:text-accent">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-accent">About</span>
            </p>
            <h1 className="text-4xl font-bold tracking-tighter text-text-primary sm:text-5xl lg:text-6xl">
              A repair company that makes sense when the job does not fit a neat box.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-text-secondary">
              Public descriptions of {business.name} consistently describe a one stop
              repair shop serving homes and businesses with window, door, glass,
              screen, and broader repair help across the Chicago area.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <ScrollReveal>
            <div className="glass-strong window-grid rounded-[2rem] p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                What the public profile says
              </p>
              <div className="mt-6 space-y-6 text-sm leading-relaxed text-text-secondary">
                <p>
                  The strongest public description available is direct: Repair Medics is
                  a one stop repair shop for homes and businesses.
                </p>
                <p>
                  The clearest service categories tied to the brand are window repair
                  and installation, door repair and replacement, glass installation,
                  and screen repair.
                </p>
                <p>
                  Public snippets also reference broader repair and installation work,
                  including handyman, electrical, plumbing, HVAC, and general
                  contracting support.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="accent-label">Positioning</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-3 text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl">
                Repair first. Replace when the fix no longer makes sense.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-6 space-y-4 text-text-secondary">
                <p>
                  That is the practical value of this kind of company. A sticking
                  sliding door, cracked glass panel, torn screen, worn hardware, or
                  mixed punch-list issue does not need a dramatic sales process.
                </p>
                <p>
                  It needs someone who can assess what is broken, decide whether the
                  right answer is repair or replacement, and move the job forward
                  without unnecessary handoffs.
                </p>
                <p>
                  Based on the public business profile, that is the lane Repair Medics
                  is trying to own in the Chicago market.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why People Call"
            title="The business profile is set up for multi-trade repair problems."
          />
          <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {business.values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="glass rounded-[1.75rem] p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                    {value.title}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    {value.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Service Fit"
            title="Jobs that line up well with the public service mix"
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {business.specialties.slice(0, 3).map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <div className="glass rounded-[1.75rem] p-8">
                  <h3 className="text-2xl font-bold tracking-tighter text-text-primary">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {service.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-bold tracking-tighter text-text-primary sm:text-5xl">
              Need the fastest next step?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-text-secondary">
              The public listing already gives you the best contact point. Start there,
              then move to the service page if you want the site summary first.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={business.phoneHref}
                className="rounded-2xl bg-accent px-8 py-4 text-lg font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/90"
              >
                Call {business.phoneDisplay}
              </a>
              <Link
                href="/services"
                className="rounded-2xl border border-accent/20 bg-card px-8 py-4 text-lg font-bold text-text-primary transition-colors hover:border-accent/40 hover:bg-white"
              >
                View Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
