"use client"
import { EmailRequest } from "@/models/EmailRequest"
import { LoaderCircleIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FormEvent, useState } from "react"
import ScheduleButton from "../sub/ScheduleButton"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { useToast } from "../ui/use-toast"

import { SectionTitles } from "@/data/SectionId"
import InstagramIcon from "../../../public/brand-imgs/instagram.png"
import LinkedInIcon from "../../../public/brand-imgs/linkedin.png"

export default function ContactSection({ id }: { id: string }) {
  const sectionTitle = SectionTitles.get(id)

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
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <h1 className="text-5xl font-bold col-span-full text-center">
        {sectionTitle}
      </h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Formulaire</CardTitle>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl ">Mathys Baudy</h2>
            <p className="text-lg">07 81 07 11 16</p>
            <p className="text-lg">baudytraining@gmail.com</p>
          </div>
          <div className="justify-self-end flex gap-4">
            <Link href="https://www.instagram.com/baudy_training">
              <Image
                src={InstagramIcon}
                alt="Instagram"
                width={40}
                height={40}
              />
            </Link>
            <Link href="https://fr.linkedin.com/in/mathys-baudy-425b9a18b">
              <Image src={LinkedInIcon} alt="Linkedin" width={40} height={40} />
            </Link>
          </div>
        </div>
        <div>
          <ScheduleButton />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.672566716417!2d4.854513413154141!3d45.75770987095956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb1c46ce64f3%3A0x44b494cf88f654f4!2sDynamique%20Step!5e0!3m2!1sfr!2sfr!4v1714027590166!5m2!1sfr!2sfr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-2 w-full h-80 border rounded-xl"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
