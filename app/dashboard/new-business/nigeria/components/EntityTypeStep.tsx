"use client";

import { BusinessFormData, EntityType } from "../page";

interface EntityTypeStepProps {
  formData: BusinessFormData;
  updateFormData: (data: Partial<BusinessFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const entityTypes = [
  {
    id: "business-name" as EntityType,
    name: "Business Name",
    description:
      "Ideal for sole proprietors and small businesses. Quick to register with minimal requirements.",
    icon: "storefront",
    requirements: [
      "One proprietor (individual owner)",
      "No separate legal identity",
      "Simple annual renewal",
      "Personal liability for debts",
    ],
    timeline: "3-5 business days",
    bestFor: "Freelancers, small traders, service providers",
  },
  {
    id: "limited-company" as EntityType,
    name: "Limited Liability Company (LLC)",
    description:
      "For serious businesses seeking credibility, investor readiness, and liability protection.",
    icon: "domain",
    requirements: [
      "Minimum 1 director, 1 shareholder",
      "Separate legal entity",
      "Annual returns required",
      "Limited liability protection",
    ],
    timeline: "7-14 business days",
    bestFor: "Startups, scaling businesses, companies seeking investment",
  },
];

export function EntityTypeStep({
  formData,
  updateFormData,
  onNext,
  onBack,
}: EntityTypeStepProps) {
  const handleSelect = (type: EntityType) => {
    updateFormData({ entityType: type });
  };

  const handleContinue = () => {
    if (!formData.entityType) return;
    onNext();
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Choose Entity Type
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Select the type of business entity you want to register for{" "}
          <span className="font-semibold text-primary">
            &quot;{formData.selectedName}&quot;
          </span>
        </p>
      </div>

      {/* Entity Type Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {entityTypes.map((entity) => (
          <div
            key={entity.id}
            onClick={() => handleSelect(entity.id)}
            className={`p-6 rounded-2xl border-2 cursor-pointer transition-all hover:shadow-lg ${
              formData.entityType === entity.id
                ? "border-primary bg-primary/5 shadow-md"
                : "border-gray-200 dark:border-gray-700 hover:border-primary/50"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  formData.entityType === entity.id
                    ? "bg-gradient-to-r from-primary to-accent-teal text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-500"
                }`}
              >
                <span className="material-symbols-outlined text-2xl">
                  {entity.icon}
                </span>
              </div>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  formData.entityType === entity.id
                    ? "border-primary bg-primary"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              >
                {formData.entityType === entity.id && (
                  <span className="material-symbols-outlined text-white text-[16px]">
                    check
                  </span>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {entity.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {entity.description}
            </p>

            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-[18px]">
                schedule
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {entity.timeline}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              {entity.requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-green-500 text-[16px] mt-0.5">
                    check_circle
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {req}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Best for:</span> {entity.bestFor}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Note */}
      <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-gray-400">
            compare_arrows
          </span>
          <div>
            <p className="font-bold text-gray-900 dark:text-white text-sm">
              Not sure which to choose?
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Most startups and growing businesses choose{" "}
              <strong>Limited Liability Company</strong> for legal protection
              and investor credibility. Choose <strong>Business Name</strong> if
              you&apos;re starting small and want minimal overhead.
            </p>
          </div>
        </div>
      </div>

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
          disabled={!formData.entityType}
          className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent-teal text-white font-bold disabled:opacity-50 hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          Continue
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
