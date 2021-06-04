import * as React from 'react'
import Layout from '../layout'
import './not-found.scss'

const NotFoundPage: React.FC = () => {
  return (
    <Layout title="Not Found" showNav={false}>
      <div className="not-found">
        <h1>404 Page not found</h1>
      </div>
    </Layout>
  )
}

export default NotFoundPage
