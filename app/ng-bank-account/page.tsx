import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nigerian Bank Account for Your Business | GTBank Partnership | Atlaz",
  description: "Open a Nigerian business bank account with GTBank through Atlaz. Fast approval, dedicated support, and seamless integration with your business operations.",
};

const features = [
  {
    icon: "rocket_launch",
    title: "Fast Account Opening",
    description: "Get your GTBank business account opened within 5-7 business days with our streamlined process.",
  },
  {
    icon: "support_agent",
    title: "Dedicated Support",
    description: "Our team handles all communication with the bank. No queues, no stress.",
  },
  {
    icon: "payments",
    title: "Multi-Currency",
    description: "Accept payments in Naira and manage foreign currency with ease.",
  },
  {
    icon: "smartphone",
    title: "Digital Banking",
    description: "Full access to GTBank's digital platforms - mobile app, internet banking, and USSD.",
  },
  {
    icon: "credit_card",
    title: "Business Cards",
    description: "Get debit and prepaid cards for your business expenses.",
  },
  {
    icon: "sync_alt",
    title: "Easy Transfers",
    description: "Local transfers (NIP/NEFT), international wires, and bulk payments.",
  },
];

const packages = [
  {
    name: "Starter",
    price: "₦50,000",
    description: "Perfect for new businesses getting started",
    features: [
      "Business current account",
      "Debit card",
      "Mobile & internet banking",
      "Email & phone support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "₦100,000",
    description: "For growing businesses with higher transaction volumes",
    features: [
      "Everything in Starter",
      "Higher transaction limits",
      "Dedicated relationship manager",
      "POS terminal (optional)",
      "Bulk payment access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For established businesses with complex needs",
    features: [
      "Everything in Growth",
      "Multi-signatory accounts",
      "Trade finance services",
      "Treasury management",
      "Priority support",
    ],
    popular: false,
  },
];

const requirements = [
  { doc: "CAC Certificate of Incorporation", icon: "description" },
  { doc: "Memorandum & Articles of Association", icon: "article" },
  { doc: "Board Resolution", icon: "gavel" },
  { doc: "Directors' Valid ID (National ID/Passport)", icon: "badge" },
  { doc: "Directors' Passport Photographs", icon: "photo_camera" },
  { doc: "Utility Bill (Proof of Address)", icon: "home" },
  { doc: "BVN of Directors/Signatories", icon: "fingerprint" },
];

const faqs = [
  {
    question: "Why GTBank?",
    answer: "GTBank (now GTCo) is one of Nigeria's most respected Tier-1 banks with excellent digital infrastructure, reliable internet banking, and strong customer service. They're trusted by thousands of businesses across Africa.",
  },
  {
    question: "How long does account opening take?",
    answer: "With Atlaz, your GTBank account is typically opened within 5-7 business days after all documents are submitted and verified.",
  },
  {
    question: "Can I open an account remotely?",
    answer: "You can start the process remotely, but GTBank may require a brief in-person verification at a branch for compliance purposes. We'll coordinate this for you.",
  },
  {
    question: "What documents do I need?",
    answer: "You'll need your CAC documents, valid ID for directors, BVN, proof of address, and passport photographs. We provide a complete checklist after signup.",
  },
  {
    question: "Can I get a corporate debit card?",
    answer: "Yes! GTBank provides corporate debit cards that can be used for local and international transactions. You can also request additional cards for team members.",
  },
];

export default function NGBankAccountPage() {
  return (
    <>
      <BackgroundEffects />
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-4 md:px-6">
              <Navbar />

              {/* Hero Section */}
              <div className="py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                      <span className="text-xl">🇳🇬</span>
                      <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">Official GTBank Partner</span>
                    </div>
                    
                    <h1 className="text-gray-900 dark:text-white text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                      Open Your Nigerian Business{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                        Bank Account
                      </span>
                    </h1>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                      Partner with GTBank, one of Nigeria&apos;s most trusted Tier-1 banks. We handle the paperwork, you focus on your business.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <Link
                        href="/register"
                        className="group flex items-center justify-center rounded-full h-14 px-8 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold tracking-wide hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300"
                      >
                        Get Started
                        <span className="material-symbols-outlined ml-2 text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </Link>
                      <Link
                        href="#pricing"
                        className="flex items-center justify-center rounded-full h-14 px-8 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                      >
                        View Pricing
                      </Link>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-500">verified</span>
                        <span>CBN Licensed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-500">security</span>
                        <span>NDIC Insured</span>
                      </div>
                    </div>
                  </div>

                  {/* GTBank Visual */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-3xl rounded-3xl -z-10"></div>
                    <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                            <span className="text-orange-600 font-black text-xl">GT</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">GTBank</h3>
                            <p className="text-white/70 text-sm">Business Banking</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                            <p className="text-white/70 text-xs mb-1">Account Type</p>
                            <p className="font-bold">Business Current Account</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                              <p className="text-white/70 text-xs mb-1">Processing</p>
                              <p className="font-bold">5-7 Days</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                              <p className="text-white/70 text-xs mb-1">Support</p>
                              <p className="font-bold">Dedicated</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="py-16">
                <div className="text-center mb-12">
                  <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight mb-4">
                    Why Open with Atlaz + GTBank?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
                    Skip the queues and paperwork. We make business banking simple.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-white text-xl">{feature.icon}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-500 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Section */}
              <div id="pricing" className="py-16 bg-gray-50 dark:bg-gray-800/50 -mx-4 md:-mx-6 px-4 md:px-6 rounded-3xl">
                <div className="text-center mb-12">
                  <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight mb-4">
                    Simple, Transparent Pricing
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    One-time setup fee. No hidden charges.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {packages.map((pkg, index) => (
                    <div
                      key={index}
                      className={`bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 relative ${
                        pkg.popular
                          ? "border-orange-500 shadow-xl shadow-orange-500/10"
                          : "border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full">
                          Most Popular
                        </div>
                      )}
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{pkg.name}</h3>
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-3xl font-black text-gray-900 dark:text-white">{pkg.price}</span>
                        {pkg.price !== "Custom" && <span className="text-gray-500 text-sm">one-time</span>}
                      </div>
                      <p className="text-gray-500 text-sm mb-6">{pkg.description}</p>
                      
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <span className="material-symbols-outlined text-green-500 text-[16px] mt-0.5">check</span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/register"
                        className={`w-full flex items-center justify-center rounded-xl h-12 font-bold transition-all ${
                          pkg.popular
                            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                      >
                        {pkg.price === "Custom" ? "Contact Sales" : "Get Started"}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="py-16">
                <div className="text-center mb-12">
                  <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight mb-4">
                    What You&apos;ll Need
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Standard KYC documents required by CBN regulations.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {requirements.map((req, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700"
                    >
                      <span className="material-symbols-outlined text-orange-500">{req.icon}</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{req.doc}</span>
                    </div>
                  ))}
                </div>

                <p className="text-center text-gray-500 text-sm mt-6">
                  Don&apos;t have your CAC documents yet?{" "}
                  <Link href="/register" className="text-primary hover:underline font-medium">
                    We can help you register your business first
                  </Link>
                </p>
              </div>

              {/* FAQs */}
              <div className="py-16">
                <div className="text-center mb-12">
                  <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight mb-4">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                    >
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-start gap-3">
                        <span className="material-symbols-outlined text-orange-500 text-xl mt-0.5">help</span>
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 ml-8">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="py-16">
                <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-12 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                  <div className="relative z-10">
                    <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                      Ready to Open Your GTBank Account?
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                      Join hundreds of Nigerian businesses banking with GTBank through Atlaz.
                    </p>
                    <Link
                      href="/register"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:shadow-xl transition-all"
                    >
                      Start Your Application
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
