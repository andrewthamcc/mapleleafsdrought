import * as React from 'react'
import { championshipWin, playoffWin } from '../constants'
import { Clock } from '../components'
import Layout from '../layout'

const IndexPage: React.FC = () => {
  return (
    <Layout title="Maple Leafs Drought">
      <p>Last Stanley Cup Championship</p>
      <Clock startTime={championshipWin} />

      <p>Last Playoff Win</p>
      <Clock startTime={playoffWin} />
    </Layout>
  )
}

export default IndexPage
