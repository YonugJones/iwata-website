// Transition wrapper for fade in and fade out

import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
