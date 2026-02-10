import Link from "next/link";

export function Features() {
  return (
    <>
      <div className="flex flex-col gap-10 py-16 md:py-24 @container border-t border-gray-100/50 dark:border-gray-800">
        <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center gap-6 z-10 relative">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 px-3 py-1">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  waving_hand
                </span>
                <p className="text-xs font-bold uppercase tracking-wide text-primary">
                  Welcome to Atlaz
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Let's get your business officially registered.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                You're just a few steps away from global reach. Complete your
                profile to access premium incorporation tools, compliance
                tracking, and your virtual office.
              </p>
              <ul className="space-y-4 my-2">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <span className="material-symbols-outlined text-[16px] text-green-600 dark:text-green-400">
                      check
                    </span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">
                    Instant access to US &amp; African entity formation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <span className="material-symbols-outlined text-[16px] text-green-600 dark:text-green-400">
                      check
                    </span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">
                    Secure document vault for all your legal filings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <span className="material-symbols-outlined text-[16px] text-green-600 dark:text-green-400">
                      check
                    </span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">
                    24/7 support from compliance experts
                  </span>
                </li>
              </ul>
              <div className="pt-4">
                <Link
                  href="/register"
                  className="flex w-full sm:w-auto cursor-pointer items-center justify-center rounded-xl h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                >
                  Start Onboarding
                  <span className="material-symbols-outlined ml-2 text-[20px]">
                    arrow_forward
                  </span>
                </Link>
                <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  Takes less than 5 minutes. No credit card required for sign
                  up.
                </p>
              </div>
            </div>
            <div className="relative bg-gray-50 dark:bg-gray-900/50 hidden lg:block overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[80%] aspect-[4/5] bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col gap-6 rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700"></div>
                      <div className="flex flex-col gap-1">
                        <div className="h-3 w-24 bg-gray-200 dark:bg-gray-600 rounded"></div>
                        <div className="h-2 w-16 bg-gray-100 dark:bg-gray-700 rounded"></div>
                      </div>
                    </div>
                    <div className="h-8 w-20 bg-primary/10 rounded-lg"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 w-3/4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="mt-auto grid grid-cols-2 gap-3">
                    <div className="h-20 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 p-3">
                      <div className="h-6 w-6 rounded bg-blue-200 dark:bg-blue-800 mb-2"></div>
                      <div className="h-2 w-12 bg-blue-200 dark:bg-blue-800 rounded"></div>
                    </div>
                    <div className="h-20 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30 p-3">
                      <div className="h-6 w-6 rounded bg-green-200 dark:bg-green-800 mb-2"></div>
                      <div className="h-2 w-12 bg-green-200 dark:bg-green-800 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-teal/20 rounded-full blur-[80px]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-center items-center mt-16">
          <h2 className="text-gray-900 dark:text-white tracking-tight text-3xl font-bold leading-tight @[480px]:text-4xl max-w-[720px]">
            The Old Way vs. The <span className="text-primary">Atlaz</span>{" "}
            Way
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg font-normal leading-normal max-w-[720px]">
            Leave the bureaucracy behind. Embrace a seamless, digital-first
            approach to global business formation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-1 flex-col gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-red-500"
                style={{ fontSize: "28px" }}
              >
                cancel
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">
                Bureaucracy
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                Navigate complex paperwork and endless queues manually.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-2xl border border-primary/20 bg-primary/5 dark:bg-primary/10 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"></div>
            <div className="h-12 w-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-green-500"
                style={{ fontSize: "28px" }}
              >
                check_circle
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">
                100% Online
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                Complete everything from anywhere, on any device instantly.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-red-500"
                style={{ fontSize: "28px" }}
              >
                cancel
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">
                No Address
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                Lack a physical presence in key markets creating trust issues.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-2xl border border-primary/20 bg-primary/5 dark:bg-primary/10 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"></div>
            <div className="h-12 w-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-green-500"
                style={{ fontSize: "28px" }}
              >
                check_circle
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">
                Global Reach
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-relaxed">
                Establish a presence in Africa and the US instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
