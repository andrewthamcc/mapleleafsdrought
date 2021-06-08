import React from 'react'
import LeafWhite from '../../../svgs/leaf-white.svg'
import { Link } from 'gatsby'
import './header.scss'

interface Props {
  to: string
}

export const Header: React.FC<Props> = ({ to }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-flex-container">
          <Link to={to}>
            <LeafWhite className="header-logo" />
          </Link>
          <h1 className="header-title">Leafs Forever</h1>
        </div>
      </div>
    </header>
  )
}
