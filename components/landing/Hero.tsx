import Link from "next/link";

const founderAvatars = [
  {
    initials: "EA",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    initials: "MK",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    initials: "JO",
    gradient: "from-amber-500 to-orange-400",
  },
];

export function Hero() {
  return (
    <div className="py-16 lg:py-24 @container">
      <div className="flex flex-col-reverse lg:flex-row gap-12 lg:items-center">
        <div className="flex flex-col gap-8 text-left lg:w-1/2">
          <div className="flex flex-col gap-5">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 backdrop-blur-sm">
              <span className="flex size-2 rounded-full bg-accent-teal animate-pulse"></span>
              <p className="text-xs font-bold uppercase tracking-wide text-primary">
                Global Incorporation Made Simple
              </p>
            </div>
            <h1 className="text-gray-900 dark:text-white text-5xl sm:text-6xl font-black leading-[1.1] tracking-tight">
              Launch Your Business in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-teal">
                Africa, the US
              </span>
              , and Beyond — From Anywhere.
            </h1>
            <h2 className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl font-normal leading-relaxed max-w-lg">
              We handle the filings, compliance, and prestigious office address.
              You focus on building your empire.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group flex w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-gradient-to-r from-primary to-accent-teal text-white text-lg font-bold tracking-wide hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="truncate">Start My Business</span>
              <span className="material-symbols-outlined ml-2 text-[20px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
            <a
              href="https://calendly.com/atlaz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-white/50 backdrop-blur-sm dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white text-lg font-bold tracking-wide hover:bg-white dark:hover:bg-gray-700 hover:border-primary/30 transition-all duration-200"
            >
              <span className="material-symbols-outlined mr-2 text-[20px]">calendar_month</span>
              <span className="truncate">Book a Call</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {founderAvatars.map((avatar, index) => (
                  <div
                    key={index}
                    className={`h-9 w-9 rounded-full bg-gradient-to-br ${avatar.gradient} border-2 border-white dark:border-background-dark flex items-center justify-center text-white text-xs font-bold shadow-md`}
                  >
                    {avatar.initials}
                  </div>
                ))}
                <div className="h-9 w-9 rounded-full bg-primary/10 border-2 border-white dark:border-background-dark flex items-center justify-center text-primary text-xs font-bold">
                  +
                </div>
              </div>
              <p className="font-semibold text-gray-700 dark:text-gray-300">
                Trusted by <span className="text-primary">1,000+</span> founders
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-medium">
              <span className="material-symbols-outlined text-[14px]">
                verified
              </span>
              <span>Verified Provider</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs font-medium">
              <span className="material-symbols-outlined text-[14px]">
                lock
              </span>
              <span>Secure & Encrypted</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs font-medium">
              <span className="material-symbols-outlined text-[14px]">
                schedule
              </span>
              <span>5-min Setup</span>
            </div>
          </div>
        </div>

        {/* 3D Hero Visual */}
        <div className="w-full lg:w-1/2 relative">
          {/* Animated glow background */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent-teal to-primary opacity-30 blur-3xl rounded-[3rem] -z-10 animate-pulse"></div>
          <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 to-accent-teal/20 rounded-[4rem] -z-20 animate-[spin_20s_linear_infinite]"></div>
          
          {/* 3D Card Container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              {/* 3D Globe Illustration */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 opacity-20">
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px',
                      transform: 'perspective(500px) rotateX(60deg)',
                      transformOrigin: 'center top'
                    }}
                  ></div>
                </div>
                
                {/* Central 3D Globe */}
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent-teal opacity-20 blur-xl animate-pulse"></div>
                  
                  {/* Globe */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/80 via-cyan-500/60 to-accent-teal/80 shadow-2xl shadow-primary/50 animate-[spin_30s_linear_infinite]">
                    {/* Globe lines */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/10"></div>
                    <div className="absolute inset-0 rounded-full border border-white/5" style={{ transform: 'rotateY(30deg)' }}></div>
                    <div className="absolute inset-0 rounded-full border border-white/5" style={{ transform: 'rotateY(60deg)' }}></div>
                    <div className="absolute inset-0 rounded-full border border-white/5" style={{ transform: 'rotateX(30deg)' }}></div>
                    <div className="absolute inset-0 rounded-full border border-white/5" style={{ transform: 'rotateX(60deg)' }}></div>
                    
                    {/* Continent-like shapes */}
                    <div className="absolute top-1/4 left-1/3 w-16 h-12 bg-white/20 rounded-full blur-sm"></div>
                    <div className="absolute top-1/2 right-1/4 w-12 h-16 bg-white/15 rounded-full blur-sm"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-10 h-8 bg-white/10 rounded-full blur-sm"></div>
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent-teal rounded-full shadow-lg shadow-accent-teal/50"></div>
                  </div>
                  <div className="absolute inset-0 animate-[spin_20s_linear_infinite_reverse]">
                    <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50"></div>
                  </div>
                  <div className="absolute inset-0 animate-[spin_25s_linear_infinite]">
                    <div className="absolute -bottom-1 left-1/3 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                  </div>
                </div>
                
                {/* Floating 3D Icons */}
                <div className="absolute top-8 right-8 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                  <span className="material-symbols-outlined text-white text-2xl">description</span>
                </div>
                <div className="absolute bottom-16 left-8 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                  <span className="material-symbols-outlined text-accent-teal text-2xl">verified</span>
                </div>
                <div className="absolute top-1/4 left-6 p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
                  <span className="material-symbols-outlined text-primary text-xl">account_balance</span>
                </div>
              </div>
              
              {/* Bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
              
              {/* Status cards */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20">
                <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-3 rounded-xl shadow-xl border border-white/20 hover:scale-105 transition-transform cursor-default">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 p-1.5 rounded-full">
                      <span className="material-symbols-outlined text-green-600 text-[16px] leading-none">
                        check_circle
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Status</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">Incorporated</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-primary to-accent-teal backdrop-blur-sm p-3 rounded-xl shadow-xl border border-white/20 text-white hover:scale-105 transition-transform cursor-default">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">public</span>
                    <span className="text-sm font-bold">Global Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
