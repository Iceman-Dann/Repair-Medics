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

export default function ReviewsClient() {
  return (
    <>
      <section className="gradient-mesh relative pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
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
              <span className="text-accent">Proof</span>
            </p>
            <h1 className="text-4xl font-bold tracking-tighter text-text-primary sm:text-5xl lg:text-6xl">
              Public profile signals, without the fake review padding.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-text-secondary">
              Instead of inventing customer quotes, this page shows the clearest
              business facts available from public snippets tied to Repair Medics.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Signals"
            title="What can be verified from public-facing profiles"
          />
          <StaggerContainer
            className="mt-16 grid gap-6 lg:grid-cols-3"
            staggerDelay={0.12}
          >
            {business.publicSignals.map((signal) => (
              <StaggerItem key={signal.title}>
                <div className="glass rounded-[1.75rem] p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                    {signal.title}
                  </p>
                  <p className="mt-4 text-4xl font-bold tracking-tighter text-text-primary">
                    {signal.value}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    {signal.note}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Service Focus"
            title="The service mix visible online is specific enough to be useful."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {business.specialties.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.08}>
                <div className="glass rounded-[1.75rem] p-8">
                  <h3 className="text-2xl font-bold tracking-tighter text-text-primary">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {service.summary}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-text-secondary">
                    {service.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <SectionHeading
              label="What This Means"
              title="Enough signal to build the site around the right kind of work"
              center={false}
            />
            <div className="mt-8 space-y-4 text-text-secondary">
              <p>
                The public information is strong enough to confidently move the site
                away from plumbing and toward window, door, glass, screen, and general
                repair messaging.
              </p>
              <p>
                It is not strong enough to justify made-up founders, fabricated
                testimonials, or fake performance claims. That is why this page stays
                honest about what is known and what is inferred.
              </p>
              <p>
                For a real production launch, the next step should be collecting direct
                owner-approved copy, licensing, hours, and photo assets.
              </p>
            </div>
          </div>

          <ScrollReveal delay={0.15}>
            <div className="glass-strong rounded-[2rem] p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                Next best action
              </p>
              <p className="mt-4 text-3xl font-bold tracking-tighter text-text-primary">
                Call or verify remaining details directly.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                The site now reflects the verified business direction. The remaining
                facts that would tighten it further are exact hours, preferred service
                radius, official project photos, and any owner-approved trust claims.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={business.phoneHref}
                  className="rounded-2xl bg-accent px-6 py-3 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/90"
                >
                  Call {business.phoneDisplay}
                </a>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-accent/20 bg-card px-6 py-3 text-base font-bold text-text-primary transition-colors hover:border-accent/40 hover:bg-white"
                >
                  Open Facebook page
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
