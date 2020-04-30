import React, { Component } from 'react';

export default class App extends Component {

// The click event handler, there's nothing much happening here other
// than a log of the event.

// onClick() {

//   console.log('clicked');

// }

// Triggered when the value of the text input changes.

  onChange() {

    console.log('changed');

  }

// Triggered when the text input loses focus.

  onBlur() {

    console.log('blurred');

  }

// JSX elements can have as many event handler properties as necessary.

  render() {

    return <input onChange={this.onChange} onBlur={this.onBlur}/>;


  // render() {

  //   return (

  //     <button onClick={this.onClick}/>
  //   );

  // }

// Renders a "<button>" element with the "onClick" event handler set
// to the "onClick()" method of this component.

  // return <button onClick={this.onClick}/>;

  }

}
