import { Header } from "@/components/dashboard/header";
import { Sidebar } from "@/components/dashboard/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50 border-r bg-background">
        <Sidebar />
      </aside>
      
      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        <Header />
        <main className="flex-1 space-y-4 p-4 md:p-6 pt-6">
          {children}
        </main>
      </div>
    </div>
  );
}