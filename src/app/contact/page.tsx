import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Apex Plumbing Co. | Get a Free Quote",
  description:
    "Contact Apex Plumbing Co. in Austin, TX. Get a free quote, book a service, or call for 24/7 emergency plumbing. Most requests get a response within the hour.",
  openGraph: {
    title: "Contact Apex Plumbing Co. | Free Quote",
    description: "Get in touch for a free plumbing quote. Call, email, or fill out our form. 24/7 emergency service available.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
