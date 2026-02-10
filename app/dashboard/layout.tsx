import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark">
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-br from-primary/5 via-primary/0 to-transparent blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-tr from-accent-teal/5 via-accent-teal/0 to-transparent blur-[120px]"></div>
        </div>
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header />
        <div className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth">
          {children}
        </div>
      </main>
    </div>
  );
}
