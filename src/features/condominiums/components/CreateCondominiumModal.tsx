import { UploadCloud } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Modal } from "../../../components/ui/Modal";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  street: z.string().min(1, "O endereço é obrigatório"),
  city: z.string().min(1, "A cidade é obrigatória"),
  state: z.string().min(1, "O estado é obrigatório"),
  zipCode: z.string().min(1, "O CEP é obrigatório"),
});

type FormData = z.infer<typeof schema>;

export function CreateCondominiumModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Enviando para o Backend:", data);
    reset();
    setImagePreview(null);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-secondary">Add New Condominium</h2>
        <p className="text-gray-500 text-sm">Create a new condominium in your portfolio</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        
        {/* SEÇÃO: Informações Básicas */}
        <section className="space-y-4">
          <h3 className="font-bold text-secondary border-b pb-2">Informações Básicas</h3>
          
          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700">Nome do Condomínio <span className="text-red-500">*</span></label>
            <input 
              {...register("name")} 
              placeholder="e.g.. Residencial Solar"
              className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-300`} 
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
          </div>
        </section>

        {/* SEÇÃO: Endereço */}
        <section className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700">Street Address <span className="text-red-500">*</span></label>
            <input 
              {...register("street")}
              placeholder="e.g.. Rua das Flores, 123"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all placeholder:text-gray-300" 
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700">City <span className="text-red-500">*</span></label>
              <input {...register("city")} placeholder="São Paulo" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700">State <span className="text-red-500">*</span></label>
              <input {...register("state")} placeholder="SP" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700">ZIP Code <span className="text-red-500">*</span></label>
              <input {...register("zipCode")} placeholder="01234-567" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none" />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="font-bold text-secondary">Imagem do Condomínio</h3>
          <div className="flex items-center gap-4">
            <label className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl py-6 hover:bg-gray-50 cursor-pointer transition">
              <UploadCloud className="text-gray-400 mb-2" />
              <span className="text-xs text-gray-500">Upload Image</span>
              <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
            </label>
            
            <div className="w-32 h-24 bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
               {imagePreview ? (
                 <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
               ) : (
                 <div className="w-full h-full flex items-center justify-center text-gray-300 text-[10px] text-center p-2">
                   No image selected
                 </div>
               )}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <button 
            type="button" 
            onClick={() => { reset(); onClose(); }}
            className="px-8 py-3 border border-gray-400 rounded-xl font-bold hover:text-gray-600 transition cursor-pointer"
          >
            Cancel
          </button>
          <button 
            type="submit"
            className="px-10 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            Create Condominium
          </button>
        </div>
      </form>
    </Modal>
  );
}