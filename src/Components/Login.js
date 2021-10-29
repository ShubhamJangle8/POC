import React, { Component } from 'react'
import Logincomponent from './Logincomponent'

export class Login extends Component {

  constructor(){
    super()
    this.state = {
      emailId : '',
      password : '',
      errorEmail : '',
      errorPass : ''
    }
  }

  changeEmail = (e) => {
    this.setState({
      emailId : e.target.value
    })
  }
  changePassword = (e) => {
    this.setState({
      password : e.target.value
    })
  }
  
  handleReset = () => {
    this.setState({
      emailId : '',
      password : '',
      errorEmail : '',
      errorPass : ''
    })
    alert('Page reset successfull')
  }
  handleLogin = () => {
    if(this.state.emailId === '' && this.state.password === ''){
      this.setState({
        errorEmail : 'User name required',
        errorPass : 'Password required'
      })
    }
    else if(this.state.emailId === ''){
      this.setState({
        errorEmail : 'User name required'
      })
    }
    else if(this.state.password === ''){
      this.setState({
        errorPass : 'Password required'
      })
    }
    // event.preventDefault()
    alert('Login successfull')
  }

  render() {
    return (
      <div className='main-login'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light a">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Login as</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Requestor</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">PMO Team</a>
                  </li>
                  
                </ul>
                
              </div>
            </div>
          </nav>

        <section className='login-head'>
                    <div className='add-component container'>
            <div>
              <Logincomponent/>
            </div>
            <div className='input-row'>
              <div className='input-container'>
                <div className='input'>
                  <div className="" style={{width:'15vw'}}>
                    <label for="exampleFormControlInput1" className="form-label">Email address<img src="https://img.icons8.com/small/16/fa314a/asterisk.png" className='icon'/></label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={this.state.emailId} onChange={this.changeEmail}/>
                    <div className='error-email'>{this.state.errorEmail}</div>
                  </div>
                </div> 
                  
                <div className="input">
                  <div style={{width:'15vw'}}>
                    <label for="inputPassword" className="col-form-label">Password<img src="https://img.icons8.com/small/16/fa314a/asterisk.png" className='icon'/></label>
                    <input type="password" className="form-control" id="inputPassword" value={this.state.password} onChange={this.changePassword}/>
                    <div className='error-pass'>{this.state.errorPass}</div>
                  </div>
                    
                </div>
              </div>
              <div className='btn-helpers'>
                <button type="button" class="btn btn-primary btn-reset" onClick={this.handleReset}>Reset</button>
                <button type="button" class="btn btn-primary btn-login" onClick={this.handleLogin}>Login</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    )
  }
}

export default Login
