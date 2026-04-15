import type { Metadata } from "next";
import ReviewsClient from "./ReviewsClient";

export const metadata: Metadata = {
  title: "Reviews | Apex Plumbing Co. | 4.9 Stars on Google",
  description:
    "See why Austin trusts Apex Plumbing Co. Read 120+ verified reviews from real customers. 4.9 star rating on Google. Licensed, insured, and community recommended.",
  openGraph: {
    title: "Customer Reviews | Apex Plumbing Co.",
    description: "4.9 stars from 120+ verified Google reviews. See what Austin is saying about us.",
  },
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
