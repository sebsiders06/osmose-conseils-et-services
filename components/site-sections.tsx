import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import {
  company,
  consultingOffers,
  expertises,
  homeBalancePromo,
  homeFormationsPromo,
  homeHeroLeadBackgroundImage,
  homeHeroLeadBox,
  homePhilippeAbout,
  homeTestimonialsBanner,
  homePromoBox,
  homeVisionPromo,
  methodology,
  quickStats,
  testimonials,
} from "@/data/site-content";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 12h10M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="home-hero home-hero--lead">
      <div className="container home-hero__layout">
        <h1 className="hero-title">
          <span className="hero-title__brand">
            <span className="hero-title__line hero-title__line--brand">CONSULTING &amp; COACHING</span>
          </span>
          <span className="hero-title__tagline">
            <span className="hero-title__tagline-line">LE CAPITAL HUMAIN AU CŒUR</span>
            <span className="hero-title__tagline-line">DE VOTRE RÉUSSITE PERSONNELLE ET PROFESSIONNELLE</span>
          </span>
        </h1>
        <div
          className="home-lead-box home-lead-box--photo"
          style={
            {
              "--home-lead-box-image": `url(${JSON.stringify(homeHeroLeadBackgroundImage)})`,
            } as React.CSSProperties
          }
        >
          <p className="home-lead-box__text">{homeHeroLeadBox}</p>
        </div>
        <div
          className="home-promo-box home-promo-box--faire-progresser"
          style={
            {
              "--home-faire-progresser-image": `url(${JSON.stringify(homePromoBox.backgroundImage)})`,
            } as React.CSSProperties
          }
        >
          <h2 className="home-promo-box__headline home-promo-box__headline--singleline">{homePromoBox.title}</h2>
          <p className="home-promo-box__text">{homePromoBox.body}</p>
          <div className="home-promo-box__actions">
            <Link className="button button-primary" href={homePromoBox.ctaHref}>
              {homePromoBox.ctaLabel}
            </Link>
          </div>
        </div>
        <div
          className="home-promo-box home-promo-box--equilibre"
          style={
            {
              "--home-equilibre-image": `url(${JSON.stringify(homeBalancePromo.backgroundImage)})`,
            } as React.CSSProperties
          }
        >
          <h2 className="home-promo-box__headline home-promo-box__headline--singleline">
            {homeBalancePromo.title}
          </h2>
          <p className="home-promo-box__text">{homeBalancePromo.body}</p>
          <div className="home-promo-box__actions">
            <Link className="button button-primary" href={homeBalancePromo.ctaHref}>
              {homeBalancePromo.ctaLabel}
            </Link>
          </div>
        </div>
        <div
          className="home-promo-box home-promo-box--vision"
          style={
            {
              "--home-vision-image": `url(${JSON.stringify(homeVisionPromo.backgroundImage)})`,
            } as React.CSSProperties
          }
        >
          <h2 className="home-promo-box__headline home-promo-box__headline--singleline">
            {homeVisionPromo.title}
          </h2>
          <p className="home-promo-box__text">{homeVisionPromo.body}</p>
          <div className="home-promo-box__actions">
            <Link className="button button-primary" href={homeVisionPromo.ctaHref}>
              {homeVisionPromo.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeAboutPhilippe() {
  return (
    <section aria-labelledby="home-philippe-heading" className="home-philippe-section">
      <div className="container">
        <div className="home-about-philippe home-about-philippe--home">
          <div className="home-about-philippe__text">
            <p className="home-about-philippe__eyebrow">{homePhilippeAbout.eyebrow}</p>
            <h2 className="home-about-philippe__name" id="home-philippe-heading">
              {homePhilippeAbout.name}
            </h2>
            <p className="home-about-philippe__p">{homePhilippeAbout.paragraph1}</p>
            <p className="home-about-philippe__p">{homePhilippeAbout.paragraph2}</p>
          </div>
          <div
            className="home-about-philippe__visual-stack"
            style={
              {
                "--home-philippe-backdrop-image": `url(${JSON.stringify(homePhilippeAbout.backdropImage)})`,
              } as React.CSSProperties
            }
          >
            <div className="home-about-philippe__figure">
              <Image
                alt={homePhilippeAbout.imageAlt}
                className="home-about-philippe__img"
                height={600}
                sizes="(max-width: 800px) 100vw, min(40vw, 400px)"
                src={homePhilippeAbout.imageSrc}
                width={480}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeFormationsTeaser() {
  return (
    <section aria-labelledby="home-formations-heading" className="home-formations-section">
      <div className="container">
        <div
          className="home-promo-box home-promo-box--formations home-promo-box--left home-formations-box"
          style={
            {
              "--home-formations-image": `url(${JSON.stringify(homeFormationsPromo.backgroundImage)})`,
            } as React.CSSProperties
          }
        >
          <h2 className="home-promo-box__headline home-formations-box__title" id="home-formations-heading">
            {homeFormationsPromo.title}
          </h2>
          <p className="home-formations-box__text">{homeFormationsPromo.intro}</p>
          <p className="home-formations-box__text">{homeFormationsPromo.lead}</p>
          <ul className="home-formations-box__list">
            {homeFormationsPromo.examples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="home-formations-box__etc">etc…</p>
          <div className="home-promo-box__actions">
            <Link className="button button-primary" href={homeFormationsPromo.ctaHref}>
              {homeFormationsPromo.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-copy">{description}</p>
      </div>
    </section>
  );
}

export function StatStrip() {
  return (
    <section className="section">
      <div className="container stats-grid">
        {quickStats.map((item) => (
          <article key={item.label} className="stat-card">
            <strong>{item.value}</strong>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ExpertiseCards() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Expertises"
          title="Des domaines d'intervention construits autour des enjeux de direction et de transformation."
          copy="Chaque expertise combine hauteur de vue, capacite de structuration et attention concrete a l'experience des equipes."
        />
        <div className="card-grid three-columns">
          {expertises.map((item) => (
            <article key={item.title} className="content-card interactive-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="tag-list">
                {item.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ChallengeCards({ items }: { items: Array<{ title: string; text: string }> }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Enjeux"
          title="Les problematiques que nous aidons a traiter."
          copy="Nous intervenons souvent a des moments ou l'organisation sent qu'un palier doit etre franchi, mais que les points de blocage restent diffus."
        />
        <div className="card-grid three-columns">
          {items.map((item) => (
            <article key={item.title} className="content-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValueCards({ items }: { items: Array<{ title: string; text: string }> }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Valeurs"
          title="Une posture de cabinet exigeant, proche du terrain et resolument oriente impact."
          copy="Notre positionnement repose sur un accompagnement haut de gamme, sobre dans la forme et tres concret dans les effets attendus."
        />
        <div className="card-grid four-columns">
          {items.map((item) => (
            <article key={item.title} className="content-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MethodologySteps() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Methodologie"
          title="Une progression claire pour passer du diagnostic a l'ancrage."
          copy="Chaque mission s'adapte a votre contexte, mais nous suivons toujours une logique qui relie lucidite, decision et execution."
        />
        <div className="timeline-grid">
          {methodology.map((item) => (
            <article key={item.step} className="timeline-card">
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfferCards() {
  return (
    <section className="section">
      <div className="container card-grid three-columns">
        {consultingOffers.map((item) => (
          <article key={item.title} className="content-card interactive-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProgramCards({
  eyebrow,
  title,
  copy,
  items,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  items: Array<{ title: string; description: string }>;
}) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} copy={copy} />
        <div className="card-grid three-columns">
          {items.map((item) => (
            <article key={item.title} className="content-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrainingCards({
  items,
}: {
  items: Array<{ title: string; format: string; objective: string }>;
}) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Catalogue"
          title="Des formations concues pour etre engageantes, concretes et memorables."
          copy="Nous proposons des formats presentiels, distanciels ou hybrides, avec une forte logique d'appropriation par la pratique."
        />
        <div className="card-grid two-columns">
          {items.map((item) => (
            <article key={item.title} className="content-card">
              <div className="stack-sm">
                <p className="eyebrow muted-eyebrow">{item.format}</p>
                <h3>{item.title}</h3>
              </div>
              <p>{item.objective}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsTitleBanner() {
  return (
    <section
      className="testimonials-ribbon"
      aria-labelledby="testimonials-ribbon-heading"
    >
      <div className="testimonials-ribbon__inner">
        <h2 className="testimonials-ribbon__title" id="testimonials-ribbon-heading">
          {homeTestimonialsBanner.title}
        </h2>
        <div className="testimonials-ribbon__boxes">
          {homeTestimonialsBanner.featured.map((item) => (
            <div className="testimonials-ribbon__box" key={item.name}>
              <p className="testimonials-ribbon__name">{item.name}</p>
              <p className="testimonials-ribbon__quote">
                {"«\u00a0"}
                {item.quote}
                {"\u00a0»"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialCards({ hideIntro = false }: { hideIntro?: boolean } = {}) {
  return (
    <section
      className={hideIntro ? "section section-after-testimonials-ribbon" : "section"}
    >
      <div className="container">
        {!hideIntro && (
          <SectionHeading
            eyebrow="Temoignages"
            title="Des retours clients qui parlent de confiance, de clarte et de mise en mouvement."
            copy="Nous privilegions des accompagnements credibles, exigeants et tres lisibles pour les comites de direction comme pour les equipes."
          />
        )}
        <div className="card-grid two-columns">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card interactive-card">
              <p className="quote-mark">"</p>
              <p>{item.quote}</p>
              <div className="testimonial-author">
                <div className="avatar-badge">{item.initials}</div>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.company}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactBanner() {
  return (
    <section className="section">
      <div className="container cta-banner">
        <div>
          <p className="eyebrow">Passer a l'action</p>
          <h2>{company.contactCta}</h2>
          <p className="section-copy">
            Echangeons sur vos priorites, vos tensions actuelles et la bonne combinaison entre conseil, coaching et
            formation.
          </p>
        </div>
        <Link className="button button-primary" href="/more#contact">
          Planifier un premier echange
        </Link>
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: Array<{ question: string; answer: string }> }) {
  return (
    <section className="section" id="faq">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Les questions les plus frequentes."
          copy="Une premiere lecture simple pour comprendre comment nous intervenons et comment personnaliser votre accompagnement."
        />
        <div className="faq-list">
          {items.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResourceCards({ items }: { items: Array<{ title: string; description: string }> }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Ressources"
          title="Un espace blog et contenus pour prolonger la reflexion."
          copy="Vous pouvez faire vivre cette page avec vos articles, livres blancs, replays ou notes de perspective."
        />
        <div className="card-grid three-columns">
          {items.map((item) => (
            <article key={item.title} className="content-card interactive-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a className="inline-link" href="#">
                Lire la ressource
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container contact-panel">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Prenons le temps d'analyser votre contexte."
            copy="Laissez-nous quelques informations sur vos enjeux et nous reviendrons vers vous avec un premier angle d'accompagnement."
          />
          <div className="contact-aside">
            <p>
              <strong>Email :</strong> <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <p>
              <strong>Telephone :</strong> <a href={`tel:${company.phone.replace(/\s+/g, "")}`}>{company.phone}</a>
            </p>
            <p>
              <strong>Adresse :</strong> {company.address}
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
