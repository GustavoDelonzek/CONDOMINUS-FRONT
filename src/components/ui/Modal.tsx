import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen) dialog?.showModal();
    else dialog?.close();
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="fixed inset-0 m-auto rounded-3xl border-none p-0 bg-white shadow-2xl 
        w-full max-w-2xl overflow-hidden backdrop:bg-black/50 backdrop:backdrop-blur-sm
        animate-in fade-in zoom-in duration-300"
    >
      <div className="relative p-10">
        <button 
          onClick={onClose} 
          className="absolute cursor-pointer top-6 right-6 text-gray-400 hover:text-gray-600 transition text-2xl"
        >
          &times;
        </button>
        {children}
      </div>
    </dialog>
  );
}