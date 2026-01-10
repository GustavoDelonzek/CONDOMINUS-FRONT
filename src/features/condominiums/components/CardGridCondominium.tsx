import React from 'react';
import type { Condominium } from "../types";
import { LogIn } from 'lucide-react';

// Tipagem simples para BigInteger no frontend (geralmente usamos number ou BigInt nativo do JS)
type BigInteger = bigint | number; 

interface CardGridCondominiumProps {
  condominium: Condominium;
  units: BigInteger;
  residents: BigInteger;
  revenue?: string;
  image?: React.ReactNode;
}

export function CardGridCondominium({ 
    condominium, 
    units, 
    residents, 
    revenue, 
    image 
}: CardGridCondominiumProps): React.ReactElement {
    return (
        <div className="rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
            <div className="h-36 w-full mb-4 bg-gray-100 rounded-t-lg overflow-hidden relative">
                {image ? image : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200">
                        <span className="text-sm md:text-base">Sem imagem</span>
                    </div>
                )}
            </div>
            
            <div className='px-4 pt-4'>

                <div className="mb-3">
                    <h3 className="text-md font-bold text-gray-900 leading-tight mb-1">
                        {condominium.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 truncate">
                        {condominium.address_full}
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-auto">
                    <div className="bg-secondary-light p-2 rounded-lg">
                        <span className="block text-xs md:text-sm text-gray-500 uppercase font-semibold">Unidades</span>
                        <span className="text-sm md:text-base font-semibold text-gray-800">{units.toString()}</span>
                    </div>
                    <div className="bg-secondary-light p-2 rounded-lg">
                        <span className="block text-xs md:text-sm text-gray-500 uppercase font-semibold">Moradores</span>
                        <span className="text-sm md:text-base font-semibold text-gray-800">{residents.toString()}</span>
                    </div>
                    <div className="bg-secondary-light p-2 rounded-lg">
                        <span className="block text-xs md:text-sm text-gray-500 uppercase font-semibold">Receita</span>
                        <span className="text-sm md:text-base font-semibold text-gray-800">{revenue ?? "N/A"}</span>
                    </div>
                </div>
                 <div className="mt-4 bg-secondary-light p-2 rounded-lg">
                        <span className="block text-xs md:text-sm text-gray-500 uppercase font-semibold">Receita</span>
                        <span className="text-sm md:text-base font-semibold text-gray-800">{revenue ?? "N/A"}</span>
                    </div>
                
            </div>

            <div className='flex flex-col p-3 gap-2'> 
                <button className='bg-primary text-sm md:text-base cursor-pointer flex items-center justify-center rounded-lg text-white font-bold p-1 hover:bg-primary-dark transition'>
                   <LogIn className='mr-1' size={16}/> Impersonate
                </button>
                 <button className='cursor-pointer text-sm md:text-base rounded-lg border-1 shadow border-secondary-light text-gray-800 font-bold p-1 hover:bg-gray-200 transition'>
                    Configure
                </button>
            </div>
        </div>
    );
}