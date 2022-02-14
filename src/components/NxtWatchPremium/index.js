import {ImCross} from 'react-icons/im'
import './index.css'

const NxtWatchPremium = () => (
  <div className="nxt-watch-premium-container">
    <div>
      <div className="logo-cross-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
          className="logo"
        />
        <ImCross />
      </div>
      <h1 className="premium-plan-description">
        Buy Nxt Watch Premium Prepaid plans with UPI
      </h1>
      <button type="button" className="get-it-button">
        GET IT NOW
      </button>
    </div>
  </div>
)

export default NxtWatchPremium
