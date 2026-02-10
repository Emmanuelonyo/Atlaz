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

const benefits = [
  {
    title: "No Setup Fees",
    description: "GTBank business accounts are free to open. No hidden charges from us or the bank.",
    icon: "money_off",
  },
  {
    title: "Skip the Queue",
    description: "We handle the paperwork and bank visits. You just provide documents.",
    icon: "schedule",
  },
  {
    title: "Expert Guidance",
    description: "Our team ensures your application is complete and accurate the first time.",
    icon: "support",
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
    question: "Is there a fee to open an account?",
    answer: "No! Opening a GTBank business account is completely free. There are no setup fees from GTBank or from Atlaz.",
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                      <span className="text-xl">🇳🇬</span>
                      <span className="text-sm font-semibold text-primary">Official GTBank Partner</span>
                    </div>
                    
                    <h1 className="text-gray-900 dark:text-white text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                      Open Your Nigerian Business{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-teal">
                        Bank Account
                      </span>
                    </h1>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                      Partner with GTBank, one of Nigeria&apos;s most trusted Tier-1 banks. We handle the paperwork, you focus on your business.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <Link
                        href="/contact"
                        className="group flex items-center justify-center rounded-full h-14 px-8 bg-gradient-to-r from-primary to-accent-teal text-white text-lg font-bold tracking-wide hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
                      >
                        Get Started — It&apos;s Free
                        <span className="material-symbols-outlined ml-2 text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </Link>
                      <Link
                        href="#requirements"
                        className="flex items-center justify-center rounded-full h-14 px-8 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                      >
                        View Requirements
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
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-500">money_off</span>
                        <span>No Fees</span>
                      </div>
                    </div>
                  </div>

                  {/* GTBank Visual */}
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent-teal/20 blur-3xl rounded-3xl -z-10"></div>
                    <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                            <span className="text-primary font-black text-xl">GT</span>
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
                              <p className="text-white/70 text-xs mb-1">Setup Fee</p>
                              <p className="font-bold text-green-300">FREE</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* No Fees Banner */}
              <div className="py-8">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-2xl">savings</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">100% Free Account Opening</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">No fees from GTBank or Atlaz. Just bring your documents.</p>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-all whitespace-nowrap"
                  >
                    Start Free
                  </Link>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="py-16">
                <div className="grid md:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="material-symbols-outlined text-white text-2xl">{benefit.icon}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{benefit.title}</h3>
                      <p className="text-gray-500 text-sm">{benefit.description}</p>
                    </div>
                  ))}
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
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-teal rounded-xl flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-white text-xl">{feature.icon}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-500 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div id="requirements" className="py-16">
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
                      <span className="material-symbols-outlined text-primary">{req.icon}</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{req.doc}</span>
                    </div>
                  ))}
                </div>

                <p className="text-center text-gray-500 text-sm mt-6">
                  Don&apos;t have your CAC documents yet?{" "}
                  <Link href="/contact" className="text-primary hover:underline font-medium">
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
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5">help</span>
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 ml-8">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="py-16">
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-12 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                  <div className="relative z-10">
                    <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                      Ready to Open Your GTBank Account?
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                      Join hundreds of Nigerian businesses banking with GTBank through Atlaz. No fees, no hassle.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-xl transition-all"
                    >
                      Start Your Free Application
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
