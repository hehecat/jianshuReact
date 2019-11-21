import * as actionTypes from './actionType'
import { fromJS } from "immutable";
const defaultStore = fromJS({
  focused:false
})

export default (state=defaultStore,action)=>{
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused',true)
  
    case actionTypes.SEARCH_BLUR:
      return state.set('focused',false)

  
    default:
      return state
  }
}