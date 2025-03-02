export default function Footer() {
  return (
    <footer className="bg-sap-blue text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 border-b border-sap-accent pb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-sap-accent">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-sap-accent">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-sap-accent">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <SocialIcon platform="linkedin" />
              <SocialIcon platform="twitter" />
              <SocialIcon platform="facebook" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded bg-white/10 border border-sap-accent focus:outline-none focus:ring-2 focus:ring-sap-accent"
            />
            <button className="mt-2 bg-sap-accent text-white px-4 py-2 rounded hover:bg-opacity-90 transition-all">
              Subscribe
            </button>
          </div>
        </div>

        <div className="pt-8 text-center text-sm text-white/80">
          © 2025 SkillsCapital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ platform }) {
  const icons = {
    linkedin:
      "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    twitter:
      "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
    facebook:
      "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
  };

  return (
    <a href="#" className="hover:text-sap-accent transition-colors">
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d={icons[platform]} />
      </svg>
    </a>
  );
}
