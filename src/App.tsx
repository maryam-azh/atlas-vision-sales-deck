import { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import { motion, AnimatePresence } from 'framer-motion'
import Slide1_Hero from './slides/Slide1_Hero'
import Slide2_Problem from './slides/Slide2_Problem'
// import Slide3_Market from './slides/Slide3_Market'
import Slide4_Solution from './slides/Slide4_Solution'
import Slide5_Product from './slides/Slide5_Product'
import Slide6_ValueProp from './slides/Slide6_ValueProp'
import Slide7_Roadmap from './slides/Slide7_Roadmap'
// import Slide8_GTM from './slides/Slide8_GTM'
import Slide9_Revenue from './slides/Slide9_Revenue'
// import Slide10_Ask from './slides/Slide10_Ask'
import Slide11_Team from './slides/Slide11_Team'
import Navigation from './components/Navigation'

const slides = [
  Slide1_Hero,
  Slide2_Problem,
  // Slide3_Market,
  Slide4_Solution,
  Slide5_Product,
  
  Slide7_Roadmap,
  // Slide8_GTM,
  Slide9_Revenue,
  Slide6_ValueProp,
  // Slide10_Ask,
  Slide11_Team,
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection: number) => {
    const nextSlide = currentSlide + newDirection
    if (nextSlide >= 0 && nextSlide < slides.length) {
      setDirection(newDirection)
      setCurrentSlide(nextSlide)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        paginate(1)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        paginate(-1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  // Swipe gesture handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
    trackMouse: true,
  })

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }
  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white" {...swipeHandlers}>
      {/* Animated gradient background */}
      <motion.div
        key={`gradient-${currentSlide}`}
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.15,
          // background: `radial-gradient(circle at ${50 + currentSlide * 10}% ${50 + currentSlide * 5}%, ${fromColor}, ${toColor})`
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 200, damping: 25 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
          }}
          className="absolute inset-0 pb-16 overflow-hidden"
          style={{ height: 'calc(100% - 5rem)' }}
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrev={() => paginate(-1)}
        onNext={() => paginate(1)}
      />
    </div>
  )
}

export default App
