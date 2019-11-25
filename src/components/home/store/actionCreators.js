import {actionTypes} from './index'
import axios from 'axios'

export const setHomeInfo = (data)=>{
  return{
    type: actionTypes.SET_HOME_INFO,
    articleList:data.articleList,
    recommendList:data.recommendList
  }
}

export const getHomeInfo = ()=>{
  return function(dispatch) {
    axios.get('/api/home.json').then(res=>{
      const action = setHomeInfo(res.data)    
        
      dispatch(action)
    })
  }
}

