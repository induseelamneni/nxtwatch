import {Component} from 'react'
import './index.css'

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

  onChangeCheckbox = event => {
    this.setState({checkBoxClicked: event.target.checked})
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

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label htmlFor="userName" className="label">
          USER NAME
        </label>
        <br />
        <input
          type="text"
          id="userName"
          value={username}
          className="name-input"
          placeholder="Password"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, checkBoxClicked} = this.state

    const passwordStatus = checkBoxClicked ? `${password}` : '********'

    return (
      <>
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <br />
        <input
          type="text"
          id="password"
          className="name-input"
          placeholder="Password"
          value={passwordStatus}
          onChange={this.onChangePassword}
        />
        <br />
        <div className="checkbox-container">
          <input
            type="checkbox"
            className="checkbox"
            onChange={this.onChangeCheckbox}
          />
          <label htmlFor="checkbox-el" className="checkbox-label">
            Show Password
          </label>
        </div>
      </>
    )
  }

  render() {
    const {showSubmitError, errorMessage} = this.state
    return (
      <div className="login-bg">
        <div className="login-form-card">
          <form className="form" onSubmit={this.submitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="logo"
              className="next-watch-logo"
            />
            <br />
            {this.renderUsernameField()}
            {this.renderPasswordField()}

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
  }
}

export default LoginForm
