import Image from "next/image"

import { SectionTitles } from "@/data/SectionId"

import Dietetic from "../../../public/illustrations/dietetic.jpg"
import DieteticTimeline from "../../../public/illustrations/frise-dietetic.png"
import ImageFade from "../sub/ImageFade"

export default function DieteticSection({ id }: { id: string }) {
  const sectionTitle = SectionTitles.get(id)

  return (
    <section className="flex flex-col gap-16">
      <h1 className="text-5xl font-bold text-center">{sectionTitle}</h1>
      <div className="grid grid-cols-1 md:grid-cols-[40%,1fr] gap-8">
        <ImageFade
          src={Dietetic}
          alt="Photo Diététique"
          height={500}
          angle={90}
          className="max-md:hidden"
        />
        <ImageFade
          src={Dietetic}
          alt="Photo Diététique"
          height={500}
          angle={180}
          className="md:hidden"
        />

        <div>
          <p className="text-lg">
            Mes suivis diététiques sont personnalisés et visent à aider chacun à
            atteindre ses objectifs spécifiques, qu&apos;il s&apos;agisse de
            perte de poids, de prise de masse musculaire, de rééquilibrage
            alimentaire, d’adaptation à la pratique sportive ou à des
            pathologies particulières. Je prends en compte les contraintes
            individuelles de mes clients afin de leur offrir des solutions
            adaptées à leur mode de vie et à leurs besoins, en étant le plus à
            l’écoute possible de la personne
          </p>
          <Image
            src={DieteticTimeline}
            alt="Frise Diététique"
            className="my-6"
            priority
          />
          <h2 className="text-2xl font-bold text-primary text-center">
            La première séance est offerte !
          </h2>
        </div>
      </div>
    </section>
  )
}
