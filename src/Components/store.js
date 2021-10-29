import {createStore} from 'redux'
import buddySelector from './buddySelect'
import {composeWithDevTools} from 'redux-devtools-extension'
// import loginSelector from '../Components/loginSelect'

const store = createStore(buddySelector, composeWithDevTools())

export default store