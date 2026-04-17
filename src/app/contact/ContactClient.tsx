"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/Animations";
import { business } from "@/lib/business";

const serviceOptions = business.specialties.map((service) => service.name);

const timeOptions = [
  "Morning",
  "Midday",
  "Afternoon",
  "Evening",
  "Call me as soon as possible",
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    time: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
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
              <span className="text-accent">Contact</span>
            </p>
            <h1 className="text-4xl font-bold tracking-tighter text-text-primary sm:text-5xl lg:text-6xl">
              Start with a call or send the job details here.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-text-secondary">
              The strongest public contact path is still the phone number tied to the
              Chicago-area listing, but the page keeps a simple intake form for
              planning the project scope.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="glass rounded-[2rem] p-8 sm:p-10">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                        <svg
                          width="38"
                          height="38"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C86C2F"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold tracking-tighter text-text-primary">
                        Request captured
                      </h3>
                      <p className="mt-3 text-text-secondary">
                        Use the listed phone number for the fastest follow-up on a real
                        job request.
                      </p>
                      <a
                        href={business.phoneHref}
                        className="mt-6 inline-flex rounded-2xl bg-accent px-6 py-3 font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/90"
                      >
                        Call {business.phoneDisplay}
                      </a>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h2 className="text-2xl font-bold tracking-tighter text-text-primary">
                        Request a callback
                      </h2>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-text-secondary"
                          >
                            Full name
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-2xl border border-accent/10 bg-white px-4 py-3 text-text-primary outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                            placeholder="Your name"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="mb-2 block text-sm font-medium text-text-secondary"
                          >
                            Phone number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-2xl border border-accent/10 bg-white px-4 py-3 text-text-primary outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                            placeholder={business.phoneDisplay}
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="service"
                            className="mb-2 block text-sm font-medium text-text-secondary"
                          >
                            Project type
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full cursor-pointer appearance-none rounded-2xl border border-accent/10 bg-white px-4 py-3 text-text-primary outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                          >
                            <option value="">Select a service</option>
                            {serviceOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="time"
                            className="mb-2 block text-sm font-medium text-text-secondary"
                          >
                            Best time to call
                          </label>
                          <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full cursor-pointer appearance-none rounded-2xl border border-accent/10 bg-white px-4 py-3 text-text-primary outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                          >
                            <option value="">Select a time</option>
                            {timeOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm font-medium text-text-secondary"
                        >
                          Describe the issue
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full resize-none rounded-2xl border border-accent/10 bg-white px-4 py-3 text-text-primary outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                          placeholder="What is broken, sticking, cracked, loose, or no longer sealing correctly?"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-2xl bg-accent py-4 text-lg font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/90"
                      >
                        Send request
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <ScrollReveal delay={0.1}>
                <a
                  href={business.phoneHref}
                  className="glass block rounded-[1.75rem] p-6 transition-all hover:border-accent/30"
                >
                  <p className="text-sm text-text-secondary">Call directly</p>
                  <p className="mt-2 text-2xl font-bold tracking-tighter text-text-primary">
                    {business.phoneDisplay}
                  </p>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="glass block rounded-[1.75rem] p-6 transition-all hover:border-accent/30"
                >
                  <p className="text-sm text-text-secondary">Facebook page</p>
                  <p className="mt-2 text-2xl font-bold tracking-tighter text-text-primary">
                    View public profile
                  </p>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="glass rounded-[1.75rem] p-6">
                  <p className="text-sm text-text-secondary">Service area</p>
                  <p className="mt-2 text-lg font-bold text-text-primary">
                    {business.areaLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    Public listing context points to Chicago, IL 60631 with a map pin in
                    the northwest-side corridor.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div className="glass rounded-[1.75rem] p-6">
                  <p className="text-sm text-text-secondary">Good fit for</p>
                  <ul className="mt-4 space-y-3 text-sm text-text-secondary">
                    {business.specialties.slice(0, 4).map((service) => (
                      <li key={service.id}>
                        <span className="mr-2 text-accent">+</span>
                        {service.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="map-container mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-accent/10 shadow-xl">
            <iframe
              src={business.mapEmbed}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${business.name} map`}
            />
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl">
              Need the shortest path to a real answer?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href={business.phoneHref}
              className="mt-6 inline-flex rounded-2xl bg-accent px-10 py-5 text-xl font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Call {business.phoneDisplay}
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
