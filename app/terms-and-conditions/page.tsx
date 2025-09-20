import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Adsmagnify Academy',
  description: 'Terms and Conditions for Adsmagnify Academy - Learn about our enrollment policies, payment terms, and code of conduct.',
  openGraph: {
    title: 'Terms & Conditions | Adsmagnify Academy',
    description: 'Terms and Conditions for Adsmagnify Academy - Learn about our enrollment policies, payment terms, and code of conduct.',
  },
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-adsmagnify-blue mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> 18th June 2025
            </p>
            
            <p className="text-gray-700 mb-8">
              These Terms & Conditions ("Terms") govern your access and use of Adsmagnify Academy's website, courses, and services. By enrolling in our programs or using our website, you agree to these Terms.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">1. Enrollment & Eligibility</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>You must be at least 16 years old to enroll in our courses.</li>
                <li>You agree to provide accurate and complete registration details.</li>
                <li>Admission is subject to availability and full/partial payment of fees as communicated.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">2. Payments & Refunds</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Course fees must be paid as per the schedule provided during enrollment.</li>
                <li>Refunds (if applicable) will follow the refund policy shared during registration.</li>
                <li>Non-payment of fees may result in suspension of access to courses.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">3. Use of Materials</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>All course materials, videos, and resources are for personal learning only.</li>
                <li>Sharing, copying, redistributing, or reselling our content without permission is strictly prohibited.</li>
                <li>AI-generated content or learning aids provided remain the intellectual property of Adsmagnify Academy.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">4. Media Usage (Images & Videos)</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>By enrolling, you acknowledge that session images/videos may be captured.</li>
                <li>These may be used for training, quality, or promotional purposes.</li>
                <li>All real images/videos are used only with student consent obtained beforehand.</li>
                <li>If you wish to withdraw consent, you may contact us anytime.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">5. Code of Conduct</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Students must maintain respectful behavior during sessions (online or offline).</li>
                <li>Misconduct, harassment, or violation of academy policies may result in termination of enrollment without refund.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">6. Limitation of Liability</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Adsmagnify Academy is not responsible for technical issues, internet connectivity, or device compatibility.</li>
                <li>While we strive to provide accurate learning resources, we do not guarantee specific results or career outcomes.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">7. Termination</h2>
              <p className="text-gray-700">
                We reserve the right to terminate or suspend access to any student who violates these Terms, policies, or engages in harmful behavior.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">8. Changes to Terms</h2>
              <p className="text-gray-700">
                We may update these Terms at any time. Continued use of our services after changes implies acceptance of updated Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">For questions regarding these Terms & Conditions, contact:</p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 font-semibold mb-2">Adsmagnify Academy</p>
                <p className="text-gray-700 mb-2">G12, Pil Court, Near GST Bhavan, Churchgate, Mumbai - 400020</p>
                <p className="text-gray-700 mb-2">📧 <a href="mailto:info@adsmagnify.in" className="text-adsmagnify-blue hover:underline">info@adsmagnify.in</a></p>
                <p className="text-gray-700">📞 <a href="tel:+917700090236" className="text-adsmagnify-blue hover:underline">+91 7700090236</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
