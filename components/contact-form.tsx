import Link from "next/link";

const FORM_EMAIL = "philippe.clemente@orange.fr";

function thankYouUrl(): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (base) {
    return `${base}/thank-you`;
  }
  return "/thank-you";
}

export function ContactForm() {
  return (
    <form
      action={`https://formsubmit.co/${FORM_EMAIL}`}
      className="contact-form"
      method="POST"
    >
      <input name="_next" type="hidden" value={thankYouUrl()} />
      <input name="_captcha" type="hidden" value="true" />
      <input name="_template" type="hidden" value="table" />
      <input name="_subject" type="hidden" value="Message — formulaire site Osmose Conseils" />

      <p aria-hidden="true" className="contact-form__hp">
        <label>
          Ne pas remplir
          <input autoComplete="off" name="_honey" tabIndex={-1} type="text" />
        </label>
      </p>

      <div className="form-grid">
        <label>
          Nom
          <input autoComplete="name" name="name" placeholder="Votre nom" required type="text" />
        </label>
        <label>
          E-mail
          <input autoComplete="email" name="email" placeholder="vous@entreprise.fr" required type="email" />
        </label>
        <label className="field-span-2">
          Sujet
          <input name="subject" placeholder="Objet de votre message" required type="text" />
        </label>
      </div>

      <label>
        Message
        <textarea
          name="message"
          placeholder="Décrivez vos enjeux, votre contexte et votre horizon de temps."
          required
          rows={5}
        />
      </label>

      <div className="form-footer">
        <button className="button page-contact__cta-submit" type="submit">
          Envoyer
        </button>
        <p className="form-note">
          Envoi via{" "}
          <Link href="https://formsubmit.co" rel="noreferrer" target="_blank">
            FormSubmit
          </Link>
          : une vérification anti-robot peut s’afficher. Définissez{" "}
          <code style={{ fontSize: "0.88em" }}>NEXT_PUBLIC_SITE_URL</code> pour une redirection fiable vers la page de
          remerciement une fois en ligne.
        </p>
      </div>
    </form>
  );
}
