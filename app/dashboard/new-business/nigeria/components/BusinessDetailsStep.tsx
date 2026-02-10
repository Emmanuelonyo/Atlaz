"use client";

import { useState } from "react";
import { BusinessFormData, Director } from "../page";

interface BusinessDetailsStepProps {
  formData: BusinessFormData;
  updateFormData: (data: Partial<BusinessFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const businessObjectiveOptions = [
  "General Trading",
  "Importation & Exportation",
  "Consultancy Services",
  "Technology & Software Development",
  "E-commerce & Online Services",
  "Real Estate & Property",
  "Agriculture & Farming",
  "Manufacturing",
  "Transportation & Logistics",
  "Education & Training",
  "Healthcare Services",
  "Financial Services",
  "Media & Entertainment",
  "Hospitality & Tourism",
];

export function BusinessDetailsStep({
  formData,
  updateFormData,
  onNext,
  onBack,
}: BusinessDetailsStepProps) {
  const isLLC = formData.entityType === "limited-company";
  
  const [directors, setDirectors] = useState<Director[]>(
    formData.directors.length > 0
      ? formData.directors
      : [createEmptyDirector()]
  );
  
  const [businessDetails, setBusinessDetails] = useState({
    businessAddress: formData.businessAddress,
    businessDescription: formData.businessDescription,
    businessObjectives: formData.businessObjectives,
    shareCapital: formData.shareCapital || "1000000",
    email: formData.email,
    phone: formData.phone,
  });

  const [showObjectivesDropdown, setShowObjectivesDropdown] = useState(false);

  function createEmptyDirector(): Director {
    return {
      id: crypto.randomUUID(),
      fullName: "",
      email: "",
      phone: "",
      nationality: "Nigerian",
      address: "",
      idType: "NIN",
      idNumber: "",
      shares: isLLC ? 100 : undefined,
    };
  }

  const handleDirectorChange = (
    id: string,
    field: keyof Director,
    value: string | number
  ) => {
    setDirectors((prev) =>
      prev.map((d) => (d.id === id ? { ...d, [field]: value } : d))
    );
  };

  const addDirector = () => {
    if (directors.length < 5) {
      const newDirector = createEmptyDirector();
      // Distribute shares evenly
      if (isLLC) {
        const sharePerDirector = Math.floor(100 / (directors.length + 1));
        const updatedDirectors = directors.map(d => ({
          ...d,
          shares: sharePerDirector
        }));
        setDirectors([...updatedDirectors, { ...newDirector, shares: 100 - (sharePerDirector * directors.length) }]);
      } else {
        setDirectors([...directors, newDirector]);
      }
    }
  };

  const removeDirector = (id: string) => {
    if (directors.length > 1) {
      const remaining = directors.filter((d) => d.id !== id);
      // Redistribute shares
      if (isLLC) {
        const sharePerDirector = Math.floor(100 / remaining.length);
        const updatedDirectors = remaining.map((d, index) => ({
          ...d,
          shares: index === remaining.length - 1 
            ? 100 - (sharePerDirector * (remaining.length - 1))
            : sharePerDirector
        }));
        setDirectors(updatedDirectors);
      } else {
        setDirectors(remaining);
      }
    }
  };

  const toggleObjective = (objective: string) => {
    const current = businessDetails.businessObjectives;
    if (current.includes(objective)) {
      setBusinessDetails({
        ...businessDetails,
        businessObjectives: current.filter((o) => o !== objective),
      });
    } else if (current.length < 5) {
      setBusinessDetails({
        ...businessDetails,
        businessObjectives: [...current, objective],
      });
    }
  };

  const handleContinue = () => {
    // Basic validation
    const hasRequiredFields =
      directors[0]?.fullName &&
      directors[0]?.email &&
      directors[0]?.phone &&
      directors[0]?.address &&
      directors[0]?.idNumber &&
      businessDetails.email &&
      businessDetails.phone &&
      businessDetails.businessObjectives.length > 0;

    if (!hasRequiredFields) {
      alert("Please fill in all required fields");
      return;
    }

    updateFormData({
      directors,
      ...businessDetails,
    });
    onNext();
  };

  const totalShares = directors.reduce((sum, d) => sum + (d.shares || 0), 0);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Business Details
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Provide details about your business and{" "}
          {isLLC ? "directors/shareholders" : "proprietor"}
        </p>
      </div>

      {/* Business Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            business
          </span>
          Business Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Business Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={businessDetails.businessDescription}
              onChange={(e) =>
                setBusinessDetails({
                  ...businessDetails,
                  businessDescription: e.target.value,
                })
              }
              placeholder="Briefly describe what your business does..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Business Objectives <span className="text-red-500">*</span>
              <span className="text-gray-400 font-normal ml-2">
                (Select up to 5)
              </span>
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowObjectivesDropdown(!showObjectivesDropdown)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-left flex items-center justify-between"
              >
                <span className="text-gray-600 dark:text-gray-400">
                  {businessDetails.businessObjectives.length > 0
                    ? `${businessDetails.businessObjectives.length} selected`
                    : "Select business objectives..."}
                </span>
                <span className="material-symbols-outlined text-gray-400">
                  {showObjectivesDropdown ? "expand_less" : "expand_more"}
                </span>
              </button>
              {showObjectivesDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto">
                  {businessObjectiveOptions.map((obj) => (
                    <div
                      key={obj}
                      onClick={() => toggleObjective(obj)}
                      className={`px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                        businessDetails.businessObjectives.includes(obj)
                          ? "bg-primary/5"
                          : ""
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-[18px] ${
                          businessDetails.businessObjectives.includes(obj)
                            ? "text-primary"
                            : "text-gray-300"
                        }`}
                      >
                        {businessDetails.businessObjectives.includes(obj)
                          ? "check_box"
                          : "check_box_outline_blank"}
                      </span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {obj}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {businessDetails.businessObjectives.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {businessDetails.businessObjectives.map((obj) => (
                  <span
                    key={obj}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {obj}
                    <button
                      onClick={() => toggleObjective(obj)}
                      className="hover:bg-primary/20 rounded-full p-0.5"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        close
                      </span>
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {isLLC && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Share Capital (₦)
              </label>
              <select
                value={businessDetails.shareCapital}
                onChange={(e) =>
                  setBusinessDetails({
                    ...businessDetails,
                    shareCapital: e.target.value,
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              >
                <option value="1000000">₦1,000,000</option>
                <option value="5000000">₦5,000,000</option>
                <option value="10000000">₦10,000,000</option>
                <option value="50000000">₦50,000,000</option>
                <option value="100000000">₦100,000,000</option>
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Contact Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={businessDetails.email}
              onChange={(e) =>
                setBusinessDetails({ ...businessDetails, email: e.target.value })
              }
              placeholder="company@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Contact Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={businessDetails.phone}
              onChange={(e) =>
                setBusinessDetails({ ...businessDetails, phone: e.target.value })
              }
              placeholder="+234 800 000 0000"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
          </div>
        </div>
      </div>

      {/* Directors/Proprietors Section */}
      <div className="space-y-4 pt-6 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              people
            </span>
            {isLLC ? "Directors & Shareholders" : "Proprietor Details"}
          </h3>
          {(isLLC || directors.length === 0) && directors.length < 5 && (
            <button
              onClick={addDirector}
              className="flex items-center gap-1 text-primary text-sm font-bold hover:underline"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              Add {isLLC ? "Director" : "Proprietor"}
            </button>
          )}
        </div>

        {isLLC && totalShares !== 100 && directors.length > 0 && (
          <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-sm text-amber-700 dark:text-amber-300">
            <span className="material-symbols-outlined text-[16px] mr-1 align-middle">
              warning
            </span>
            Total shares must equal 100%. Current: {totalShares}%
          </div>
        )}

        <div className="space-y-6">
          {directors.map((director, index) => (
            <div
              key={director.id}
              className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900 dark:text-white">
                  {isLLC ? `Director ${index + 1}` : "Proprietor"}
                </h4>
                {directors.length > 1 && (
                  <button
                    onClick={() => removeDirector(director.id)}
                    className="text-red-500 text-sm font-medium hover:underline"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={director.fullName}
                    onChange={(e) =>
                      handleDirectorChange(director.id, "fullName", e.target.value)
                    }
                    placeholder="Enter full legal name"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={director.email}
                    onChange={(e) =>
                      handleDirectorChange(director.id, "email", e.target.value)
                    }
                    placeholder="email@example.com"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={director.phone}
                    onChange={(e) =>
                      handleDirectorChange(director.id, "phone", e.target.value)
                    }
                    placeholder="+234 800 000 0000"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nationality
                  </label>
                  <input
                    type="text"
                    value={director.nationality}
                    onChange={(e) =>
                      handleDirectorChange(director.id, "nationality", e.target.value)
                    }
                    placeholder="Nigerian"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Residential Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={director.address}
                    onChange={(e) =>
                      handleDirectorChange(director.id, "address", e.target.value)
                    }
                    placeholder="Full residential address"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    ID Type
                  </label>
                  <select
                    value={director.idType}
                    onChange={(e) =>
                      handleDirectorChange(director.id, "idType", e.target.value)
                    }
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  >
                    <option value="NIN">National ID (NIN)</option>
                    <option value="PASSPORT">International Passport</option>
                    <option value="DRIVERS_LICENSE">Driver&apos;s License</option>
                    <option value="VOTERS_CARD">Voter&apos;s Card</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    ID Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={director.idNumber}
                    onChange={(e) =>
                      handleDirectorChange(director.id, "idNumber", e.target.value)
                    }
                    placeholder="Enter ID number"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  />
                </div>

                {isLLC && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Share Percentage (%)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={director.shares || 0}
                      onChange={(e) =>
                        handleDirectorChange(
                          director.id,
                          "shares",
                          parseInt(e.target.value) || 0
                        )
                      }
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-4 pt-6 border-t border-gray-100 dark:border-gray-700">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back
        </button>
        <button
          onClick={handleContinue}
          className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent-teal text-white font-bold hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          Review & Pay
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
