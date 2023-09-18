import { useEffect, useState } from 'react'
import { DateTime } from 'luxon'
import CaretDown from '../images/caret-down.svg'
import { INTRO_WIDTH } from '../constants/widths'

const getYears = (start: number, end: number) => {
  return Array(end - start + 1)
    .fill(0)
    .map((_, index) => start + index)
}

export const TimelineScale = () => {
  const start = DateTime.fromJSDate(new Date('1967/05/02'))
  const difference = DateTime.now().diff(start, 'days').toObject()

  const [dateIndicator, setDateIndicator] = useState<string>('')
  const [showDateIndicator, setShowDateIndicator] = useState(false)

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
      const currentDateIndicator = start.plus({ days: daysToAdd })

      if (DateTime.now().diff(currentDateIndicator, 'month').months < 8) {
        setDateIndicator('Present')
      } else {
        setDateIndicator(currentDateIndicator.toLocaleString())
      }

      setShowDateIndicator(true)
    } else {
      setShowDateIndicator(false)
    }
  }

  return (
    <div className="absolute left-[1000px] h-full pr-[20rem] md:pr-[50rem]">
      <div
        className="absolute z-10 float-left h-full w-[365px] bg-leafs-blue" // spacer (1 year width)
      />
      <div
        // timeline container
        className="h-full"
        style={{ width: `calc(365px + 123px + ${difference.days}px)` }} // 1 year (spacer width) + days until May 2 + days until now
      >
        <div // timeline ruler
          className="bottom-0 h-full bg-scale bg-left-bottom bg-repeat-x"
        >
          <a
            href="https://github.com/andrewthamcc"
            target="_blank"
            className="absolute bottom-0 right-0 pr-2 text-xs hover:underline"
          >
            by Andrew Tham
          </a>
        </div>

        <div
          className={`fixed w-[10rem] text-center font-[Oswald] text-xl transition-all bottom-[10%] md:bottom-[15%] ${
            showDateIndicator ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ left: 'calc(50% - 5rem)' }}
        >
          <span>{dateIndicator}</span>
          <img className="h-5 w-[10rem]" src={CaretDown.src} />
        </div>
        <div className="absolute bottom-[4%] font-[Oswald]">
          {getYears(1967, new Date().getFullYear()).map((year, i) => (
            <span
              key={year}
              className="text-shadow-sm absolute bottom-[4%] z-10 w-[6rem] text-center text-2xl"
              style={{ left: `calc(${365 * (i + 1)}px - 3rem)` }} // year + index - half width of span + padding width
            >
              {year}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
