import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You - Demo Booked Successfully | Adsmagnify Academy",
  description: "Thank you for booking your demo lecture at Adsmagnify Academy. We'll contact you within 24 hours to confirm your session.",
  keywords: "demo booked, thank you, Adsmagnify Academy, digital marketing demo, Mumbai",
  openGraph: {
    title: "Thank You - Demo Booked Successfully | Adsmagnify Academy",
    description: "Thank you for booking your demo lecture at Adsmagnify Academy. We'll contact you within 24 hours to confirm your session.",
    url: "https://adsmagnify.vercel.app/thank-you"
  }
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
