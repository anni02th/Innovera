import React from 'react'
import Hero from './element/Hero'
import About from './About'
import Rules from './element/Rules'
import Timeline from './element/Timeline'
import ThemeCard from './element/ThemeCard'
import OrganizingTeam from './Organiser'

const Home = () => {
  return (
    <div>
      <Hero/>
      <ThemeCard/>
      <Rules/>
      <About/>
      <OrganizingTeam/>
      <Timeline/>
    </div>
  )
}

export default Home
