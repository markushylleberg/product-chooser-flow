import { ProductChooserStepItem, QuestionnarieAnswer, SolutionItem } from '@/types'
import Button from '@/components/Button/Button'
import Icon from '@/components/shared/Icon/Icon'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { findBestMatchingSolution } from '@/utils/find-solution'

interface QuestionnaireResultCardProps {
  userInputData: QuestionnarieAnswer[]
  solutionsData: SolutionItem[]
  onResetFlow: () => void
}

export default function QuestionnaireResultCard({
  userInputData,
  solutionsData,
  onResetFlow,
}: QuestionnaireResultCardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [solution, setSolution] = useState<SolutionItem | null>(null)

  useEffect(() => {
    const bestMatchingSolution = findBestMatchingSolution({
      userInput: userInputData,
      solutions: solutionsData,
    })

    setSolution(bestMatchingSolution)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      <AnimatePresence mode="popLayout">
        {isLoading && (
          <motion.div
            className="flex items-center justify-center top-20 left-1/2 -translate-x-1/2 absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
          >
            <span className="label-text">Søger...</span>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {!isLoading && solution && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.5, duration: 0.75, type: 'spring' }}
            className="flex flex-col items-center justify-center"
          >
            <span className="label-text">Vi vil anbefale</span>
            <h1 className="mt-2 headline-lg-text">{solution.title}</h1>
            <p className="mt-4 opacity-80 body-text text-center">{solution.description}</p>
            <div className="mt-10 flex flex-col lg:flex-row max-lg:space-y-2 lg:space-x-2">
              <Link
                href="/product-chooser-flow?step=1"
                onClick={() => onResetFlow()}
                className="group"
              >
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
