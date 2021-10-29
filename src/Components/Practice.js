import React, { Component } from 'react'
import ikea from '../images/ikea3.jpg'
import Toggle from './Toggle'
import LoginButtonFunction from './LoginButtonFunction'
import ToggleFunction from './ToggleFunction'
import {Provider} from 'react-redux'
import store from '../Components/store'

export class Practice extends Component {

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
      emailId : e.target.value,
      errorEmail: ''
    })
  }
  changePassword = (e) => {
    this.setState({
      password : e.target.value,
      errorPass:''
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
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
    else{
      alert('Login successfull')
    }
  }

  render() {
    let backgroundSelector = document.getElementById('rowId')
    return (
      <Provider store={store}>
        <section className='login py-5 bg-light'>
          <div className='container'>
            <div className='row g-0' id='rowId'>
              <div className='col-lg-5 col-md-12'>
                <img src={ikea} className='img-fluid' alt='ikea'></img>
                {/* <div className='img-fluid'></div> */}
              </div>
              <div className='col-lg-7 text-center py-3'>
                <ToggleFunction name={backgroundSelector}/>
                <form>
                  <div className='form-row py-3 pt-5'>
                    <div className='col-lg-10 offset-1'>
                      <input type='text' className='inp px-3' placeholder='name@example.com' value={this.state.emailId} onChange={this.changeEmail}/>
                    </div>
                    <div className='col-lg-6 offset-1'>
                      <div className='error-email'>{this.state.errorEmail}
                      </div>
                    </div>
                  </div>
                  <div className='form-row py-4'>
                    <div className='col-lg-10 offset-1'>
                      <input type='password' className='inp px-3' placeholder='' value={this.state.password} onChange={this.changePassword}/>
                    </div>
                    <div className='col-lg-6 offset-1'>
                      <div className='error-pass'>{this.state.errorPass}
                      </div>
                    </div>
                  </div>
                  <div className='form-row py-5'>
                    <div className='col-lg-10 offset-1'>
                      <LoginButtonFunction/>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>
      </Provider>

    )
  }
}

export default Practice
