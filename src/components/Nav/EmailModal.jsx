import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./emailModal.css";

export default function EmailModal({ open, onClose, email = "lucasgold01@gmail.com" }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="emailModalOverlay" onClick={onClose}>
      <div className="emailModalCard" onClick={(e) => e.stopPropagation()}>
        <button className="emailModalClose" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <h3 className="emailModalTitle">For inquiries or to request a resumé</h3>
        <p className="emailModalBody">Click below and I’ll get back to you as soon as I can.</p>

        <a className="emailModalButton" href={`mailto:${email}`}>
          Email me
        </a>
      </div>
    </div>,
    document.body
  );
}
