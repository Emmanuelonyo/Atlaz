import Link from "next/link";

const stats = [
  { value: "1,000+", label: "Businesses Launched" },
  { value: "48hrs", label: "Average Setup Time" },
  { value: "15+", label: "Countries Supported" },
];

export function CTA() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Animated Background Elements */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-teal/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(white 1px, transparent 1px),
                linear-gradient(90deg, white 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          ></div>
          
          {/* Floating Elements */}
          <div className="absolute top-12 left-12 w-3 h-3 bg-accent-teal rounded-full animate-ping opacity-60"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary rounded-full animate-ping opacity-60" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300">Join 1,000+ founders building globally</span>
            </div>

            {/* Headline */}
            <h2 className="text-white text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6">
              Your Global Business
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-accent-teal">
                Starts Here
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              From company formation to bank accounts, we handle the complexity so you can focus on what matters — building something amazing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="group flex items-center justify-center rounded-full h-14 px-10 bg-gradient-to-r from-primary to-accent-teal text-white text-lg font-bold tracking-wide hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                <span>Start Your Business</span>
                <span className="material-symbols-outlined ml-2 text-xl group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="#pricing"
                className="flex items-center justify-center rounded-full h-14 px-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-medium hover:bg-white/20 transition-all duration-300"
              >
                <span className="material-symbols-outlined mr-2 text-xl">
                  calculate
                </span>
                <span>View Pricing</span>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500 text-lg">verified</span>
                <span>Verified Provider</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-400 text-lg">lock</span>
                <span>Bank-level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-400 text-lg">support_agent</span>
                <span>24/7 Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
