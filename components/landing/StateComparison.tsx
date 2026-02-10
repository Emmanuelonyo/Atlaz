"use client";

import { useState } from "react";
import Link from "next/link";

interface StateInfo {
  name: string;
  icon: string;
  tagline: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  annualCost: string;
  formationTime: string;
  color: string;
}

const states: Record<string, StateInfo> = {
  delaware: {
    name: "Delaware",
    icon: "account_balance",
    tagline: "The Gold Standard for Startups",
    pros: [
      "Preferred by VCs and investors",
      "Business-friendly Court of Chancery",
      "Strongest legal precedents",
      "Best for raising funding",
    ],
    cons: [
      "Higher franchise tax for large companies",
      "Requires registered agent",
    ],
    bestFor: "Startups seeking VC funding",
    annualCost: "$300/yr",
    formationTime: "24-48 hrs",
    color: "blue",
  },
  wyoming: {
    name: "Wyoming",
    icon: "shield",
    tagline: "Maximum Privacy & Low Costs",
    pros: [
      "No state income tax",
      "Strongest asset protection",
      "Low annual fees ($60/yr)",
      "Anonymous ownership allowed",
    ],
    cons: [
      "Less familiar to some investors",
      "Fewer legal precedents",
    ],
    bestFor: "Bootstrapped businesses & privacy-focused founders",
    annualCost: "$60/yr",
    formationTime: "24-48 hrs",
    color: "amber",
  },
};

export function StateComparison() {
  const [selectedState, setSelectedState] = useState<"delaware" | "wyoming">("delaware");

  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
          <span className="material-symbols-outlined text-amber-500 text-sm">help</span>
          <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">Quick Guide</span>
        </div>
        <h2 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-black tracking-tight mb-4">
          Delaware vs Wyoming:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-amber-500">
            Which is Right for You?
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Both are excellent choices. Here&apos;s a quick comparison to help you decide.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
          <button
            onClick={() => setSelectedState("delaware")}
            className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${
              selectedState === "delaware"
                ? "bg-white dark:bg-gray-700 text-blue-600 shadow-md"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <span className="material-symbols-outlined text-lg">account_balance</span>
            Delaware
          </button>
          <button
            onClick={() => setSelectedState("wyoming")}
            className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${
              selectedState === "wyoming"
                ? "bg-white dark:bg-gray-700 text-amber-600 shadow-md"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <span className="material-symbols-outlined text-lg">shield</span>
            Wyoming
          </button>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {(Object.keys(states) as Array<"delaware" | "wyoming">).map((stateKey) => {
          const state = states[stateKey];
          const isSelected = selectedState === stateKey;
          const colorClass = state.color === "blue" ? "blue" : "amber";

          return (
            <div
              key={stateKey}
              onClick={() => setSelectedState(stateKey)}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                isSelected
                  ? `border-${colorClass}-500 shadow-xl shadow-${colorClass}-500/10 scale-[1.02]`
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
              }`}
              style={{
                borderColor: isSelected ? (colorClass === "blue" ? "#3b82f6" : "#f59e0b") : undefined,
                boxShadow: isSelected ? `0 20px 40px -12px ${colorClass === "blue" ? "rgba(59, 130, 246, 0.15)" : "rgba(245, 158, 11, 0.15)"}` : undefined,
              }}
            >
              {isSelected && (
                <div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: colorClass === "blue" ? "#3b82f6" : "#f59e0b" }}
                >
                  Recommended
                </div>
              )}

              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: colorClass === "blue" ? "rgba(59, 130, 246, 0.1)" : "rgba(245, 158, 11, 0.1)" }}
                >
                  <span 
                    className="material-symbols-outlined text-3xl"
                    style={{ color: colorClass === "blue" ? "#3b82f6" : "#f59e0b" }}
                  >
                    {state.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{state.name}</h3>
                  <p className="text-sm text-gray-500">{state.tagline}</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 mb-1">Annual Cost</p>
                  <p className="font-bold text-gray-900 dark:text-white">{state.annualCost}</p>
                </div>
                <div className="flex-1 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 mb-1">Formation</p>
                  <p className="font-bold text-gray-900 dark:text-white">{state.formationTime}</p>
                </div>
              </div>

              {/* Pros */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Benefits</p>
                <ul className="space-y-2">
                  {state.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="material-symbols-outlined text-green-500 text-[16px] mt-0.5">check</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best For */}
              <div 
                className="p-3 rounded-lg text-sm font-medium"
                style={{ 
                  backgroundColor: colorClass === "blue" ? "rgba(59, 130, 246, 0.1)" : "rgba(245, 158, 11, 0.1)",
                  color: colorClass === "blue" ? "#2563eb" : "#d97706"
                }}
              >
                <span className="material-symbols-outlined text-[14px] mr-1">tips_and_updates</span>
                Best for: {state.bestFor}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <p className="text-gray-500 mb-4">Not sure? Our team can help you decide.</p>
        <Link
          href="/register"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent-teal text-white font-bold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          Get Started with {states[selectedState].name}
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
