import React, { Component } from 'react';

class Counter extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0,
      title: ''
    };
  }
  updateCounter() {
    // This method accepts the new state
    this.setState({
      counter: this.state.counter + 1,
      title: '. Great!'
    }, () => {
        console.log(this.state);
    });
  }

  updateCounterFive() {
    this.setState((prevState, props) => {
      return { counter: prevState.counter + 5 }
    }, () => {
      console.log(this.state.counter);
    });
  }
  render() {
    // unpacking the state and props
    // the variables has to be unpacked with the same name as the object key
    const { counter, title } = this.state;
    const { buttonText, children } = this.props;
    console.log(this.props);
    return (
      <div className="counter">
        <h3>Your count is {counter}{title}</h3>
        <button onClick={() => this.updateCounter()}>{buttonText}</button>
        <button onClick={() => this.updateCounterFive()}>Update the count by five</button>
        {children}
      </div>
    );
  }
}

export default Counter;