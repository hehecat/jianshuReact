import {actionTypes} from './index'
import axios from 'axios'

export const setHomeInfo = (data)=>{
  return {
    type: actionTypes.SET_HOME_INFO,
    articleList:data.articleList,
    recommendList:data.recommendList
  }
}


export const addHomeArticleList = (articleList)=>{
  return {
    type: actionTypes.ADD_HOME_ARTICLE_LIST,
    articleList
  }
}

export const getScrollTop = (show)=>{
  return {
    type: actionTypes.CHANGE_SCROLL_SHOW,
    show
  }
}

export const getHomeInfo = ()=>{
  return function(dispatch) {
    axios.get('https://hehecat.github.io/jianshuReact/api/home.json').then(res=>{
      const action = setHomeInfo(res.data)    
        
      dispatch(action)
    })
  }
}

export const toReadMore = ()=>{
  return function(dispatch) {
    axios.get('https://hehecat.github.io/jianshuReact/api/home.json').then(res=>{
      const action = addHomeArticleList(res.data.articleList)   
      dispatch(action)
    })
  }
}

