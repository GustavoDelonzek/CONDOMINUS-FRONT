import {LayoutDashboardIcon, Users, Receipt, MessageSquare} from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-auto bg-secondary text-background hidden md:flex flex-col min-w-[250px] shrink-0">
      <nav className="flex-1 flex flex-col p-4 space-y-2">
        <div className="p-2 flex hover:bg-primary/20 rounded-lg cursor-pointer transition"><LayoutDashboardIcon className='mr-2'></LayoutDashboardIcon> Dashboard</div>
        <div className="p-2 flex hover:bg-primary/20 rounded-lg cursor-pointer transition"><Users className='mr-2'></Users> Users</div>
        <div className="p-2 flex hover:bg-primary/20 rounded-lg cursor-pointer transition"><Receipt className='mr-2'></Receipt> Receipts</div>
        <div className="p-2 flex hover:bg-primary/20 rounded-lg cursor-pointer transition"><MessageSquare className='mr-2'></MessageSquare> Messages</div>
      </nav>
    </aside>
  );
}