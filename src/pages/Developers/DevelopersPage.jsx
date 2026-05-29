import React from 'react'
import PageHero from '../../components/organisms/PageHero/PageHero.jsx'
import SectionTitle from '../../components/atoms/SectionTitle/SectionTitle.jsx'
import { developers } from '../../data/siteData.js'
import './DevelopersPage.css'

export default function DevelopersPage() {
  const leadDeveloper = developers.find((developer) => developer.role.toLowerCase().includes('lead'))
  const contributors = developers.filter((developer) => developer.id !== leadDeveloper?.id)

  return (
    <main>
      <PageHero
        eyebrow="Developers"
        title="Website Development Team"
        subtitle="Built using Atomic Design so every reusable card, section, and page can evolve independently."
      />

      <section className="section developers-page">
        <div className="container">
          <SectionTitle
            eyebrow="Development"
            title="Frontend Contributors"
            subtitle="The lead developer is highlighted at the center as the architecture owner, while contributors are shown in clean supporting cards."
          />

          {leadDeveloper && (
            <article className="developer-lead-card" aria-label="Lead developer">
              <div className="developer-lead-card__badge">Lead Developer</div>
              <div className="developer-lead-card__avatar" aria-hidden="true">SM</div>
              <div className="developer-lead-card__content">
                <p className="developer-lead-card__eyebrow">Website Architecture Owner</p>
                <h2>{leadDeveloper.name}</h2>
                <p>{leadDeveloper.contribution}</p>
                <div className="developer-links developer-links--center">
                  {leadDeveloper.links.map((link) => <span key={link}>{link}</span>)}
                </div>
              </div>
            </article>
          )}

          <div className="developers-page__grid" aria-label="Developer contributors">
            {contributors.map((developer) => (
              <article className="developer-card" key={developer.id}>
                <span className="developer-card__role">{developer.role}</span>
                <h3>{developer.name}</h3>
                <p>{developer.contribution}</p>
                <div className="developer-links">
                  {developer.links.map((link) => <span key={link}>{link}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container developers-page__note">
          <h2>Atomic Design Used</h2>
          <p>Atoms such as Button, Badge, Logo, SectionTitle and InfoCard are separate. Molecules such as EventCard, QuestionCard and SolverRow are reusable. Organisms such as Navbar, Hero, Events, WeeklyQuestions, Solvers, Gallery, MentorIntro and Footer compose full sections. Pages only arrange these reusable parts.</p>
        </div>
      </section>
    </main>
  )
}
