import './index.css'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

const LeftNavbar = () => {
  console.log('in')

  return (
    <div className="left-nav-bg">
      <div className="nav-content-left">
        <div className="top-tabs-container">
          <button type="button" className="home-tab">
            <AiFillHome className="home-icon" />
            Home
          </button>
          <button type="button" className="home-tab">
            <HiFire className="home-icon" />
            Trending
          </button>
          <button type="button" className="home-tab">
            <SiYoutubegaming className="home-icon" />
            Gaming
          </button>
          <button type="button" className="home-tab">
            <BiListPlus className="home-icon" />
            Saved Videos
          </button>
        </div>
        <div div className="top-tabs-container">
          <p className="contact-us">Contact us</p>
          <div className="social-icons-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
              className="social-icon"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
              className="social-icon"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
              className="social-icon"
            />
          </div>
          <p className="contact-us1">
            Enjoy Now! to see your Channels and recommendations!
          </p>
        </div>
      </div>
    </div>
  )
}

export default LeftNavbar
