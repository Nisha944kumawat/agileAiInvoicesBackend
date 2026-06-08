import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>

        <p className="text-slate-600 leading-relaxed mb-4">
We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, 
and safeguard your information when you use our invoicing platform.        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          <strong>Agile AI Invoices, we may collect:</strong> Name and business information,
Email address,
Phone number,
Billing and invoice data,
Payment-related information (processed securely through third-party payment providers),
Usage and device information</p>
        <p className="text-slate-600 leading-relaxed mb-6">
We implement reasonable security measures to protect your information from unauthorized access, misuse, or disclosure. 
However, no online service can guarantee 100% security.        </p>

        <div className="flex gap-3">
          <Link to="/contact" className="px-5 py-3 bg-blue-400 text-white rounded-lg">Ask a question</Link>
          <Link to="/" className="px-5 py-3 border rounded-lg">Back home</Link>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
