"use client"

import AboutSection from "@/components/AboutSection"
import CoachingSection from "@/components/CoachingSection"
import ContactSection from "@/components/ContactSection"
import DieteticSection from "@/components/DieteticSection"
import PricesSection from "@/components/PricesSection"
import Slider from "@/components/Slider"
import SliderSection from "@/components/SliderSection"
import WelcomeSection from "@/components/WelcomeSection"
import { SectionId } from "../data/SectionId"

export default function Home() {
  return (
    <main>
      <Slider>
        <SliderSection id={SectionId.welcome}>
          <WelcomeSection />
        </SliderSection>
        <SliderSection id={SectionId.about}>
          <AboutSection />
        </SliderSection>
        <SliderSection id={SectionId.coaching}>
          <CoachingSection />
        </SliderSection>
        <SliderSection id={SectionId.dietetic}>
          <DieteticSection />
        </SliderSection>
        <SliderSection id={SectionId.prices}>
          <PricesSection />
        </SliderSection>
        <SliderSection id={SectionId.contact}>
          <ContactSection />
        </SliderSection>
      </Slider>
    </main>
  )
}
