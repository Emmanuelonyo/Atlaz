"use client";

import { useState } from "react";
import Link from "next/link";
import { NameSearchStep } from "./components/NameSearchStep";
import { EntityTypeStep } from "./components/EntityTypeStep";
import { PackageStep } from "./components/PackageStep";
import { BusinessDetailsStep } from "./components/BusinessDetailsStep";
import { ReviewPaymentStep } from "./components/ReviewPaymentStep";

export type EntityType = "business-name" | "limited-company" | null;
export type PackageType = "standard" | "premium" | "enterprise" | null;

export interface BusinessFormData {
  // Name search
  proposedNames: string[];
  selectedName: string;
  nameAvailable: boolean;
  
  // Entity type
  entityType: EntityType;
  
  // Package
  selectedPackage: PackageType;
  
  // Business details
  businessAddress: string;
  businessDescription: string;
  businessObjectives: string[];
  shareCapital: string;
  
  // Directors/Proprietors
  directors: Director[];
  
  // Contact
  email: string;
  phone: string;
}

export interface Director {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  address: string;
  idType: string;
  idNumber: string;
  shares?: number;
}

const initialFormData: BusinessFormData = {
  proposedNames: ["", "", ""],
  selectedName: "",
  nameAvailable: false,
  entityType: null,
  selectedPackage: null,
  businessAddress: "",
  businessDescription: "",
  businessObjectives: [],
  shareCapital: "",
  directors: [],
  email: "",
  phone: "",
};

const steps = [
  { num: 1, label: "Name Search", icon: "search" },
  { num: 2, label: "Entity Type", icon: "category" },
  { num: 3, label: "Package", icon: "inventory_2" },
  { num: 4, label: "Details", icon: "edit_note" },
  { num: 5, label: "Review & Pay", icon: "payments" },
];

export default function NigeriaBusinessPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BusinessFormData>(initialFormData);

  const updateFormData = (data: Partial<BusinessFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex flex-col gap-8 pb-10 max-w-4xl mx-auto w-full">
      {/* Page Heading & Back */}
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/new-business"
          className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇳🇬</span>
            <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">
              Register Nigerian Business
            </h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            CAC Business Name or Limited Liability Company
          </p>
        </div>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-between relative px-2 overflow-x-auto no-scrollbar">
        <div className="absolute left-0 top-4 w-full h-0.5 bg-gray-100 dark:bg-gray-800 -z-10"></div>
        <div
          className="absolute left-0 top-4 h-0.5 bg-gradient-to-r from-primary to-accent-teal -z-10 transition-all duration-500"
          style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
        ></div>
        {steps.map((s) => (
          <div
            key={s.num}
            className={`flex flex-col items-center gap-2 bg-white dark:bg-background-dark px-2 ${
              s.num <= step ? "text-primary" : "text-gray-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                s.num < step
                  ? "bg-gradient-to-r from-primary to-accent-teal text-white"
                  : s.num === step
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-500"
              }`}
            >
              {s.num < step ? (
                <span className="material-symbols-outlined text-sm">check</span>
              ) : (
                <span className="material-symbols-outlined text-[16px]">
                  {s.icon}
                </span>
              )}
            </div>
            <span className="text-[10px] font-bold hidden sm:block whitespace-nowrap">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-card-light dark:bg-card-dark p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm min-h-[500px]">
        {step === 1 && (
          <NameSearchStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
          />
        )}
        {step === 2 && (
          <EntityTypeStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}
        {step === 3 && (
          <PackageStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}
        {step === 4 && (
          <BusinessDetailsStep
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}
        {step === 5 && (
          <ReviewPaymentStep
            formData={formData}
            onBack={prevStep}
          />
        )}
      </div>
    </div>
  );
}
