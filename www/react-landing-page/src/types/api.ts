export type TechIcon = {
  title: string
  icon: {
    alternativeText: string
    url: string
  }
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button?: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  id: number
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type SectionModulesProps = {
  title: string
  cardTextList: Array<{
    title: string
    subTitle: string
    description: string
  }>
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type pricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallments: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: {
    photo: {
      alternativeText: string
      url: string
    }
    name: string
    role: string
    socialLinks: {
      title: string
      url: string
    }
    description: string
  }
}

export type SectionReviewsUsProps = {
  title: string
  cardReviews: {
    name: string
    photo: {
      alternativeText: string
      url: string
    }
    description: string
  }
}

export type SectionFaqProps = {
  title: string
  questions: {
    nquestioname: string
    answer: string
  }
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: pricingBoxProps
  sectionAboutUsProps: SectionAboutUsProps
  sectionReviews: SectionReviewsUsProps
  sectionFaq: SectionFaqProps
  sectionConcepts: sectionConceptsProps
}
