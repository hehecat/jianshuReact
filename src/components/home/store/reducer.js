import { fromJS } from 'immutable'
import { actionTypes } from './index'
const defaultState = fromJS({
  articleList: [],
  recommendList: [],
  showScroll: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_HOME_INFO:
      return state.merge({
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      })

    case actionTypes.ADD_HOME_ARTICLE_LIST:
      let list = state.get('articleList').toJS();
      list = list.concat(action.articleList);
      return state.set('articleList', fromJS(list))

    case actionTypes.CHANGE_SCROLL_SHOW:
      return state.set('showScroll', fromJS(action.show))
    default:
      return state
  }
}