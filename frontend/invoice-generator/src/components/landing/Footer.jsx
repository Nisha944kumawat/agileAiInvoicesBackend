// src/components/landing/Footer.jsx
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const FooterLink = ({ href, to, children }) => {
  const className = "block text-gray-600 hover:text-gray-900 transition-colors duration-200";
  if (to) return <Link to={to} className={className}>{children}</Link>;

  // For normal external links we still allow opening in new tab
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const SocialLink = ({ href, children }) => (
  <a
    href={href}
    className="w-10 h-10 bg-blue-950 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const Footer = () => {
  const navigate = useNavigate();

  // goToHash: if you're already on '/', scroll. Otherwise navigate to '/' then scroll.
  const goToHash = (hash) => {
    const id = (hash || "").replace(/^#/, "");
    if (!id) return;

    // If already on landing page
    if (window.location.pathname === "/") {
      // tiny timeout to ensure DOM ready (safe)
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    } else {
      // navigate to landing page, then scroll after a short delay
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 220); // 220ms is usually enough — safe default
    }
  };

  return (
    <footer className="bg-blue-300 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-3">
               <img
    src="/logo.png" // apni image ka path
    alt="Finvoice AI Logo"
    className="h-12 w-auto object-contain"
  />
            </Link>
            <p className="text-gray-600 max-w-sm">
              Smart, lightning-fast AI invoicing — built to simplify billing, boost productivity, and let you focus on what matters.
            </p>
          </div>

          {/* Product Links (use buttons for in-page scroll so behavior is consistent) */}
          <div>
            <h3 className="text-base font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => goToHash("#features")}
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => goToHash("#testimonials")}
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => goToHash("#faq")}
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-base font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"><FooterLink to="/about">About</FooterLink></li>
              <li className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"><FooterLink to="/contact">Contact</FooterLink></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600">
            <p className="text-sm">
              © 2026 Agile AI Invoice. Built by Agile Edtech Pvt Ltd.
            </p>

            <div className="flex items-center space-x-4 mt-3 md:mt-0">
              <FooterLink to="/privacy">Privacy</FooterLink>
              <FooterLink to="/terms">Terms</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
