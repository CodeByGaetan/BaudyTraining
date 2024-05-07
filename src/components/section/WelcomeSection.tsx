import { SectionId, SectionTitles } from "@/data/SectionId"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

import CbgLogo from "../../../public/brand-imgs/cbg_dark.png"
import DynamiqueStep from "../../../public/illustrations/dynamique-step.jpg"
import Logo from "../../../public/pwa-imgs/logo.svg"

export default function WelcomeSection({ id }: { id: string }) {
  const links: SectionId[] = [
    SectionId.about,
    SectionId.coaching,
    SectionId.dietetic,
    SectionId.prices,
    SectionId.contact,
  ]

  return (
    <section className="flex flex-col items-center justify-center gap-4 sm:gap-8">
      <Image
        src={DynamiqueStep}
        alt="Photo salle de sport"
        width={2560}
        height={1440}
        className="absolute w-full h-full top-0 left-0 object-cover opacity-80 dark:opacity-20 -z-10"
        placeholder="blur"
      />
      <Image
        src={Logo}
        alt="Baudy Training"
        width={400}
        className="max-sm:w-[90%]"
        priority
      />
      <div className="mt-0 flex flex-col w-60 sm:w-80 gap-4">
        {links.map((link) => (
          <Button variant="outline" asChild key={link}>
            <a href={`#${link}`}>{SectionTitles.get(link)}</a>
          </Button>
        ))}
      </div>
      <div className="flex items-center">
        <p className="mr-1">Site web réalisé par</p>
        <Link href="https://www.codebygaetan.fr">
          <Image src={CbgLogo} alt="CodeByGaetan" height={50} priority />
        </Link>
      </div>
      <p className="text-xs text-slate-400 absolute bottom-2 left-2">
        Tous droits réservés
      </p>
    </section>
  )
}
