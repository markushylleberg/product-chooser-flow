import { ProductChooserStepItem, QuestionnarieAnswer } from '@/types'
import { AnimatePresence, motion } from 'framer-motion'
import QuestionnaireButton from '../QuestionnaireButton/QuestionnaireButton'
import { useState } from 'react'

interface ProductChooserQuestionnaire {
  data: ProductChooserStepItem[]
  activeStep: number
  onClick: (step: number, value: string) => void
}

export default function ProductChooserQuestionnaire({
  data,
  activeStep,
  onClick,
}: ProductChooserQuestionnaire) {
  const [questionnarieData, setQuestionnareData] = useState<QuestionnarieAnswer[]>([])

  const handleQuestionnaireClick = (step: number, value: string) => {
    const answer = { id: step, answer: value }
    setQuestionnareData(existitingAnswers => [...existitingAnswers, answer])
    onClick(step, value)
  }

  return (
    <div className="relative">
      {data.map((item, index) => {
        return (
          <AnimatePresence>
            {activeStep === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: item.id === 1 ? 0 : 1.75 } }}
                exit={{ opacity: 0, y: 0, transition: { delay: 0.75 } }}
                className="absolute text-center"
                key={index}
              >
                <h3 className="text-[26px] font-light">{item.question}</h3>
                <ul className="mt-8 space-y-2">
                  {item.answers.map(({ text, value }, index) => {
                    return (
                      <li>
                        <QuestionnaireButton
                          id={item.id}
                          text={text}
                          value={value}
                          answers={questionnarieData}
                          onClick={handleQuestionnaireClick}
                        />
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        )
      })}
    </div>
  )
}
