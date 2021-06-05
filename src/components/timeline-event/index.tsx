import React, { useState } from 'react'
import Dot from '../../svgs/dot.svg'
import { DateTime } from 'luxon'
import './time-event.scss'
import { TimeEvent } from '../../constants'

interface Props {
  event: TimeEvent
  markerPosition?: number // vertical position of the text
}

export const TimeLineEvent: React.FC<Props> = ({ event, markerPosition }) => {
  const [showDescription, setShowDescription] = useState(false)

  const timelineStart = DateTime.fromISO('1967-01-01')
  const daysFromStart = DateTime.fromJSDate(event.date).diff(
    timelineStart,
    'days'
  )

  const left = 1000 + 730 + 160 - 125 + daysFromStart.days // intro + spacer + left padding - 1/2 width of box
  const bottom = `50`

  return (
    <div
      className="time-event"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      style={{
        left: `${left}px`,
        bottom: `${markerPosition ? markerPosition : bottom}%`,
      }}
    >
      <div className="time-event-marker-container">
        <Dot className="time-event-marker" />
        <p className="time-event-date">{event.date.toLocaleDateString()}</p>
        <p className="time-event-title">{event.title}</p>
        <p
          className={`time-event-description ${showDescription ? 'show' : ''}`}
        >
          {event.description}
        </p>
      </div>
    </div>
  )
}
