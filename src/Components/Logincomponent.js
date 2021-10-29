import React, { Component } from 'react'

export class Logincomponent extends Component {

  constructor(){
    super()
    this.state = {
      memberArr : ['Requestor', 'PMO Team'],
      selectedBuddy : 0
    }
  }

handleRequestor = () => {
  this.setState({
    selectedBuddy : 0
  })
}

handlePMO = () => {
  this.setState({
    selectedBuddy : 1
  })
}

  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark'>
          <div className='container navbar-container'>
            <div>
              <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navmenu'>
                <h5>Login as</h5>
                {/* <span className='navbar-toggler-icon'></span> */}
              </button>
            </div>
            <div className='collapse navbar-collapse collapse-center' id='navmenu'>
              <ul className='navbar-nav'>
                <li className='nav-item px-3 py-sm-2'>
                  <button className='button btn-requestor' onClick={this.handleRequestor}><span className='btn-text'>Requestor</span></button>
                </li>
                <li className='nav-item px-3 py-sm-2'>
                  <button className='button btn-pmo' onClick={this.handlePMO}>PMO Team</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h2 className='text-center login-component-text'>{this.state.memberArr[this.state.selectedBuddy]}</h2>
      </div>
    )
  }
}

export default Logincomponent
