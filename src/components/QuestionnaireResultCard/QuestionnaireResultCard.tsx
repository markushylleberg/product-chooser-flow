import { ProductChooserStepItem, QuestionnarieAnswer } from '@/types'

interface QuestionnaireResultCardProps {
  userInputData: QuestionnarieAnswer[]
  data: ProductChooserStepItem[]
}

export default function QuestionnaireResultCard({
  userInputData,
  data,
}: QuestionnaireResultCardProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="font-medium text-[15px]">Vi vil anbefale</span>
      <h1 className="mt-2 text-[52px] font-light">Clever One</h1>
      <p className="mt-4 opacity-80 font-normal text-[15px]">
        Start dagen med fuld energi fra Clever-ladeboksen hjemme, og lad frit på Danmarks største
        ladenetværk.
      </p>
      <div className="mt-10">CTA</div>
      <button className="mt-8">Kontakt mig</button>
    </div>
  )
}
