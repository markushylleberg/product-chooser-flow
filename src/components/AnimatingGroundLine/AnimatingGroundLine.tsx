import { motion } from 'framer-motion'

export default function AnimatingGroundLine() {
  return (
    <motion.span
      initial={{ scale: '0%' }}
      animate={{ scale: '100%' }}
      transition={{ type: 'spring', duration: 1.5, delay: 0.5 }}
      style={{ originX: 1 }}
      className="w-full h-px inline-block bg-clever-green-tint-80"
    />
  )
}
