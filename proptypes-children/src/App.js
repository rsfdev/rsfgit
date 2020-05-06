import React, { Component} from 'react';
import MyList from './MyList';
import ShowButton from './ShowButton';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'My list of components',
    }
  }

  changeTitle = (value) => {
    this.setState({ title: value })
  }

  render() {
    return (
    <div className="main">
      <h1>{this.state.title}</h1>
      <MyList>
        <li>GREAT!</li>
        Great 2020!
        <ShowButton changeTitle={this.changeTitle} value='My list of new components' />
      </MyList>
    </div>
    )
  }
}

