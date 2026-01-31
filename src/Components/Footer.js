function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-deep-navy py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-12 lg:mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl text-vivid-turquoise">lock_secure</span>
              <span className="text-xl font-bold text-white">SecureShare</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              End-to-end encrypted file sharing with ephemeral QR codes for maximum privacy.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Product</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button /*href="#"*/ className="hover:text-vivid-turquoise transition">Features</button></li>
              <li><button /*href="#steps" */ className="hover:text-vivid-turquoise transition">How it Works</button></li>
              <li><button /*href="#qr-basics"*/ className="hover:text-vivid-turquoise transition">QR Codes</button></li>
              <li><button /*href="#"*/ className="hover:text-vivid-turquoise transition">Pricing</button></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button /*href="#"*/ className="hover:text-vivid-turquoise transition">Documentation</button></li>
              <li><button /*href="#"*/ className="hover:text-vivid-turquoise transition">API Reference</button></li>
              <li><button /*href="#"*/ className="hover:text-vivid-turquoise transition">Blog</button></li>
              <li><button /*href="#"*/ className="hover:text-vivid-turquoise transition">Support</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button /* href="#"*/ className="hover:text-vivid-turquoise transition">Privacy Policy</button></li>
              <li><button /* href="#"*/ className="hover:text-vivid-turquoise transition">Terms of Service</button></li>
              <li><button /* href="#"*/ className="hover:text-vivid-turquoise transition">Security</button></li>
              <li><button /* href="#"*/ className="hover:text-vivid-turquoise transition">Contact</button></li>
            </ul>
          </div>
        </div>

        {/* Mobile Layout (below lg) */}
        <div className="lg:hidden">
          {/* Brand Section */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-xl md:text-2xl text-vivid-turquoise">lock_secure</span>
              <span className="text-lg md:text-xl font-bold text-white">SecureShare</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              End-to-end encrypted file sharing with encrypted QR codes for maximum privacy.
            </p>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* Product */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white text-base">Product</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><button  /*href="#"*/ className="hover:text-vivid-turquoise transition-colors duration-200 block py-1">Features</button ></li>
                <li><button  /*href="#steps"*/ className="hover:text-vivid-turquoise transition-colors duration-200 block py-1">How it Works</button ></li>
                <li><button  /*href="#qr-basics"*/ className="hover:text-vivid-turquoise transition-colors duration-200 block py-1">QR Codes</button ></li>
                <li><button  /*href="#"*/ className="hover:text-vivid-turquoise transition-colors duration-200 block py-1">Pricing</button ></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white text-base">Resources</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><button  /* href="#"*/ className="hover:text-vivid-turquoise transition-colors duration-200 block py-1">Documentation</button ></li>
                <li><button   /*href="#"*/ className="hover:text-vivid-turquoise transition-colors duration-200 block py-1">API Reference</button ></li>
                <li><button   /*href="#"*/ className="hover:text-vivid-turquoise transition-colors duration-200 block py-1">Blog</button ></li>
                <li><button   /*href="#"*/ className="hover:text-vivid-turquoise transition-colors duration-200 block py-1">Support</button ></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white text-base">Legal</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><button   /*href="#"*/ className="hover:text-vivid-turquoise transition-colors duration-200 block py-1">Privacy Policy</button ></li>
                <li><button   /*href="#"*/ className="hover:text-vivid-turquoise transition-colors duration-200 block py-1">Service</button ></li>
                <li><button   /*href="#"*/ className="hover:text-vivid-turquoise transition-colors duration-200 block py-1">Security</button ></li>
                <li><button   /*href="#"*/ className="hover:text-vivid-turquoise transition-colors duration-200 block py-1">Contact</button ></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-center sm:text-left">
            <p className="text-slate-400 text-xs md:text-sm">
              © 2026 SecureShare. All rights reserved.
            </p>
            <p className="text-slate-400 text-xs md:text-sm">
              Made with <span className="text-red-500">❤️</span> by <span className="text-vivid-turquoise font-semibold">Team Trinity</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
