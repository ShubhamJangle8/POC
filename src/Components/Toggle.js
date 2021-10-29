import React, { Component } from 'react'

export class Toggle extends Component {

  constructor(){
    super()
    this.state = {
      memberArr : ['Requestor', 'PMO Team'],
      selectedBuddy : 0,
      backgroundColorArr:['blue', 'red'],
      backgroundColor:''
    }
  }

  handleSelect = () => {
    this.setState({
      selectedBuddy: (this.state.selectedBuddy + 1) % 2,
      backgroundColor:this.state.backgroundColorArr[(this.state.selectedBuddy + 1) % 2]
    })
    document.body.style.backgroundColor = this.state.backgroundColorArr[(this.state.selectedBuddy + 1) % 2]
    
  }
  render() {
    return (
      <div className="toggleBox">
        <div className="toggle">
          <input type="checkbox" onClick={this.handleSelect}/>
          <label for="" className="onbtn">Requestor</label>
          <label for="" className="ofbtn">PMO Team</label>
        </div>
        <h2 className='text-center login-component-text py-1'>Login As {this.state.memberArr[this.state.selectedBuddy]}</h2>
      </div>
    )
  }
}

export default Toggle
