export default function ApplicationsPage() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      {/* Page Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-2">
            Applications
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl">
            Track the status of your company formations and service requests.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-primary hover:bg-sky-500 text-white px-7 py-3.5 rounded-full font-bold shadow-lg shadow-primary/30 transition-all active:scale-95 shrink-0 text-base">
          <span className="material-symbols-outlined text-[24px]">add</span>
          <span>Start New Application</span>
        </button>
      </div>

      {/* Stats/Tabs */}
      <div className="flex gap-4 border-b border-gray-200 dark:border-gray-800 pb-1">
        <button className="px-4 py-2 text-primary border-b-2 border-primary font-bold text-sm">
          Active (2)
        </button>
        <button className="px-4 py-2 text-gray-500 dark:text-gray-400 font-medium text-sm hover:text-gray-900 dark:hover:text-white transition-colors">
          Completed (5)
        </button>
        <button className="px-4 py-2 text-gray-500 dark:text-gray-400 font-medium text-sm hover:text-gray-900 dark:hover:text-white transition-colors">
          Drafts (1)
        </button>
      </div>

      {/* Application Cards */}
      <div className="flex flex-col gap-6">
        {/* Active Application 1: US LLC */}
        <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="shrink-0">
            <div className="w-16 h-16 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 border border-blue-100 dark:border-blue-800">
              <span className="material-symbols-outlined text-3xl">public</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-xl">
                  Atlas Tech US, LLC
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Delaware LLC Formation • Started Oct 28, 2024
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold uppercase tracking-wide">
                In Progress
              </span>
            </div>
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                <span className="text-primary">Name Check</span>
                <span className="text-primary">Filing</span>
                <span className="text-primary">EIN</span>
                <span className="text-gray-300 dark:text-gray-600">
                  Finalizing
                </span>
              </div>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-primary w-[70%] rounded-full"></div>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-bold text-primary">Current Step:</span>{" "}
                  Waiting for IRS EIN issuance (Est. 2-4 days)
                </p>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col gap-2 w-full md:w-auto shrink-0">
            <button className="px-6 py-2.5 rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              View Details
            </button>
            <button className="px-6 py-2.5 rounded-full bg-primary/10 text-primary font-bold text-sm hover:bg-primary/20 transition-colors">
              Upload Docs
            </button>
          </div>
        </div>

        {/* Active Application 2: Nigeria Business Name */}
        <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="shrink-0">
            <div className="w-16 h-16 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 border border-green-100 dark:border-green-800">
              <span className="material-symbols-outlined text-3xl">store</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-xl">
                  Pixel Design Studio
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Nigeria Business Name • Started Nov 01, 2024
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-xs font-bold uppercase tracking-wide">
                Action Required
              </span>
            </div>
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs font-bold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                <span className="text-green-600 dark:text-green-500">
                  Name Reservation
                </span>
                <span className="text-amber-600 dark:text-amber-500">
                  Documentation
                </span>
                <span className="text-gray-300 dark:text-gray-600">Filing</span>
                <span className="text-gray-300 dark:text-gray-600">
                  Certificate
                </span>
              </div>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden flex">
                <div className="h-full bg-green-500 w-[25%]"></div>
                <div className="h-full bg-amber-500 w-[10%] rounded-r-full"></div>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <p className="text-sm text-amber-600 dark:text-amber-500">
                  <span className="font-bold">Attention:</span> Please upload a
                  valid ID for Director 2.
                </p>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col gap-2 w-full md:w-auto shrink-0">
            <button className="px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-lg shadow-amber-500/30 transition-all active:scale-95">
              Resolve Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
