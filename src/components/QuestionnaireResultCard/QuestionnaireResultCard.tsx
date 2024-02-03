import { ProductChooserStepItem, QuestionnarieAnswer } from '@/types'
import Button from '@/components/Button/Button'
import Icon from '@/components/shared/Icon/Icon'
import Link from 'next/link'

interface QuestionnaireResultCardProps {
  userInputData: QuestionnarieAnswer[]
  data: ProductChooserStepItem[]
  onResetFlow: () => void
}

export default function QuestionnaireResultCard({
  userInputData,
  data,
  onResetFlow,
}: QuestionnaireResultCardProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="font-medium text-[15px]">Vi vil anbefale</span>
      <h1 className="mt-2 text-[52px] font-light">Clever One</h1>
      <p className="mt-4 opacity-80 font-normal text-[15px]">
        Start dagen med fuld energi fra Clever-ladeboksen hjemme, og lad frit på Danmarks største
        ladenetværk.
      </p>
      <div className="mt-10 flex space-x-2">
        <Link href="/product-chooser-flow?step=1" onClick={() => onResetFlow()} className="group">
          <Button style="secondary">
            <span className="flex items-center space-x-2">
              <span className="text-[15px] font-normal">Prøv igen</span>
              <Icon
                name="switch"
                className="w-6 h-6 group-hover:-rotate-180 transition-transform duration-300"
              />
            </span>
          </Button>
        </Link>
        <Link href="/" className="group">
          <Button style="primary">
            <span className="flex items-center space-x-2">
              <span className="text-[15px] font-normal">Se Clever One</span>
              <Icon
                name="arrow-link"
                className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </span>
          </Button>
        </Link>
      </div>
      <button className="mt-8">Kontakt mig</button>
    </div>
  )
}
