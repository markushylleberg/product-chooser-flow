export interface NavigationItemType {
  title: string
  slug: string
  icon: string | null
}

export interface ProductChooserStepItem {
  id: number
  question: string
  answers: {
    text: string
    value: string
  }[]
}

export interface QuestionnarieAnswer {
  id: number
  answer: string
}
