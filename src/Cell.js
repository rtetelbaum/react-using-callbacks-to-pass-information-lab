import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  render() {
    return (
      <div onClick={() => this.setState({color: this.props.selectedColor})} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}