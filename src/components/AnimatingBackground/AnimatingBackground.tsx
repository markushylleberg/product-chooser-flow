import { ProductChooserStepItem } from '@/types'
import AnimatingGroundLine from '@/components/AnimatingGroundLine/AnimatingGroundLine'
import AnimatingSceneResolver from '@/components/AnimatingSceneResolver/AnimatingSceneResolver'

interface AnimatingBackgroundProps {
  data: ProductChooserStepItem[]
  activeStep: number
}

export default function AnimatingBackground({ data, activeStep }: AnimatingBackgroundProps) {
  return (
    <div>
      <AnimatingSceneResolver activeStep={activeStep} data={data} />
      <AnimatingGroundLine enabled={activeStep < 5 ? true : false} />
    </div>
  )
}
