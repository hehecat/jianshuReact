import * as actionTypes from './actionType'
const defaultStore = {
  focused:false
}

export default (state=defaultStore,action)=>{
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return {
        focused:true
      }
  
    case actionTypes.SEARCH_BLUR:
      return {
        focused:false
      }
  
    default:
      return state
  }
}