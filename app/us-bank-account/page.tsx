import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "US Bank Account for Non-Residents | Open 100% Remotely | Atlaz",
  description: "Open a US business bank account remotely with Mercury, Relay, or Wise. No travel required. FDIC insured, no monthly fees, integrations with your favorite tools.",
};

const bankPartners = [
  {
    name: "Mercury",
    logo: "/images/mercury-symbol.svg",
    description: "The #1 startup bank trusted by over 100,000 startups",
    features: [
      { icon: "verified", text: "FDIC insured up to $250,000" },
      { icon: "money_off", text: "No monthly fees" },
      { icon: "integration_instructions", text: "Integrations with QuickBooks, Stripe, etc." },
      { icon: "credit_card", text: "Virtual & physical debit cards" },
    ],
    bgColor: "bg-gray-900",
    borderColor: "border-gray-700",
    buttonColor: "bg-gray-800 text-white hover:bg-gray-700",
  },
  {
    name: "Relay",
    logo: "/images/relay-symbol.svg",
    description: "Modern business banking built for growing teams",
    features: [
      { icon: "account_tree", text: "Up to 20 checking accounts" },
      { icon: "groups", text: "Team cards with spending limits" },
      { icon: "savings", text: "Automatic profit-first saving" },
      { icon: "analytics", text: "Real-time spending insights" },
    ],
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    buttonColor: "bg-purple-600 text-white hover:bg-purple-700",
  },
  {
    name: "Wise",
    logo: "/images/wise-symbol.svg",
    description: "Multi-currency accounts with real exchange rates",
    features: [
      { icon: "currency_exchange", text: "50+ currencies at real rate" },
      { icon: "speed", text: "Fast international transfers" },
      { icon: "attach_money", text: "Low transparent fees" },
      { icon: "account_balance_wallet", text: "Local account details" },
    ],
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
    buttonColor: "bg-green-600 text-white hover:bg-green-700",
  },
];

const steps = [
  {
    step: 1,
    title: "Incorporate Your Company",
    description: "Form your Delaware or Wyoming LLC/C-Corp with Atlaz. We handle all the paperwork.",
    icon: "description",
  },
  {
    step: 2,
    title: "Get Your EIN",
    description: "We obtain your Employer Identification Number (EIN) from the IRS within 24-48 hours.",
    icon: "badge",
  },
  {
    step: 3,
    title: "Apply for Bank Account",
    description: "We submit your application to your chosen bank. Most accounts approved in 48-72 hours.",
    icon: "account_balance",
  },
  {
    step: 4,
    title: "Start Banking",
    description: "Receive your account details and debit cards. Accept payments and pay vendors globally.",
    icon: "rocket_launch",
  },
];

const faqs = [
  {
    question: "Can I open a US bank account as a non-US resident?",
    answer: "Yes! With a properly formed US company (LLC or C-Corp) and an EIN, non-US residents can open business bank accounts with Mercury, Relay, or Wise completely remotely.",
  },
  {
    question: "Do I need to travel to the US?",
    answer: "No. The entire process is 100% remote. You can open your account from anywhere in the world with just your passport and proof of address.",
  },
  {
    question: "How long does it take to get approved?",
    answer: "Most applications are approved within 48-72 hours after your EIN is received. Some complex cases may take up to 2 weeks.",
  },
  {
    question: "What documents do I need?",
    answer: "You'll need a valid passport, proof of address (utility bill or bank statement), and your company formation documents (which we provide).",
  },
  {
    question: "Are there any monthly fees?",
    answer: "Mercury and Relay offer free business checking accounts with no monthly maintenance fees. Wise has low transparent fees for conversions.",
  },
  {
    question: "Which bank should I choose?",
    answer: "Mercury is best for startups needing integrations. Relay is great for teams with multiple accounts. Wise excels at multi-currency and international transfers.",
  },
];

export default function USBankAccountPage() {
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
                <div className="text-center max-w-4xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <span className="material-symbols-outlined text-primary text-sm">public</span>
                    <span className="text-sm font-semibold text-primary">100% Remote • No Travel Required</span>
                  </div>
                  
                  <h1 className="text-gray-900 dark:text-white text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                    Open Your US Bank Account{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-teal">
                      From Anywhere
                    </span>
                  </h1>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                    Get a US business bank account without stepping foot in America. Accept payments, pay vendors, and scale your business globally.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <Link
                      href="/register"
                      className="group flex items-center justify-center rounded-full h-14 px-10 bg-gradient-to-r from-primary to-accent-teal text-white text-lg font-bold tracking-wide hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
                    >
                      Get Started
                      <span className="material-symbols-outlined ml-2 text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                    <div className="flex items-center gap-2 text-gray-500">
                      <span className="material-symbols-outlined text-primary">verified</span>
                      <span className="text-sm font-medium">FDIC Insured • No Monthly Fees</span>
                    </div>
                  </div>

                  {/* Trust Stats */}
                  <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">500+</div>
                      <div className="text-sm text-gray-500">Accounts Opened</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">48hrs</div>
                      <div className="text-sm text-gray-500">Average Approval</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">95%</div>
                      <div className="text-sm text-gray-500">Approval Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Banking Partners */}
              <div className="py-16">
                <div className="text-center mb-12">
                  <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight mb-4">
                    Choose Your Banking Partner
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
                    We work with the best neobanks trusted by startups worldwide.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {bankPartners.map((bank, index) => (
                    <div
                      key={index}
                      className={`${bank.bgColor} rounded-3xl p-6 border ${bank.borderColor} hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md p-2">
                          <Image
                            src={bank.logo}
                            alt={`${bank.name} logo`}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{bank.name}</h3>
                          <p className="text-gray-500 text-xs">{bank.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        {bank.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-lg">{feature.icon}</span>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/register"
                        className={`w-full flex items-center justify-center rounded-xl h-11 font-bold text-sm transition-all ${bank.buttonColor}`}
                      >
                        Open with {bank.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Works */}
              <div className="py-16 bg-gray-50 dark:bg-gray-800/50 -mx-4 md:-mx-6 px-4 md:px-6 rounded-3xl">
                <div className="text-center mb-12">
                  <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight mb-4">
                    How It Works
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    From incorporation to banking in 4 simple steps.
                  </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                  {steps.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 h-full">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent-teal text-white font-bold flex items-center justify-center mb-4">
                          {step.step}
                        </div>
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                          <span className="material-symbols-outlined text-primary text-2xl">{step.icon}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-500">{step.description}</p>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                          <span className="material-symbols-outlined text-gray-300">arrow_forward</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
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
                <div className="bg-gradient-to-br from-primary to-accent-teal rounded-3xl p-12 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                  <div className="relative z-10">
                    <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
                      Ready to Start Banking?
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                      Join hundreds of international founders who bank in the US with Atlaz.
                    </p>
                    <Link
                      href="/register"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-xl transition-all"
                    >
                      Get Your US Bank Account
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    </>
  );
}
