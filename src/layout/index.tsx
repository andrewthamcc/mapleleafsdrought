import React from 'react'
import { Footer, Header } from './components'
import './layout.scss'

interface Props {
  title: string
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <title>{title}</title>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
