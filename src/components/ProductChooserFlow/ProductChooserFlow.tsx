'use client'

import { motion } from 'framer-motion'

import AnimatingBackground from '@/components/AnimatingBackground/AnimatingBackground'
import ProductChooserQuestionnaire from '@/components/ProductChooserQuestionnaire/ProductChooserQuestionnaire'

import { ProductChooserStepItem } from '@/types'
import { useState } from 'react'

interface ProductChooserFlowProps {
  data: ProductChooserStepItem[]
}

export default function ProductChooserFlow({ data }: ProductChooserFlowProps) {
  const [activeStep, setActiveStep] = useState<number>(1)

  const handleQuestionnaireClick = (index: number) => {
    setActiveStep(index + 1)
  }

  return (
    <div className="relative h-screen w-full pt-60">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 1.5, delay: 1.5, type: 'spring' }}
        className="w-full h-[200px] max-w-[440px] mx-auto"
      >
        <ProductChooserQuestionnaire
          data={data}
          activeStep={activeStep}
          onClick={handleQuestionnaireClick}
        />
      </motion.div>
      <div className="absolute bottom-10 w-full">
        <AnimatingBackground data={data} activeStep={activeStep} />
      </div>
    </div>
  )
}
