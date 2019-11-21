import * as actionTypes from './actionType'

export const searchFocus = ()=>{
  return {
    type:actionTypes.SEARCH_FOCUS
  }
}

export const searchBlur = ()=>{
  return {
    type:actionTypes.SEARCH_BLUR
  }
}