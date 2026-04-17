import type { Metadata } from "next";
import ReviewsClient from "./ReviewsClient";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: `Public Profile and Proof | ${business.name}`,
  description:
    `Review the public-facing business signals behind this ${business.name} site build, including service focus, phone number, Chicago listing context, and Facebook presence.`,
  openGraph: {
    title: `${business.name} | Public Profile and Proof`,
    description:
      `A transparent summary of the verified public signals used to rebuild this site around the right services and location.`,
  },
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
