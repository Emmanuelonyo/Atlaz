export default function CompliancePage() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      {/* Page Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-2">
            Compliance
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl">
            Stay on top of your regulatory obligations and avoid penalties.
          </p>
        </div>
      </div>

      {/* Compliance Health Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute right-0 top-0 w-32 h-32 bg-green-500/10 rounded-bl-full -mr-8 -mt-8 z-0"></div>
          <div className="relative z-10">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Compliance Score
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Across all entities
            </p>
          </div>
          <div className="flex items-end gap-3 mt-6 relative z-10">
            <span className="text-5xl font-black text-green-500">92</span>
            <span className="text-lg font-medium text-gray-400 mb-2">/100</span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full mt-4 overflow-hidden relative z-10">
            <div className="w-[92%] bg-green-500 h-full rounded-full"></div>
          </div>
        </div>

        <div className="md:col-span-2 bg-gradient-to-r from-primary to-accent-teal p-6 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-lg shadow-primary/20">
          <div className="absolute left-0 top-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="relative z-10 flex-1">
            <div className="flex items-center gap-2 mb-2 bg-white/20 w-fit px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
              <span className="material-symbols-outlined text-sm">
                priority_high
              </span>
              Action Required
            </div>
            <h3 className="text-2xl font-bold mb-2">Annual Return Due Soon</h3>
            <p className="text-white/80 max-w-md">
              Your Annual Return for Atlas Tech SG is due in 15 days. Filing
              late may result in penalties from ACRA.
            </p>
          </div>
          <button className="relative z-10 bg-white text-primary px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-50 transition-colors shrink-0">
            File Return Now
          </button>
        </div>
      </div>

      {/* Deadlines Timeline */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-4">
        Upcoming Deadlines
      </h2>
      <div className="space-y-4">
        {[
          {
            entity: "Nomad Ventures LLC",
            task: "State Franchise Tax",
            date: "Nov 30, 2024",
            daysLeft: "5 days",
            status: "Urgent",
            color: "amber",
          },
          {
            entity: "Green Energy GmbH",
            task: "VAT Filing Q4",
            date: "Dec 15, 2024",
            daysLeft: "20 days",
            status: "Upcoming",
            color: "blue",
          },
          {
            entity: "Atlas Tech SG",
            task: "Annual General Meeting",
            date: "Dec 31, 2024",
            daysLeft: "36 days",
            status: "Upcoming",
            color: "gray",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 p-5 bg-card-light dark:bg-card-dark rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                item.color === "amber"
                  ? "bg-amber-100 text-amber-600"
                  : item.color === "blue"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
              }`}
            >
              <span className="material-symbols-outlined">event</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                {item.task}
              </h4>
              <p className="text-sm text-gray-500">{item.entity}</p>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto mt-2 md:mt-0 justify-between md:justify-end">
              <div className="text-right">
                <p className="font-bold text-gray-900 dark:text-white">
                  {item.date}
                </p>
                <p
                  className={`text-xs font-bold ${
                    item.status === "Urgent" ? "text-amber-600" : "text-gray-400"
                  }`}
                >
                  {item.daysLeft} left
                </p>
              </div>
              <button className="px-4 py-2 text-sm border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
