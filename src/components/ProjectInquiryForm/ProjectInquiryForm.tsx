import React, { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

type ProjectInquiryFormProps = {
  onSuccess: (name: string) => void;
  messagePlaceholder?: string;
  labels?: {
    name?: string;
    contact?: string;
    message?: string;
    submit?: string;
  };
};

type SubmitState = "idle" | "sending" | "error";

const ProjectInquiryForm: React.FC<ProjectInquiryFormProps> = ({
  onSuccess,
  messagePlaceholder,
  labels = {},
}) => {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const configured = Boolean(serviceId && templateId && publicKey);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!serviceId || !templateId || !publicKey) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");

    if (formData.get("_gotcha")) {
      form.reset();
      onSuccess(name);
      return;
    }

    setSubmitState("sending");
    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      setSubmitState("idle");
      onSuccess(name);
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <label>
        {labels.name || "Name"}
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        {labels.contact || "Email or phone"}
        <input name="contact" type="text" autoComplete="email" required />
      </label>
      <label>
        {labels.message || "How could we work together?"}
        <textarea name="message" rows={4} placeholder={messagePlaceholder} required />
      </label>
      <input
        className="inquiry-form-trap"
        name="_gotcha"
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />

      <button type="submit" disabled={!configured || submitState === "sending"}>
        {submitState === "sending" ? "Sending…" : labels.submit || "Start the conversation"}
      </button>

      {submitState === "error" && (
        <p className="inquiry-form-status inquiry-form-status--error">
          Something went wrong. Please try again.
        </p>
      )}
      {!configured && <p className="inquiry-form-status">Message form setup is in progress.</p>}
    </form>
  );
};

export default ProjectInquiryForm;
