import Image from "next/image"

export default function CoachingSection({ id }: { id: string }) {
  return (
    <section className="my-auto py-16 container flex flex-col gap-16">
      <h1 className="text-5xl font-bold text-center">Coachings sportifs</h1>
      <div className="grid md:grid-cols-[45%,1fr] gap-8">
        <div>
          <div className="max-md:hidden w-full h-[600px] bg-[linear-gradient(90deg,rgba(0,0,0,0)80%,hsl(var(--background))100%),url('/coaching.jpg')] bg-cover bg-center rounded-l-xl" />
          <div className="md:hidden w-full h-[400px] bg-[linear-gradient(180deg,rgba(0,0,0,0)80%,hsl(var(--background))100%),url('/coaching.jpg')] bg-cover bg-center rounded-t-lg" />
        </div>

        <div>
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
            contraintes physique et psychologique de chacun de mes clients.
          </p>
          <Image
            src="/frise-coaching.png"
            alt="Frise Coaching"
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
