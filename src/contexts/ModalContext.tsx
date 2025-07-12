import { useState, type ReactNode } from "react";
import { ModalContext } from "./useModal";
import { IoClose } from "react-icons/io5";

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  function setModal(content: ReactNode) {
    setModalContent(content);
  }

  function closeModal() {
    setModalContent(null);
  }

  return (
    <ModalContext.Provider value={{ setModal, closeModal }}>
      {children}

      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-xs">
          <div className="relative bg-secondary p-6 rounded-lg shadow-xl">
            <button
              className="absolute top-2 right-2 text-2xl text-accentDark hover:text-accent transition hover:scale-110 hover:cursor-pointer"
              onClick={closeModal}
              type="button"
            >
              <IoClose />
            </button>

            {modalContent}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}
