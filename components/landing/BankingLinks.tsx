import Link from "next/link";

const bankingOptions = [
  {
    region: "United States",
    flag: "🇺🇸",
    title: "US Bank Account",
    description: "Open a US business bank account with Mercury or Relay. 100% remote, no travel required.",
    features: ["FDIC Insured", "No Monthly Fees", "Virtual Cards"],
    href: "/us-bank-account",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    region: "Nigeria",
    flag: "🇳🇬",
    title: "Nigerian Bank Account",
    description: "Open a GTBank business account with our dedicated support. Fast approval, full digital access.",
    features: ["GTBank Partner", "5-7 Days Setup", "Multi-Currency"],
    href: "/ng-bank-account",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
  },
];

export function BankingLinks() {
  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
          <span className="material-symbols-outlined text-green-500 text-sm">account_balance</span>
          <span className="text-sm font-semibold text-green-600 dark:text-green-400">Business Banking</span>
        </div>
        <h2 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-black tracking-tight mb-4">
          Bank Accounts for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-teal">
            Your Business
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Whether you&apos;re operating in the US or Nigeria, we help you open business bank accounts with trusted partners.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {bankingOptions.map((option, index) => (
          <Link
            key={index}
            href={option.href}
            className={`group relative bg-gradient-to-br ${option.bgGradient} rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden`}
          >
            {/* Background Glow on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{option.flag}</span>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{option.region}</p>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{option.title}</h3>
                  </div>
                </div>
                <span className={`material-symbols-outlined text-2xl bg-gradient-to-r ${option.gradient} bg-clip-text text-transparent group-hover:translate-x-1 transition-transform`}>
                  arrow_forward
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6">{option.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {option.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Note */}
      <p className="text-center text-gray-500 text-sm mt-8">
        <span className="material-symbols-outlined text-[14px] align-middle mr-1">info</span>
        More banking options coming soon: Kenya, Ghana, UK, and more
      </p>
    </div>
  );
}
