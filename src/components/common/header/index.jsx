import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import {actionCreators} from './store'
import {
  HeaderWraper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
} from './style'

const Header = (props)=> {
    return (
      <HeaderWraper>
        <Nav>
          <Logo />
          <NavItem className='left'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>

          <SearchWrapper>
            <CSSTransition
              in={props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={props.focused ? 'focused' : ''}
                onFocus={props.handleInputFocus}
                onBlur={props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>

            <span
              className={`iconfont ${props.focused ? 'focused' : ''}`}
            >&#xe66f;</span>
          </SearchWrapper>


          <Addition>
            <Button className='write'>
              <span className="iconfont pen">&#xe61c;</span>
              写文章
              </Button>
            <Button className='reg'>注册</Button>
          </Addition>
          <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'>
            <span className="iconfont">&#xe636;</span>
          </NavItem>
        </Nav>
      </HeaderWraper>
    )
  }


const mapStateToProps = (state, props) => {
  return {
    focused:state.header.get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = actionCreators.searchFocus();
      dispatch(action);
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action);
    },

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)