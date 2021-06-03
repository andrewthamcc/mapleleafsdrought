import React from 'react'
import './clock-unit.scss'

interface Props {
  time?: number
  unit: 'years' | 'months' | 'days' | 'minutes' | 'seconds'
}

export const ClockUnit: React.FC<Props> = ({ time = 0, unit }) => {
  return (
    <div className="clock-unit">
      <span className="clock-unit-number">
        {time < 10 ? `0${Math.floor(time)}` : Math.floor(time)}
      </span>
      <span className="clock-unit-descriptor">{unit}</span>
    </div>
  )
}
