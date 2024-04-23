"use client"

import Slider from "@/components/Slider"
import WelcomeSection from "@/components/WelcomeSection"

export default function Home() {
  return (
    <main>
      <Slider>
        <WelcomeSection id="welcome" />
        <WelcomeSection id="about" />
        <WelcomeSection id="coaching" />
        <WelcomeSection id="dietetic" />
        <WelcomeSection id="prices" />
        <WelcomeSection id="contact" />
      </Slider>
    </main>
  )
}
