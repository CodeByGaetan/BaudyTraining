import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function PricesSection() {
  return (
    <section className="container flex flex-col gap-16 pt-16">
      <h1 className="text-5xl font-bold text-center">Prix / Avis</h1>
      <div className="grid grid-cols-1 md:grid-cols-[45%,1fr] gap-8 pb-16">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Coaching sportif
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
                Suivis diététiques
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
                Coaching + Diététiques
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p>Sans engagement : 200€/h</p>
              <p className="mt-2">Avec engagement :</p>
              <ul className="list-disc pl-6">
                <li>3 mois : 180€/h</li>
                <li>{">"} 6 mois : 160€/h</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <script
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></script>
          <div
            className="elfsight-app-72c45d48-d927-4e5e-8eec-51a80bad58b6"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  )
}
