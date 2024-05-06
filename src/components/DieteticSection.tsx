import Image from "next/image"

export default function DieteticSection({ id }: { id: string }) {
  return (
    <section className="flex flex-col gap-16">
      <h1 className="text-5xl font-bold text-center">Suivis diététiques</h1>
      <div className="grid grid-cols-1 md:grid-cols-[45%,1fr] gap-8">
        <div>
          {/* <div className="max-md:hidden w-full h-[600px] bg-[linear-gradient(90deg,rgba(0,0,0,0)80%,hsl(var(--background))100%),url('/dietetic.jpg')] bg-cover bg-center rounded-l-xl" />
          <div className="md:hidden w-full h-[400px] bg-[linear-gradient(180deg,rgba(0,0,0,0)80%,hsl(var(--background))100%),url('/dietetic.jpg')] bg-cover bg-center rounded-t-lg" /> */}
          <Image
            src="/dietetic.jpg"
            alt="Dietetic"
            width={800}
            height={800}
            className="rounded-lg"
          />
        </div>
        <div className="">
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
            src="/frise-dietetic.png"
            alt="Dynamique Step"
            width={800}
            height={400}
            className="mt-8"
          />
          <h2 className="text-2xl font-bold text-primary text-center mt-8">
            La première séance est offerte !
          </h2>
        </div>
      </div>
    </section>
  )
}
