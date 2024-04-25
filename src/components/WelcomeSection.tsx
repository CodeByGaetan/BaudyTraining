import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export default function WelcomeSection() {
  return (
    // <section className="bg-dynamique-step bg-center bg-cover bg-no-repeat">
    //   <div className="h-screen flex flex-col items-center justify-center gap-4">
    //     <Image
    //       src="/logo.svg"
    //       alt="Welcome"
    //       width={500}
    //       height={500}
    //       unoptimized
    //     />
    //     <div className="flex flex-col w-80 gap-4">
    //       <Button asChild>
    //         <a href="#about">À propos</a>
    //       </Button>
    //       <Button asChild>
    //         <a href="#coaching">Coaching sportif</a>
    //       </Button>
    //       <Button asChild>
    //         <a href="#dietetic">Suivi diététique</a>
    //       </Button>
    //       <Button asChild>
    //         <a href="#prices">Tarifs</a>
    //       </Button>
    //       <Button asChild>
    //         <a href="#contact">Contact</a>
    //       </Button>
    //     </div>
    //   </div>
    // </section>
    <section className="relative w-full">
      <Image
        src="/dynamique-step.jpg"
        alt="Background"
        width={2560}
        height={1440}
        className="absolute w-full h-full object-cover opacity-50"
      />
      <div className="relative h-svh flex flex-col items-center justify-center gap-4 pt-28">
        <Image
          src="/logo.svg"
          alt="Welcome"
          width={550}
          height={550}
          unoptimized
        />
        <div className="mt-8 pb-12 flex flex-col w-80 gap-4">
          <Button asChild>
            <a href="#about">À propos</a>
          </Button>
          <Button asChild>
            <a href="#coaching">Coaching sportif</a>
          </Button>
          <Button asChild>
            <a href="#dietetic">Suivi diététique</a>
          </Button>
          <Button asChild>
            <a href="#prices">Tarifs</a>
          </Button>
          <Button asChild>
            <a href="#contact">Contact</a>
          </Button>
        </div>
        <div className="flex items-center">
          <p className="mr-2">Ce site a été réalisé par</p>
          <Link href="https://www.codebygaetan.fr">
            <Image
              src="/cbg_dark.png"
              alt="CodeByGaetan"
              width={100}
              height={50}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
