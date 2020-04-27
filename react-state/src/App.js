// import React from 'react';
import React, {Component} from 'react';
import './App.css';
import colors from './data';

class App extends Component {
  constructor(props) {
    console.log('sendo construído');
    super(props);
    this.state = {
      filter: '',
    }
  }

  setFilterValue = (event) => {
    console.log('Novo conteúdo do meu input:', event.target.value);
    this.setState({ filter: event.target.value });
  }

  filterColors = () => {
    if(this.state.filter === '') return colors;
    return colors.filter((element) => element.color === this.state.filter)
  }

  render() {
    console.log('estou sendo renderizado!!!');
    const filteredColors = this.filterColors();

    return (
      <div className="App">
        <h1>Filter colors</h1>
        <div>
          <input type="text" onChange={this.setFilterValue}/>
        </div>
        <ul>
          {filteredColors.map(({ color, value }) => <li key={value}> {color} coded as {value}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
