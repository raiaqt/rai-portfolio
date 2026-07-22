import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ProjectInquiryForm from "../ProjectInquiryForm/ProjectInquiryForm";
import "./InquiryModal.scss";

type InquiryModalProps = {
  open: boolean;
  onClose: () => void;
};

type SubmitState = "idle" | "sending" | "sent" | "error";

const InquiryModal: React.FC<InquiryModalProps> = ({ open, onClose }) => {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submittedName, setSubmittedName] = useState("");

  useEffect(() => {
    if (!open) return;

    setSubmitState("idle");
    setSubmittedName("");

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="inquiry-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="inquiry-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="inquiry-modal-close" type="button" onClick={onClose} aria-label="Close">
          ×
        </button>

        {submitState === "sent" ? (
          <div className="inquiry-success">
            <span className="inquiry-success-icon" aria-hidden="true">✓</span>
            <span className="inquiry-modal-label">message received</span>
            <h2 id="inquiry-modal-title">
              Thanks{submittedName ? `, ${submittedName}` : ""}!
            </h2>
            <p>
              Your partnership inquiry is in my inbox. I’ll review it and reply using the contact
              details you shared.
            </p>
            <button type="button" onClick={onClose}>
              Back to portfolio
            </button>
          </div>
        ) : (
          <>
            <span className="inquiry-modal-label">partnership</span>
            <h2 id="inquiry-modal-title">Let’s explore working together</h2>

            <ProjectInquiryForm
              messagePlaceholder="For example: partner on a new product, improve an existing platform, or explore a technical idea."
              onSuccess={(name) => {
                setSubmittedName(name);
                setSubmitState("sent");
              }}
            />
          </>
        )}
      </section>
    </div>,
    document.body,
  );
};

export default InquiryModal;
