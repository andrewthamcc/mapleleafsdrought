import { useEffect, useState } from 'react'
import { DateTime } from 'luxon'
import { INTRO_WIDTH } from '../constants/widths'
import type { TimeEvent } from '../constants/events'
import EventMarker from '../images/event-marker.svg'

interface Props {
  date: Date
  event: TimeEvent
}

export const TimelineEvent = ({ date, event }: Props) => {
  const startDate = DateTime.fromJSDate(new Date('1967/01/01'))
  const eventDate = DateTime.fromJSDate(date)
  const [showDescription, setShowDescription] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', (e) => handleScroll(e), true)

    return () => {
      window.removeEventListener('scroll', (e) => handleScroll(e))
    }
  }, [])

  const handleScroll = (e: any) => {
    const windowLocation = e.target.scrollLeft
    const innerWindowWidth = document.body.clientWidth

    if (windowLocation > INTRO_WIDTH - innerWindowWidth / 2) {
      const daysToAdd = windowLocation - (INTRO_WIDTH - innerWindowWidth / 2)
      const currentDate = startDate.plus({
        days: daysToAdd,
      })
      const dateDifference = eventDate.diff(currentDate, 'months').toObject()

      if (event.description && dateDifference && dateDifference.months) {
        if (dateDifference.months <= 10) {
          setShowDescription(true)
        }

        if (dateDifference.months >= 10 || dateDifference.months <= -8) {
          setShowDescription(false)
        }
      }
    }
  }

  const daysFromStart = eventDate.diff(startDate, 'days')
  const left = 1000 + 365 + daysFromStart.days // intro + spacer

  return (
    <div
      className="absolute w-[20rem]"
      style={{
        left: `calc(${left}px - 10rem)`,
        bottom: `${event.position ? event.position : event.icon ? 25 : 50}%`,
      }}
      onMouseOver={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <div className="flex flex-col items-center justify-center text-center">
        {event.icon ? (
          <img aria-hidden="true" className="h-10" src={event.icon.src} />
        ) : (
          <img
            aria-hidden="true"
            src={EventMarker.src}
            className={`time-event-marker transition-all duration-500 hover:scale-125 ${
              showDescription && 'scale-125'
            }`}
          />
        )}
        <p className="text-shadow-sm my-2 font-[Oswald] text-sm">
          {date.toLocaleDateString()}
        </p>
        <p className="text-shadow-sm text-lg">{event.title}</p>
        <p
          className={`text-xs transition-all duration-500 ${
            !showDescription ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {event.description}
        </p>
      </div>
    </div>
  )
}
