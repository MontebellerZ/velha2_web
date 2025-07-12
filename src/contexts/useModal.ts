import { createContext, useContext, type ReactNode } from "react";

interface ModalContextType {
  setModal: (content: ReactNode) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal deve ser usado dentro do ModalProvider");
  return context;
}
