// Declarations for static asset imports used by Vite + TypeScript
declare module '*.avif'
declare module '*.bmp'
declare module '*.gif'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.png'
declare module '*.webp'
declare module '*.svg' {
  import * as React from 'react'
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module '*.mp4'
declare module '*.webm'
declare module '*.ogg'
declare module '*.wav'
declare module '*.flac'
declare module '*.aac'

// Allow importing CSS modules if used
declare module '*.module.css'
declare module '*.module.scss'
