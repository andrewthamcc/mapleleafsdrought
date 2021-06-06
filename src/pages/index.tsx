import * as React from 'react'
import { championshipWin, playoffWin } from '../constants'
import { Clock } from '../components'
import Layout from '../layout'
import { SocialShare } from '../layout/components'
import './home.scss'

const IndexPage: React.FC = () => {
  return (
    <Layout title="Home" showNav={true}>
      <div className="home">
        <div className="home-flex-container">
          <Clock
            startTime={championshipWin}
            title="Last Stanley Cup Championship"
          />
          <Clock startTime={playoffWin} title="Last Playoff Series Win" />
        </div>
        <div className="home-share">
          <SocialShare />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
