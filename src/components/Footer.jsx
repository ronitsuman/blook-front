// Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-blue-950 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-3">BLookMySpace</h3>
            <p className="text-sm text-white/80 mb-2">Revolutionizing outdoor branding. Find verified ad spaces & launch campaigns with ease.</p>
            <a href="#" className="text-yellow-400 hover:underline font-semibold">Partner with Us</a>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Support</h4>
            <ul className="text-sm text-white/80 space-y-1">
              <li><a href="/support" className="hover:underline">Contact Support</a></li>
              <li><a href="/faqs" className="hover:underline">FAQs</a></li>
              <li><a href="/newsletter" className="hover:underline">Newsletter Signup</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Legal</h4>
            <ul className="text-sm text-white/80 space-y-1">
              <li><a href="/terms" className="hover:underline">Terms of Use</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p className="text-sm text-white/80">support@blookmyspace.ai</p>
            <p className="text-sm text-white/80">+91 9876543210</p>
          </div>
        </div>
        <div className="text-center text-xs text-white/60 mt-8">
          © 2025 BLookMySpace.ai. All rights reserved.
        </div>
      </footer>
    );
  }
  