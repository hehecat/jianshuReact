import React,{Component} from 'react'
import { HomeWapper, HomeLeft, HomeRight,BackTop } from './style'
import {actionCreators} from './store'
import {connect} from 'react-redux'
import List from './component/List'
import Recommand from './component/Recommend'


class Home extends Component {

  componentDidMount = () => {
    this.props.changeHomeData();
    this.handleScrollY();
  }

  handleGoTop = () => {
    let nowScrollY = window.scrollY
    let timeScrolly = setInterval(() => {
      nowScrollY = nowScrollY / 1.2
      window.scrollTo(0, nowScrollY)
      if (nowScrollY <= 10) {
        window.scrollTo(0, 0)
        clearInterval(timeScrolly)
      }
    }, 20)
  }

  handleScrollY = () => {
    window.addEventListener('scroll', this.props.changeScrollShow)
  }

  
  render() {
    return (
      <HomeWapper>
        <HomeLeft>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommand></Recommand>
        </HomeRight>
        {
          this.props.showScroll && 
          <BackTop onClick={this.handleGoTop}>回到顶部</BackTop>
        }
      </HomeWapper>
    )
  }
}



const mapStateToProps = (state,props)=>{
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    changeHomeData(){
      const action = actionCreators.getHomeInfo();
      dispatch(action);
    },
   changeScrollShow() {
      let scroll = document.documentElement.scrollTop;
      
      dispatch(actionCreators.getScrollTop(scroll > 200));
    }
  }
}
export default  connect(mapStateToProps, mapDispatchToProps)(Home)