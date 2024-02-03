import { ProductChooserStepItem } from '@/types'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from '../shared/Icon/Icon'

interface AnimatingSceneResolverProps {
  activeStep: number
  data: ProductChooserStepItem[]
}

export default function AnimatingSceneResolver({ activeStep, data }: AnimatingSceneResolverProps) {
  return (
    <div className="h-[40vh] w-full">
      {data.map((step, stepIndex) => {
        return (
          <AnimatePresence>
            {activeStep === step.id && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } }}
                exit={{ opacity: 0, x: -50, transition: { duration: 0.8, delay: 0.2 } }}
                className={`absolute inset-0 ${
                  activeStep === step.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {step.backgroundElements.map((element, index) => {
                  return (
                    <motion.div
                      initial={{ x: '10%', opacity: 0 }}
                      animate={{
                        x: element.left,
                        opacity: 1,
                        transition: {
                          delay: stepIndex === 0 ? 2 : 0.5,
                        },
                      }}
                      exit={{
                        x: element.exitLeft,
                        opacity: 0,
                        transition: { duration: 0.8, type: 'spring' },
                      }}
                      className="absolute pointer-events-none w-screen"
                      style={{
                        bottom: element.bottom,
                        width: element.width,
                      }}
                    >
                      <Icon name={element.source} className="w-full" />
                    </motion.div>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        )
      })}
    </div>
  )
}
