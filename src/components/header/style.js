import styled from "styled-components";
import logoPic from '../../statics/logo.png'
export const HeaderWraper = styled.header`
  height: 55px;
  border-bottom:1px solid #eee;
`

export const Logo = styled.a.attrs({
  href: "/"
})`
  float:left;
  height:54px;
  width:100px;
  margin-right:10rem;
  background:url(${logoPic});
  background-size:contain;
`

export const Nav = styled.nav`
  max-width:1440px;
  min-width:768px;
  margin:0 auto;
`

export const NavItem = styled.div`
line-height:56px;
padding:0 15px;
font-size:17px;
color:#333;
position:relative;


  &.left{
    float:left;
  }

  &.right{
    float:right;
    color:#969696;
  }

`
export const SearchWrapper = styled.div`
  float:left;
  position: relative;
  .iconfont{
    position:absolute;
    right:5px;
    top:21px;
    width:30px;
    height:30px;
    border-radius:15px;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width:160px;
  height:38px;
  margin-top:9px;
  margin-left:20px;
  padding: 0  20px;
  border-radius:40px;
  box-sizing:border-box;
  background:#eee;
  font-size:14px;
  border:none;
  outline:none; 
  &::placeholder{
    color:#999;
  }
`

export const Addition = styled.div`
 float:right;
 height:56px;
 position: relative;

 .pen{
    position:relative;
    right:5px;
    border-radius:15px;
  }

`

export const Button = styled.button`
   float:right;
   font-size:14px;
   margin-top:9px;
   margin-right:20px;
   line-height: 38px;
   border-radius:19px;
   padding: 0 20px;
   border:1px solid #ec6149;
   &.reg{
     color:#ec6149;
   }
`