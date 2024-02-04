'use client'

import { motion } from 'framer-motion'

import AnimatingBackground from '@/components/AnimatingBackground/AnimatingBackground'
import ProductChooserQuestionnaire from '@/components/ProductChooserQuestionnaire/ProductChooserQuestionnaire'

import { ProductChooserStepItem, SolutionItem } from '@/types'
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

interface ProductChooserFlowProps {
  questionsData: ProductChooserStepItem[]
  solutionsData: SolutionItem[]
}

export default function ProductChooserFlow({
  questionsData,
  solutionsData,
}: ProductChooserFlowProps) {
  const [activeStep, setActiveStep] = useState<number>(1)

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleQuestionnaireClick = (index: number, value: string) => {
    const newStep = index + 1
    const currentSearchParams = new URLSearchParams(Array.from(searchParams.entries()))

    if (!newStep) {
      currentSearchParams.delete('step')
    } else {
      currentSearchParams.set('step', String(newStep))
    }

    const stepParam = currentSearchParams.toString()
    const query = `?${stepParam}`

    router.push(`${pathname}${query}`)
  }

  useEffect(() => {
    const newStep = searchParams.get('step')

    if (newStep) {
      setActiveStep(Number(newStep))
    }
  }, [searchParams])

  return (
    <div className="relative h-[85vh] lg:h-screen w-full pt-40">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 1.5, delay: 1.5, type: 'spring' }}
        className="w-full h-[200px] max-w-[440px] mx-auto flex flex-col justify-start"
      >
        <ProductChooserQuestionnaire
          questionsData={questionsData}
          solutionsData={solutionsData}
          activeStep={activeStep}
          onClick={handleQuestionnaireClick}
        />
      </motion.div>
      <div className="absolute bottom-5 w-full pointer-events-none">
        <AnimatingBackground data={questionsData} activeStep={activeStep} />
      </div>
    </div>
  )
}
