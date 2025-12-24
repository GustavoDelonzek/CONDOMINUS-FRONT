import { AppShell } from './components/layout/AppShell';
import { StatCard } from './components/ui/StatCard';
import { Users } from 'lucide-react'; // Ícone exemplo

function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Cabeçalho da Página */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold font-heading">Visão Geral</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark transition">
          Gerar Relatório
        </button>
      </div>

      {/* Grid de Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard label="Total de Moradores" value="1,248" trend="+12% este mês" icon={<Users size={20}/>} />
        <StatCard label="Inadimplência" value="R$ 12.450" icon={<Users size={20}/>} />
        <StatCard label="Reservas Hoje" value="8" icon={<Users size={20}/>} />
      </div>
      
      {/* Área de Tabelas/Gráficos viria aqui embaixo */}
    </div>
  );
}

// No App.tsx você apenas envolve a página com o Shell
export default function App() {
  return (
    <AppShell>
      <DashboardPage />
    </AppShell>
  );
}