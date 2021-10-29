const initialState = {
  loginSelect : 0
}

const buddySelector = (state=initialState, action) => {
  switch(action.type){
    case 'selectBuddy':
      return {...state, selectedBuddy : (state.selectedBuddy + 1) % 2}
    default:
      return state
  }
}

export default buddySelector