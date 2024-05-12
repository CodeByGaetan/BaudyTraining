import { SectionTitles } from "@/data/SectionId"

import ImageFade from "../sub/ImageFade"

import Basket from "../../../public/illustrations/basket.jpeg"
import Mathys from "../../../public/illustrations/mathys.jpg"

export default function AboutSection({ id }: { id: string }) {
  const sectionTitle = SectionTitles.get(id)

  return (
    <section className="flex flex-col gap-16">
      <h1 className="text-5xl font-bold text-center">{sectionTitle}</h1>
      <div className="flex max-md:flex-wrap gap-8 ">
        <ImageFade
          src={Mathys}
          alt="Photo Mathys"
          height={350}
          angle={90}
          className="max-md:hidden"
        />
        <ImageFade
          src={Mathys}
          alt="Photo Mathys"
          height={350}
          angle={180}
          className="md:hidden"
        />

        <div className="text-lg">
          <p>
            Je suis Mathys Baudy, coach sportif, préparateur physique et
            diététicien-nutritionniste.
            <br />
            Passionné par le sport et le bien-être, je suis joueur de basketball
            depuis mon plus jeune âge et je partage aussi ma passion en tant que
            coach depuis plusieurs années auprès de jeunes. J’exerce dans la
            salle de sport Dynamique Step à Lyon Part Dieu, en tant
            qu&apos;indépendant, où j&apos;élabore des programmes personnalisés
            pour aider mes clients à atteindre leurs objectifs de santé et de
            forme physique.
            <br />
            Mon engagement est d&apos;accompagner chacun vers un mode de vie
            plus sain et équilibré, en mettant en œuvre mes compétences en
            coaching et en nutrition.
          </p>
          <p className="font-bold mt-5">Diplômes : 🎓</p>
          <ul className="list-disc pl-6">
            <li>Licence STAPS mention entraînement sportif </li>
            <li>BTS diététique et nutrition</li>
          </ul>
        </div>
      </div>
      <div className="flex max-md:flex-wrap gap-12">
        <div className="text-lg ">
          <p>
            Mon approche se base sur un coaching et un suivi diététique,
            personnalisés et adaptés au mode de vie et aux contraintes de
            chacun. Je m&apos;engage à transmettre mes connaissances et mon
            expérience pour aider mes clients à atteindre leurs objectifs de
            santé, de forme physique et de bien-être.
          </p>
        </div>

        {/* Without fade image version */}
        {/* <Image
          src={Basket}
          alt="Photo Basketball"
          className="object-cover w-full h-[300px] rounded-lg"
        /> */}

        <ImageFade
          src={Basket}
          alt="Photo Basketball"
          height={300}
          angle={270}
          className="max-md:hidden"
        />
        <ImageFade
          src={Basket}
          alt="Photo Basketball"
          height={300}
          angle={0}
          className="md:hidden"
        />
      </div>
    </section>
  )
}
