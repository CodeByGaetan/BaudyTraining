"use client"

import Slider from "@/components/Slider"
import SliderSection from "@/components/SliderSection"
import WelcomeSection from "@/components/WelcomeSection"
import { SectionId } from "./data/SectionId"

export default function Home() {
  return (
    <main>
      <Slider>
        <SliderSection id={SectionId.welcome}>
          <WelcomeSection />
        </SliderSection>
        <SliderSection id={SectionId.about}>A PROPOS</SliderSection>
        <SliderSection id={SectionId.coaching}>COACHING</SliderSection>
        <SliderSection id={SectionId.dietetic}>DIETETIQUE</SliderSection>
        <SliderSection id={SectionId.prices}>TARIFS</SliderSection>
        <SliderSection id={SectionId.contact}>CONTACT</SliderSection>
      </Slider>
    </main>
  )
}
