import React, { Component } from 'react'

export default class CurrentDegree extends Component {
  render() {
    return (
      <div>
        <h4>Şu an sıcaklık: {this.props.currentDegree} derece</h4>
      </div>
    )
  }
}
