import React from 'react'
import { Footer, Header, Nav, SEO } from './components'
import './layout.scss'

interface Props {
  showNav?: boolean
  title: string
}

const Layout: React.FC<Props> = ({ showNav = true, title, children }) => {
  return (
    <>
      <SEO title={title} />
      <div className="layout">
        <Header />
        {showNav && <Nav />}
        <main className="main">{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
