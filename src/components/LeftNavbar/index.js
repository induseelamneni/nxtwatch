import './index.css'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'

const LeftNavbar = () => {
  console.log('in')

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const background1 = isDarkTheme
          ? 'nav-background-dark'
          : 'nav-background-light'

        const iconTheme = isDarkTheme ? 'icon-dark' : 'icon-light'

        return (
          <div className={`left-nav-bg  ${background1}`}>
            <div className="nav-content-left">
              <div className="top-tabs-container">
                <button type="button" className={`home-tab ${iconTheme}`}>
                  <AiFillHome className={`home-icon ${iconTheme}`} />
                  Home
                </button>
                <button type="button" className={`home-tab ${iconTheme}`}>
                  <HiFire className={`home-icon ${iconTheme}`} />
                  Trending
                </button>
                <button type="button" className={`home-tab ${iconTheme}`}>
                  <SiYoutubegaming className={`home-icon ${iconTheme}`} />
                  Gaming
                </button>
                <button type="button" className={`home-tab ${iconTheme}`}>
                  <BiListPlus className={`home-icon ${iconTheme}`} />
                  Saved Videos
                </button>
              </div>
              <div div className="top-tabs-container">
                <p className={`contact-us ${iconTheme}`}>Contact us</p>
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
                <p className={`contact-us1 ${iconTheme}`}>
                  Enjoy Now! to see your Channels and recommendations!
                </p>
              </div>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default LeftNavbar
