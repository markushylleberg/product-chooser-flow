import { ProductChooserStepItem } from '@/types'
import AnimatingGroundLine from '../AnimatingGroundLine/AnimatingGroundLine'

interface AnimatingBackgroundProps {
  data: ProductChooserStepItem[]
  activeStep: number
}

export default function AnimatingBackground({ data, activeStep }: AnimatingBackgroundProps) {
  return (
    <div>
      <AnimatingGroundLine />
    </div>
  )
}
