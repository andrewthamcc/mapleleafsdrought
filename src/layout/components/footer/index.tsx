import React from 'react'
import './footer.scss'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-flex-container">
            <p className="footer-disclaimer">
              mapleleafsdrought.com is in no way affiliated with the Toronto Maple
              Leafs Hockey Club, MLSE, or the NHL.
            </p>
            <p className="footer-copyright">&copy; 2021 MapleLeafsDrought</p>
          </div>
      </div>
    </footer>
  )
}
