export enum SectionId {
  welcome = "welcome",
  about = "about",
  coaching = "coaching",
  dietetic = "dietetic",
  prices = "prices",
  contact = "contact",
}

export const SectionTitles: Map<string, string> = new Map([
  [SectionId.about, "À propos"],
  [SectionId.coaching, "Coaching sportif"],
  [SectionId.dietetic, "Suivi diététique"],
  [SectionId.prices, "Prix / Avis"],
  [SectionId.contact, "Contact"],
])
