import { motion } from 'framer-motion'

export default function AnimatingGroundLine({ enabled }: { enabled: boolean }) {
  return (
    <motion.span
      initial={{ scale: '0%' }}
      animate={enabled ? { scale: '100%' } : { scale: '100%', x: '-100%' }}
      transition={{ type: 'spring', duration: 1.5, delay: 0.5 }}
      style={{ originX: 1 }}
      className="w-full h-px inline-block bg-clever-green-tint-80 absolute"
    />
  )
}
