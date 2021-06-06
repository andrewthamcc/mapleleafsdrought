import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    site {
      siteMetadata {
        author
        defaultDescription: description
        defaultImage: image
        keywords
        defaultTitle: title
        url
      }
    }
  }
`

interface Props {
  description?: string
  lang?: string
  meta?: any[]
  title: string
  image?: string
}

export const SEO: React.FC<Props> = ({
  description = '',
  lang = 'en',
  meta = [],
  title,
  image = 'https://mapleleafsdrought.com/seo.png',
}) => {
  const { site } = useStaticQuery(query)
  const {
    author,
    defaultDescription,
    defaultImage,
    keywords,
    defaultTitle,
    url,
  } = site.siteMetadata

  const seo = {
    author,
    description: description || defaultDescription,
    image: image || defaultImage,
    keywords,
    title: title || defaultTitle,
    url,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
      meta={[
        {
          name: `image`,
          content: seo.image,
        },
        {
          name: `description`,
          content: seo.description,
        },
        {
          name: `keywords`,
          content: seo.keywords,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:image:width`,
          content: '1696'
        },
        {
          property: `og:image:height`,
          content: '954'
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: seo.author,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
