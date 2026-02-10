import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Logo } from "@/components/ui/Logo";

export default function LoginPage() {
  return (
    <>
      <BackgroundEffects />
      <div className="flex h-screen w-full">
        {/* Left Side (Form) */}
        <div className="w-full lg:w-1/2 flex flex-col h-full bg-white dark:bg-background-dark relative z-10 p-6 md:p-12 overflow-y-auto">
          <div className="flex items-center gap-3 text-gray-900 dark:text-white mb-12">
            <Logo />
            <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Atlaz
            </h2>
          </div>
          <div className="flex flex-col justify-center grow max-w-md mx-auto w-full">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                Welcome back
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Enter your details to access your account.
              </p>
            </div>
            <form className="flex flex-col gap-5">
              <Input
                id="email"
                type="email"
                label="Email address"
                placeholder="you@company.com"
                required
                icon={
                  <span className="material-symbols-outlined text-[20px]">
                    mail
                  </span>
                }
              />
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <a
                    className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <span className="material-symbols-outlined text-[20px]">
                      lock
                    </span>
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="block w-full rounded-xl border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white pl-10 focus:ring-primary focus:border-primary sm:text-sm py-3 transition-colors outline-none placeholder:text-gray-400 border"
                  />
                  {/* Note: I reused the raw input structure here briefly because of the custom label 'Forgot Password' link structure 
                      that differs slightly from the base Input component, but I can refactor Input to be more flexible or just use the structure.
                      Actually, looking at the Input component I made, it takes a label string. 
                      For this specific case with the "Forgot password" link, I might need to compose it manually or update Input.
                      For now I'll stick to manual composition for the password field to match the design exactly, or just use the Input component and put the forgot password link separately?
                      The design has the label and link in the same row. I'll just keep the manual structure for optimized exact matching or update Input.
                      Actually, let's keep it simple and just use the manual structure for the password field to ensure exact design match without over-engineering the Input component right now.
                   */}
                </div>
              </div>

              <Button type="submit" className="mt-2">
                Sign In
              </Button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-background-dark text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <Button variant="outline" className="gap-3 font-medium">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                ></path>
              </svg>
              Login with Google
            </Button>

            <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <a
                className="font-semibold text-primary hover:text-primary-dark transition-colors"
                href="#"
              >
                Start your business
              </a>
            </p>
          </div>
          <div className="mt-auto text-xs text-gray-400 dark:text-gray-500 text-center md:text-left">
            © 2024 Atlaz Inc.
          </div>
        </div>

        {/* Right Side (Visual) */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-gray-50 dark:bg-gray-900 items-center justify-center p-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Using img tag directly as per user snippet, can be optimized later */}
            <img
              alt="Global Business Hubs"
              className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAHOgHRlOOxurxSmu100J7LYZjyiDzGAPKAnrhbtuWSxQbIKARORBh4FvaHN2w0i4sk8HoKMHK5dq1-2BIyR92dPJmP97cVmyiUtP1mViMknFE4Tsh8OtxD9yABUAUnCu_5GZF2nFAqJH1O7Xorz4FXCcZ_fATeJFk3eQke2cckLX3c8uWv4eZavYowLW6kfZd_rJKHhbfXKMxtFT5wRBORlRIvegewZkm8QNX8iJma9l4hipHZNLWVyqmLbh-B8oqV96moD7Gq4xV"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-background-dark/80 dark:to-background-dark/95 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10 w-full max-w-lg">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl animate-fade-in-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent-teal flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined text-white text-[24px]">
                    rocket_launch
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Your Global HQ
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Manage everything from one dashboard.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
                  <div className="bg-green-500/20 p-2 rounded-full">
                    <span className="material-symbols-outlined text-green-400 text-[18px]">
                      check_circle
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">
                      Delaware C-Corp Formed
                    </p>
                    <p className="text-blue-200 text-xs">
                      Completed 2 mins ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
                  <div className="bg-blue-500/20 p-2 rounded-full">
                    <span className="material-symbols-outlined text-blue-400 text-[18px]">
                      mail
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">
                      New Mail at Virtual Address
                    </p>
                    <p className="text-blue-200 text-xs">Received Today</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
                  <div className="bg-purple-500/20 p-2 rounded-full">
                    <span className="material-symbols-outlined text-purple-400 text-[18px]">
                      account_balance
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">
                      Bank Account Active
                    </p>
                    <p className="text-blue-200 text-xs">Ready for deposits</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-teal rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div
              className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
