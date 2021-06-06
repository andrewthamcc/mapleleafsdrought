import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Footer, Header, Nav, SEO } from './components'
import './layout.scss'

interface Props {
  showNav?: boolean
  title: string
}

const imageQuery = graphql`
  query {
    seoImage: file(relativePath: { eq: "seo.png" }) {
      childImageSharp {
        resize(width: 1200) {
          src
          height
          width
        }
      }
    }
  }
`

const Layout: React.FC<Props> = ({ showNav = true, title, children }) => {
  const { seoImage } = useStaticQuery(imageQuery)

  return (
    <>
      <SEO title={title} metaImage={seoImage.childImageSharp.resize} />
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
