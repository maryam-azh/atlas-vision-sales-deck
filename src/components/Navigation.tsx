interface NavigationProps {
  currentSlide: number
  totalSlides: number
  onPrev: () => void
  onNext: () => void
}

export default function Navigation({ currentSlide, totalSlides, onPrev, onNext }: NavigationProps) {
  return (
    <div className="fixed bottom-4 md:bottom-8 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-4xl md:max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Progress */}
        <div className="flex items-center gap-2 md:gap-4">
          <span className="font-mono text-xs md:text-sm font-medium">
            {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
          <div className="w-40 md:w-64 h-1 bg-black/10">
            <div
              className="h-full bg-black transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>

        {/* Right: Navigation buttons */}
        <div className="flex gap-2 md:gap-4">
          <button
            onClick={onPrev}
            disabled={currentSlide === 0}
            className="w-14 h-14 md:w-16 md:h-16 border-2 border-black flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-black/40 hover:bg-black hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-black"
            aria-label="Previous Slide"
            style={{ minWidth: 48, minHeight: 48 }}
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 4L6 10L12 16" />
            </svg>
          </button>
          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="w-14 h-14 md:w-16 md:h-16 border-2 border-black flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-black/40 hover:bg-black hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-black"
            aria-label="Next Slide"
            style={{ minWidth: 48, minHeight: 48 }}
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 4L14 10L8 16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
