import { useEffect, useState, type ReactNode } from "react";
import { ModalContext } from "./useModal";
import { IoClose } from "react-icons/io5";

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const setModal = (content: ReactNode) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  useEffect(() => {
    if (!modalContent) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeModal();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalContent]);

  return (
    <ModalContext.Provider value={{ setModal, closeModal }}>
      {children}

      {modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-xs p-8"
          onClick={closeModal}
        >
          <div
            className="relative bg-secondary rounded-lg shadow-xl max-w-full max-h-full flex flex-col p-1"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="z-50 absolute top-1 right-2 text-2xl text-accentDark hover:text-accent transition-all hover:scale-110 hover:cursor-pointer"
              onClick={closeModal}
              type="button"
            >
              <IoClose />
            </button>

            <div className="overflow-auto p-6 flex-1">{modalContent}</div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}
