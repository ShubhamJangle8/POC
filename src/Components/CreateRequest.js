import React, { Component } from 'react'
import CreateRequest1 from './CreateRequest1'
import CreateRequest2 from './CreateRequest2'

export class CreateRequest extends Component {
  render() {
    return (
      <div className='main-request'>
        <div className='main-request-outer'>
          <CreateRequest1/>
          <CreateRequest2/>
        </div>
        
      </div>
    )
  }
}

export default CreateRequest
