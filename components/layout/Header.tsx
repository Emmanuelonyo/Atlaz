export function Header() {
  return (
    <header className="h-20 flex items-center justify-between px-6 md:px-10 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 z-10">
      <button className="lg:hidden p-2 -ml-2 text-gray-600 dark:text-gray-300">
        <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="flex flex-col justify-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-xs text-gray-500 hidden md:block">
          Welcome back, here's what's happening today.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 h-10 w-64 focus-within:ring-2 focus-within:ring-primary/20 transition-shadow">
          <span className="material-symbols-outlined text-gray-400 text-[20px]">
            search
          </span>
          <input
            className="bg-transparent border-none focus:ring-0 text-sm w-full text-gray-700 dark:text-gray-200 placeholder-gray-400"
            placeholder="Search companies, docs..."
            type="text"
          />
        </div>
        <button className="relative p-2 text-gray-500 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white dark:border-background-dark"></span>
        </button>
        <button className="p-2 text-gray-500 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">help</span>
        </button>
      </div>
    </header>
  );
}
