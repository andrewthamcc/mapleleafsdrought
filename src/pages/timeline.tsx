import React from 'react'
import { Header } from '../layout/components'
import { TimeLineEvent, TimelineScale } from '../components'
import ArrowRight from '../svgs/arrow-right.svg'
import ArrowRightShort from '../svgs/arrow-right-short.svg'
import PixelImage from '../svgs/pixel.svg'
import { isBrowser } from '../utils'
import { events } from '../constants'
import './timeline.scss'

const TimeLine: React.FC = () => {
  return (
    <div
      className="timeline-wrapper"
      // mobile hack to avoid having to scroll vertically to remove the navbar/controls see the timeline ribbon scale
      style={{ height: `${isBrowser() ? window.innerHeight + 'px' : '100vh'}` }}
    >
      <Header />
      <div className="timeline">
        <div className="timeline-start">
          <h2 className="timeline-title">1967 - Present</h2>

          <p className="timeline-intro">
            The timeline of the Toronto Maple Leafs since their last Stanley Cup
            if one day were equal to 1 pixel
          </p>

          <p className="timeline-instructions">scroll to explore</p>
          <div className="timeline-arrow">
            <ArrowRight className="timeline-arrow-image" />
            <ArrowRightShort className="timeline-arrow-image-short" />
            <PixelImage />
          </div>
        </div>
        <TimelineScale />
        <TimeLineEvent event={events['1967-05-02']} />
        <TimeLineEvent event={events['1971-09-01']} />
        <TimeLineEvent event={events['1972-09-28']} />
        <TimeLineEvent event={events['1973-10-10']} />
        <TimeLineEvent event={events['1975-04-19']} />
        <TimeLineEvent event={events['1976-02-07']} />
        <TimeLineEvent event={events['1979-12-29']} />
        <TimeLineEvent event={events['1982-01-20']} markerPosition={75} />
        <TimeLineEvent event={events['1982-03-24']} markerPosition={35} />
        <TimeLineEvent event={events['1985-06-15']} />
        <TimeLineEvent event={events['1992-01-02']} />
        <TimeLineEvent event={events['1993-05-27']} markerPosition={70} />
        <TimeLineEvent event={events['1994-01-22']} markerPosition={30} />
        <TimeLineEvent event={events['1994-06-28']} />
        <TimeLineEvent event={events['1999-02-13']} />
        <TimeLineEvent event={events['2000-02-06']} markerPosition={75} />
        <TimeLineEvent event={events['2000-04-27']} markerPosition={30} />
        <TimeLineEvent event={events['2001-03-29']} />
        <TimeLineEvent event={events['2002-02-24']} />
        <TimeLineEvent event={events['2003-03-13']} />
        <TimeLineEvent event={events['2004-03-15']} />
        <TimeLineEvent event={events['2006-06-26']} markerPosition={45} />
        <TimeLineEvent event={events['2006-10-14']} markerPosition={65} />
        <TimeLineEvent event={events['2008-10-14']} markerPosition={70} />
        <TimeLineEvent event={events['2008-11-29']} markerPosition={40} />
        <TimeLineEvent event={events['2009-09-18']} markerPosition={40} />
        <TimeLineEvent event={events['2010-01-31']} markerPosition={70} />
        <TimeLineEvent event={events['2011-08-31']} />
        <TimeLineEvent event={events['2013-05-13']} />
        <TimeLineEvent event={events['2014-04-14']} />
        <TimeLineEvent event={events['2016-06-24']} markerPosition={40} />
        <TimeLineEvent event={events['2016-10-12']} markerPosition={65} />
        <TimeLineEvent event={events['2018-07-01']} />
        <TimeLineEvent event={events['2020-02-22']} />
        <TimeLineEvent event={events['2020-08-01']} markerPosition={75} />
        <TimeLineEvent event={events['2021-05-31']} />
      </div>
    </div>
  )
}

export default TimeLine
