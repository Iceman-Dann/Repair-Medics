import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Apex Plumbing Co. | Austin, TX",
  description:
    "Learn about Apex Plumbing Co., Austin's most trusted plumbing company. Founded in 2009 by Marcus Reyes, we've grown from one truck to a full team — built on hard work and honest service.",
  openGraph: {
    title: "About Apex Plumbing Co. | Our Story",
    description: "Founded in 2009 with one truck and a promise. Learn how we became Austin's top-rated plumber.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
