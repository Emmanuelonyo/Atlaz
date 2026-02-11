"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBankingDropdownOpen, setIsBankingDropdownOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#pricing", label: "Pricing" },
  ];

  const bankingLinks = [
    { href: "/us-bank-account", label: "US Bank Account", flag: "🇺🇸", desc: "Mercury, Relay & Wise" },
    { href: "/ng-bank-account", label: "Nigerian Bank Account", flag: "🇳🇬", desc: "GTBank Partner" },
  ];

  const resourceLinks = [
    { href: "/delaware-vs-wyoming", label: "Delaware vs Wyoming", icon: "compare", desc: "State comparison guide" },
  ];

  return (
    <header className="relative flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 py-5">
      <div className="flex items-center gap-3 text-gray-900 dark:text-white">
        <Logo />
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Atlaz
        </h2>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <div className="flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="text-gray-600 dark:text-gray-300 text-sm font-semibold hover:text-primary dark:hover:text-primary transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Banking Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsBankingDropdownOpen(true)}
            onMouseLeave={() => setIsBankingDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:text-primary dark:hover:text-primary transition-colors">
              Banking
              <span className={`material-symbols-outlined text-[16px] transition-transform ${isBankingDropdownOpen ? "rotate-180" : ""}`}>
                expand_more
              </span>
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 ${
              isBankingDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
            }`}>
              {bankingLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="text-2xl">{link.flag}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{link.label}</p>
                    <p className="text-xs text-gray-500">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Link */}
          <Link
            className="text-gray-600 dark:text-gray-300 text-sm font-semibold hover:text-primary dark:hover:text-primary transition-colors"
            href="/delaware-vs-wyoming"
          >
            Best States
          </Link>

          <Link
            className="text-gray-600 dark:text-gray-300 text-sm font-semibold hover:text-primary dark:hover:text-primary transition-colors"
            href="/contact"
          >
            Login
          </Link>
        </div>
        
        {/* Theme Toggle */}
        <ThemeToggle />
        
        <Link
          href="/contact"
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-gradient-to-r from-primary to-accent-teal text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-md shadow-primary/20"
        >
          <span className="truncate">Start My Business</span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="material-symbols-outlined text-gray-600 dark:text-gray-300 text-[24px]">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Atlaz
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">
                close
              </span>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex flex-col p-5 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Banking Section in Mobile */}
            <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
              <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Banking</p>
              {bankingLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="text-xl">{link.flag}</span>
                  <div>
                    <p className="font-medium">{link.label}</p>
                    <p className="text-xs text-gray-500">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mt-2"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu CTA */}
          <div className="mt-auto p-5 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-gradient-to-r from-primary to-accent-teal text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
            >
              Start My Business
            </Link>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
              <span className="material-symbols-outlined text-[16px]">
                lock
              </span>
              <span>Secure & Encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
