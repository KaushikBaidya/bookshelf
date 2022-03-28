import { Route, Switch } from 'react-router-dom'

import './App.css'

import Homepage from './pages/homepage/Homepage.component.jsx'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  )
}

export default App
