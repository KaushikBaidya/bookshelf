import { Route, Switch } from 'react-router-dom'

import './App.css'

import Homepage from './pages/homepage/Homepage.component'
import { ShopPage } from './pages/shop/Shop.component'
import Header from './components/header/Header.component'
import SignInSignUpPage from './pages/signIn-SignUp/SignIn-SignUp.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  )
}

export default App
