import React, { Component } from 'react'

export class CreateRequest1 extends Component {
  render() {
    return (
      <div className='part1 container'>
        <div className = 'part1-outer'>
          <div className="part1-member row">
            <div className='col-6 part1-col'>
              <label for="exampleFormControlInput1" className="form-label">Cluster</label>
              <div className='dropdown'>
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className='col-6 part1-col'>
              <label for="exampleFormControlInput1" className="form-label">Sub Cluster</label>
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
              <label for="exampleFormControlInput1" className="form-label">Grade</label>
              <div className='dropdown'>
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className='col-6 part1-col'>
              <label for="exampleFormControlInput1" className="form-label">Requested Grade</label>
              <input type="text" className="form-control requestinput" id="exampleFormControlInput1"/>
            </div>
          </div>
          <div className="part1-member row">
            <div className='col-6 part1-col'>
              <label for="exampleFormControlInput1" className="form-label">Technology Stack</label>
              <input type="text" className="form-control requestinput" id="exampleFormControlInput1"/>
            </div>
            <div className='col-6 part1-col'>
              <label for="exampleFormControlInput1" className="form-label">Core Skill</label>
              <input type="text" className="form-control requestinput" id="exampleFormControlInput1"/>
            </div>
            
          </div>
          <div className="part1-member">
            <div className='part1-col'>
              <label for="exampleFormControlInput1" className="form-label" style={{width:'6.5rem'}}>Skill Details / JD</label>
            </div>
            <div>
              <textarea className="form-control inputtext" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default CreateRequest1
