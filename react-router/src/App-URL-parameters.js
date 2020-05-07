import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Child = ({ match }) => console.log('match', match) || (
<div>
  <h3>UID: {match.params.uid}</h3>
</div>
)

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Accounts</h2>
          <ul>
            <li><Link to='/netflix'>Netflix</Link></li>
            <li><Link to='/zillow-group'>Zillow Group</Link></li>
            <li><Link to='/yahoo'>Yahoo</Link></li>
            <li><Link to='/modus-create'>Modus Create</Link></li>
          </ul>

          <Route path='/:uid' component={Child} />

        </div>
      </Router>
    )
  }
}
