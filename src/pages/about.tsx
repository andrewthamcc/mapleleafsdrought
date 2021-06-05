import React from 'react'
import Layout from '../layout'
import LeafBlue from '../svgs/leaf-blue.svg'
import './about.scss'

const About: React.FC = () => {
  return (
    <Layout title="About">
      <div className="about">
        <div className="container">
          <p>
            MapleLeafsDrought was created in response to the 2021 playoff.
            Wanting to channel my disappointment and fustration I created this
            website to cope with the loss.
          </p>

          <p>
            The timeline is heavily inspired by Josh Worth's work,{' '}
            <a
              href="https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html"
              target="_blank"
            >
              If the Moon were only 1 Pixel
            </a>
            . The timeline scale is programmatically calculated and updates
            every passing day to present an accurate representation of the time
            passed.
          </p>

          <p>
            I still believe in the team and will forever be a fan. I hope to be
            able to reset the clocks and timeline soon.
          </p>

          <p>
            <em>Leafs forever</em>.
          </p>

          <div className="about-logo-container">
            <LeafBlue className="about-logo" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
