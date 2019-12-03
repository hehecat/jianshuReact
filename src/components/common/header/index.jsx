import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { actionCreators } from './store'
import {
  HeaderWraper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwich,
  SerchINfoItem,
  SearchInfoList
} from './style'

class Header extends Component {

  getListArea = () => {
    const {
      focused,
      list,
      page,
      totalPage,
      handelMouseEnter,
      handleMouseLeave,
      mouseIn,
      handleChangePage } = this.props;

    const newList = list.toJS();
    const pageList = [];

    if(newList.length){
      for (let i = page * 10;  i < (page + 1) * 10; i++) {
        if(newList[i]){
          pageList.push(
            <SerchINfoItem key={newList[i]}>{newList[i]}</SerchINfoItem>
          )
        }
      
      }
    }


    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handelMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
        </SearchInfoTitle>
          <SearchInfoSwich onClick={()=>{handleChangePage(page,totalPage)}}>换一换</SearchInfoSwich>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const {handleInputFocus,focused,handleInputBlur,list,login} = this.props;
    return (
      <HeaderWraper>
        <Nav>
          <Logo />
          <NavItem className='left'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>


          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={()=>{handleInputFocus(list)}}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>

            {this.getListArea()}

            <span
              className={`iconfont ${this.props.focused ? 'focused' : ''}`}
            >&#xe66f;</span>
          </SearchWrapper>


          <Addition>
            <Button className='write'>
              <span className="iconfont pen">&#xe61c;</span>
              写文章
              </Button>
            <Button className='reg'>注册</Button>
          </Addition>
          {
            login?           
            <NavItem className='right'>退出</NavItem>:
            <Link to='login'>
              <NavItem className='right'>登陆</NavItem>
            </Link>
          }
         
          <NavItem className='right'>
            <span className="iconfont">&#xe636;</span>
          </NavItem>
        </Nav>
      </HeaderWraper>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    list: state.get('header').get('list'),
    focused: state.get('header').get('focused'),
    page: state.get('header').get('page'),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.get('header').get('mouseIn'),
    login: state.get('login').get('login'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      
      (list.size===0) && dispatch(actionCreators.getList())
        const action = actionCreators.searchFocus()
        dispatch(action)
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur()
      dispatch(action)
    },
    handelMouseEnter() {
      const action = actionCreators.mouseEnter()
      dispatch(action)
    },
    handleMouseLeave() {
      const action = actionCreators.mouseLeave()
      dispatch(action)
    },
    handleChangePage(page,totalPage) {
      if(page+1>=totalPage){
      const action = actionCreators.changePage(0)
      dispatch(action)
      }else{
        const action = actionCreators.changePage(page+1)
        dispatch(action)
      }
    
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)