"use client"
import { EmailRequest } from "@/models/EmailRequest"
import { LoaderCircleIcon } from "lucide-react"
import { FormEvent, useState } from "react"
import ScheduleButton from "./ScheduleButton"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { useToast } from "./ui/use-toast"

export default function ContactSection() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault()
    setLoading(true)

    const target = event.currentTarget

    const emailRequest: EmailRequest = {
      sender: target.email.value,
      subject: target.subject.value,
      message: target.message.value,
    }
    const body = JSON.stringify(emailRequest)

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    }

    const response = await fetch("api/send", options)
    const resData = await response.json()
    setLoading(false)

    if (response.status === 200) {
      target.reset()
      toast({
        description: "Votre message a bien été envoyé ! ✅",
      })
    } else {
      toast({
        variant: "destructive",
        description:
          "Votre message n'a pas pu être envoyé. Veuillez réessayer.",
      })
    }
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      <div className="flex flex-col">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <Label htmlFor="email">Adresse email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="subject">Sujet</Label>
            <Input
              id="subject"
              type="text"
              placeholder="Sujet"
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Message"
              required
              autoComplete="off"
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <LoaderCircleIcon className="mr-2 animate-spin" />}
            Envoyer
          </Button>
        </form>
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-4">Me contacter</h1>
        <ScheduleButton />
        <p>
          Je suis toujours à l&apos;écoute de nouveaux projets et opportunités,
          et ma boîte de réception reste toujours ouverte. Que vous ayez une
          question, une idée à partager ou simplement envie de dire bonjour 👋,
          n&apos;hésitez pas à me contacter en utilisant ce formulaire. Je
          m&apos;engage à vous répondre dans les plus brefs délais. 📫
          <br />
          Pour en savoir plus sur mes formations et mes expériences, consultez
          mon compte LinkedIn. Vous pouvez également retrouver le code de mes
          projets sur mon profil GitHub.
        </p>
        {/* <div className="flex flex-wrap gap-4 mt-4">
          <Link href="https://github.com/CodeByGaetan">
            <Image
              src={GitHubIcon}
              alt="Github Icon"
              width={40}
              height={40}
              className="dark:invert"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/laselvegaetan">
            <Image
              src={LinkedInIcon}
              alt="Linkedin Icon"
              width={40}
              height={40}
              className="dark:invert"
            />
          </Link>
        </div> */}
      </div>
    </section>
  )
}
