interface ImagePlaceholderProps {
  label: string
  className?: string
  color?: 'pink' | 'blue' | 'yellow' | 'orange' | 'black'
}

const colorMap = {
  pink: 'bg-accent-pink',
  blue: 'bg-accent-blue',
  yellow: 'bg-accent-yellow',
  orange: 'bg-accent-orange',
  black: 'bg-black',
}

export default function ImagePlaceholder({ label, className = '', color = 'black' }: ImagePlaceholderProps) {
  return (
    <div className={`${colorMap[color]} flex items-center justify-center border-2 border-black ${className}`}>
      <span className={`font-mono text-sm ${color === 'black' ? 'text-white' : 'text-black'}`}>
        {label}
      </span>
    </div>
  )
}
