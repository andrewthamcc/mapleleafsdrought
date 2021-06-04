import React, { useEffect, useState } from 'react'
import { DateTime } from 'luxon'
import { championshipWin } from '../../constants/wins'
import { getYears } from '../../utils'
import CaretDown from '../../svgs/caret-down.svg'
import './time-ribbon.scss'

export const TimeRibbon = () => {
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

    if (windowLocation > (1826 - (innerWindowWidth / 2))) { // 1826 is width of intro + spacer + left padding
      setShowDateIndicator(true)

      const daysToAdd = windowLocation - (1826 - innerWindowWidth / 2)
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
    <div className="time-ribbon">
      <div className="time-ribbon-spacer" />
      <div
        className="time-ribbon-container"
        style={{ width: `calc(730px + 123px + ${difference.days}px)` }} // 2 years + days until May 2 + days until now
      >
        <div className="time-ribbon-ruler" />

        {showDateIndicator && (
          <div className="time-ribbon-indicator">
            <span>{dateIndicator}</span>
            <CaretDown className="time-ribbon-indicator-caret"/>
          </div>
        )}

        <div className="time-ribbon-years">
          {getYears(1967, new Date().getFullYear()).map((year, i) => (
            <span
              key={year}
              className="time-ribbon-years-marker"
              style={{ left: `calc(${365 * (i + 2)}px - 3rem + 16rem)` }} // year + index - half width of span + padding width
            >
              {year}
            </span>
          ))}
        </div>

        <div
          className="time-ribbon-"
          style={{ width: `${difference.days}px` }}
        ></div>
      </div>
    </div>
  )
}
