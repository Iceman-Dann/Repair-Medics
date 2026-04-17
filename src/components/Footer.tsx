import Link from "next/link";
import { MapPinIcon, PhoneIcon } from "@/components/Icons";
import { business } from "@/lib/business";

const footerLinks = {
  services: business.specialties.slice(0, 5),
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Proof", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ],
};

function BrandMark() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="4" width="16" height="16" rx="1.5" />
        <path d="M12 4v16M4 12h16" />
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-accent/10 bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <BrandMark />
              <div>
                <span className="block text-lg font-bold tracking-tighter text-text-primary">
                  {business.name}
                </span>
                <span className="block text-[11px] uppercase tracking-[0.24em] text-text-secondary">
                  Chicago Repair Services
                </span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-text-secondary">
              A Chicago-area one stop repair shop focused on windows, doors, glass,
              screens, and broader property repair support.
            </p>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent/90"
            >
              <PhoneIcon size={16} />
              {business.phoneDisplay}
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-text-primary">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-text-primary">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-text-primary">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-accent">
                  <MapPinIcon size={16} />
                </span>
                Chicago, IL 60631 and nearby northwest suburbs
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-accent">
                  <PhoneIcon size={16} />
                </span>
                <a
                  href={business.phoneHref}
                  className="transition-colors hover:text-accent"
                >
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-accent transition-colors hover:text-text-primary"
                >
                  View Facebook page
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-accent/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary">
            Window, door, glass, screen, and general repair support across {business.areaShort}.
          </p>
        </div>
      </div>
    </footer>
  );
}
