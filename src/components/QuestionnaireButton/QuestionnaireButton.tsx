import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Icon from '@/components/shared/Icon/Icon'
import { QuestionnarieAnswer } from '@/types'

interface QuestionnarieButtonProps {
  id: number
  text: string
  value: string
  answers: QuestionnarieAnswer[]
  onClick: (id: number, value: string) => void
}

export default function QuestionnaireButton({
  id,
  text,
  value,
  answers,
  onClick,
}: QuestionnarieButtonProps) {
  const [hasAnswered, setHasAnswered] = useState(false)

  const handleAnswerClick = (id: number, value: string) => {
    setHasAnswered(true)
    onClick(id, value)
  }

  const existingAnswer = answers.find(answer => answer.id === id)

  useEffect(() => {
    // If the user navigates back to this step, and changes their
    // answer, we want to set "hasAnswered" to false on previous answer.
    if (existingAnswer && existingAnswer.answer !== value) {
      setHasAnswered(false)
    }
  }, [existingAnswer])

  useEffect(() => {
    // Prefill the selected value if the user is navigating
    // between the steps of the flow.
    const previousAnswer = answers.find(answer => answer.id === id)?.answer
    if (previousAnswer === value) {
      setHasAnswered(true)
    }
  }, [])

  return (
    <button
      className={`flex items-center space-x-2.5 w-[440px] bg-white py-2 px-4 text-[15px] ${
        hasAnswered ? '' : 'group'
      }`}
      onClick={() => handleAnswerClick(id, value)}
    >
      <span className="w-6 h-6 bg-clever-green group-hover:bg-clever-green-tint-80 transition-colors text-white">
        {hasAnswered && (
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 4, opacity: 1 }}
            className="flex items-center justify-center"
          >
            <Icon name="check" />
          </motion.div>
        )}
      </span>
      <span className="group-hover:opacity-50 transition-opacity">{text}</span>
    </button>
  )
}
