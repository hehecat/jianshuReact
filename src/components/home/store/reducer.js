import {fromJS} from 'immutable'
import {actionTypes} from './index'
const defaultState= fromJS({
  articleList:[],
  recommendList:[]
})

export default (state=defaultState, action)=>{
  switch (action.type) {
    case actionTypes.SET_HOME_INFO:
      return state.merge({
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      })
    default:
      return state
  }
}