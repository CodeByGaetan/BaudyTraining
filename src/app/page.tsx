"use client"

import AboutSection from "@/components/section/AboutSection"
import CoachingSection from "@/components/section/CoachingSection"
import ContactSection from "@/components/section/ContactSection"
import DieteticSection from "@/components/section/DieteticSection"
import PricesSection from "@/components/section/PricesSection"
import Slider from "@/components/section/Slider"
import WelcomeSection from "@/components/section/WelcomeSection"
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
