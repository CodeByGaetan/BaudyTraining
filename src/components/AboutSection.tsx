export default function AboutSection() {
  return (
    <section className="container flex flex-col gap-16 pt-12">
      <h1 className="text-5xl font-bold text-center">À propos</h1>
      <div className="flex max-md:flex-wrap gap-8 ">
        <div className="max-md:hidden w-full h-[400px] bg-[linear-gradient(90deg,rgba(0,0,0,0)80%,hsl(var(--background))100%),url('/mathys.jpg')] bg-cover bg-center rounded-l-lg" />
        <div className="md:hidden w-full h-[400px] bg-[linear-gradient(180deg,rgba(0,0,0,0)80%,hsl(var(--background))100%),url('/mathys.jpg')] bg-cover bg-center rounded-t-lg" />
        <div className="text-lg ">
          <h2 className="text-3xl font-bold mb-4">Bonjour 👋</h2>
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
      <div className="flex max-md:flex-wrap gap-12 pb-16">
        <div className="text-lg ">
          <h2 className="text-3xl font-bold mb-6">Mon approche 🎯</h2>
          <p>
            Mon approche se base sur un coaching et un suivi diététique
            personnalisé et adaptés au mode de vie et aux contraintes de chacun.
            Je m&apos;engage à transmettre mes connaissances et mon expérience
            pour aider mes clients à atteindre leurs objectifs de santé, de
            forme physique et de bien-être.
          </p>
        </div>
        <div className="max-md:hidden w-full h-[300px] bg-[linear-gradient(90deg,hsl(var(--background))0%,rgba(0,0,0,0)20%),url('/coaching.jpeg')] bg-cover bg-center rounded-r-lg" />
        <div className="md:hidden w-full h-[300px] bg-[linear-gradient(180deg,hsl(var(--background))0%,rgba(0,0,0,0)20%),url('/coaching.jpeg')] bg-cover bg-center rounded-b-lg" />
      </div>
    </section>
  )
}
