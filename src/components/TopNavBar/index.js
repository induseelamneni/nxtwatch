import './index.css'
import {FaMoon} from 'react-icons/fa'

const TopNavBar = () => (
  <div className="top-nav-bg">
    <div className="nav-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxtwatch logo"
        className="nav-logo"
      />
      <div className="person-icon-container">
        <button type="button" className="theme-btn">
          <FaMoon className="moon-icon" />
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
          alt="home-logo"
          className="person-icon"
        />
        <button type="button" className="logout-btn">
          Log out
        </button>
      </div>
    </div>
  </div>
)

export default TopNavBar
