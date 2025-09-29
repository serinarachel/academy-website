import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Get in Touch with Adsmagnify Academy",
  description: "Reach out to Adsmagnify Academy. Contact us for course inquiries, support, or guidance and start your journey in advanced digital marketing today.",
  keywords: "contact adsmagnify academy, course inquiries, digital marketing support, guidance",
  openGraph: {
    title: "Contact – Get in Touch with Adsmagnify Academy",
    description: "Reach out to Adsmagnify Academy. Contact us for course inquiries, support, or guidance and start your journey in advanced digital marketing today.",
    url: "https://adsmagnifyacademy.com/contact/"
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
