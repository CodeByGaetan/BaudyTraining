import Image from "next/image"

import { SectionTitles } from "@/data/SectionId"

import ImageFade from "../sub/ImageFade"

import Coaching from "../../../public/illustrations/coaching.jpg"
import CoachingTimeline from "../../../public/illustrations/frise-coaching.png"
import ScheduleButton from "../sub/ScheduleButton"

export default function CoachingSection({ id }: { id: string }) {
  const sectionTitle = SectionTitles.get(id)

  return (
    <section className="flex flex-col gap-16">
      <h1 className="text-5xl font-bold text-center">{sectionTitle}</h1>
      <div className="grid md:grid-cols-[40%,1fr] gap-8">
        <ImageFade
          src={Coaching}
          alt="Photo Coaching"
          height={500}
          angle={90}
          className="max-md:hidden"
        />
        <ImageFade
          src={Coaching}
          alt="Photo Coaching"
          height={500}
          angle={180}
          className="md:hidden"
        />

        <div className="flex flex-col items-center">
          <p className="text-lg">
            En tant que coach sportif, mon accompagnement est entièrement
            personnalisé pour répondre aux besoins individuels de chaque client.
            Que ce soit pour la perte de poids, la prise de masse musculaire, la
            sèche, la recomposition corporelle ou la préparation physique
            spécifique à une pratique sportive, je conçois des programmes sur
            mesure.
            <br />
            Mon objectif est d&apos;optimiser les performances et
            d&apos;atteindre les objectifs fixés, tout en tenant compte des
            contraintes physiques et psychologiques de chacun de mes clients.
          </p>
          <Image
            src={CoachingTimeline}
            alt="Frise Coaching"
            className="my-6"
            priority
          />
          <ScheduleButton>
            <h2 className="text-2xl font-bold text-primary text-center">
              La première séance est offerte !
            </h2>
          </ScheduleButton>
        </div>
      </div>
    </section>
  )
}
