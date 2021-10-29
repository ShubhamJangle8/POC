import React, { Component } from 'react'

export class LoginButton extends Component {
  render() {
    return (
      <div>
        {
          // backgroundSelector.style.backgroundColor === 'blue' ? <button className='btn-1 blue' onClick={this.handleLogin}>Continue</button> :
          <button className='btn-1 red' onClick={this.handleLogin}>Continue</button>
        }
      </div>
    )
  }
}

export default LoginButton
