import React from 'react';

const ErrorComponent = () => <div>{props.ignoreProp}</div>

export default class Counter extends React.Component {
  constructor(props) {
    console.log("Counter's Constructor")
    super(props)

    this.state = {
      counter: 0,
      seed: 0,
      initializing: true
    }

    this.increment = () => this.setState({counter: this.state.counter+1})
    this.decrement = () => this.setState({counter: this.state.counter-1})
  }

  static getDerivedStateFromProps(props, state) {
    if(props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed
      }
    }
    return null
  }

  componentDidMount() {
    console.log('Component Did Mount')
    setTimeout(() => {
      this.setState({initializing: false})
    }, 500)
    console.log('___________________')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should Component Update')
    if(nextProps.ignoreProp &&
      this.state.ignoreProp !== nextProps.ignoreProp) {
        console.log('Should Component Update - DO NOT RENDER')
        console.log('___________________')
        return false
    }

    console.log('Should Component Update - RENDER')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Get Snapshot Before Update')
    return null
  }

  render() {
    console.log('Render')

    if(this.state.initializing) {
      return <div>Initializing...</div>
    }

    if(this.props.showErrorComponent && this.state.error) {
      return <div>We have encountered an error! {this.state.error.message}</div>
    }

    return <div>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
      <div className="counter">
        Counter: {this.state.counter}
      </div>
      {this.props.showErrorComponent ? <ErrorComponent/> : null}
    </div>
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component Did Update')
    console.log('____________________')
  }

  componentWillUnmount() {
    console.log('Component Will Unmount')
    console.log('______________________')
  }

  componentDidCatch(error, info) {
    console.log('Component Did Catch')

    this.setState({error, info})
  }
}
