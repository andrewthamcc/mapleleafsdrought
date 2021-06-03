import React from 'react'
import { DateTime } from 'luxon'
import { championshipWin } from '../../constants/wins'
import { getYears } from '../../utils'
import './time-ribbon.scss'

export const TimeRibbon = () => {
  const start = DateTime.fromJSDate(championshipWin)
  const difference = DateTime.now().diff(start, 'days').toObject()

  return (
    <div className="time-ribbon">
      <div className="time-ribbon-spacer" />
      <div
        className="time-ribbon-container"
        style={{ width: `calc(730px + 123px + ${difference.days}px)` }}
      >
        <div className="time-ribbon-ruler" />

        <div className="time-ribbon-years">
          {getYears(1967, new Date().getFullYear()).map((year, i) => (
            <span key={year} className="time-ribbon-years-marker" style={{ left: `calc(${365 * (i + 2)}px - 3rem + 16rem)` }}>{year}</span>
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
