import * as React from 'react'
import { championshipWin, playoffWin } from '../constants'
import { Clock } from '../components'
import Layout from '../layout'
import './home.scss'

const IndexPage: React.FC = () => {
  return (
    <Layout title="Maple Leafs Drought" showNav={false}>
      <div className="home">
        <Clock startTime={championshipWin} title="Last Stanley Cup Championship" />
        <Clock startTime={playoffWin} title="Last Playoff Series Win"/>
      </div>
    </Layout>
  )
}

export default IndexPage
