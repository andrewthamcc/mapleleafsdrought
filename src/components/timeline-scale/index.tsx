import React, { useEffect, useState } from 'react'
import { DateTime } from 'luxon'
import { FadeIn } from '../fade-in'
import { championshipWin } from '../../constants'
import { getYears } from '../../utils'
import CaretDown from '../../svgs/caret-down.svg'
import './timeline-scale.scss'

export const TimelineScale = () => {
  const start = DateTime.fromJSDate(championshipWin)
  const difference = DateTime.now().diff(start, 'days').toObject()

  const [dateIndicator, setDateIndicator] = useState<string>('')
  const [showDateIndicator, setShowDateIndicator] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', (e) => handleScroll(e), true)

    return () => {
      window.removeEventListener('scroll', (e) => handleScroll(e))
    }
  }, [])

  // todo: figure out why the typings for Event are jank and don't contain scroll left
  const handleScroll = (e: any) => {
    const windowLocation = e.target.scrollLeft
    const innerWindowWidth = document.body.clientWidth

    // 1501 is width of intro + spacer + left padding + half width of indicator
    if (windowLocation > 1501 - innerWindowWidth / 2) {
      setShowDateIndicator(true)

      const daysToAdd = windowLocation - (1501 - innerWindowWidth / 2)
      const currentDateIndicator = DateTime.fromJSDate(
        new Date('1/1/1967')
      ).plus({ days: daysToAdd })

      if (difference.days && daysToAdd - difference.days > 100) {
        setDateIndicator('Present')
      } else {
        setDateIndicator(currentDateIndicator.toLocaleString())
      }
    } else {
      setShowDateIndicator(false)
    }
  }

  return (
    <div className="timeline-scale">
      <div className="timeline-scale-spacer" />
      <div
        className="timeline-scale-container"
        style={{ width: `calc(365px + 123px + ${difference.days}px)` }} // 1 year (spacer width) + days until May 2 + days until now
      >
        <div className="timeline-scale-ruler" />

        {showDateIndicator && (
          <FadeIn duration={500}>
            <div className="timeline-scale-indicator">
              <span>{dateIndicator}</span>
              <CaretDown className="timeline-scale-indicator-caret" />
            </div>
          </FadeIn>
        )}

        <div className="timeline-scale-years">
          {getYears(1967, new Date().getFullYear()).map((year, i) => (
            <span
              key={year}
              className="timeline-scale-years-marker"
              style={{ left: `calc(${365 * (i + 1)}px - 3rem + 16rem)` }} // year + index - half width of span + padding width
            >
              {year}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
