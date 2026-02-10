import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-gray-900 dark:text-white">
              <Logo />
              <span className="text-xl font-bold">Atlaz</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Empowering entrepreneurs to build global businesses without
              borders. Secure, compliant, and fully digital.
            </p>
            <div className="flex gap-4">
              <Link
                className="text-gray-400 hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">public</span>
              </Link>
              <Link
                className="text-gray-400 hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">
                  alternate_email
                </span>
              </Link>
              <Link
                className="text-gray-400 hover:text-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">share</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-gray-900 dark:text-white">
              Platform
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  Incorporate in USA
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  Incorporate in Africa
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/us-bank-account"
                >
                  US Bank Account
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/ng-bank-account"
                >
                  Nigerian Bank Account
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/delaware-vs-wyoming"
                >
                  Delaware vs Wyoming
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-gray-900 dark:text-white">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="#pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  Partners Program
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="#"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-gray-900 dark:text-white">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  mail
                </span>
                hello@atlaz.co
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  call
                </span>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  location_on
                </span>
                123 Startup Blvd, San Francisco, CA
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Atlaz Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
            <Link
              className="hover:text-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="hover:text-primary transition-colors"
              href="#"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
