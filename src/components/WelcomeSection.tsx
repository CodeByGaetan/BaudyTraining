import { SectionId, SectionTitles } from "@/data/SectionId"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export default function WelcomeSection({ id }: { id: string }) {
  const links: SectionId[] = [
    SectionId.about,
    SectionId.coaching,
    SectionId.dietetic,
    SectionId.prices,
    SectionId.contact,
  ]

  return (
    <section className="w-full">
      <Image
        src="/dynamique-step2.jpg"
        alt="Background"
        width={2560}
        height={1440}
        className="absolute w-full h-full object-cover opacity-80 dark:opacity-20"
      />
      <div className="relative h-svh flex flex-col items-center justify-center gap-4 sm:gap-8 pt-0">
        <Image
          src="/logo2.svg"
          alt="Welcome"
          width={400}
          height={400}
          className="max-sm:w-[80%]"
        />
        <div className="mt-0 flex flex-col w-60 sm:w-80 gap-4">
          {links.map((link) => (
            <Button variant="outline" asChild key={link}>
              <a href={`#${link}`}>{SectionTitles.get(link)}</a>
            </Button>
          ))}
        </div>
        <div className="flex items-center">
          <p>Site web réalisé par </p>
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
