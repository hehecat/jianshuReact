import headerReducer from '../components/common/header/store/reducer'
import homeReducer from '../components/home/store/reducer'
import detailReducer from '../components/detail/store/reducer'
import {combineReducers} from 'redux-immutable'

const reducer = combineReducers({
  header:headerReducer,
  home:homeReducer,
  detail:detailReducer,
})
export default reducer