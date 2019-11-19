import React, { Component } from 'react'
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


  render() {
    return (
      <HeaderWraper>
        <Nav>
          <Logo />
          <NavItem className='left'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <SearchWrapper>
            <NavSearch></NavSearch>
            <span className="iconfont">&#xe66f;</span>
          </SearchWrapper>

          <Addition>
            <Button>
              <span className="iconfont pen">&#xe61c;</span>
              写文章
              </Button>
            <Button>注册</Button>
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