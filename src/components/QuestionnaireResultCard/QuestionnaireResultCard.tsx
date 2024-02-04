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
      <span className="label-text">Vi vil anbefale</span>
      <h1 className="mt-2 headline-lg-text">Clever One</h1>
      <p className="mt-4 opacity-80 body-text max-lg:text-center">
        Start dagen med fuld energi fra Clever-ladeboksen hjemme, og lad frit på Danmarks største
        ladenetværk.
      </p>
      <div className="mt-10 flex flex-col lg:flex-row max-lg:space-y-2 lg:space-x-2">
        <Link href="/product-chooser-flow?step=1" onClick={() => onResetFlow()} className="group">
          <Button style="secondary">
            <span className="flex items-center space-x-2 max-lg:justify-center">
              <span className="body-text">Prøv igen</span>
              <Icon
                name="switch"
                className="w-6 h-6 group-hover:-rotate-180 transition-transform duration-300 max-lg:hidden"
              />
            </span>
          </Button>
        </Link>
        <Link href="/" className="group">
          <Button style="primary">
            <span className="flex items-center space-x-2 max-lg:justify-center">
              <span className="body-text">Se Clever One</span>
              <Icon
                name="arrow-link"
                className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300m max-lg:hidden"
              />
            </span>
          </Button>
        </Link>
      </div>
      <button className="mt-8">Kontakt mig</button>
    </div>
  )
}
