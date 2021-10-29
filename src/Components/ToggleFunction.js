import React from 'react'
import { connect } from 'react-redux'

function ToggleFunction(props) {
  const memberArr = ['Requestor', 'PMO Team']
  return (
    <div>
      <div className="toggleBox">
        <div className="toggle">
          <input type="checkbox" onClick={props.selectBuddy}/>
          <label for="" className="onbtn">Requestor</label>
          <label for="" className="ofbtn">PMO Team</label>
        </div>
        <h2 className='text-center login-component-text py-1'>Login As {memberArr[props.selectedBuddy]}</h2>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedBuddy : state.selectedBuddy
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    selectBuddy : () => dispatch({type: 'selectBuddy'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ToggleFunction)
