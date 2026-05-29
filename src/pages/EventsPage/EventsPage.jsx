import React from 'react'
import PageHero from '../../components/organisms/PageHero/PageHero.jsx'
import SectionTitle from '../../components/atoms/SectionTitle/SectionTitle.jsx'
import EventCard from '../../components/molecules/EventCard/EventCard.jsx'
import { completedEvents, upcomingEvents } from '../../data/siteData.js'
import './EventsPage.css'

export default function EventsPage() {
  return <main>
    <PageHero eyebrow="Events" title="Sessions, Celebrations and Mathematical Gatherings" subtitle="The club currently records five completed events and two upcoming events: one technical session and one mathematics day celebration." />
    <section className="section"><div className="container"><SectionTitle eyebrow="Upcoming" title="Upcoming Events" subtitle="Planned activities for members and mathematics enthusiasts." /><div className="events-page__grid">{upcomingEvents.map(e => <EventCard key={e.id} {...e} />)}</div></div></section>
    <section className="section section--alt"><div className="container"><SectionTitle eyebrow="Archive" title="Completed Events" subtitle="A clean archive of activities conducted by the club." /><div className="events-page__grid">{completedEvents.map(e => <EventCard key={e.id} {...e} />)}</div></div></section>
  </main>
}
