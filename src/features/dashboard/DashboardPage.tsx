import { StatCard } from "../../components/ui/StatCard";
import { ArrowDown, Building2, DollarSignIcon, FunnelIcon, Grid3x3, List, PlusIcon, TrendingUp, Users } from "lucide-react";
import { GridCondominiums } from "./components/GridCondominiums";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 flex justify-content-between"> 
            <div className="flex flex-row items-center gap-2">
                <div className="h-1 w-16 rounded-full bg-primary"></div>
                <span className="font-semibold text-sm text-primary">Dashboard administradora</span>
            </div>
            <div className="flex justify-end text-sm">
                <button className="bg-primary flex items-center font-bold cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition">
                    <PlusIcon className="mr-1" size={16}></PlusIcon> Novo Condominio
                </button>
            </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard label="Total de Moradores" value="1,248" trend="+12% este mês" icon={<Building2 size={20}/>} />
        <StatCard label="Inadimplência" value="R$ 12.450" icon={<Users size={20}/>} />
        <StatCard label="Reservas Hoje" value="8" icon={<DollarSignIcon size={20}/>} />
        <StatCard label="Reservas Hoje" value="8" icon={<TrendingUp size={20}/>} />
      </div>

      <div className="flex justify-between items-center mt-6">
            <div className="flex justify-start text-xs gap-2">
                <button className="bg-white flex items-center font-bold cursor-pointer text-secondary  px-4 py-2 rounded-lg hover:bg-primary/20 transition border border-secondary-light">
                    <FunnelIcon className="mr-1" size={16}/>Filtro
                </button>
                <button className="bg-white flex items-center font-bold cursor-pointer text-secondary  px-4 py-2 rounded-lg hover:bg-primary/20 transition border border-secondary-light">
                    Todos os status <ArrowDown className="ml-2" size={16}/>
                </button>
            </div>
            <div className="flex justify-start text-xs gap-2">
                <button className="bg-white flex items-center font-bold cursor-pointer text-secondary p-2 rounded-lg hover:bg-primary/20 transition border border-secondary-light">
                    <Grid3x3 size={16}/>
                </button>
                <button className="bg-white flex items-center font-bold cursor-pointer text-secondary p-2 rounded-lg hover:bg-primary/20 transition border border-secondary-light">
                    <List size={16}/>
                </button>
            </div>
        </div>

      <GridCondominiums/>
    </div>
  );
}