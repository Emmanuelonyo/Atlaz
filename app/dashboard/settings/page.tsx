export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
        Settings
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="w-full md:w-64 shrink-0 flex flex-col gap-2">
          <button className="text-left px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold">
            Profile
          </button>
          <button className="text-left px-4 py-3 rounded-xl text-gray-600 dark:text-gray-400 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Billing & Invoices
          </button>
          <button className="text-left px-4 py-3 rounded-xl text-gray-600 dark:text-gray-400 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Team Members
          </button>
          <button className="text-left px-4 py-3 rounded-xl text-gray-600 dark:text-gray-400 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Security
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-card-light dark:bg-card-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Profile Information
          </h2>

          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400 text-2xl font-bold border-4 border-white dark:border-gray-600">
              JD
            </div>
            <div>
              <button className="px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-600 font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Change Photo
              </button>
            </div>
          </div>

          <form className="space-y-6 max-w-lg">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600 dark:text-gray-300">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="John"
                  className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white font-medium"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600 dark:text-gray-300">
                  Last Name
                </label>
                <input
                  type="text"
                  defaultValue="Doe"
                  className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white font-medium"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white font-medium"
              />
            </div>

            <div className="pt-4">
              <button
                type="button"
                className="bg-primary hover:bg-sky-500 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/30 transition-all active:scale-95"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
