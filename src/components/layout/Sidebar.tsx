import {LayoutDashboardIcon, Users, Receipt, MessageSquare} from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-auto bg-secondary text-secondary-light hidden md:flex flex-col shrink-0">
      <nav className="flex-1 p-4 space-y-2">
        <div className="p-2 hover:bg-primary/20 rounded-lg cursor-pointer transition"><LayoutDashboardIcon></LayoutDashboardIcon></div>
        <div className="p-2 hover:bg-primary/20 rounded-lg cursor-pointer transition"><Users></Users></div>
        <div className="p-2 hover:bg-primary/20 rounded-lg cursor-pointer transition"><Receipt></Receipt></div>
        <div className="p-2 hover:bg-primary/20 rounded-lg cursor-pointer transition"><MessageSquare></MessageSquare></div>
      </nav>
    </aside>
  );
}