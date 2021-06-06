import React from 'react'
import { Link } from 'gatsby'
import { SocialShare } from '../social-share'
import './nav.scss'

export const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <div className="container">
        <ul className="nav-list">
          <li>
            <Link to="/timeline" className="nav-link">
              Timeline
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
