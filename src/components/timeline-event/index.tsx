import React, { useState } from 'react'
import Dot from '../../svgs/dot.svg'
import { DateTime } from 'luxon'
import { TimeEvent } from '../../constants'
import './time-event.scss'

interface Props {
  event: TimeEvent
  icon?: JSX.Element
  markerPosition?: number // vertical position of the text
}

export const TimeLineEvent: React.FC<Props> = ({
  event,
  icon,
  markerPosition,
}) => {
  const [showDescription, setShowDescription] = useState(false)

  const timelineStart = DateTime.fromISO('1967-01-01')
  const daysFromStart = DateTime.fromJSDate(event.date).diff(
    timelineStart,
    'days'
  )

  const left = 1000 + 365 + 160 - 125 + daysFromStart.days // intro + spacer + left padding - 1/2 width of box
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
        {icon || <Dot className="time-event-marker" />}
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
