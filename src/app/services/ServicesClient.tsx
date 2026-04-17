"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/Animations";
import SectionHeading from "@/components/SectionHeading";
import { business } from "@/lib/business";

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState<string>(business.specialties[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToService = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top, behavior: "smooth" });
  };

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
              <span className="text-accent">Services</span>
            </p>
            <h1 className="text-4xl font-bold tracking-tighter text-text-primary sm:text-5xl lg:text-6xl">
              Service categories that match the public Repair Medics profile.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-text-secondary">
              The site copy here stays aligned with the services that show up most
              clearly in public snippets and profile text.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="sticky top-[64px] z-30 border-b border-accent/10 bg-primary/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 py-3">
            {business.specialties.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToService(service.id)}
                className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeTab === service.id
                    ? "bg-accent text-white"
                    : "bg-card text-text-secondary hover:text-text-primary"
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12">
        {business.specialties.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-32 py-16"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollReveal>
                <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                      {service.name}
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl">
                      {service.summary}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-text-secondary">
                      {service.detail}
                    </p>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="rounded-2xl border border-accent/10 bg-card px-4 py-4 text-sm text-text-secondary"
                        >
                          <span className="mr-2 text-accent">+</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-8 inline-flex rounded-2xl bg-accent px-6 py-3 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/90"
                    >
                      Ask About This Service
                    </Link>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="glass-strong window-grid rounded-[2rem] p-8">
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                        Practical fit
                      </p>
                      <p className="mt-4 text-3xl font-bold tracking-tighter text-text-primary">
                        {service.name}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                        Best used when the problem is visible, annoying, urgent, or
                        clearly affecting how the space functions day to day.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {index < business.specialties.length - 1 && (
                <div className="mt-16 border-t border-accent/10" />
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="FAQ" title="Common questions" />
          <div className="mt-12 space-y-4">
            {business.faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} delay={index * 0.05}>
                <div className="glass overflow-hidden rounded-[1.5rem]">
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <span className="pr-4 text-sm font-semibold text-text-primary sm:text-base">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 text-accent"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-text-secondary">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl">
              Not sure which category your job belongs in?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-4 text-lg text-text-secondary">
              That is part of the value of a multi-trade repair shop. Start with a
              call and sort the scope from there.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <a
              href={business.phoneHref}
              className="mt-8 inline-flex rounded-2xl bg-accent px-10 py-5 text-xl font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Call {business.phoneDisplay}
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
