"use client";

import { BusinessFormData, PackageType } from "../page";

interface PackageStepProps {
  formData: BusinessFormData;
  updateFormData: (data: Partial<BusinessFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const packages = {
  "business-name": [
    {
      id: "standard" as PackageType,
      name: "Standard",
      price: 150,
      description: "Basic registration for budget-conscious entrepreneurs",
      features: [
        "CAC Business Name Registration",
        "TIN Registration",
        "Digital Certificate",
        "Email Support",
      ],
      timeline: "5 business days",
    },
    {
      id: "premium" as PackageType,
      name: "Premium",
      price: 250,
      description: "Complete package with virtual office essentials",
      features: [
        "Everything in Standard",
        "Virtual Office Address (1 year)",
        "Mail Handling & Forwarding",
        "Priority Support",
        "Business Email Setup",
      ],
      timeline: "3-5 business days",
      popular: true,
    },
  ],
  "limited-company": [
    {
      id: "standard" as PackageType,
      name: "Standard",
      price: 350,
      description: "Essential LLC registration for new companies",
      features: [
        "Company Registration (CAC)",
        "TIN Registration",
        "Standard Bylaws (MEMART)",
        "Digital Certificate",
        "Share Certificates",
      ],
      timeline: "7-14 business days",
    },
    {
      id: "premium" as PackageType,
      name: "Premium",
      price: 650,
      description: "Complete setup for serious businesses",
      features: [
        "Everything in Standard",
        "Bank Account Opening Assistance",
        "Virtual Office Address (1 year)",
        "Post-Incorporation Support",
        "Legal Templates Access",
        "Priority Processing",
      ],
      timeline: "5-10 business days",
      popular: true,
    },
    {
      id: "enterprise" as PackageType,
      name: "Enterprise",
      price: 1200,
      description: "Full-service for investor-ready companies",
      features: [
        "Everything in Premium",
        "Custom MEMART Drafting",
        "Compliance Calendar Setup",
        "Dedicated Account Manager",
        "Investor-Ready Documents",
        "Legal Consultation (1hr)",
        "Annual Filing Reminders",
      ],
      timeline: "5-10 business days",
    },
  ],
};

export function PackageStep({
  formData,
  updateFormData,
  onNext,
  onBack,
}: PackageStepProps) {
  const entityType = formData.entityType || "limited-company";
  const availablePackages = packages[entityType] || packages["limited-company"];

  const handleSelect = (pkg: PackageType) => {
    updateFormData({ selectedPackage: pkg });
  };

  const handleContinue = () => {
    if (!formData.selectedPackage) return;
    onNext();
  };

  const selectedPkg = availablePackages.find(
    (p) => p.id === formData.selectedPackage
  );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Select Your Package
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Choose the right package for your{" "}
          <span className="font-semibold text-primary">
            {entityType === "business-name"
              ? "Business Name"
              : "Limited Liability Company"}
          </span>{" "}
          registration
        </p>
      </div>

      {/* Package Cards */}
      <div className={`grid grid-cols-1 gap-6 ${availablePackages.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
        {availablePackages.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => handleSelect(pkg.id)}
            className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all hover:shadow-lg flex flex-col ${
              formData.selectedPackage === pkg.id
                ? "border-primary bg-primary/5 shadow-md"
                : "border-gray-200 dark:border-gray-700 hover:border-primary/50"
            } ${pkg.popular ? "ring-2 ring-primary/20" : ""}`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary to-accent-teal text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">
                  Most Popular
                </span>
              </div>
            )}

            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-black text-gray-900 dark:text-white">
                    ${pkg.price}
                  </span>
                  <span className="text-sm text-gray-500">one-time</span>
                </div>
              </div>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  formData.selectedPackage === pkg.id
                    ? "border-primary bg-primary"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              >
                {formData.selectedPackage === pkg.id && (
                  <span className="material-symbols-outlined text-white text-[16px]">
                    check
                  </span>
                )}
              </div>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {pkg.description}
            </p>

            <div className="flex items-center gap-2 mb-4 text-sm">
              <span className="material-symbols-outlined text-primary text-[18px]">
                schedule
              </span>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {pkg.timeline}
              </span>
            </div>

            <div className="flex-1 space-y-2 py-4 border-t border-gray-100 dark:border-gray-700">
              {pkg.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">
                    check_circle
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(pkg.id);
              }}
              className={`w-full py-3 rounded-xl font-bold text-sm transition-all mt-4 ${
                formData.selectedPackage === pkg.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {formData.selectedPackage === pkg.id ? "Selected" : "Select Package"}
            </button>
          </div>
        ))}
      </div>

      {/* Selected Package Summary */}
      {selectedPkg && (
        <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent-teal/10 border border-primary/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                shopping_cart
              </span>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  {selectedPkg.name} Package Selected
                </p>
                <p className="text-sm text-gray-500">
                  {formData.selectedName} • {formData.entityType === "business-name" ? "Business Name" : "Limited Company"}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-primary">
                ${selectedPkg.price}
              </p>
              <p className="text-xs text-gray-500">one-time payment</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back
        </button>
        <button
          onClick={handleContinue}
          disabled={!formData.selectedPackage}
          className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent-teal text-white font-bold disabled:opacity-50 hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          Continue
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
