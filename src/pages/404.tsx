import * as React from 'react'
import { PageProps } from 'gatsby'
import { Link } from 'gatsby'

// markup
const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>Page not found</h1>
      <Link to="/">Go home</Link>.
    </main>
  )
}

export default NotFoundPage
