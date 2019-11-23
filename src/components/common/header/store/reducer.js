import * as actionTypes from './actionType'
import { fromJS } from "immutable";
const defaultStore = fromJS({
  focused:false,
  list:[],
  page:0,
  totalPage:0,
  mouseIn:false
})

export default (state=defaultStore,action)=>{
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused',true)
  
    case actionTypes.SEARCH_BLUR:
      return state.set('focused',false)

    case actionTypes.CHANGE_LIST:
      return state.merge({
        list:action.data,
        totalPage:action.totalPage
      })

    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn',true)

    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn',false)

    case actionTypes.CHANGE_PAGE:
      return state.set('page',action.page)
    default:
      return state
  }
}