export function HowItWorks() {
  return (
    <div className="py-16 md:py-24">
      <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight text-center mb-16">
        How It Works
      </h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-700 md:hidden"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-[28px] left-0 right-0 h-[2px] bg-gray-200 dark:bg-gray-700 -z-10 mx-12"></div>
          <div className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-4 pl-12 md:pl-0">
            <div className="absolute left-0 md:static flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-white dark:bg-gray-800 border-2 border-primary text-primary z-10 shadow-sm">
              <span className="material-symbols-outlined md:text-[28px]">
                public
              </span>
            </div>
            <div className="flex flex-col md:text-center">
              <span className="text-sm font-bold text-primary uppercase tracking-wider mb-1">
                Step 1
              </span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Choose Country
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Select where you want to incorporate: Africa or the US.
              </p>
            </div>
          </div>
          <div className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-4 pl-12 md:pl-0">
            <div className="absolute left-0 md:static flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-white dark:bg-gray-800 border-2 border-primary text-primary z-10 shadow-sm">
              <span className="material-symbols-outlined md:text-[28px]">
                edit_document
              </span>
            </div>
            <div className="flex flex-col md:text-center">
              <span className="text-sm font-bold text-primary uppercase tracking-wider mb-1">
                Step 2
              </span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Onboarding
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Fill out our simple, 5-minute online form.
              </p>
            </div>
          </div>
          <div className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-4 pl-12 md:pl-0">
            <div className="absolute left-0 md:static flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-white dark:bg-gray-800 border-2 border-primary text-primary z-10 shadow-sm">
              <span className="material-symbols-outlined md:text-[28px]">
                sync
              </span>
            </div>
            <div className="flex flex-col md:text-center">
              <span className="text-sm font-bold text-primary uppercase tracking-wider mb-1">
                Step 3
              </span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                We Process
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Atlaz manages all filings, fees, and documents.
              </p>
            </div>
          </div>
          <div className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-4 pl-12 md:pl-0">
            <div className="absolute left-0 md:static flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-white dark:bg-gray-800 border-2 border-primary text-primary z-10 shadow-sm">
              <span className="material-symbols-outlined md:text-[28px]">
                dashboard
              </span>
            </div>
            <div className="flex flex-col md:text-center">
              <span className="text-sm font-bold text-primary uppercase tracking-wider mb-1">
                Step 4
              </span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Launch
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Download certificates, TIN/EIN, and access dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
