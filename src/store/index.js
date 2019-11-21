import headerReducer from '../components/common/header/store/reducer'
import {combineReducers, createStore} from 'redux'

const reducer = combineReducers({header:headerReducer})
const store = createStore(reducer)

export default store
