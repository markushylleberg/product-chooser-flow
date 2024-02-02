import { ProductChooserStepItem } from '@/types'

interface ProductChooserQuestionnaire {
  data: ProductChooserStepItem[]
  activeStep: number
  onClick: (index: number) => void
}

export default function ProductChooserQuestionnaire({
  data,
  activeStep,
  onClick,
}: ProductChooserQuestionnaire) {
  const handleQuestionnaireClick = (index: number) => {
    onClick(index)
  }

  return (
    <div className="relative">
      {data.map((item, index) => {
        return (
          <button
            className={`absolute text-center ${activeStep === item.id ? '' : 'hidden'}`}
            onClick={() => handleQuestionnaireClick(item.id)}
            key={index}
          >
            {item.question}
          </button>
        )
      })}
    </div>
  )
}
