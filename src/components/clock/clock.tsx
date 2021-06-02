import React, { useState, useEffect } from 'react'
import { calculateTime } from './calculateTime'
import './clock.scss'

interface Props {
  startTime: Date
}

export const Clock: React.FC<Props> = ({ startTime }) => {
  const [timeDiff, setTimeDiff] = useState(calculateTime(startTime))

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeDiff(calculateTime(startTime))
    }, 1000)

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timeout)
  })

  return (
    <div className="clock">
      <div className="clock-unit">
        <span className="clock-unit-number">{timeDiff.years}</span>
        <span className="clock-unit-descriptor">years</span>
      </div>
      <div className="clock-unit">
        <span className="clock-unit-number">
          {timeDiff.months < 10 ? `0${timeDiff.months}` : timeDiff.months}
        </span>
        <span className="clock-unit-descriptor">months</span>
      </div>
      <div className="clock-unit">
        <span className="clock-unit-number">{timeDiff.days}</span>
        <span className="clock-unit-descriptor">days</span>
      </div>
      <div className="clock-unit">
        <span className="clock-unit-number">{timeDiff.hours}</span>
        <span className="clock-unit-descriptor">hours</span>
      </div>

      <div className="clock-unit">
        <span className="clock-unit-seperator">:</span>
        <div className="clock-unit-seperator-base" />
      </div>

      <div className="clock-unit">
        <span className="clock-unit-number">{timeDiff.minutes}</span>
        <span className="clock-unit-descriptor">minutes</span>
      </div>

      <div className="clock-unit">
        <span className="clock-unit-seperator">:</span>
        <div className="clock-unit-seperator-base" />
      </div>

      <div className="clock-unit">
        <span className="clock-unit-number">
          {timeDiff.seconds < 10
            ? `0${Math.floor(timeDiff.seconds)}`
            : Math.floor(timeDiff.seconds)}
        </span>
        <span className="clock-unit-descriptor">seconds</span>
      </div>
    </div>
  )
}
