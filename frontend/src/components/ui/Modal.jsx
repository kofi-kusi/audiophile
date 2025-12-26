import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
  // Close on ESC key
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed left-0 right-0 bottom-0 top-[90px] bg-black/50 z-2"
      onClick={onClose} // click outside closes modal
    >
      {children}
    </div>
  );
}
