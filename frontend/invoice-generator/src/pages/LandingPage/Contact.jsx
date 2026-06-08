import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Contact</h1>
        <p className="text-slate-600 mb-6">
          Need help or want to give feedback? Reach out — I read everything. 👋
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-900 font-semibold">AS</div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Atul Sethi</div>
              <div className="text-sm text-slate-500">Founder & CEO</div>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <p className="text-sm text-slate-700">Email</p>
            <a href="mailto:agilesolutions.co.in@gmail.com" className="text-blue-900 font-medium hover:underline">
              agilesolutions.co.in@gmail.com
            </a>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <p className="text-sm text-slate-700">Location</p>
            <div className="text-slate-600">Shop - 17, Green Commercial Park, C-2SF, Jagatpura, Jaipur, Rajasthan 302017</div>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <a href="mailto:agilesolutions.co.in@gmail.com" className="px-5 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg">
            Email Me
          </a>
          <a href="https://www.linkedin.com/company/agilesolutions1/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="px-5 py-3 border rounded-lg text-slate-700">
            LinkedIn
          </a>
          <a href="tel:8005677079" target="_blank" rel="noopener noreferrer" className="px-5 py-3 border rounded-lg text-slate-700">
            Call Us
          </a>
        </div>

        {/* Go Back Button */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg font-medium hover:scale-105 shadow transition-all"
          >
            ← Go Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
