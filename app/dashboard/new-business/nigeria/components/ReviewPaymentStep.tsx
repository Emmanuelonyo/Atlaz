"use client";

import { useState } from "react";
import Link from "next/link";
import { BusinessFormData } from "../page";

interface ReviewPaymentStepProps {
  formData: BusinessFormData;
  onBack: () => void;
}

const packagePrices: Record<string, Record<string, number>> = {
  "business-name": {
    standard: 150,
    premium: 250,
  },
  "limited-company": {
    standard: 350,
    premium: 650,
    enterprise: 1200,
  },
};

const packageNames: Record<string, string> = {
  standard: "Standard",
  premium: "Premium",
  enterprise: "Enterprise",
};

export function ReviewPaymentStep({ formData, onBack }: ReviewPaymentStepProps) {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank" | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  const entityType = formData.entityType || "limited-company";
  const packageType = formData.selectedPackage || "standard";
  const price = packagePrices[entityType]?.[packageType] || 0;
  const processingFee = Math.round(price * 0.025 * 100) / 100; // 2.5% processing fee
  const total = price + processingFee;

  const handlePayment = async () => {
    if (!paymentMethod || !agreedToTerms) return;

    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setApplicationId(`NG-${Date.now().toString(36).toUpperCase()}`);
    setIsProcessing(false);
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent-teal flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-white text-4xl">
            check
          </span>
        </div>
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">
          Application Submitted!
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mb-8">
          Your business registration for{" "}
          <strong className="text-primary">{formData.selectedName}</strong> has
          been received. We&apos;ll begin processing immediately.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md mb-8">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
            <span className="text-gray-500">Application ID</span>
            <span className="font-mono font-bold text-gray-900 dark:text-white">
              #{applicationId}
            </span>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Entity Type</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {entityType === "business-name"
                  ? "Business Name"
                  : "Limited Company"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Package</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {packageNames[packageType]}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Amount Paid</span>
              <span className="font-bold text-primary">${total.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Estimated Completion</span>
              <span className="font-medium text-gray-900 dark:text-white">
                {entityType === "business-name" ? "3-5" : "7-14"} business days
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/dashboard/applications"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent-teal text-white font-bold hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            View My Applications
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Review & Payment
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Review your application details and complete payment
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Summary */}
        <div className="lg:col-span-2 space-y-6">
          {/* Business Details Summary */}
          <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  business
                </span>
                Business Details
              </h3>
              <button
                onClick={() => onBack()}
                className="text-primary text-sm font-medium hover:underline"
              >
                Edit
              </button>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start justify-between">
                <span className="text-gray-500">Business Name</span>
                <span className="font-bold text-gray-900 dark:text-white text-right">
                  {formData.selectedName}
                </span>
              </div>
              <div className="flex items-start justify-between">
                <span className="text-gray-500">Entity Type</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {entityType === "business-name"
                    ? "Business Name"
                    : "Limited Liability Company"}
                </span>
              </div>
              <div className="flex items-start justify-between">
                <span className="text-gray-500">Business Objectives</span>
                <span className="font-medium text-gray-900 dark:text-white text-right max-w-[60%]">
                  {formData.businessObjectives.slice(0, 2).join(", ")}
                  {formData.businessObjectives.length > 2 && " ..."}
                </span>
              </div>
              {entityType === "limited-company" && (
                <div className="flex items-start justify-between">
                  <span className="text-gray-500">Share Capital</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    ₦{parseInt(formData.shareCapital).toLocaleString()}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Directors Summary */}
          <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-[20px]">
                people
              </span>
              {entityType === "business-name" ? "Proprietor" : "Directors"}
            </h3>
            <div className="space-y-3">
              {formData.directors.map((director) => (
                <div
                  key={director.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent-teal flex items-center justify-center text-white font-bold text-sm">
                      {director.fullName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {director.fullName}
                      </p>
                      <p className="text-xs text-gray-500">{director.email}</p>
                    </div>
                  </div>
                  {entityType === "limited-company" && (
                    <span className="text-sm font-bold text-primary">
                      {director.shares}% shares
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Payment Method */}
          <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-[20px]">
                payment
              </span>
              Payment Method
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => setPaymentMethod("card")}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                  paymentMethod === "card"
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 dark:border-gray-700 hover:border-primary/50"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">
                    credit_card
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 dark:text-white">
                    Pay with Card
                  </p>
                  <p className="text-sm text-gray-500">
                    Visa, Mastercard, Verve
                  </p>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === "card"
                      ? "border-primary bg-primary"
                      : "border-gray-300"
                  }`}
                >
                  {paymentMethod === "card" && (
                    <span className="material-symbols-outlined text-white text-[14px]">
                      check
                    </span>
                  )}
                </div>
              </button>

              <button
                onClick={() => setPaymentMethod("bank")}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                  paymentMethod === "bank"
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 dark:border-gray-700 hover:border-primary/50"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">
                    account_balance
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 dark:text-white">
                    Bank Transfer
                  </p>
                  <p className="text-sm text-gray-500">
                    Pay via bank transfer
                  </p>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === "bank"
                      ? "border-primary bg-primary"
                      : "border-gray-300"
                  }`}
                >
                  {paymentMethod === "bank" && (
                    <span className="material-symbols-outlined text-white text-[14px]">
                      check
                    </span>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Price Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">
              Order Summary
            </h3>

            <div className="space-y-3 pb-4 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  {packageNames[packageType]} Package
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  ${price.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Processing Fee</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  ${processingFee.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between py-4">
              <span className="font-bold text-gray-900 dark:text-white">
                Total
              </span>
              <span className="text-2xl font-black text-primary">
                ${total.toFixed(2)}
              </span>
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </span>
              </label>

              <button
                onClick={handlePayment}
                disabled={!paymentMethod || !agreedToTerms || isProcessing}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-primary to-accent-teal text-white font-bold disabled:opacity-50 hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                {isProcessing ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">
                      progress_activity
                    </span>
                    Processing...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">lock</span>
                    Pay ${total.toFixed(2)}
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <span className="material-symbols-outlined text-[14px]">
                  verified_user
                </span>
                Secured by 256-bit SSL encryption
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-start mt-4 pt-6 border-t border-gray-100 dark:border-gray-700">
        <button
          onClick={onBack}
          disabled={isProcessing}
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all disabled:opacity-50"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back
        </button>
      </div>
    </div>
  );
}
