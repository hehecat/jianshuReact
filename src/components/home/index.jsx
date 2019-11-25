import React,{Component} from 'react'
import { HomeWapper, HomeLeft, HomeRight } from './style'
import {actionCreators} from './store'
import {connect} from 'react-redux'
import List from './component/List'
import Recommand from './component/Recommend'


class Home extends Component {

  componentDidMount = () => {
    this.props.changeHomeData()
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
      </HomeWapper>
    )
  }
}



const mapStateToProps = (state,props)=>{
  return {

  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    changeHomeData(){
      const action = actionCreators.getHomeInfo();
      dispatch(action);
    }
  }
}
export default  connect(mapStateToProps, mapDispatchToProps)(Home)