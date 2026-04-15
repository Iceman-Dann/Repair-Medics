"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/Animations";

const featuredReviews = [
  {
    text: "We had a pipe burst at 2 in the morning on a Saturday. Called Apex and Marcus himself showed up in under 25 minutes. He shut off the water, fixed the burst, and even helped us clean up the water damage. He didn't charge us a cent extra for the emergency call. This is what real service looks like. We will never call another plumber again.",
    name: "Michael & Karen B.",
    city: "Austin, TX",
    date: "March 2024",
  },
  {
    text: "After getting two wildly expensive quotes for a water heater replacement, we called Apex on a friend's recommendation. Jake came out, gave us an honest assessment, and the price was $800 less than the next cheapest quote. New tankless heater installed the next day. Professional, clean, and thorough. These guys are the real deal.",
    name: "Amanda Rodriguez",
    city: "Round Rock, TX",
    date: "January 2024",
  },
  {
    text: "Apex has handled all of our rental property plumbing for the last 3 years. They're our go-to because they're always available, always fair with pricing, and they communicate with our tenants professionally. In this business, finding reliable contractors is everything — and Apex is as reliable as they come.",
    name: "David Chen",
    city: "Cedar Park, TX",
    date: "February 2024",
  },
];

const allReviews = [
  { text: "Fixed a leak other plumbers couldn't find. Professional, punctual, and priced fairly. Highly recommend!", name: "Chris P.", city: "Lakeway, TX" },
  { text: "They treat your home like their own. Booties on shoes, drop cloths down. A+ class act from start to finish.", name: "Maria G.", city: "Leander, TX" },
  { text: "Called about a slow drain. They came same day, cleared it in 20 minutes, and showed me what was causing it on camera. Fair price and great explanation.", name: "Tom H.", city: "Georgetown, TX" },
  { text: "Had a full bathroom remodel and their plumbing work was flawless. Coordinated with our GC perfectly. Would use again for any project.", name: "Lisa & Mark W.", city: "Pflugerville, TX" },
  { text: "Replaced our whole sewer line using trenchless technology. Yard looks untouched. Magic. These guys know their stuff.", name: "Robert F.", city: "Austin, TX" },
  { text: "Best plumber experience I've ever had. On time, clean work, fair price. Rare combo but Apex nails it every time.", name: "Jennifer K.", city: "Round Rock, TX" },
  { text: "Gas line installation for our new range. Everything passed inspection first try. Careful, meticulous work. Highly recommended.", name: "Daniel S.", city: "Bee Cave, TX" },
  { text: "Emergency call on Thanksgiving — they didn't even hesitate. Had our kitchen sink flowing again in under an hour. Lifesavers!", name: "Priya M.", city: "Austin, TX" },
  { text: "Five stars isn't enough. Second time using Apex and the service keeps getting better. The bar is set and nobody else comes close.", name: "Sarah M.", city: "Dripping Springs, TX" },
];

const ratingBreakdown = [
  { stars: 5, percent: 94, count: 113 },
  { stars: 4, percent: 4, count: 5 },
  { stars: 3, percent: 1, count: 1 },
  { stars: 2, percent: 1, count: 1 },
  { stars: 1, percent: 0, count: 0 },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-mesh relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.5 }}>
            <p className="text-sm text-text-secondary mb-2">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-accent">Reviews</span>
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-text-primary">
              Don&apos;t Take Our<br />Word For <span className="text-accent">It.</span>
            </h1>

            {/* Big rating */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="text-7xl sm:text-8xl font-black text-accent">4.9</div>
              <Stars />
              <p className="text-text-secondary">Based on 120+ Google Reviews</p>
            </div>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <span className="glass px-4 py-2 rounded-full text-sm font-semibold text-text-primary">
                ✓ Google Verified
              </span>
              <span className="glass px-4 py-2 rounded-full text-sm font-semibold text-text-primary">
                ✓ Yelp Verified
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="accent-label block text-center mb-2">FEATURED</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-text-primary text-center">
              Top Reviews
            </h2>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
            {featuredReviews.map((review) => (
              <StaggerItem key={review.name}>
                <div className="glass rounded-2xl p-8 h-full flex flex-col">
                  <Stars />
                  <p className="mt-4 text-text-primary leading-relaxed flex-1 text-sm">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text-primary">{review.name}</p>
                        <p className="text-xs text-text-secondary">{review.city} · {review.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-text-primary text-center mb-12">
              More From Our Customers
            </h2>
          </ScrollReveal>
          <StaggerContainer className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6" staggerDelay={0.1}>
            {allReviews.map((review, i) => (
              <StaggerItem key={i}>
                <div className="glass rounded-2xl p-6 break-inside-avoid">
                  <Stars />
                  <p className="mt-3 text-sm text-text-primary leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="text-xs text-text-secondary mt-3">— {review.name}, {review.city}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-text-primary text-center mb-12">
              Rating Breakdown
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {ratingBreakdown.map((row, i) => (
              <ScrollReveal key={row.stars} delay={i * 0.1}>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-text-primary w-6">{row.stars}★</span>
                  <div className="flex-1 h-3 bg-card rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                  <span className="text-sm text-text-secondary w-12 text-right">{row.percent}%</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white">
              Had a great experience?
            </h2>
            <p className="mt-2 text-xl text-white/80">Tell the world.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-black text-lg rounded-2xl hover:scale-105 transition-transform shadow-2xl"
            >
              ⭐ Leave a Google Review
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
