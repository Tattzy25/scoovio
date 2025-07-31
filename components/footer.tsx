export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/help" className="text-sm text-gray-600 hover:text-gray-900">
                  Help center
                </a>
              </li>
              <li>
                <a href="/safety" className="text-sm text-gray-600 hover:text-gray-900">
                  Safety
                </a>
              </li>
              <li>
                <a href="/cancellation" className="text-sm text-gray-600 hover:text-gray-900">
                  Cancellation options
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Hosting
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/host" className="text-sm text-gray-600 hover:text-gray-900">
                  Share your scooter
                </a>
              </li>
              <li>
                <a href="/host/resources" className="text-sm text-gray-600 hover:text-gray-900">
                  Host resources
                </a>
              </li>
              <li>
                <a href="/host/community" className="text-sm text-gray-600 hover:text-gray-900">
                  Community forum
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Scoovio
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                  About us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-sm text-gray-600 hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="/press" className="text-sm text-gray-600 hover:text-gray-900">
                  Press
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Connect
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact us
                </a>
              </li>
              <li>
                <a href="/legal" className="text-sm text-gray-600 hover:text-gray-900">
                  Terms & privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © 2024 Scoovio, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}