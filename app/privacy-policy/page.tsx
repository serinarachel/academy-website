import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Adsmagnify Academy',
  description: 'Privacy Policy for Adsmagnify Academy - Learn how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy | Adsmagnify Academy',
    description: 'Privacy Policy for Adsmagnify Academy - Learn how we collect, use, and protect your personal information.',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-adsmagnify-blue mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Effective Date:</strong> 18th June 2025
            </p>
            
            <p className="text-gray-700 mb-8">
              Welcome to Adsmagnify Academy ("we," "our," or "us"). Your privacy is very important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://academy.adsmagnify.com/ or enroll in our programs.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
              
              <div className="ml-4 space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-adsmagnify-blue mb-2">a. Personal Information:</h3>
                  <p className="text-gray-700">
                    Name, email address, phone number, educational background, company name (if applicable), and other details you provide during course registration, inquiry, or communication.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-adsmagnify-blue mb-2">b. Usage Data:</h3>
                  <p className="text-gray-700">
                    Information automatically collected when you visit our site, including IP address, browser type, device information, pages visited, time spent, and referring websites.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-adsmagnify-blue mb-2">c. Cookies & Tracking Technologies:</h3>
                  <p className="text-gray-700">
                    We use cookies and tracking technologies to improve user experience, analyze traffic, and personalize content. You may disable cookies in your browser settings.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-adsmagnify-blue mb-2">d. Media (Images & Videos):</h3>
                  <p className="text-gray-700">
                    Our website and marketing material may contain both AI-generated visuals and real images/videos taken during sessions or events.
                  </p>
                  <p className="text-gray-700">
                    All real images/videos are captured and published only with the prior consent of students, faculty, or participants.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected data to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Process course registrations and deliver services</li>
                <li>Communicate important updates, course schedules, and offers</li>
                <li>Provide learning materials and resources</li>
                <li>Improve website performance and learning experience</li>
                <li>Share success stories (with consent)</li>
                <li>Send promotional or marketing materials (only with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">3. Sharing of Information</h2>
              <p className="text-gray-700 mb-4">We do not sell or rent your personal data. We may share information with:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Service providers (e.g., learning platforms, hosting, analytics, payment gateways)</li>
                <li>Legal authorities when required by law</li>
                <li>Business transfers in the case of merger, acquisition, or restructuring</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">4. Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate security measures to safeguard your information. However, no system is completely secure. We encourage you to use strong passwords and secure your devices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">5. Your Rights & Choices</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Access, correct, or delete your personal data</li>
                <li>Withdraw consent for media usage (images/videos) at any time</li>
                <li>Opt out of promotional communications</li>
                <li>Request details of stored information</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, contact us at <a href="mailto:info@adsmagnify.in" className="text-adsmagnify-blue hover:underline">info@adsmagnify.in</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">6. Third-Party Links</h2>
              <p className="text-gray-700">
                Our website may link to external websites or third-party tools. We are not responsible for their privacy practices. Please review their policies before sharing your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">7. Children's Privacy</h2>
              <p className="text-gray-700">
                Our courses and services are intended for individuals aged 16 and above. We do not knowingly collect information from children under 16.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. Updates will be posted on this page with the revised effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-adsmagnify-blue mb-4">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">If you have any questions regarding this Privacy Policy, you may contact us at:</p>
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
