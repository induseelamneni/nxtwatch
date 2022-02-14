import './index.css'
import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import Cookies from 'js-cookie'
import {BsFillBrightnessHighFill} from 'react-icons/bs'
import {GoThreeBars} from 'react-icons/go'
import {FiLogOut} from 'react-icons/fi'

import ThemeContext from '../../context/ThemeContext'

const TopNavBar = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value

        const onToggleTheme = () => {
          console.log('in')
          toggleTheme()
        }

        const background = isDarkTheme
          ? 'top-nav-background-dark'
          : 'top-nav-background-light'

        const logo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const theme = isDarkTheme ? (
          <BsFillBrightnessHighFill className="sun-icon" />
        ) : (
          <FaMoon className="moon-icon" />
        )

        const LogoutBtn = isDarkTheme ? 'logout-dark' : 'logout-light'

        const mobileIcons = isDarkTheme ? 'icon-dark' : 'icon-light'

        return (
          <div className={`top-nav-bg ${background}`}>
            <div className="nav-content">
              <div className="nav-large-container">
                <img src={logo} alt="website logo" className="nav-logo" />
                <div className="person-icon-container">
                  <button
                    type="button"
                    className="theme-btn"
                    onClick={onToggleTheme}
                  >
                    {theme}
                  </button>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                    alt="home-logo"
                    className="person-icon"
                  />
                  <button
                    type="button"
                    className={`logout-btn ${LogoutBtn}`}
                    onClick={onClickLogout}
                  >
                    Log out
                  </button>
                </div>
              </div>
              <div className="nav-mobile-container">
                <img
                  src={logo}
                  alt="nxtwatch logo"
                  className="nav-logo-mobile"
                />
                <div className="person-icon-container">
                  <button
                    type="button"
                    className="theme-btn"
                    onClick={onToggleTheme}
                  >
                    {theme}
                  </button>
                  <button type="button" className="theme-btn">
                    <GoThreeBars
                      className={`person-icon-mobile ${mobileIcons}`}
                    />
                  </button>
                  <button
                    type="button"
                    className="theme-btn"
                    onClick={onClickLogout}
                  >
                    <FiLogOut className={`person-icon-mobile ${mobileIcons}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(TopNavBar)
