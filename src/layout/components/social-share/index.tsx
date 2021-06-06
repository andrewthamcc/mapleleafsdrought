import React from 'react'
import FacebookLogo from '../../../svgs/facebook.svg'
import TwitterLogo from '../../../svgs/twitter.svg'
import RedditLogo from '../../../svgs/reddit.svg'
import './social-share.scss'

export const SocialShare: React.FC = () => {
  return (
    <div className="share">
      <p className="share-text">Share:</p>
      <ul className="share-list">
        <li>
          <a
            href="https://www.facebook.com/sharer.php?u=https://mapleleafsdrought.com"
            target="_blank"
          >
            <FacebookLogo className="share-logo" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/intent/tweet?url=https://mapleleafsdrought.com&text=The%20timeline%20of%20the%20Toronto%20Maple%20Leafs%20since%20their%20last%20Stanley%20Cup%20if%20one%20day%20were%20equal%20to%201%20pixel"
            target="_blank"
          >
            <TwitterLogo className="share-logo" />
          </a>
        </li>
        <li>
          <a
            href="https://reddit.com/submit?url=https://mapleleafsdrought.com&title=The%20timeline%20of%20the%20Toronto%20Maple%20Leafs%20since%20their%20last%20Stanley%20Cup%20if%20one%20day%20were%20equal%20to%201%20pixel"
            target="_blank"
          >
            <RedditLogo className="share-logo" />
          </a>
        </li>
      </ul>
    </div>
  )
}
