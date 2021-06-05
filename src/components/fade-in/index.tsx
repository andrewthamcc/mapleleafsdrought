import React from 'react'
import './fade-in.scss'

interface Props {
  duration?: number
  delay?: number
}

export const FadeIn: React.FC<Props> = ({
  duration = 500,
  delay = 0,
  children,
}) => {
  return (
    <div
      className="fade-in"
      style={{
        animationDuration: duration + 'ms',
        animationDelay: delay + 'ms',
      }}
    >
      {children}
    </div>
  )
}
