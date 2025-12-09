"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-white text-black">

      {/* ============================
          HERO SECTION
      ============================ */}
      <section className="w-full bg-[#F8F9FA] py-20 md:py-28 border-b border-black/10">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight 
                       bg-gradient-to-r from-[#00A17F] to-[#BBD694]
                       bg-clip-text text-transparent"
          >
            Privacy Policy
          </motion.h1>

          <p className="text-black/60 mt-4 text-lg">
            Last Updated: <strong>[01-12-2025]</strong>
          </p>
        </div>
      </section>

      {/* ============================
          MAIN CONTENT
      ============================ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-12 text-black/80 text-lg leading-relaxed">

          <p>
            HomeTree (“we”, “our”, “us”) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website 
            <strong> hometree.co.in</strong>, interact with our advertisements,
            or submit your information through lead/instant forms on Meta
            (Facebook & Instagram).
          </p>

          <p>
            By using our website or submitting your details, you agree to the
            practices described in this Privacy Policy.
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-medium text-black mb-2">
              1.1 Personal Information
            </h3>
            <p>We may collect the following personal details when you submit a form or contact us:</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Full Name</li>
              <li>Phone Number</li>
              <li>Email Address</li>
              <li>City / Location</li>
              <li>Investment Budget or Property Preference</li>
              <li>Any other information you voluntarily share</li>
            </ul>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">
              1.2 Automatically Collected Information
            </h3>
            <p>When you visit our website, we may automatically collect:</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>IP Address</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Pages visited and time spent</li>
              <li>Cookies and tracking data</li>
            </ul>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">
              1.3 Information from Third Parties
            </h3>
            <p>
              If you interact with our Meta Ads Instant Forms or Google Ads,
              we may receive basic information you provide there.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use your information to:</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Contact you regarding real estate projects and services</li>
              <li>Provide consultation and project details based on your inquiry</li>
              <li>Improve our website, ads, and user experience</li>
              <li>Send updates, offers, and property investment communication</li>
              <li>Comply with legal or regulatory requirements</li>
            </ul>

            <p className="mt-3">
              We <strong>do not</strong> sell or rent your personal information to third parties.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              3. Sharing Your Information
            </h2>

            <p>We may share your information with:</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Verified real estate developers for coordination</li>
              <li>Our internal sales, support, or marketing teams</li>
              <li>Third-party service providers (CRM, advertising, communication)</li>
              <li>Authorities if required by law or regulatory guidelines</li>
            </ul>

            <p className="mt-3">
              All third parties are required to handle your data securely.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              4. Cookies & Tracking Technologies
            </h2>
            <p>
              We use cookies and analytics tools (including Google Analytics,
              Meta Pixel) to:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Understand visitor behaviour</li>
              <li>Improve ad performance</li>
              <li>Personalise browsing experience</li>
            </ul>

            <p className="mt-3">
              You may disable cookies in your browser settings.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              5. Data Security
            </h2>

            <p>
              We take reasonable technical and organizational steps to protect your
              information against unauthorized access, loss, misuse, or alteration.
            </p>

            <p className="mt-3">
              However, no online transmission or storage method is 100% secure.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              6. Data Retention
            </h2>

            <p>
              We retain your personal information only as long as necessary to:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Fulfil the purpose of collection</li>
              <li>Provide updates and consultation</li>
              <li>Meet legal obligations</li>
            </ul>

            <p className="mt-3">
              You may request deletion of your data at any time.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              7. Your Rights
            </h2>

            <p>You have the right to:</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent for communication</li>
            </ul>

            <p className="mt-3">
              To exercise these rights, email us at:
              <br />
              📧 <strong>[Add Email]</strong>
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              8. Third-Party Links
            </h2>

            <p>
              Our website may contain links to external sites.  
              We are not responsible for their content or privacy practices.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              9. Policy for Children
            </h2>

            <p>
              Our website and services are not intended for individuals under 18.  
              We do not knowingly collect data from children.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              10. Changes to This Privacy Policy
            </h2>

            <p>
              We may update this Privacy Policy periodically.  
              Changes will appear on this page with an updated “Last Modified” date.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-2xl font-semibold text-black mb-3">
              11. Contact Us
            </h2>

            <p className="leading-relaxed">
              If you have questions or concerns regarding this Privacy Policy, contact us:
              <br />
              📧 <strong>[Add Email]</strong>
              <br />
              📞 <strong>+919540830309</strong>
              <br />
              🏢 <strong>[Add Company Address]</strong>
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
