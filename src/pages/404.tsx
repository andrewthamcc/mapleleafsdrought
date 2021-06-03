import * as React from 'react'
import Layout from '../layout'
import { Link } from 'gatsby'

const NotFoundPage: React.FC = () => {
  return (
    <Layout title="Not Found">
      <h1>404 Page not found</h1>
      <Link to="/">Go home</Link>.
    </Layout>
  )
}

export default NotFoundPage
