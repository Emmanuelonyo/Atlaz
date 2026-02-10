"use client";

import { useState } from "react";
import { BusinessFormData } from "../page";

interface NameSearchStepProps {
  formData: BusinessFormData;
  updateFormData: (data: Partial<BusinessFormData>) => void;
  onNext: () => void;
}

type SearchStatus = "idle" | "searching" | "complete";

interface NameResult {
  name: string;
  available: boolean;
  reason?: string;
}

export function NameSearchStep({
  formData,
  updateFormData,
  onNext,
}: NameSearchStepProps) {
  const [names, setNames] = useState<string[]>(
    formData.proposedNames.length > 0
      ? formData.proposedNames
      : ["", "", ""]
  );
  const [searchStatus, setSearchStatus] = useState<SearchStatus>("idle");
  const [results, setResults] = useState<NameResult[]>([]);
  const [selectedName, setSelectedName] = useState<string>(formData.selectedName);

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
    setSearchStatus("idle");
    setResults([]);
    setSelectedName("");
  };

  const handleSearch = async () => {
    const validNames = names.filter((n) => n.trim().length > 0);
    if (validNames.length === 0) return;

    setSearchStatus("searching");

    // Simulated API call - replace with actual CAC name search API
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock results - in production this would come from CAC API
    const mockResults: NameResult[] = validNames.map((name, index) => {
      // Simulate some names being taken
      const isTaken = name.toLowerCase().includes("nigeria") || index === 1;
      return {
        name,
        available: !isTaken,
        reason: isTaken ? "Name already registered with CAC" : undefined,
      };
    });

    setResults(mockResults);
    setSearchStatus("complete");
  };

  const handleSelectName = (name: string) => {
    setSelectedName(name);
  };

  const handleContinue = () => {
    if (!selectedName) return;
    updateFormData({
      proposedNames: names,
      selectedName,
      nameAvailable: true,
    });
    onNext();
  };

  const availableNames = results.filter((r) => r.available);
  const canContinue = searchStatus === "complete" && selectedName;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Business Name Search
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Enter up to 3 proposed names for your business. We&apos;ll check availability
          with the Corporate Affairs Commission (CAC).
        </p>
      </div>

      {/* Name Input Fields */}
      <div className="space-y-4">
        {names.map((name, index) => (
          <div key={index} className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {index === 0 ? "Primary Choice" : `Alternative ${index}`}
              {index === 0 && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => handleNameChange(index, e.target.value)}
                placeholder={`Enter proposed business name ${index + 1}`}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                disabled={searchStatus === "searching"}
              />
              {searchStatus === "complete" && name.trim() && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {results.find((r) => r.name === name)?.available ? (
                    <span className="material-symbols-outlined text-green-500">
                      check_circle
                    </span>
                  ) : (
                    <span className="material-symbols-outlined text-red-500">
                      cancel
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        disabled={!names[0].trim() || searchStatus === "searching"}
        className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold disabled:opacity-50 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
      >
        {searchStatus === "searching" ? (
          <>
            <span className="material-symbols-outlined animate-spin">
              progress_activity
            </span>
            Searching CAC Database...
          </>
        ) : (
          <>
            <span className="material-symbols-outlined">search</span>
            Check Name Availability
          </>
        )}
      </button>

      {/* Results Section */}
      {searchStatus === "complete" && (
        <div className="mt-4 space-y-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Search Results
          </h3>

          <div className="space-y-3">
            {results.map((result, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border-2 transition-all ${
                  result.available
                    ? selectedName === result.name
                      ? "border-primary bg-primary/5"
                      : "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 hover:border-primary cursor-pointer"
                    : "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 opacity-60"
                }`}
                onClick={() => result.available && handleSelectName(result.name)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`material-symbols-outlined ${
                        result.available ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {result.available ? "check_circle" : "cancel"}
                    </span>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">
                        {result.name}
                      </p>
                      <p
                        className={`text-sm ${
                          result.available
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {result.available
                          ? "Available for registration"
                          : result.reason}
                      </p>
                    </div>
                  </div>
                  {result.available && (
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedName === result.name
                          ? "border-primary bg-primary"
                          : "border-gray-300 dark:border-gray-600"
                      }`}
                    >
                      {selectedName === result.name && (
                        <span className="material-symbols-outlined text-white text-[14px]">
                          check
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {availableNames.length === 0 && (
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-amber-500">
                  warning
                </span>
                <div>
                  <p className="font-bold text-amber-800 dark:text-amber-200">
                    No available names found
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Please try different business name suggestions.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tips */}
      <div className="mt-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-primary">
            lightbulb
          </span>
          <div>
            <p className="font-bold text-gray-900 dark:text-white text-sm">
              Tips for choosing a business name
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1 list-disc list-inside">
              <li>Avoid names that are too similar to existing businesses</li>
              <li>Don&apos;t use restricted words like &quot;Federal&quot;, &quot;National&quot;, or &quot;Government&quot;</li>
              <li>Make it unique and memorable for your brand</li>
              <li>Consider how it will look on official documents</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleContinue}
          disabled={!canContinue}
          className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent-teal text-white font-bold disabled:opacity-50 hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          Continue
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
