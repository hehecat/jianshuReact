import * as actionType from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeDetaill = (data) => {
  return {
    type: actionType.CHANGE_DETAILL,
    data: fromJS(data)
  }
}

export const getdetaill = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+id).then((res)=>{
      let data = res.data
      if(data.code === 200) {
        dispatch(changeDetaill(data.data))
      }
    })
  }
}