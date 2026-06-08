import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Terms of Service</h1>

        <p className="text-slate-600 mb-4">
         By creating an account or using Agile AI Invoices, you agree to comply with these Terms and all applicable laws and regulations.        </p>

        <p className="text-slate-600 mb-4">
You retain ownership of all invoices, business information, and data uploaded to the platform.
<br/>
By using the service, you grant us permission to process and store your data solely for providing the service.        </p>

        <div className="flex gap-3">
          <Link to="/contact" className="px-5 py-3 bg-blue-400 text-white rounded-lg">Contact about terms</Link>
          <Link to="/" className="px-5 py-3 border rounded-lg">Back to home</Link>
        </div>
      </div>
    </section>
  );
};

export default Terms;
