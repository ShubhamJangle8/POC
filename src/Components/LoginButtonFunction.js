import React, { Component } from 'react'
import { connect } from 'react-redux'

const handleLogin = () => {
  alert('Login successfull')
}

function LoginButton(props) {
  return (
    <div>
      {  
      props.selectedBuddy === 0
         ? <button className='btn-1 blue' onClick={handleLogin}>Continue</button> :
        <button className='btn-1 red' onClick={handleLogin}>Continue</button>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedBuddy : state.selectedBuddy
  }
}



export default connect(mapStateToProps)(LoginButton)
