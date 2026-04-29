"use client";

import { FormEvent, useState } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
    setFormData(initialState);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Nom
          <input
            onChange={(event) => setFormData((value) => ({ ...value, name: event.target.value }))}
            placeholder="Votre nom"
            required
            type="text"
            value={formData.name}
          />
        </label>

        <label>
          Email
          <input
            onChange={(event) => setFormData((value) => ({ ...value, email: event.target.value }))}
            placeholder="vous@entreprise.fr"
            required
            type="email"
            value={formData.email}
          />
        </label>

        <label>
          Entreprise
          <input
            onChange={(event) => setFormData((value) => ({ ...value, company: event.target.value }))}
            placeholder="Nom de votre structure"
            type="text"
            value={formData.company}
          />
        </label>

        <label>
          Besoin principal
          <select defaultValue="consulting">
            <option value="consulting">Consulting</option>
            <option value="coaching">Coaching</option>
            <option value="formations">Formations</option>
            <option value="hybride">Accompagnement hybride</option>
          </select>
        </label>
      </div>

      <label>
        Message
        <textarea
          onChange={(event) => setFormData((value) => ({ ...value, message: event.target.value }))}
          placeholder="Décrivez vos enjeux, votre contexte et votre horizon de temps."
          required
          rows={5}
          value={formData.message}
        />
      </label>

      <div className="form-footer">
        <button className="button button-primary" type="submit">
          Envoyer la demande
        </button>
        <p className="form-note">Version de démonstration : confirmation d&apos;envoi sans back-end.</p>
      </div>

      {isSubmitted ? (
        <p className="form-success" role="status">
          Merci, votre message a bien été pris en compte. Nous revenons vers vous sous 24 heures ouvrées.
        </p>
      ) : null}
    </form>
  );
}
