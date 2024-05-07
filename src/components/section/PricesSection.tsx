import { SectionId, SectionTitles } from "@/data/SectionId"
import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

export default function PricesSection({ id }: { id: string }) {
  const sectionTitle = SectionTitles.get(id)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://static.elfsight.com/platform/platform.js"
    script.setAttribute("data-use-service-core", "")
    script.defer = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="flex flex-col gap-16">
      <h1 className="text-5xl font-bold text-center">{sectionTitle}</h1>
      <div className="grid grid-cols-1 md:grid-cols-[45%,1fr] gap-8">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {SectionTitles.get(SectionId.coaching)}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p>Sans engagement : 50€/h</p>
              <p className="mt-2">Avec engagement :</p>
              <ul className="list-disc pl-6">
                <li>3 mois : 45€/h</li>
                <li>{">"} 6 mois : 40€/h</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {SectionTitles.get(SectionId.dietetic)}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p>Premier bilan {"(1h)"}: 60€</p>
              <p>Suivis nutritionnels {"(45 min)"}: 40€</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Coaching + Diététique
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p>Sans engagement : 200€/mois</p>
              <p className="mt-2">Avec engagement :</p>
              <ul className="list-disc pl-6">
                <li>3 mois : 180€/mois</li>
                <li>{">"} 6 mois : 160€/mois</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div
          className="elfsight-app-6d8e18cb-9f33-47d0-8195-d5c2b2c1bcbb"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  )
}
