"use client";

export function DashboardPreview() {
  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="material-symbols-outlined text-primary text-sm">dashboard</span>
          <span className="text-sm font-semibold text-primary">Your Command Center</span>
        </div>
        <h2 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-black tracking-tight mb-4">
          Everything You Need,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-teal">
            One Dashboard
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Track your incorporation progress, access documents, and manage compliance—all from your personalized founder portal.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Background Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent-teal/20 to-primary/20 blur-3xl rounded-[3rem] -z-10"></div>
        
        {/* Dashboard Mockup */}
        <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
          {/* Window Controls */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1 bg-gray-700 rounded-md text-xs text-gray-400 flex items-center gap-2">
                <span className="material-symbols-outlined text-[12px]">lock</span>
                app.atlaz.com/dashboard
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="flex">
            {/* Sidebar */}
            <div className="w-56 bg-gray-850 border-r border-gray-800 p-4 hidden md:block" style={{ backgroundColor: 'rgb(24, 28, 35)' }}>
              <div className="flex items-center gap-3 mb-8 p-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent-teal rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
                <span className="text-white font-bold">Atlaz</span>
              </div>
              <nav className="space-y-1">
                {[
                  { icon: "dashboard", label: "Dashboard", active: true },
                  { icon: "description", label: "Documents", active: false },
                  { icon: "account_balance", label: "Banking", active: false },
                  { icon: "gavel", label: "Compliance", active: false },
                  { icon: "settings", label: "Settings", active: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                      item.active
                        ? "bg-primary/20 text-primary"
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-900" style={{ minHeight: '350px' }}>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white text-lg font-bold">Welcome back, Emmanuel 👋</h3>
                  <p className="text-gray-500 text-sm">Your company: TechSpace Inc. (Delaware C-Corp)</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  All Good
                </div>
              </div>

              {/* Status Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-green-400">check_circle</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Company Status</p>
                      <p className="text-white font-bold">Incorporated</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5">
                    <div className="bg-green-400 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-blue-400">badge</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">EIN Status</p>
                      <p className="text-white font-bold">Received</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5">
                    <div className="bg-blue-400 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-amber-400">account_balance</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Bank Account</p>
                      <p className="text-white font-bold">In Progress</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5">
                    <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>

              {/* Documents Section */}
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-semibold">Recent Documents</h4>
                  <button className="text-primary text-sm hover:underline">View All</button>
                </div>
                <div className="space-y-2">
                  {[
                    { name: "Certificate of Incorporation.pdf", date: "Feb 8, 2024", icon: "picture_as_pdf" },
                    { name: "EIN Confirmation Letter.pdf", date: "Feb 6, 2024", icon: "picture_as_pdf" },
                    { name: "Operating Agreement.pdf", date: "Feb 5, 2024", icon: "picture_as_pdf" },
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center justify-between p-2 hover:bg-gray-700/30 rounded-lg cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-red-400">{doc.icon}</span>
                        <span className="text-gray-300 text-sm">{doc.name}</span>
                      </div>
                      <span className="text-gray-600 text-xs">{doc.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
