import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div>
        <div className="loader-container">
      	  <div className="spinner"></div>
          <h1>Loading...</h1>
        </div>
      </div>
    )
  }
}
