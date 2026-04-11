import { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import { motion, AnimatePresence } from 'framer-motion'
import SlideCover from './slides/SlideCover'
import SlideAboutUs from './slides/SlideAboutUs'
import SlideCompanion from './slides/Slide00_AtlasServices'
import Slide02_Evaluation from './slides/Slide02_Evaluation'
import Slide03_Execution from './slides/Slide03_Execution'
import SlideTransitionAgentic from './slides/SlideTransitionAgentic'
import SlideEngagementModel from './slides/SlideEngagementModel'
import SlideNextSteps from './slides/SlideNextSteps'
import SlideThankYou from './slides/SlideThankYou'
// import Slide1_Hero from './slides/Slide1_Hero'
// import Slide2_Problem from './slides/Slide2_Problem'
// import Slide4_Solution from './slides/Slide4_Solution'
// import Slide5_Product from './slides/Slide5_Product'
// import Slide6_ValueProp from './slides/Slide6_ValueProp'
// import Slide7_Roadmap from './slides/Slide7_Roadmap'
// import Slide9_Revenue from './slides/Slide9_Revenue'
// import Slide11_Team from './slides/Slide11_Team'
import Navigation from './components/Navigation'
import Slide01_Discovery from './slides/Slide01_Discovery'
// import Slide0a_AIIndex from './slides/Slide0a_AIIndex'

const slides = [
  SlideCover,
  SlideAboutUs,
  SlideCompanion,
  Slide01_Discovery,
  // Slide0a_AIIndex,
  Slide02_Evaluation,
  Slide03_Execution,
  SlideTransitionAgentic,
  SlideEngagementModel,
  SlideNextSteps,
  SlideThankYou,
  // Slide1_Hero,
  // Slide2_Problem,
  // // Slide3_Market,
  // Slide4_Solution,
  // Slide5_Product,
  
  // Slide7_Roadmap,
  // // Slide8_GTM,
  // Slide9_Revenue,
  // Slide6_ValueProp,
  // // Slide10_Ask,
  // Slide11_Team,
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
