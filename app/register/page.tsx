import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Logo } from "@/components/ui/Logo";

export default function RegisterPage() {
  return (
    <>
      <BackgroundEffects />
      <div className="relative flex h-screen w-full flex-col group/design-root overflow-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="w-full flex justify-center h-full">
            <div className="w-full h-full flex">
              <div className="w-full lg:w-1/2 h-full flex flex-col p-6 md:p-12 overflow-y-auto">
                <header className="flex items-center gap-3 mb-12">
                  <Logo />
                  <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Atlaz
                  </h2>
                </header>
                <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
                  <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                      Create your account
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      Start building your global business entity today.
                    </p>
                  </div>
                  <form className="flex flex-col gap-5">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        id="first-name"
                        label="First Name"
                        placeholder="Jane"
                        type="text"
                      />
                      <Input
                        id="last-name"
                        label="Last Name"
                        placeholder="Doe"
                        type="text"
                      />
                    </div>
                    <Input
                      id="email"
                      label="Email Address"
                      placeholder="jane@company.com"
                      type="email"
                    />
                    <div>
                      <Input
                        id="password"
                        label="Password"
                        placeholder="••••••••"
                        type="password"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        Must be at least 8 characters long
                      </p>
                    </div>
                    <Button type="submit" className="mt-2">
                      Create Account
                    </Button>
                    <div className="relative flex items-center gap-2 my-4">
                      <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1"></div>
                      <span className="text-xs font-semibold text-gray-500 uppercase">
                        Or continue with
                      </span>
                      <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1"></div>
                    </div>
                    <Button variant="outline" className="gap-3 font-semibold">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
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
                      Register with Google
                    </Button>
                    <p className="text-center text-sm text-gray-500 mt-4">
                      Already have an account?{" "}
                      <a
                        className="font-bold text-primary hover:text-primary-dark"
                        href="#"
                      >
                        Log in
                      </a>
                    </p>
                    <p className="text-center text-xs text-gray-400 mt-2">
                      By registering, you agree to our{" "}
                      <a className="underline hover:text-gray-600" href="#">
                        Terms
                      </a>{" "}
                      and{" "}
                      <a className="underline hover:text-gray-600" href="#">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                </div>
                <div className="mt-auto">
                  <p className="text-xs text-gray-400">
                    © 2024 Atlaz Inc. All rights reserved.
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex w-1/2 bg-gray-50 dark:bg-gray-900 relative overflow-hidden items-center justify-center p-12">
                <div className="absolute inset-0 bg-hero-gradient opacity-10 dark:opacity-5"></div>
                <div className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-[100px]"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-accent-teal/10 via-accent-teal/5 to-transparent blur-[100px]"></div>
                <div className="relative w-full max-w-lg z-10">
                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 p-8 flex flex-col gap-6 rotate-1">
                    <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">
                            rocket_launch
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-sm font-bold text-gray-900 dark:text-white">
                            New Entity Formation
                          </p>
                          <p className="text-xs text-gray-500">
                            US Delaware C-Corp
                          </p>
                        </div>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full">
                        Active
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                            <span className="material-symbols-outlined text-gray-400 text-[18px]">
                              description
                            </span>
                          </div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Articles of Incorporation
                          </p>
                        </div>
                        <span className="material-symbols-outlined text-green-500 text-[20px]">
                          check_circle
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                            <span className="material-symbols-outlined text-gray-400 text-[18px]">
                              badge
                            </span>
                          </div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            EIN Registration
                          </p>
                        </div>
                        <span className="material-symbols-outlined text-green-500 text-[20px]">
                          check_circle
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                            <span className="material-symbols-outlined text-gray-400 text-[18px]">
                              account_balance
                            </span>
                          </div>
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Bank Account Setup
                          </p>
                        </div>
                        <div className="h-5 w-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 flex items-start gap-3 mt-2">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                        info
                      </span>
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                        Your dedicated account manager is currently processing
                        your bank application. Expect an update within 24 hours.
                      </p>
                    </div>
                  </div>
                  <div className="mt-12">
                    <div className="flex flex-col gap-6">
                      <div className="flex gap-4 items-start">
                        <div className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center flex-shrink-0 text-primary">
                          <span className="material-symbols-outlined">
                            public
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            Global Reach
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Access markets in Africa and the US with a single
                            dashboard.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center flex-shrink-0 text-primary">
                          <span className="material-symbols-outlined">
                            security
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            Secure & Compliant
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Bank-grade security for your documents and legal
                            filings.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
