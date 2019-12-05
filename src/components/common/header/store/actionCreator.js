import * as actionTypes from './actionType'
import {fromJS} from 'immutable'
import axios from 'axios'

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

export const changePage = (page)=>{
  return {
    type: actionTypes.CHANGE_PAGE,
    page,

  }
}

export const mouseEnter = ()=>{
  return {
    type: actionTypes.MOUSE_ENTER
  }
}

export const mouseLeave = ()=>{
  return {
    type: actionTypes.MOUSE_LEAVE
  }
}

export const changeList = (data)=>{
  return {
    type:actionTypes.CHANGE_LIST,
    data:fromJS(data),
    totalPage: Math.ceil(data.length/10)
  }
}

export const getList = ()=>{
  return (dispatch)=>{
    axios.get(process.env.PUBLIC_URL+'/api/headerList.json').then(res=>{
     const action = changeList(res.data.data)
     dispatch(action)
      
    }).catch((err)=>{
      console.log(err)
      
    })
  }
}