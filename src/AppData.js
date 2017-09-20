import React, { Component } from 'react';
import './App.css';

class AppData extends Component {
  render(){
    let names =this.props.data.map(function(nameData, index){
      return (
        <li>
        {nameData.fname}
        </li>
      )
    });

    return(
      <li>
        {names}
      </li>
    );
  }
}

module.export = AppData;
