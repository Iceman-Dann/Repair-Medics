"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/Animations";
import {
  BoltIcon,
  CheckCircleIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SparkleIcon,
  StarIcon,
  WrenchIcon,
} from "@/components/Icons";
import { business } from "@/lib/business";

const serviceIcons = [
  <WrenchIcon key="repair" size={34} className="text-accent" />,
  <CheckCircleIcon key="install" size={34} className="text-accent" />,
  <SparkleIcon key="glass" size={34} className="text-accent" />,
  <ShieldCheckIcon key="screen" size={34} className="text-accent" />,
  <BoltIcon key="handyman" size={34} className="text-accent" />,
  <MapPinIcon key="trade" size={34} className="text-accent" />,
];

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <motion.div style={{ y }} className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 opacity-40">
        <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="window-grid absolute right-4 top-24 h-[28rem] w-[34rem] rounded-[2rem] opacity-60 sm:right-6 lg:right-8" />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-card px-4 py-2 text-sm font-semibold text-accent">
              <BoltIcon size={16} />
              {business.heroBadge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.35 }}
            className="mt-6 text-5xl font-bold leading-[0.92] tracking-tighter text-text-primary sm:text-6xl lg:text-7xl"
          >
            Repair help for the parts of a building people touch every day.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl"
          >
            {business.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.65 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href={business.phoneHref}
              className="rounded-2xl bg-accent px-8 py-4 text-lg font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Call {business.phoneDisplay}
            </a>
            <Link
              href="/services"
              className="rounded-2xl border border-accent/20 bg-card px-8 py-4 text-lg font-bold text-text-primary transition-all duration-200 hover:border-accent/40 hover:bg-white"
            >
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mt-8 flex flex-wrap items-center gap-4 text-sm text-text-secondary"
          >
            <span className="inline-flex items-center gap-2">
              <MapPinIcon size={16} className="text-accent" />
              {business.areaLabel}
            </span>
            <span className="hidden text-text-secondary/50 sm:inline">|</span>
            <span className="inline-flex items-center gap-2">
              <PhoneIcon size={16} className="text-accent" />
              Chicago-area phone support
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="relative"
        >
          <div className="glass-strong window-grid rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-white/80 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                  Best-fit work
                </p>
                <p className="mt-3 text-2xl font-bold tracking-tighter text-text-primary">
                  Windows, doors, glass, and screens.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  The clearest public signal is a practical service mix centered on
                  the parts of a home or storefront that need to open, close, seal,
                  slide, and hold up under daily use.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-secondary p-5">
                  <p className="text-sm font-semibold text-text-secondary">
                    Public profile focus
                  </p>
                  <p className="mt-2 text-xl font-bold tracking-tighter text-text-primary">
                    One stop repair shop
                  </p>
                </div>
                <div className="rounded-2xl bg-secondary p-5">
                  <p className="text-sm font-semibold text-text-secondary">
                    Reach them directly
                  </p>
                  <p className="mt-2 text-xl font-bold tracking-tighter text-text-primary">
                    {business.phoneDisplay}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-accent/15 bg-card p-5">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} size={16} className="text-accent" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  Public snippets point to a Chicago listing, an active Facebook page,
                  and a broad repair-and-install positioning rather than a narrow
                  single-trade offer.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="relative z-10 -mt-6">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-[1.75rem] p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {business.trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-4"
                >
                  <CheckCircleIcon size={18} className="text-accent" />
                  <span className="text-sm font-medium text-text-primary">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="Built around the jobs that make a property feel worn out fast."
          subtitle="The public business profile consistently points to windows, doors, glass, screens, and broader repair support for homes and businesses."
        />
        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {business.specialties.map((service, index) => (
            <StaggerItem key={service.id}>
              <div className="glass rounded-[1.75rem] overflow-hidden transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="mb-5 block">{serviceIcons[index]}</span>
                  <h3 className="text-2xl font-bold tracking-tighter text-text-primary">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {service.summary}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {service.includes.slice(0, 3).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-0.5 text-accent">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function OneStopSection() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <ScrollReveal>
            <span className="accent-label">Why It Fits</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-3 text-4xl font-bold tracking-tighter text-text-primary sm:text-5xl">
              One vendor is better than a relay race of callbacks.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
              Repair Medics is positioned online as a one stop repair shop, which is
              useful when a property problem touches more than one category or when the
              owner simply wants a practical fix without managing three separate
              contractors.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2" staggerDelay={0.12}>
          {business.values.map((value) => (
            <StaggerItem key={value.title}>
              <div className="glass rounded-[1.5rem] p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                  {value.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {value.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Process"
          title="Simple, direct, and built for repair-first conversations."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {business.process.map((item, index) => (
            <ScrollReveal key={item.step} delay={index * 0.12}>
              <div className="glass rounded-[1.75rem] p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-xl font-bold text-accent">
                  {item.step}
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tighter text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PublicSignals() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Public Profile"
          title="The clearest facts available online point in the same direction."
          subtitle="This site stays anchored to public business signals rather than made-up marketing stats."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {business.publicSignals.map((signal, index) => (
            <ScrollReveal key={signal.title} delay={index * 0.1}>
              <div className="glass rounded-[1.75rem] p-8">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                  {signal.title}
                </p>
                <p className="mt-4 text-3xl font-bold tracking-tighter text-text-primary">
                  {signal.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {signal.note}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.25}>
          <div className="mt-10 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-text-primary"
            >
              See the full proof page
              <span aria-hidden="true">+</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              label="Coverage"
              title="Chicago-based service with a northwest-suburb footprint."
              subtitle="The listing points to Chicago, IL 60631. The map link supplied for this project also places the business in the northwest-side corridor."
              center={false}
            />
            <ScrollReveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-3">
                {business.coverage.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-accent/15 bg-card px-4 py-2 text-sm font-medium text-text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="mt-10 rounded-[1.75rem] bg-accent p-8 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                  Fastest contact path
                </p>
                <a
                  href={business.phoneHref}
                  className="mt-3 inline-flex items-center gap-3 text-3xl font-bold tracking-tighter"
                >
                  <PhoneIcon size={24} />
                  {business.phoneDisplay}
                </a>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                  If the issue is urgent or the scope is easier to explain than type,
                  calling is the most direct starting point.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <div className="map-container overflow-hidden rounded-[2rem] border border-accent/10 shadow-xl">
              <iframe
                src={business.mapEmbed}
                width="100%"
                height="520"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${business.name} map location`}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl font-bold tracking-tighter text-text-primary sm:text-5xl">
            Need a fix that falls between categories?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-text-secondary">
            That is exactly where a one stop repair shop is most useful. Start with the
            phone number already attached to the public listing.
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
              href="/contact"
              className="rounded-2xl border border-accent/20 bg-card px-8 py-4 text-lg font-bold text-text-primary transition-colors hover:border-accent/40 hover:bg-white"
            >
              Open Contact Page
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <OneStopSection />
      <Process />
      <PublicSignals />
      <Coverage />
      <FinalCTA />
    </>
  );
}
