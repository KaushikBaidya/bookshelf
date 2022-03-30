import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import Homepage from './pages/homepage/Homepage.component'
import { ShopPage } from './pages/shop/Shop.component'
import Header from './components/header/Header.component'
import SignInSignUpPage from './pages/signIn-SignUp/SignIn-SignUp.component'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App
