import { Sidebar } from "./Sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full bg-background">
      <header className="h-16 w-full bg-white border-b border-gray-200 flex items-center px-6 justify-between shrink-0 z-10 shadow-sm">
        <div className="text-primary font-heading font-bold text-xl">CONDOMINUS</div>
        <div className="flex items-center gap-4">
           <span className="text-sm font-medium text-secondary">Gustavo Admin</span>
           <div className="w-8 h-8 rounded-full bg-primary" />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        
        <Sidebar />

      <main className="flex-1 overflow-y-auto p-8">
          {children}
      </main>

      </div>
    </div>
  );
}