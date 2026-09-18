import { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

// Sin valor por defecto: usar useModal fuera del provider es un bug, y así falla
// fuerte en vez de devolver funciones que no hacen nada en silencio.
const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider
      value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
    </ModalContext.Provider>
  );
}

// Separar este hook en su propio archivo pediria 3 archivos para un solo modal.
// La regla solo afecta fast refresh en desarrollo, no el build.
// eslint-disable-next-line react-refresh/only-export-components
export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal tiene que usarse dentro de <ModalProvider>');
  return ctx;
}
