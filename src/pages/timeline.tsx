import React from 'react'
import { Header } from '../layout/components'
import { TimeRibbon } from '../components'
import ArrowRight from '../svgs/arrow-right.svg'
import PixelImage from '../svgs/pixel.svg'
import './timeline.scss'

const TimeLine: React.FC = () => {
  return (
    <div className="timeline-wrapper">
    <Header />
    <div className="timeline">
      <div className="timeline-start">
        <h2 className="timeline-title">1967 - Present</h2>

        <p className="timeline-intro">
          The timeline of the Toronto Maple Leafs since their last Stanley Cup if one day
          were equal to 1 Pixel
        </p>

        <div className="timeline-arrow">
          <ArrowRight className="timeline-arrow-image"/>
          <>
            <PixelImage />
            <PixelImage />
            <PixelImage />
          </>
        </div>
      </div>
      <TimeRibbon />
    </div>
    </div>
  )
}

export default TimeLine
