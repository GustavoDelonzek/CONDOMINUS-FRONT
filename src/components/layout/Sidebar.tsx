import {HomeIcon, Users, Receipt} from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-auto bg-secondary text-white hidden md:flex flex-col shrink-0">
      <nav className="flex-1 p-4 space-y-2">
        <div className="p-3 hover:bg-secondary-light rounded-lg cursor-pointer transition"><HomeIcon></HomeIcon></div>
        <div className="p-3 hover:bg-secondary-light rounded-lg cursor-pointer transition"><Users></Users></div>
        <div className="p-3 hover:bg-secondary-light rounded-lg cursor-pointer transition"><Receipt></Receipt></div>
      </nav>
    </aside>
  );
}