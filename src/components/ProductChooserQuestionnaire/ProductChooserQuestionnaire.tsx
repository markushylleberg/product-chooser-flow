import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ProductChooserStepItem, QuestionnarieAnswer } from '@/types'
import QuestionnaireButton from '@/components/QuestionnaireButton/QuestionnaireButton'
import QuestionnaireResultCard from '@/components/QuestionnaireResultCard/QuestionnaireResultCard'

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

    const hasPreviouslyAnswered = questionnarieData.some(answer => answer.id === step)

    if (hasPreviouslyAnswered) {
      const previousAnswerIndex = questionnarieData.findIndex(answer => answer.id === step)
      const newAnswers = questionnarieData
      newAnswers[previousAnswerIndex] = answer
      setQuestionnareData(newAnswers)
    } else {
      setQuestionnareData(existitingAnswers => [...existitingAnswers, answer])
    }

    onClick(step, value)
  }

  return (
    <div className="relative px-4">
      {data.map((item, index) => {
        return (
          <AnimatePresence key={index}>
            {activeStep === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.75 } }}
                exit={{ opacity: 0, y: 0, transition: { delay: 0.25 } }}
                className="absolute text-center w-[calc(100%-2rem)] lg:w-auto"
                key={index}
              >
                <h3 className="headline-md-text">{item.question}</h3>
                <ul className="mt-8 space-y-2">
                  {item.answers.map(({ text, value }, index) => {
                    return (
                      <li key={index}>
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
      <AnimatePresence>
        {activeStep === data.length + 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 2 } }}
            exit={{ opacity: 0, y: 0, transition: { delay: 0.25 } }}
            className="pt-8"
          >
            <QuestionnaireResultCard
              userInputData={questionnarieData}
              data={data}
              onResetFlow={() => setQuestionnareData([])}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
