import React from 'react'
import { Link } from 'gatsby'
import Twitter from '../../../svgs/twitter.svg'
import './footer.scss'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-flex-container">
          <p className="footer-copyright">&copy; 2021 MapleLeafsDrought</p>
          <p className="footer-disclaimer">
            mapleleafsdrought.com is not affiliated with the Toronto Maple Leafs
            Hockey Club, MLSE, or the NHL.
          </p>
        </div>

        <nav className="footer-nav">
          <ul className="footer-nav-list">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="https://twitter.com/Andrew_Tham" target="_blank">
                <Twitter className="footer-twitter-logo" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
