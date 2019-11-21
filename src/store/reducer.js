import headerReducer from '../components/common/header/store/reducer'
import {combineReducers} from 'redux-immutable'

const reducer = combineReducers({header:headerReducer})
export default reducer