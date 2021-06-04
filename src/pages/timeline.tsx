import React from 'react'
import { Header } from '../layout/components'
import { TimeRibbon } from '../components'
import ArrowRight from '../svgs/arrow-right.svg'
import ArrowRightShort from '../svgs/arrow-right-short.svg'
import PixelImage from '../svgs/pixel.svg'
import { isBrowser } from '../utils'
import './timeline.scss'

const TimeLine: React.FC = () => {
  return (
    // mobile hack to avoid having to scroll to see the timeline ribbon scale
    <div
      className="timeline-wrapper"
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

          <div className="timeline-arrow">
            <ArrowRight className="timeline-arrow-image" />
            <ArrowRightShort className="timeline-arrow-image-short" />
            <PixelImage />
          </div>
        </div>
        <TimeRibbon />
      </div>
    </div>
  )
}

export default TimeLine
