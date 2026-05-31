export interface Job {
  id: string
  title: string
  gender: string
  location: string
  employment: string
}

export const jobs: Job[] = [
  {
    id: "mt-l-bta-mfa-altenburg",
    title: "MT-L / BTA / MFA",
    gender: "(w/m/d)",
    location: "Altenburg",
    employment: "Voll- oder Teilzeit",
  },
  {
    id: "mt-l-bta-mfa-eisenberg",
    title: "MT-L / BTA / MFA",
    gender: "(w/m/d)",
    location: "Eisenberg",
    employment: "Voll- oder Teilzeit",
  },
  {
    id: "physiotherapeut-altenburg",
    title: "Physiotherapeut",
    gender: "(w/m/d)",
    location: "Altenburg",
    employment: "Voll- oder Teilzeit",
  },
  {
    id: "fahrer-altenburg",
    title: "Fahrer",
    gender: "(w/m/d)",
    location: "Altenburg",
    employment: "Teilzeit",
  },
  {
    id: "ausbildungsplatz-mt-l-eisenberg",
    title: "Ausbildungsplatz MT-L",
    gender: "(w/m/d)",
    location: "Eisenberg",
    employment: "Voll- oder Teilzeit",
  },
  {
    id: "mt-l-bta-mfa-quereinstieg-altenburg",
    title: "MT-L / BTA / MFA im Quereinstieg",
    gender: "(w/m/d)",
    location: "Altenburg",
    employment: "Voll- oder Teilzeit",
  },
]
