import React from 'react'
import Hero from './element/Hero'
import About from './About'
import Rules from './element/Rules'
import Timeline from './element/Timeline'
import ThemeCard from './element/ThemeCard'
import OrganizingTeam from './Organiser'
import SponsersSection from './Sponsers'

const Home = () => {
  return (
    <div>
      <Hero/>
      <ThemeCard/>
      <Rules/>
      <About/>
      {/* <OrganizingTeam/>
      <SponsersSection/> */}
      <Timeline/>
    </div>
  )
}

export default Home
