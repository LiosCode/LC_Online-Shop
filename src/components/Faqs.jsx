// Diese Datei beschriftet die Seite vor dem Footer ganz Unten von der <Webseite>
// Hier werden Häufig gestellte Fragen mit Ihren jeweiligen Antworten hinterlegt
// um den Kunden bei suchen zu unterstützen

import Image from 'next/image'

import { Container } from '../components/Container'
import backgroundImage from '../images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Übernimmt 50Cent.com die Mehrwertsteuer?',
      answer: 'Nein, aber wenn Sie Ihr Unternehmen ins Ausland verlagern, können Sie es wahrscheinlich ignorieren.',
    },
    {
      question: 'Kann ich mein Abonnement per Bestellung bezahlen??',
      answer: 'Auf jeden Fall nehmen wir Ihr Geld in jeder Form gerne entgegen.',
    },
    {
      question: 'Wie bewerbe ich mich für eine Stelle bei 50Cent.com?',
      answer: 'Wir stellen nur unsere Kunden ein, also melden Sie sich für mindestens 6 Monate an und lassen Sie uns dann reden.',
    },
  ],
  [
    {
      question: 'Worum ging es in diesem Erfahrungsbericht zum Thema Steuerbetrug?',
      answer: '50Cent.com ist lediglich eine Ticketverkaufsplattform, Ihre Buchungen liegen letztendlich in Ihrer Verantwortung.',
    },
    {
      question:
        '50Cent.com klingt schrecklich, aber warum fühle ich mich immer noch zum Kauf gezwungen?',
      answer:
        'Das ist die Kraft exzellenten visuellen Designs. Man kann dem einfach nicht widerstehen, egal wie schlecht es tatsächlich funktioniert.',
    },
    {
      question:
        'Ich habe andere Unternehmen namens 50Cent.com gefunden. Sind Sie sicher, dass Sie diesen Namen verwenden können?',
      answer:
        'Ehrlich gesagt sind wir uns überhaupt nicht sicher. Wir haben nichts wirklich integriert oder so, wir fanden es nur cool und haben diese Website erstellt.',
    },
  ],
  [
    {
      question: 'Wie erstellen Sie Berichte?',
      answer:
        'Sie teilen uns einfach mit, für welche Veranstaltung Sie einen Bericht benötigen, und wir beauftragen unsere Kinder, mit den besten Buntstiften wunderschöne Geschichten für Sie zu erstellen.',
    },
    {
      question: 'Können wir weitere Inventarfunktionen erwarten?',
      answer: 'Im Leben ist es wirklich besser, überhaupt nichts zu erwarten.',
    },
    {
      question: 'Ich habe mein Passwort verloren, wie komme ich in mein Konto?',
      answer:
        'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      // Hier wird ein RAhmen in L-Form um die Seite definiert Das L lehnt sich an den Linken und unteren rand der Seite
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      {/* Hier wird der Hintergrund Definiert */}
      
      {/* <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          
          {/* Hier wird der Titel der Seite mit zusätzlichen Untertitel definiert */}
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Häufig gestellte Fragen
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Wenn Sie nicht finden wonach Sie suchen, schreiben Sie gerne unserer Kundenbetreung.
            Bitte scheuen Sie sich nicht uns zu schreiben auch wenn wir durch das hohe Aufkommen an Anfragen, 
            nicht immer direkt persönlich Antworten können.
            Es kann durchaus vorkommen, dass die Bearbeitung schneller stattfindet als gewöhnlich.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    {/* Hier werden die häufig gestellten Fragen in Ihrem AUssehen definiert */}
                    <h3 className="font-display text-lg leading-7 text-red-900">
                      {faq.question}
                    </h3>
                   {/* Hier werden die Antworten in Ihrem Aussehen definiert */}
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
