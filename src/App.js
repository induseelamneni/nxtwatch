import './App.css'
import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ThemeContext from './context/ThemeContext'

// Replace your code here

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    const {isDarkTheme} = this.state
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
    console.log(isDarkTheme)
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
