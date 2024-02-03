import { ProductChooserStepItem, QuestionnarieAnswer } from '@/types'

interface QuestionnaireResultCardProps {
  userInputData: QuestionnarieAnswer[]
  data: ProductChooserStepItem[]
}

export default function QuestionnaireResultCard({
  userInputData,
  data,
}: QuestionnaireResultCardProps) {
  return <div className="border border-gray-500">results</div>
}
