import React, { Component } from 'react'
import CreateRequestButton from './CreateRequestButton'

export class CreateRequest2 extends Component {
  render() {
    return (
      <div className='part1'>
        <div className='part1-outer'>
          <div className="part1-member row">
            <div className='col-6 part1-col'>
              <label for="exampleFormControlInput1" className="form-label">Start Date(Tentative)</label>
              <input type="date" className="form-control requestinput" id="exampleFormControlInput1"/>
            </div>
            <div className='col-6 part1-col'>
              <label for="exampleFormControlInput1" className="form-label">Entered on Date</label>
              <input type="date" className="form-control requestinput" id="exampleFormControlInput1"/>
            </div>
            
          </div>
          <div className="part1-member row">
            <div className='col-6 part1-col'>
              <label for="exampleFormControlInput1" className="form-label">Owner</label>
              <input type="text" className="form-control requestinput" id="exampleFormControlInput1"/>
            </div>
            <div className='col-6 part1-col'>
              <label for="exampleFormControlInput1" className="form-label">Reason for Demand</label>
              <div className='dropdown'>
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            
          </div>
          <div className="part1-member row">
            <div className='col-6 part1-col'>
              <label for="exampleFormControlInput1" className="form-label">Work Location</label>
              <input type="text" className="form-control requestinput" id="exampleFormControlInput1"/>
            </div>
            <div className='col-6 part1-col'>
              <label for="exampleFormControlInput1" className="form-label">SLF / BD / GOV</label>
              <div className='dropdown'>
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            
          </div>
        </div>
        <div>
          <CreateRequestButton/>
        </div>
        
      </div>
    )
  }
}

export default CreateRequest2
