import styled from "styled-components";
import logoPic from '../../../statics/logo.png'
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
  min-width:930px;
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

  
  &::placeholder {
    color:#999;
  }
  &.focused {
    width:240px;
  }
  &.slide-enter {
    width:160px;
    transition: all  .2s ease-out ;
  }
  &.slide-enter-active {
    width:240px;
  }
  &.slide-enter-done {
    width:240px;
  }
  

  &.slide-exit {
    transition: all  .2s ease-out ;
  }
  &.slide-exit-active {
    width:160px;
  }
`
export const SearchInfo = styled.div`
  position:absolute;
  left:0;
  top:56px;
  width:240px;
  padding: 0 20px;
  background: #fff;
  box-shadow:0 0 8px rgba(0,0,0,.2);
`

export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom: 15px;
  line-height:20px;
  color: #969696;
`

export const SearchInfoSwich = styled.div`
  float:right;
  font-size:13px;
`
export const SearchInfoList = styled.div``

export const SerchINfoItem = styled.a`
  display: inline-block;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #969696;
  border-radius:3px;
  color:#787878;

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
    background:white;
    color:#ea6f5a;
   }
   &.write{
    background:#ea6f5a;
    color:white;
   }
`