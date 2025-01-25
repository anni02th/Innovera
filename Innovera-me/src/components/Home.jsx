import React from 'react'
import Hero from './element/Hero'
import About from './About'
import Rules from './element/Rules'
import Timeline from './element/Timeline'
import ThemeCard from './element/ThemeCard'
import AboutInnovEra from './AboutInnovEra'

const Home = () => {
  return (
    <div>
      <Hero/>
      <ThemeCard/>
      <AboutInnovEra/>
      <Rules/>
      <About/>
      <Timeline/>
    </div>
  )
}

export default Home
