"use client"

import AboutSection from "@/components/AboutSection"
import CoachingSection from "@/components/CoachingSection"
import ContactSection from "@/components/ContactSection"
import DieteticSection from "@/components/DieteticSection"
import PricesSection from "@/components/PricesSection"
import Slider from "@/components/Slider"
import WelcomeSection from "@/components/WelcomeSection"
import { SectionId } from "../data/SectionId"

export default function Home() {
  return (
    <main>
      <Slider>
        <WelcomeSection id={SectionId.welcome} />
        <AboutSection id={SectionId.about} />
        <CoachingSection id={SectionId.coaching} />
        <DieteticSection id={SectionId.dietetic} />
        <PricesSection id={SectionId.prices} />
        <ContactSection id={SectionId.contact} />
      </Slider>
    </main>
  )
}
