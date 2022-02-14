import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMessage: '',
    checkBoxClicked: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = () => {
    const {checkBoxClicked} = this.state

    this.setState({checkBoxClicked: !checkBoxClicked})
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({showSubmitError: true, errorMessage})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {}

  renderPasswordField = () => {}

  render() {
    const {password, checkBoxClicked, username} = this.state
    const {showSubmitError, errorMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const loginBg = isDarkTheme ? 'login-dark-bg' : 'login-light-bg'
          const loginCardBg = isDarkTheme
            ? 'login-card-dark-bg'
            : 'login-card-light-bg'

          const logo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const checkboxTheme = isDarkTheme
            ? 'checkbox-label-light'
            : 'checkbox-label-dark'

          const nameLabel = isDarkTheme ? 'name-label-light' : 'name-label-dark'
          const nameInput = isDarkTheme ? 'name-input-light' : 'name-input-dark'
          return (
            <div className={`login-bg ${loginBg}`}>
              <div className={`login-form-card ${loginCardBg}`}>
                <form className="form" onSubmit={this.submitForm}>
                  <img
                    src={logo}
                    alt="website logo"
                    className="next-watch-logo"
                  />
                  <br />
                  <label htmlFor="userName" className={`label ${nameLabel}`}>
                    USERNAME
                  </label>
                  <br />
                  <input
                    type="text"
                    id="userName"
                    value={username}
                    className={`name-input ${nameInput}`}
                    placeholder="Password"
                    onChange={this.onChangeUsername}
                  />
                  <label htmlFor="password" className={`label ${nameLabel}`}>
                    PASSWORD
                  </label>
                  <br />
                  <input
                    type={checkBoxClicked ? 'text' : 'password'}
                    id="password"
                    className={`name-input ${nameInput}`}
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                  <br />
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={this.onChangeCheckbox}
                      id="checkbox-el"
                    />
                    <label
                      htmlFor="checkbox-el"
                      className={`checkbox-label ${checkboxTheme}`}
                    >
                      Show Password
                    </label>
                  </div>

                  <button type="submit" className="submit-btn">
                    Login
                  </button>

                  {showSubmitError && (
                    <p className="error-message">*{errorMessage}</p>
                  )}
                </form>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginForm
