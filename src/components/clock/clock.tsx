import React, { useState, useEffect } from 'react'
import { calculateTime } from './calculateTime'
import { ClockUnit } from './components'
import './clock.scss'

interface Props {
  startTime: Date
  title: string
}

export const Clock: React.FC<Props> = ({ startTime, title }) => {
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
      <p className="clock-title">{title}</p>

      <div className="clock-counter">
        <div className="clock-counter-flex-container">
          <div className="clock-counter-date">
            <ClockUnit time={timeDiff.years} unit="years" />
            <ClockUnit time={timeDiff.months} unit="months" />
            <ClockUnit time={timeDiff.days} unit="days" />
          </div>
          <div className="clock-counter-time">
            <ClockUnit time={timeDiff.hours} unit="hours" />
            <div className="clock-unit">
              <span className="clock-unit-seperator">:</span>
              <div className="clock-unit-seperator-base" />
            </div>
            <ClockUnit time={timeDiff.minutes} unit="minutes" />
            <div className="clock-unit">
              <span className="clock-unit-seperator">:</span>
              <div className="clock-unit-seperator-base" />
            </div>
            <ClockUnit time={timeDiff.seconds} unit="seconds" />
          </div>
        </div>
      </div>
    </div>
  )
}
