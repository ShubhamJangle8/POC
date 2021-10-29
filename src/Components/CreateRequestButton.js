import React, { Component } from 'react'

export class CreateRequestButton extends Component {
  render() {
    return (
      <div className='request-buttons'>
        <button type="button" className="btn btn-danger reset-btn">Reset</button>
        <button type="button" className="btn btn-danger submit-btn">Submit</button>
      </div>
    )
  }
}

export default CreateRequestButton
