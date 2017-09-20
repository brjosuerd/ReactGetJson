import React, { Component } from 'react';
import './App.css';
import AppData from './AppData.js';

class App extends Component {
  constructor(){
    super()
    this.state ={
      data:[]
    }
  }

  getData(){
    return fetch('http://www.filltext.com/?rows=100&fname=%7BfirstName%7D&lname=%7BlastName%7D&city=%7D&pretty=true')
    .then((response) => response.json())
    .then((responseJson) =>{
      this.setState({data: responseJson.fname});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <AppData data={this.state.data}/>
    );
  }
}

export default App;
