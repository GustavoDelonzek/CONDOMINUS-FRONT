export function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6 justify-between">
      <span className="text-gray-500 italic">Condomínio Solar das Flores</span>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Gustavo (Admin)</span>
        <div className="w-8 h-8 rounded-full bg-primary" />
      </div>
    </header>
  );
}