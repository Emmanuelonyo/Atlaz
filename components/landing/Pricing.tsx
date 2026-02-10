"use client";

import { useState } from "react";
import Link from "next/link";

type EntityType = "african" | "us";
type Currency = "usd" | "ngn";

interface PricingPlan {
  name: string;
  priceUSD: string;
  priceNGN: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const pricingData: Record<EntityType, PricingPlan[]> = {
  african: [
    {
      name: "Standard Package",
      priceUSD: "$350",
      priceNGN: "₦525,000",
      description: "Perfect for local founders needing quick registration.",
      features: [
        "Company Registration",
        "TIN Registration",
        "Standard Bylaws",
        "Digital Certificate",
      ],
    },
    {
      name: "Premium Package",
      priceUSD: "$650",
      priceNGN: "₦975,000",
      description: "Comprehensive setup for serious businesses scaling up.",
      features: [
        "Everything in Standard",
        "Bank Account Opening",
        "Virtual Office Address (1yr)",
        "Post-Incorporation Support",
        "Legal Templates Access",
      ],
      isPopular: true,
    },
    {
      name: "Deluxe Package",
      priceUSD: "$1,200",
      priceNGN: "₦1,800,000",
      description: "Full compliance and executive support for global expansion.",
      features: [
        "Everything in Premium",
        "Ongoing Compliance Mgmt",
        "Dedicated Account Manager",
        "Expedited Processing",
        "Intellectual Property Advisory",
      ],
    },
  ],
  us: [
    {
      name: "Standard Package",
      priceUSD: "$499",
      priceNGN: "₦750,000",
      description: "Essential US entity formation for startups.",
      features: [
        "Delaware C-Corp Formation",
        "EIN Registration",
        "Registered Agent (1yr)",
        "Operating Agreement",
      ],
    },
    {
      name: "Premium Package",
      priceUSD: "$780",
      priceNGN: "₦1,170,000",
      description: "Complete package for scaling globally with US presence.",
      features: [
        "Everything in Standard",
        "US Bank Account Opening",
        "Virtual Address (1yr)",
        "83(b) Election Filing",
        "Founder Stock Issuance",
      ],
      isPopular: true,
    },
    {
      name: "Deluxe Package",
      priceUSD: "$1,500",
      priceNGN: "₦2,250,000",
      description: "Enterprise-grade setup with full compliance and support.",
      features: [
        "Everything in Premium",
        "Annual Report Filing",
        "Ongoing Compliance Mgmt",
        "Dedicated Success Manager",
        "Tax Planning Consultation",
      ],
    },
  ],
};

function PricingCard({
  plan,
  isPopular,
  currency,
}: {
  plan: PricingPlan;
  isPopular?: boolean;
  currency: Currency;
}) {
  const price = currency === "usd" ? plan.priceUSD : plan.priceNGN;
  
  if (isPopular) {
    return (
      <div className="flex flex-col p-8 bg-white dark:bg-gray-800 rounded-3xl border-2 border-primary shadow-xl relative scale-105 z-10">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent-teal text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
          Most Popular
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-primary">{plan.name}</h3>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">
              {price}
            </span>
            <span className="text-sm text-gray-500 font-medium">/one-time</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
        </div>
        <div className="flex flex-col gap-3 py-6 border-t border-gray-100 dark:border-gray-700">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[20px]">
                check_circle
              </span>
              <span
                className={`text-sm text-gray-700 dark:text-gray-300 ${
                  index === 0 ? "font-medium" : ""
                }`}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
        <Link
          href="/contact"
          className="group mt-auto flex items-center justify-center w-full py-3 rounded-xl bg-primary text-white hover:bg-primary-dark font-bold text-sm shadow-md transition-all duration-200 shadow-primary/30 hover:shadow-lg hover:-translate-y-0.5"
        >
          Get Started
          <span className="material-symbols-outlined ml-2 text-[16px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </Link>
        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
          <span className="material-symbols-outlined text-[14px] text-green-500">
            verified
          </span>
          <span>Secure checkout • No hidden fees</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-8 bg-white/80 backdrop-blur-md dark:bg-gray-800/80 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
          {plan.name}
        </h3>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">
            {price}
          </span>
          <span className="text-sm text-gray-500 font-medium">/one-time</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
      </div>
      <div className="flex flex-col gap-3 py-6 border-t border-gray-100 dark:border-gray-700">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[20px]">
              check_circle
            </span>
            <span
              className={`text-sm text-gray-700 dark:text-gray-300 ${
                index === 0 && plan.features[0].includes("Everything")
                  ? "font-medium"
                  : ""
              }`}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>
      <Link
        href="/contact"
        className="mt-auto flex items-center justify-center w-full py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white font-bold text-sm transition-colors"
      >
        Get Started
      </Link>
    </div>
  );
}

export function Pricing() {
  const [entityType, setEntityType] = useState<EntityType>("african");
  const [currency, setCurrency] = useState<Currency>("usd");

  const currentPlans = pricingData[entityType];

  return (
    <div className="py-16 md:py-24 -mx-4 md:-mx-6 px-4 md:px-6" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 text-center items-center mb-16">
          <h2 className="text-gray-900 dark:text-white tracking-tight text-3xl font-bold leading-tight @[480px]:text-4xl max-w-[720px]">
            Transparent Pricing for Every Stage
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg font-normal leading-normal max-w-[720px]">
            No hidden fees. Just simple, straightforward packages designed to
            get you running fast.
          </p>
          
          {/* Entity Type Toggle */}
          <div className="flex items-center p-1 bg-white/50 backdrop-blur-sm dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 mt-4">
            <button
              onClick={() => setEntityType("african")}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                entityType === "african"
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              🌍 African Entity
            </button>
            <button
              onClick={() => setEntityType("us")}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                entityType === "us"
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              🇺🇸 US Entity
            </button>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-3 mt-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">Show prices in:</span>
            <div className="flex items-center p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
              <button
                onClick={() => setCurrency("usd")}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  currency === "usd"
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                🇺🇸 USD
              </button>
              <button
                onClick={() => setCurrency("ngn")}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  currency === "ngn"
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                🇳🇬 NGN
              </button>
            </div>
          </div>
          
          {currency === "ngn" && (
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              * NGN prices are approximate at ₦1,500/$1. Final amount confirmed at checkout.
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {currentPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} isPopular={plan.isPopular} currency={currency} />
          ))}
        </div>
      </div>
    </div>
  );
}
