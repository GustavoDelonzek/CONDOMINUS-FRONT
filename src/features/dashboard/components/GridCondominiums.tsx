import { Pagination } from '../../../components/ui/Pagination';
import { CardGridCondominium } from '../../condominiums/components/CardGridCondominium';

const mockPaginatedData = {
    data: [
        {
            condominium: { 
                id: "1", 
                name: "Residencial Jardins da Serra", 
                address: "Av. Paulista, 1000 - São Paulo, SP",
                address_full: "Av. Paulista, 1000 - São Paulo, SP",
                settings: [],
                admin_company_id: "1"
            },
            units: 120,
            residents: 450,
            revenue: "R$ 45.000,00",
            imageColor: "bg-blue-500"
        },
        {
            condominium: { 
                id: "2", 
                name: "Edifício Solar do Atlântico", 
                address: "Rua das Flores, 230 - Rio de Janeiro, RJ",
                address_full: "Rua das Flores, 230 - Rio de Janeiro, RJ",
                settings: [],
                admin_company_id: "1"
            },
            units: 45,
            residents: 112,
            revenue: "R$ 18.200,00",
            imageColor: "bg-emerald-500"
        },
        {
            condominium: { 
                id: "3", 
                name: "Condomínio Vila Verde", 
                address: "Estrada do Campo, 55 - Curitiba, PR",
                address_full: "Estrada do Campo, 55 - Curitiba, PR",
                settings: [],
                admin_company_id: "1"
            },
            units: 300,
            residents: 980,
            imageColor: "bg-orange-500"
        },
        {
            condominium: { 
                id: "4", 
                name: "Golden Tower Business", 
                address: "Rua Empresarial, 88 - Belo Horizonte, MG",
                address_full: "Rua Empresarial, 88 - Belo Horizonte, MG",
                settings: [],
                admin_company_id: "1"
            },
            units: 80,
            residents: 0,
            revenue: "R$ 120.000,00",
            imageColor: "bg-purple-600"
        },
        {
            condominium: { 
                id: "5", 
                name: "Recanto dos Pássaros", 
                address: "Alameda Sabiá, 12 - Gramado, RS",
                address_full: "Alameda Sabiá, 12 - Gramado, RS",
                settings: [],
                admin_company_id: "1"
            },
            units: 12,
            residents: 35,
            revenue: "R$ 8.500,00",
            imageColor: "bg-teal-400"
        },
        {
            condominium: { 
                id: "6", 
                name: "Grand Park Resort", 
                address: "Rodovia do Sol, Km 10 - Vila Velha, ES",
                address_full: "Rodovia do Sol, Km 10 - Vila Velha, ES",
                settings: [],
                admin_company_id: "1"
            },
            units: 500,
            residents: 1500,
            revenue: "R$ 250.000,00",
            imageColor: "bg-indigo-500"
        }
    ],
    // Metadados da paginação
    meta: {
        current_page: 1,
        from: 1,
        last_page: 3,
        links: [ /* Links internos do meta, opcional */ ],
        path: "http://localhost/condominiums",
        per_page: 6,
        to: 6,
        total: 13
    },
    // Links de navegação
    links: [
        { url: null, label: "&laquo; Previous", active: false },
        { url: "http://localhost/condominiums?page=1", label: "1", active: true },
        { url: "http://localhost/condominiums?page=2", label: "2", active: false },
        { url: "http://localhost/condominiums?page=3", label: "3", active: false },
        { url: "http://localhost/condominiums?page=2", label: "Next &raquo;", active: false }
    ]
};

export function GridCondominiums() {
    return (
        <div className="flex flex-col gap-6"> 
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockPaginatedData.data.map((data) => (
                    <CardGridCondominium
                        key={data.condominium.id}
                        condominium={data.condominium}
                        units={BigInt(data.units)}
                        residents={BigInt(data.residents)}
                        revenue={data.revenue}
                        image={
                            <div className={`w-full h-full ${data.imageColor} flex items-center justify-center text-white font-bold text-2xl`}>
                                {data.condominium.name.substring(0, 2).toUpperCase()}
                            </div>
                        }
                    />
                ))}
            </div>

            <Pagination 
                links={mockPaginatedData.links} 
                meta={mockPaginatedData.meta} 
            /> 
       </div>
    );
}