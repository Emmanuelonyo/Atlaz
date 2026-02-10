"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    isActive(path)
      ? "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light"
      : "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors";

  return (
    <aside className="hidden lg:flex w-72 flex-col bg-card-light dark:bg-card-dark border-r border-gray-200 dark:border-gray-800 h-full transition-all duration-300">
      <div className="h-20 flex items-center px-8 border-b border-gray-100 dark:border-gray-800">
        <Link href="/" className="flex items-center gap-2 text-gray-900 dark:text-white">
          <Logo />
          <span className="text-xl font-bold tracking-tight">Atlaz</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Global Setup
        </p>
        <Link className={linkClass("/dashboard")} href="/dashboard">
          <span className="material-symbols-outlined">dashboard</span>
          Dashboard
        </Link>
        <Link
          className={linkClass("/dashboard/companies")}
          href="/dashboard/companies"
        >
          <span className="material-symbols-outlined">domain</span>
          My Companies
        </Link>
        <Link
          className={linkClass("/dashboard/applications")}
          href="/dashboard/applications"
        >
          <span className="material-symbols-outlined">assignment</span>
          Applications
          <span className="ml-auto bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            1
          </span>
        </Link>
        <Link
          className={linkClass("/dashboard/documents")}
          href="/dashboard/documents"
        >
          <span className="material-symbols-outlined">folder_open</span>
          Documents
        </Link>
        <Link
          className={linkClass("/dashboard/compliance")}
          href="/dashboard/compliance"
        >
          <span className="material-symbols-outlined">event_note</span>
          Compliance
        </Link>
      </nav>
      <div className="p-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
        <Link
          href="/dashboard/new-business"
          className="w-full flex items-center justify-center gap-2 rounded-xl h-12 bg-gradient-to-r from-primary to-accent-teal text-white text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          New Business
        </Link>
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 font-bold border border-white dark:border-gray-600">
            JD
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-bold text-gray-900 dark:text-white truncate">
              John Doe
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
              john@example.com
            </span>
          </div>
          <Link
            href="/dashboard/settings"
            className="ml-auto text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            <span className="material-symbols-outlined">settings</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
