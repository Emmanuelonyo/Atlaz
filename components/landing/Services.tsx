export function Services() {
  return (
    <div className="py-16 md:py-24">
      <div className="flex flex-col gap-4 text-center items-center mb-12">
        <h2 className="text-gray-900 dark:text-white tracking-tight text-3xl font-bold leading-tight @[480px]:text-4xl max-w-[720px]">
          Our Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg font-normal leading-normal max-w-[720px]">
          Everything you need to launch and grow your global business, all in
          one place.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="flex flex-row p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 backdrop-blur-sm dark:bg-gray-800 gap-6 hover:border-primary/50 transition-colors group">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">corporate_fare</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              African Incorporation Suite
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Fast-track your entry into Africa's key markets. We cover Nigeria,
              Kenya, Ghana, SA, and Rwanda.
            </p>
          </div>
        </div>
        <div className="flex flex-row p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 backdrop-blur-sm dark:bg-gray-800 gap-6 hover:border-primary/50 transition-colors group">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">flag</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              US Incorporation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Establish your US presence with an LLC or C-Corp, complete with
              EIN and Registered Agent service.
            </p>
          </div>
        </div>
        <div className="flex flex-row p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 backdrop-blur-sm dark:bg-gray-800 gap-6 hover:border-primary/50 transition-colors group">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">mail</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Virtual Office
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Get a prestigious business address and mail handling services in
              both Africa and the US.
            </p>
          </div>
        </div>
        <div className="flex flex-row p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 backdrop-blur-sm dark:bg-gray-800 gap-6 hover:border-primary/50 transition-colors group">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Startup Kit
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Access exclusive perks like a domain, professional email, AWS
              credits, and legal templates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
