import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'
import Nine from './components/Nineteen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className='containerHome'>
        <Route exact path= '/' component={Popular} />
        <Route exact path='/1984' component={Nine} />
      </div>
    </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)