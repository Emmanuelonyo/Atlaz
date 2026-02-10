import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delaware vs Wyoming LLC | Which State to Incorporate? | Atlaz",
  description: "Compare Delaware and Wyoming for your LLC or C-Corp. Learn about annual fees, privacy, taxes, and find which state is best for your business.",
};

const delawareInfo = {
  name: "Delaware",
  tagline: "The Gold Standard for Startups",
  color: "blue",
  annualCost: "$300/year",
  formationTime: "24-48 hours",
  bestFor: "Startups seeking VC funding",
  pros: [
    "Business-friendly Court of Chancery",
    "Strongest legal precedents",
    "Best for raising funding",
    "Most recognized by investors",
    "Flexible corporate laws",
  ],
  cons: [
    "Higher franchise tax",
    "Requires registered agent",
    "Annual report required",
  ],
  stats: [
    { label: "Fortune 500 Companies", value: "68%" },
    { label: "Formation Time", value: "24hrs" },
    { label: "Annual Franchise Tax", value: "$300+" },
  ],
};

const wyomingInfo = {
  name: "Wyoming",
  tagline: "Maximum Privacy & Low Costs",
  color: "amber",
  annualCost: "$60/year",
  formationTime: "24-48 hours",
  bestFor: "Bootstrapped businesses & privacy-focused founders",
  pros: [
    "No state income tax",
    "Strongest asset protection",
    "Low annual fees ($60/yr)",
    "Anonymous ownership allowed",
    "Lifetime proxy allowed",
  ],
  cons: [
    "Less recognized by VCs",
    "Fewer legal precedents",
    "Less mature court system",
  ],
  stats: [
    { label: "Annual Report Fee", value: "$60" },
    { label: "State Income Tax", value: "0%" },
    { label: "Privacy Rating", value: "A+" },
  ],
};

const comparisonRows = [
  { feature: "Annual Franchise Tax/Fee", delaware: "$300+", wyoming: "$60" },
  { feature: "State Income Tax", delaware: "8.7%", wyoming: "0%" },
  { feature: "Formation Time", delaware: "24-48 hrs", wyoming: "24-48 hrs" },
  { feature: "Privacy Protection", delaware: "Moderate", wyoming: "Strong" },
  { feature: "VC Recognition", delaware: "Excellent", wyoming: "Good" },
  { feature: "Legal Precedents", delaware: "Most Extensive", wyoming: "Growing" },
  { feature: "Asset Protection", delaware: "Good", wyoming: "Excellent" },
  { feature: "Anonymous Ownership", delaware: "No", wyoming: "Yes" },
];

export default function DelawareVsWyomingPage() {
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
                    <span className="material-symbols-outlined text-primary text-sm">compare</span>
                    <span className="text-sm font-semibold text-primary">State Comparison Guide</span>
                  </div>
                  
                  <h1 className="text-gray-900 dark:text-white text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                    Delaware vs Wyoming:{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-amber-500">
                      Which is Right for You?
                    </span>
                  </h1>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                    Both states offer excellent benefits for business incorporation. Here&apos;s a detailed comparison to help you make the right choice.
                  </p>
                </div>
              </div>

              {/* Side by Side Cards */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Delaware Card */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-black">DE</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-gray-900 dark:text-white">{delawareInfo.name}</h2>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{delawareInfo.tagline}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {delawareInfo.stats.map((stat, i) => (
                      <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-3 text-center">
                        <div className="text-lg font-bold text-blue-600">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500">thumb_up</span>
                      Pros
                    </h3>
                    <ul className="space-y-2">
                      {delawareInfo.pros.map((pro, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="material-symbols-outlined text-green-500 text-[16px]">check</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-amber-500">warning</span>
                      Cons
                    </h3>
                    <ul className="space-y-2">
                      {delawareInfo.cons.map((con, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="material-symbols-outlined text-amber-500 text-[16px]">remove</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-xl p-4 mb-6">
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-300 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">lightbulb</span>
                      Best for: {delawareInfo.bestFor}
                    </p>
                  </div>

                  <Link
                    href="/register?state=delaware"
                    className="w-full flex items-center justify-center gap-2 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <span>Start with Delaware</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>

                {/* Wyoming Card */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl p-8 border border-amber-200 dark:border-amber-800">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-black">WY</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-gray-900 dark:text-white">{wyomingInfo.name}</h2>
                      <p className="text-amber-600 dark:text-amber-400 font-medium">{wyomingInfo.tagline}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {wyomingInfo.stats.map((stat, i) => (
                      <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-3 text-center">
                        <div className="text-lg font-bold text-amber-600">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500">thumb_up</span>
                      Pros
                    </h3>
                    <ul className="space-y-2">
                      {wyomingInfo.pros.map((pro, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="material-symbols-outlined text-green-500 text-[16px]">check</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-amber-500">warning</span>
                      Cons
                    </h3>
                    <ul className="space-y-2">
                      {wyomingInfo.cons.map((con, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="material-symbols-outlined text-amber-500 text-[16px]">remove</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-100 dark:bg-amber-900/30 rounded-xl p-4 mb-6">
                    <p className="text-sm font-medium text-amber-800 dark:text-amber-300 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">lightbulb</span>
                      Best for: {wyomingInfo.bestFor}
                    </p>
                  </div>

                  <Link
                    href="/register?state=wyoming"
                    className="w-full flex items-center justify-center gap-2 h-14 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <span>Start with Wyoming</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white text-center mb-8">
                  Detailed Comparison
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-750">
                        <th className="text-left py-4 px-6 font-bold text-gray-900 dark:text-white">Feature</th>
                        <th className="text-center py-4 px-6 font-bold text-blue-600">Delaware</th>
                        <th className="text-center py-4 px-6 font-bold text-amber-600">Wyoming</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, i) => (
                        <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                          <td className="py-4 px-6 text-gray-700 dark:text-gray-300 font-medium">{row.feature}</td>
                          <td className="py-4 px-6 text-center text-gray-900 dark:text-white">{row.delaware}</td>
                          <td className="py-4 px-6 text-center text-gray-900 dark:text-white">{row.wyoming}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Decision Helper */}
              <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent-teal/10 rounded-3xl p-8 md:p-12 border border-primary/20">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white text-center mb-6">
                  Still Not Sure? Let Us Help
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-8">
                  Our team has helped thousands of founders choose the right state. Book a free consultation and we&apos;ll guide you based on your specific situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/register"
                    className="group flex items-center justify-center rounded-full h-14 px-10 bg-gradient-to-r from-primary to-accent-teal text-white text-lg font-bold tracking-wide hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    <span>Start Your Business</span>
                    <span className="material-symbols-outlined ml-2 text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center justify-center rounded-full h-14 px-8 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 font-bold hover:border-primary hover:text-primary transition-all"
                  >
                    <span className="material-symbols-outlined mr-2">calendar_month</span>
                    Book Free Consultation
                  </Link>
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
