"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewBusinessPage() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedCountry === "nigeria") {
      router.push("/dashboard/new-business/nigeria");
    } else if (selectedCountry === "us") {
      // US flow coming soon
      alert("US business registration coming soon!");
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-10 max-w-4xl mx-auto w-full">
      {/* Page Heading & Back */}
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">
            Launch New Business
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Set up a new legal entity in minutes.
          </p>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-card-light dark:bg-card-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm min-h-[400px]">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Choose Jurisdiction
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Select where you want to incorporate your business
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => setSelectedCountry("nigeria")}
              className={`p-6 rounded-xl border-2 text-left transition-all hover:bg-gray-50 dark:hover:bg-gray-800 ${
                selectedCountry === "nigeria"
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">🇳🇬</span>
                {selectedCountry === "nigeria" && (
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Nigeria
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Incorporate a CAC business name or limited liability company.
                Includes TIN and local bank support.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-primary font-medium">
                <span className="material-symbols-outlined text-[18px]">
                  schedule
                </span>
                3-14 business days
              </div>
            </button>

            <button
              onClick={() => setSelectedCountry("us")}
              className={`p-6 rounded-xl border-2 text-left transition-all hover:bg-gray-50 dark:hover:bg-gray-800 relative ${
                selectedCountry === "us"
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              <div className="absolute top-3 right-3">
                <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-full">
                  Coming Soon
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">🇺🇸</span>
                {selectedCountry === "us" && (
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                United States
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Form a Delaware or Wyoming LLC/C-Corp. For non-US residents.
                Includes EIN and Registered Agent.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-primary font-medium">
                <span className="material-symbols-outlined text-[18px]">
                  schedule
                </span>
                5-10 business days
              </div>
            </button>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              disabled={!selectedCountry}
              onClick={handleContinue}
              className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent-teal disabled:opacity-50 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
            >
              Continue
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
