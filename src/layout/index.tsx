import React from 'react'
import { Footer, Header, Nav } from './components'
import './layout.scss'

interface Props {
  showNav?: boolean
  title: string
}

const Layout: React.FC<Props> = ({ showNav = true, title, children }) => {
  return (
    <>
      <div className="layout">
        <Header />
        {showNav && <Nav />}
        <main className="main">
          <title>{title}</title>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
