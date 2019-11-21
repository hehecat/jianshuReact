import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
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

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    }
  }

  handleFocus = () => {
    this.setState({
      focused: true
    })
  }

  handleBlur = () => {
    this.setState({
      focused: false
    })
  }

  render() {
    return (
      <HeaderWraper>
        <Nav>
          <Logo />
          <NavItem className='left'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <CSSTransition
            in={this.state.focused}
            timeout={200}
            classNames="slide"  
            // unmountOnExit
          >
            <SearchWrapper>
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
              ></NavSearch>
              <span
                className={`iconfont ${this.state.focused ? 'focused' : ''}`}
              >&#xe66f;</span>
            </SearchWrapper>
          </CSSTransition>


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
}


export default Header