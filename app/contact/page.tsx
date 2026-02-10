"use client";

import { useState } from "react";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "us-incorporation",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // For now, just simulate submission
    // TODO: Connect to backend/email service
    await new Promise((r) => setTimeout(r, 1500));
    
    setSubmitted(true);
    setSubmitting(false);
  };

  const services = [
    { value: "us-incorporation", label: "US Company Formation (Delaware/Wyoming)" },
    { value: "ng-incorporation", label: "Nigerian Company Formation" },
    { value: "us-bank", label: "US Bank Account" },
    { value: "ng-bank", label: "Nigerian Bank Account" },
    { value: "registered-agent", label: "Registered Agent Service" },
    { value: "virtual-address", label: "Virtual Address" },
    { value: "other", label: "Other / General Inquiry" },
  ];

  if (submitted) {
    return (
      <>
        <BackgroundEffects />
        <div className="flex min-h-screen w-full items-center justify-center p-6">
          <div className="max-w-md w-full text-center">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8 md:p-12">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-4xl">
                  check_circle
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Request Received!
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Thank you for your interest in Atlaz. Our team will review your request and get back to you within 24 hours.
              </p>
              <Link href="/">
                <Button className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <BackgroundEffects />
      <div className="flex min-h-screen w-full">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 flex flex-col h-full bg-white dark:bg-background-dark relative z-10 p-6 md:p-12 overflow-y-auto">
          <Link href="/" className="flex items-center gap-3 text-gray-900 dark:text-white mb-8">
            <Logo />
            <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Atlaz
            </h2>
          </Link>

          <div className="flex flex-col justify-center grow max-w-lg mx-auto w-full">
            {/* Coming Soon Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 mb-6">
              <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-[18px]">
                construction
              </span>
              <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                Dashboard Coming Soon
              </p>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                Get Started with Atlaz
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Our self-service dashboard is under development, but we're already helping founders incorporate their businesses. Tell us what you need, and our team will personally assist you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  id="name"
                  type="text"
                  label="Full Name"
                  placeholder="Jane Doe"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
                <Input
                  id="email"
                  type="email"
                  label="Email Address"
                  placeholder="jane@company.com"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <Input
                id="company"
                type="text"
                label="Company Name (if any)"
                placeholder="Acme Inc."
                value={formState.company}
                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  What service are you interested in?
                </label>
                <select
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="block w-full rounded-xl border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 transition-colors outline-none border"
                >
                  {services.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Tell us more about your needs
                </label>
                <textarea
                  rows={4}
                  placeholder="I'm building a SaaS product and need to incorporate in the US to accept payments from international customers..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="block w-full rounded-xl border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 transition-colors outline-none border resize-none"
                />
              </div>

              <Button type="submit" disabled={submitting} className="mt-2">
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  "Submit Request"
                )}
              </Button>
            </form>

            <div className="mt-8 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                  schedule
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    Typical Response Time: 2-4 hours
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Our team is available Monday-Friday, 9AM-6PM WAT.
                  </p>
                </div>
              </div>
            </div>

            {/* Alternative contact methods */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:hello@atlaz.co"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                hello@atlaz.co
              </a>
              <a
                href="https://wa.me/2348102937785"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-auto pt-8 text-xs text-gray-400 dark:text-gray-500 text-center md:text-left">
            © 2024 Atlaz Inc. All rights reserved.
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-gray-50 dark:bg-gray-900 items-center justify-center p-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-background-dark/80 dark:to-background-dark/95"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-lg">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent-teal flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined text-white text-[28px]">
                    support_agent
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    White-Glove Service
                  </h3>
                  <p className="text-blue-100">
                    We handle everything for you.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="bg-green-500/20 p-2.5 rounded-full flex-shrink-0">
                    <span className="material-symbols-outlined text-green-400 text-[20px]">
                      rocket_launch
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Fast Turnaround</p>
                    <p className="text-blue-200 text-sm mt-1">
                      Most incorporations completed within 24-48 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="bg-blue-500/20 p-2.5 rounded-full flex-shrink-0">
                    <span className="material-symbols-outlined text-blue-400 text-[20px]">
                      verified_user
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Expert Guidance</p>
                    <p className="text-blue-200 text-sm mt-1">
                      Our team has helped 1,000+ founders incorporate
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="bg-purple-500/20 p-2.5 rounded-full flex-shrink-0">
                    <span className="material-symbols-outlined text-purple-400 text-[20px]">
                      attach_money
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Transparent Pricing</p>
                    <p className="text-blue-200 text-sm mt-1">
                      No hidden fees. Know exactly what you're paying for.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold">EA</div>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold">MK</div>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-400 border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold">JO</div>
                  </div>
                  <p className="text-white/80 text-sm">
                    Join <span className="font-bold text-white">1,000+</span> founders who trust Atlaz
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-teal rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
