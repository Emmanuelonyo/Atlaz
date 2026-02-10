import Link from "next/link";

const bankPartners = [
  {
    name: "Mercury",
    logo: "account_balance",
    description: "The #1 startup bank",
    features: ["FDIC insured", "No monthly fees", "Integrations"],
  },
  {
    name: "Relay",
    logo: "payments",
    description: "Modern business banking",
    features: ["Multi-account", "Team cards", "Auto-save"],
  },
];

const benefits = [
  {
    icon: "public",
    title: "100% Remote",
    description: "Open your US bank account from anywhere in the world. No travel required.",
  },
  {
    icon: "speed",
    title: "Fast Approval",
    description: "Most accounts approved within 48-72 hours after EIN is received.",
  },
  {
    icon: "credit_card",
    title: "Debit Cards",
    description: "Get physical and virtual debit cards for your business spending.",
  },
  {
    icon: "sync",
    title: "Easy Transfers",
    description: "Send and receive international wires, ACH, and domestic transfers.",
  },
];

export function BankingSection() {
  return (
    <div className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"></div>

      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
          <span className="material-symbols-outlined text-green-500 text-sm">account_balance</span>
          <span className="text-sm font-semibold text-green-600 dark:text-green-400">US Banking Made Easy</span>
        </div>
        <h2 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-black tracking-tight mb-4">
          Open Your US Bank Account{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-accent-teal">
            100% Remotely
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          After incorporation, we help you open a US business bank account without stepping foot in America. Accept payments, pay vendors, and scale globally.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Banking Partners */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            🏦 Our Banking Partners
          </h3>
          <div className="grid gap-4">
            {bankPartners.map((bank, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-green-500/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-white text-2xl">{bank.logo}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{bank.name}</h4>
                    <p className="text-gray-500 text-sm mb-3">{bank.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {bank.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-6 flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <span className="material-symbols-outlined text-blue-500 text-xl">verified</span>
            <div>
              <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">FDIC Insured</p>
              <p className="text-xs text-blue-600/70 dark:text-blue-400/70">Your funds are protected up to $250,000</p>
            </div>
          </div>
        </div>

        {/* Right: Benefits Grid */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            ✨ Why Founders Love It
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-5 border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent-teal rounded-lg flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-white text-lg">{benefit.icon}</span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{benefit.title}</h4>
                <p className="text-sm text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/register"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              Get Your US Bank Account
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <p className="text-sm text-gray-500 mt-3">
              <span className="material-symbols-outlined text-[14px] align-middle mr-1">schedule</span>
              Typically approved in 48-72 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
