'use client'

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Legal Information</h1>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Legal Documents</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Terms of Service</h3>
                  <p className="text-gray-600 mb-3">
                    Read our comprehensive terms and conditions that govern your use of Scoovio services.
                  </p>
                  <a href="/terms" className="text-scoovio-600 hover:text-scoovio-700 font-medium">
                    View Terms of Service →
                  </a>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Privacy Policy</h3>
                  <p className="text-gray-600 mb-3">
                    Learn how we collect, use, and protect your personal information.
                  </p>
                  <a href="/privacy" className="text-scoovio-600 hover:text-scoovio-700 font-medium">
                    View Privacy Policy →
                  </a>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Cancellation Policy</h3>
                  <p className="text-gray-600 mb-3">
                    Understand our policies regarding booking cancellations and refunds.
                  </p>
                  <a href="/cancellation" className="text-scoovio-600 hover:text-scoovio-700 font-medium">
                    View Cancellation Policy →
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Information</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <dl className="space-y-4">
                  <div>
                    <dt className="font-medium text-gray-900">Company Name</dt>
                    <dd className="text-gray-600">Scoovio Inc.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Registered Address</dt>
                    <dd className="text-gray-600">
                      123 Innovation Drive<br />
                      San Francisco, CA 94105<br />
                      United States
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Business Registration</dt>
                    <dd className="text-gray-600">Delaware C-Corporation</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Contact</dt>
                    <dd className="text-gray-600">
                      Email: <a href="mailto:legal@scoovio.com" className="text-scoovio-600 hover:text-scoovio-700">legal@scoovio.com</a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                If you have any disputes or concerns regarding our services, please contact us first 
                so we can try to resolve the issue. You can reach our legal team at{' '}
                <a href="mailto:legal@scoovio.com" className="text-scoovio-600 hover:text-scoovio-700">
                  legal@scoovio.com
                </a>.
              </p>
              <p className="text-gray-600">
                For unresolved disputes, we participate in binding arbitration in accordance with 
                the American Arbitration Association's rules.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Regulatory Compliance</h2>
              <p className="text-gray-600">
                Scoovio operates in compliance with applicable local, state, and federal regulations 
                in all jurisdictions where we provide services. We maintain appropriate licenses 
                and insurance coverage as required by law.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}