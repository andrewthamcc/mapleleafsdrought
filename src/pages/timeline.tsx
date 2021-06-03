import React from 'react'
import { TimeRibbon } from '../components'
import Layout from '../layout'
import './timeline.scss'

const TimeLine: React.FC = () => {
  return (
    <div className="timeline">
      <div className="timeline-intro">
        <h2 className="timeline-title">1967 - Present Day</h2>

        <p>
          What does the timeline of the Toronto Maple Leafs look like if one day
          were 1 Pixel.
        </p>
      </div>
      <TimeRibbon />
    </div>
  )
}

export default TimeLine
