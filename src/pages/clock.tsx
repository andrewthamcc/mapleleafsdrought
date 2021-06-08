import * as React from 'react'
import Layout from '../layout'
import { SocialShare } from '../layout/components'
import { Clock } from '../components'
import { championshipWin, playoffWin } from '../constants'
import './timer.scss'

const Timer: React.FC = () => {
  return (
    <Layout title="Clock" showNav={false}>
      <div className="timer">
        <div className="timer-flex-container">
          <Clock
            startTime={championshipWin}
            title="Last Stanley Cup Championship"
          />
          <Clock startTime={playoffWin} title="Last Playoff Series Win" />
        </div>
        <div className="timer-share">
          <SocialShare />
        </div>
      </div>
    </Layout>
  )
}

export default Timer
