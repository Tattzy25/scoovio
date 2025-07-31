'use client'

export default function PrivacyPage() {
  const lastUpdated = "March 15, 2024"

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {lastUpdated}</p>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Scoovio ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you use our 
              website, mobile application, and services.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
            <p className="mb-4">We collect personal information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Name, email address, phone number</li>
              <li>Driver's license information and verification documents</li>
              <li>Payment information (processed securely by third-party providers)</li>
              <li>Scooter information and photos (for hosts)</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Usage Information</h3>
            <p className="mb-4">We automatically collect information about your use of our services:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Device information and identifiers</li>
              <li>Location data (with your consent)</li>
              <li>Usage patterns and preferences</li>
              <li>Communication with other users</li>
              <li>Transaction history</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process bookings and payments</li>
              <li>Verify user identity and eligibility</li>
              <li>Communicate with you about your account</li>
              <li>Improve and develop new features</li>
              <li>Prevent fraud and ensure safety</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
            <p className="mb-4">We do not sell your personal information. We may share information with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Other users (as necessary for bookings)</li>
              <li>Service providers and payment processors</li>
              <li>Insurance providers (for claims processing)</li>
              <li>Law enforcement when required by law</li>
              <li>Business partners with your consent</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. 
              However, no internet transmission is completely secure.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Your Rights and Choices</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access and review your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Disable location services</li>
              <li>Download your data</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="mb-4">
              We retain your information for as long as necessary to provide our services and 
              fulfill the purposes outlined in this policy. When no longer needed, we securely 
              delete or anonymize your data.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
            <p className="mb-4">
              Your information may be transferred to and processed in countries other than your 
              own. We ensure appropriate safeguards are in place for such transfers.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="mb-4">
              Our services are not intended for individuals under 18 years of age. We do not 
              knowingly collect personal information from children.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We'll notify you of material 
              changes via email or through our platform. Your continued use after changes 
              constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
            <p className="mb-4">
              For questions about this Privacy Policy or your personal information, please contact:
              <br />
              Email: <a href="mailto:privacy@scoovio.com" className="text-scoovio-600 hover:text-scoovio-700">privacy@scoovio.com</a>
              <br />
              Address: 123 Innovation Drive, San Francisco, CA 94105
              <br />
              Phone: (555) 123-SCOOV
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}