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
    const list = [];
    fetch('https://gist.githubusercontent.com/finnhodgkin/4b12d304c3109fa337f09ec6d57200c3/raw/087a6ce15fb619085f7410759684df2ab170577a/cor-pun.json')
    .then(blob => blob.json())
    .then((data) => {
      list.push(...data);
      this.build(list);
    });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  edit() {
    this.setState({
      test: <b>hello</b>
    });
  }
  build(data) {
    const list = data.map((e) => <div key={e.name}>{e.name}</div>);
    this.setState({
      test: list
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
