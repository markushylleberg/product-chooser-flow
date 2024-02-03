import { ProductChooserStepItem } from '@/types'
import AnimatingGroundLine from '../AnimatingGroundLine/AnimatingGroundLine'
import { useState } from 'react'

interface AnimatingBackgroundProps {
  data: ProductChooserStepItem[]
  activeStep: number
}

export default function AnimatingBackground({ data, activeStep }: AnimatingBackgroundProps) {
  const [isGroundLineEnabled, setIsGroundLineEnabled] = useState(true)

  return (
    <div>
      <AnimatingGroundLine enabled={activeStep < 5 ? true : false} />
    </div>
  )
}
