export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Registered Businesses
            </p>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
              2
            </h3>
          </div>
          <div className="h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined">domain</span>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Active Applications
            </p>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
              1
            </h3>
          </div>
          <div className="h-12 w-12 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-500 flex items-center justify-center">
            <span className="material-symbols-outlined">pending_actions</span>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Action Items
            </p>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
              3
            </h3>
          </div>
          <div className="h-12 w-12 rounded-full bg-red-50 dark:bg-red-900/20 text-red-500 flex items-center justify-center">
            <span className="material-symbols-outlined">priority_high</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (Activities) */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Ongoing Application
              </h2>
              <a
                className="text-sm font-medium text-primary hover:text-primary-dark"
                href="#"
              >
                View Details
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 md:p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gray-50 dark:bg-gray-700 flex items-center justify-center border border-gray-100 dark:border-gray-600">
                    <img
                      alt="US Flag"
                      className="h-6 w-auto rounded shadow-sm opacity-80"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNv773tWNBw2lf-VdZi8R6Mp6oFKMYz67U0kEP7ebtHyxOHePByMCMOz87d1uF5oFt3YVA_SQBOa_Ws6-lwCW49fB6djo8tF2qfUkKCacxeYaBynSvf6Qhh3WkCGZE3JPsKnx3qY7p_1uQX8ozF_uLi-JNYcUPx-ReoyjKUP8S2R3AyHoN3YEv58RLv5PKECYjDtFed7B-tWEbypkin-wjsrOG4FQm8wBp2HmXP3oJknJqqA9bbi5pFAcIS2Rq0zYWgCBWgrMTMl4C"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Delaware C-Corp Registration
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Ref: #US-DEL-29401 • Started Oct 24, 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide w-fit">
                  <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
                  In Progress
                </div>
              </div>
              <div className="mb-8 relative">
                <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[60%] rounded-full relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-white/20 animate-flow"
                      style={{
                        backgroundImage:
                          "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)",
                        backgroundSize: "1rem 1rem",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs font-medium text-gray-500 dark:text-gray-400 mt-2">
                  <span className="text-primary font-bold">Preparation</span>
                  <span className="text-primary font-bold">Filing</span>
                  <span className="text-gray-900 dark:text-white font-bold">
                    EIN Processing
                  </span>
                  <span>Final Review</span>
                  <span>Complete</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 bg-blue-50 dark:bg-blue-900/10 rounded-xl p-4 border border-blue-100 dark:border-blue-800/30 flex gap-4">
                  <span className="material-symbols-outlined text-primary mt-0.5">
                    info
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                      Current Status: EIN Processing
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      We have submitted your SS-4 form to the IRS. Typical
                      processing time is 10-14 business days.
                    </p>
                  </div>
                </div>
                <button className="shrink-0 h-auto px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-600 font-bold text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Upload Documents
                </button>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                Your Businesses
              </h2>
              <button className="text-sm font-medium text-primary hover:text-primary-dark">
                Manage All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold text-lg">
                    TS
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                    Active
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  TechSpace Nigeria Ltd
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Lagos, Nigeria • RC 1948201
                </p>
                <div className="border-t border-gray-100 dark:border-gray-700 pt-3 flex justify-between items-center text-xs font-medium text-gray-500">
                  <span>
                    Next filing:{" "}
                    <span className="text-gray-900 dark:text-white">
                      Mar 15, 2024
                    </span>
                  </span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-12 w-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                    GA
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                    Active
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  GreenAgro LLC
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Wyoming, USA • 2023-001294
                </p>
                <div className="border-t border-gray-100 dark:border-gray-700 pt-3 flex justify-between items-center text-xs font-medium text-gray-500">
                  <span>
                    Next filing:{" "}
                    <span className="text-gray-900 dark:text-white">
                      Apr 01, 2024
                    </span>
                  </span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column (Side Widgets) */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <h3 className="text-lg font-bold mb-4 relative z-10">
              Quick Actions
            </h3>
            <div className="space-y-3 relative z-10">
              <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-colors text-left text-sm font-medium">
                <span className="material-symbols-outlined text-accent-teal">
                  add_business
                </span>
                Register New Entity
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-colors text-left text-sm font-medium">
                <span className="material-symbols-outlined text-primary">
                  upload_file
                </span>
                Upload KYC Documents
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-colors text-left text-sm font-medium">
                <span className="material-symbols-outlined text-yellow-400">
                  support_agent
                </span>
                Contact Support
              </button>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Recent Documents
              </h3>
              <a
                className="text-xs font-bold text-gray-400 hover:text-primary uppercase tracking-wide"
                href="#"
              >
                View All
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="h-10 w-10 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-500 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    picture_as_pdf
                  </span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate group-hover:text-primary transition-colors">
                    Certificate of Incorporation
                  </h4>
                  <p className="text-xs text-gray-500 truncate">
                    TechSpace Nigeria • 2.4 MB
                  </p>
                </div>
                <span className="material-symbols-outlined text-gray-400 hover:text-gray-600 text-[20px]">
                  download
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    picture_as_pdf
                  </span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate group-hover:text-primary transition-colors">
                    Articles of Organization
                  </h4>
                  <p className="text-xs text-gray-500 truncate">
                    GreenAgro LLC • 1.1 MB
                  </p>
                </div>
                <span className="material-symbols-outlined text-gray-400 hover:text-gray-600 text-[20px]">
                  download
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="h-10 w-10 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-500 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    description
                  </span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate group-hover:text-primary transition-colors">
                    TIN Confirmation Letter
                  </h4>
                  <p className="text-xs text-gray-500 truncate">
                    TechSpace Nigeria • 850 KB
                  </p>
                </div>
                <span className="material-symbols-outlined text-gray-400 hover:text-gray-600 text-[20px]">
                  download
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Recent Activity
            </h3>
            <div className="relative pl-4 border-l border-gray-100 dark:border-gray-700 space-y-6">
              <div className="relative">
                <div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-primary border-2 border-white dark:border-gray-800"></div>
                <p className="text-xs text-gray-400 mb-0.5">2 hours ago</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  <span className="font-bold">System</span> uploaded{" "}
                  <span className="font-medium text-primary">
                    TIN Certificate
                  </span>{" "}
                  for TechSpace.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-800"></div>
                <p className="text-xs text-gray-400 mb-0.5">Yesterday</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Application submitted for{" "}
                  <span className="font-bold">Delaware C-Corp</span>.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-800"></div>
                <p className="text-xs text-gray-400 mb-0.5">Oct 20, 2023</p>
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  Welcome to Atlaz! Account created.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
