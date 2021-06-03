import React from 'react'
import { DateTime } from 'luxon'
import { championshipWin } from '../../constants/wins'
import './time-ribbon.scss'

export const TimeRibbon = () => {
  const start = DateTime.fromJSDate(championshipWin)
  const difference = DateTime.now().diff(start, 'days').toObject()

  return (
    <div className="time-ribbon" style={{ width: `${difference.days}px` }}>
    </div>
  )
}
