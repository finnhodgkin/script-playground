import React, { Component } from 'react';
import './App.css';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      test: ''
    };
    this.edit = this.edit.bind(this);
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  edit() {
    this.setState({
      test: 'test'
    });
  }
  render() {
    return (
      <div className='app'>Hello {this.state.date.toLocaleTimeString()}!
        <br />{this.state.test}
        <br /><button onClick={this.edit}>Testing</button>
      </div>
    );
  }
};

export default HelloWorld;
