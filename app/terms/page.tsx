'use client'

export default function TermsPage() {
  const lastUpdated = "March 15, 2024"

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {lastUpdated}</p>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using Scoovio's services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of the terms, you may not access our services.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="mb-4">
              Scoovio provides a platform that connects scooter owners ("Hosts") with individuals 
              seeking to rent scooters ("Riders"). We facilitate bookings, payments, and provide 
              insurance coverage, but do not own or operate any scooters.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
            <p className="mb-4">
              You must create an account to use our services. You agree to provide accurate, 
              current, and complete information during registration and to update such information 
              to keep it accurate and complete.
            </p>
            <p className="mb-4">
              You are responsible for maintaining the confidentiality of your account credentials 
              and for all activities that occur under your account.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Host Responsibilities</h2>
            <p className="mb-4">
              As a Host, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate information about your scooter</li>
              <li>Maintain your scooter in safe, working condition</li>
              <li>Honor all confirmed bookings</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Respond to booking requests within 24 hours</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Rider Responsibilities</h2>
            <p className="mb-4">
              As a Rider, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide valid driver's license and meet age requirements</li>
              <li>Use the scooter safely and responsibly</li>
              <li>Return the scooter in the same condition as received</li>
              <li>Report any damage or issues immediately</li>
              <li>Follow all traffic laws and regulations</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Fees and Payments</h2>
            <p className="mb-4">
              Scoovio charges a service fee on all transactions. Hosts receive 85% of the booking 
              total. Payment processing fees may apply. All fees are disclosed before booking confirmation.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Cancellations</h2>
            <p className="mb-4">
              Cancellations are subject to our cancellation policy. Riders may cancel free of charge 
              up to 24 hours before the booking start time. Hosts may cancel bookings under specific 
              circumstances with proper notice.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Insurance</h2>
            <p className="mb-4">
              Scoovio provides insurance coverage for hosts and riders during active bookings. 
              Coverage details are available in our insurance policy. Hosts and riders must 
              report any incidents immediately.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Prohibited Activities</h2>
            <p className="mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Use the service for any illegal purpose</li>
              <li>Misrepresent yourself or your scooter</li>
              <li>Engage in fraudulent activities</li>
              <li>Violate any third-party rights</li>
              <li>Interfere with the service's operation</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Limitation of Liability</h2>
            <p className="mb-4">
              Scoovio is not liable for any indirect, incidental, special, consequential, or 
              punitive damages arising from your use of the service. Our total liability 
              shall not exceed the amount you paid us in the 12 months prior to the claim.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="mb-4">
              We may modify these terms at any time. We'll notify you of material changes 
              via email or through the platform. Continued use after changes constitutes 
              acceptance of the modified terms.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us at:
              <br />
              Email: <a href="mailto:legal@scoovio.com" className="text-scoovio-600 hover:text-scoovio-700">legal@scoovio.com</a>
              <br />
              Address: 123 Innovation Drive, San Francisco, CA 94105
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}