import headerReducer from '../components/common/header/store/reducer'
import homeReducer from '../components/home/store/reducer'
import detailReducer from '../components/detail/store/reducer'
import loginReducer from '../components/login/store/reducer'
import {combineReducers} from 'redux-immutable'

const reducer = combineReducers({
  header:headerReducer,
  home:homeReducer,
  detail:detailReducer,
  login:loginReducer
})
export default reducer