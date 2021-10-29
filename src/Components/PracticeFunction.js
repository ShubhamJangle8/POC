import React, { Component } from 'react'
// import ikea from '../images/ikea3.jpg'
// import Toggle from './Toggle'
// import LoginButtonFunction from './LoginButtonFunction'
// import ToggleFunction from './ToggleFunction'
import {Provider} from 'react-redux'
import store from '../Components/store'
import {useState} from 'react'

const memArr = ['Requestor', 'PMO Team'];

function PracticeFunction(props) {
  const [buddy, setBuddy] = useState(0);
  const [err, setErr] = useState({
    email: false,
    password: false
  });
  // const {emailId, setEmailId} = useState('')
  // const {password, setPassword} = useState('')
  const [form , setForm] =useState({
    email: '',
    password: ''
  });
  // const changeEmail = (e) => {
  //   setEmailId(e.target.value)
  // }
  // const changePassword = (e) => {
  //   setPassword(e.target.value)
  // }
  const toggleBuddy = () => {
    setBuddy(buddy===0?1:0);
  }
  const handleChange = (e) => {
    // console.log(err);
    let name = e.target.name;
    setErr({...err, [name]: false});
    setForm({...form, [e.target.name]: e.target.value});
  }
  const handleLogin = (e) => {
    // console.log(form);
    e.preventDefault();
    let errEmail = false, errPassword = false;
    if(form.email == '' || form.password == ''){
      errEmail = true;
      errPassword = true
    }
    else if(form.email == '') {
      errEmail = true;
    }
    else if(form.password == '') {
      errPassword = true;
    }
    else{
      alert('Login successful')
    }
    setErr({email: errEmail, password: errPassword});
    // setTimeout(()=>{
    //   console.log(err)
    // },2000);
  }
  // let backgroundSelector = document.getElementById('rowId')
  return (
    <Provider store={store}>
      <section className='login py-5 bg-light'>
        <div className='container'>
          <div className='row g-0' id='rowId'>
            <div className='col col-lg-5 col-md-12 contain' style={{backgroundColor: buddy===1?'tomato':'deepskyblue', minHeight: '40vh'}}>
              {/* <img src={ikea} className='img-fluid' alt='ikea'></img> */}
              <div className="d-flex justify-content-center align-items-center w-100 h-100"><span className='text-size text-center'
              style={{color: buddy===0?'black':'white'}}>Login as {memArr[buddy]}</span></div>
            </div>
            <div className='col-lg-7 text-center py-3'>
            <div>
              <div className="toggleBox">
                <div className="toggle">
                  <input type="checkbox" onClick={toggleBuddy}/>
                  <label for="" className="onbtn" style={{fontSize: buddy===0?18:14}}>Requestor</label>
                  <label for="" className="ofbtn" style={{fontSize: buddy===0?14:18}}>PMO Team</label>
                </div>
                {/* <div className="d-flex m-auto toggle">
                  <div onClick={()=>setBuddy(0)}>Requestor</div>
                  <div onClick={()=>setBuddy(1)}>PMO Team</div>
                </div> */}
                <h2 className='text-center login-component-text py-1'>Login</h2>
              </div>
            </div>
              {/* <ToggleFunction name={backgroundSelector}/> */}
              <form>
                <div className='form-row py-3 pt-5'>
                  <div className='col-lg-10 offset-1'>
                    <input type='text' className='inp px-3' placeholder='name@example.com' name="email" value={form.email} onChange={handleChange}/>
                  </div>
                  <div className={err.email?"offset-1 show":"offset-1 hide"}>
                    <span style={{color:'red'}}>Email ID cannot be blank</span>
                  </div>
                  {/* <div className='col-lg-6 offset-1'>
                    <div className='error-email'>{}
                    </div>
                  </div> */}
                </div>
                <div className='form-row py-4'>
                  <div className='col-lg-10 offset-1'>
                    <input type='password' className='inp px-3' placeholder='' name="password" value={form.password} onChange={handleChange}/>
                  </div>
                  <div className={err.password?"offset-1 show":"offset-1 hide"}>
                    <span style={{color:'red'}}>Password cannot be blank</span>
                  </div>
                  {/* <div class="invalid-feedback offset-3" style={{display: err.password?'block !important':'none !important'}}>
                  Password cannot be blank
                  </div> */}
                  {/* <div className='col-lg-6 offset-1'>
                    <div className='error-pass'>{console.log('a')}
                    </div>
                  </div> */}
                </div>
                <div className='form-row py-5'>
                  <div className='col-lg-10 offset-1'>
                    <button className='btn-1 blue' style={{backgroundColor: buddy===1?'tomato':'deepskyblue'}} onClick={handleLogin}>Continue</button>
                    {/* <LoginButtonFunction/> */}
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

export default PracticeFunction
