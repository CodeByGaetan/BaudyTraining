import Image from "next/image"
import { Button } from "./ui/button"

export default function WelcomeSection() {
  return (
    <section className="flex flex-col items-center gap-4">
      <Image src="/logo.svg" alt="Welcome" width={500} height={500} priority />
      <div className="flex flex-col w-80 gap-4">
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
    </section>
  )
}
