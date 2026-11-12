import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Clock, 
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Please specify a subject';
    if (!formData.message.trim()) {
      errors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Construct mailto draft and set success state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      window.location.href = mailtoUrl;

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0B0F19] relative border-t border-slate-200/60 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Interested in discussing Data Annotation, Data Labeling, Data Quality, 
            or entry-level Data Science & IT Support roles? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50/80 dark:bg-slate-900/80 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Contact Details
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider">Email Address</p>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 transition-colors break-all"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    title="Copy Email"
                    className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Copied to clipboard!</p>
                )}
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider">Mobile Number</p>
                      <a 
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    title="Copy Phone Number"
                    className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedPhone && (
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Copied to clipboard!</p>
                )}
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-400 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Fast Response Note */}
              <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-800/70 flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-900 dark:text-blue-200 leading-relaxed">
                  Available for recruitment conversations, technical interviews, and immediate joining. 
                  Typically replies within 24 hours.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-soft-lg">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 mt-1">
                  Fill out the details below to initiate direct contact or invite for interview.
                </p>
              </div>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3 text-emerald-900 dark:text-emerald-200 animate-in fade-in duration-200">
                  <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold">Message Ready to Send!</p>
                    <p className="mt-0.5 text-emerald-800 dark:text-emerald-300">
                      Opening your email client to dispatch the message directly to {PERSONAL_INFO.email}.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Hiring Manager / Recruiter"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        formErrors.name
                          ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/30'
                          : 'border-slate-200 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-blue-100 dark:focus:ring-blue-950/50 bg-slate-50/50 dark:bg-slate-800/60 focus:bg-white dark:focus:bg-slate-800'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                        formErrors.email
                          ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/30'
                          : 'border-slate-200 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-blue-100 dark:focus:ring-blue-950/50 bg-slate-50/50 dark:bg-slate-800/60 focus:bg-white dark:focus:bg-slate-800'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Job Opportunity: Data Annotation Specialist / IT Support"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      formErrors.subject
                        ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/30'
                        : 'border-slate-200 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-blue-100 dark:focus:ring-blue-950/50 bg-slate-50/50 dark:bg-slate-800/60 focus:bg-white dark:focus:bg-slate-800'
                    }`}
                  />
                  {formErrors.subject && (
                    <p className="text-xs text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message, role details, or meeting proposal..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                      formErrors.message
                        ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/30'
                        : 'border-slate-200 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-400 focus:ring-blue-100 dark:focus:ring-blue-950/50 bg-slate-50/50 dark:bg-slate-800/60 focus:bg-white dark:focus:bg-slate-800'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-rose-600 dark:text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 disabled:bg-blue-400 rounded-xl shadow-md shadow-blue-600/20 hover:shadow-lg transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <span>Preparing Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
