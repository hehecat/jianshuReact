import styled from 'styled-components'

export const LoginWrapper = styled.div`
  height: 100%;
  min-height: 750px;
  font-size: 14px;
  position:relative;
  background-color: #f1f1f1;
`

export const LoginBox = styled.div`
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  position:relative;
  left:50%;
  transform:translateX(-50%);
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  display: inline-block;
`




export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin: 10px auto;
`

export const Button = styled.button`
  margin-top: 20px;
  width: 220px;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  left:50%;
  transform:translateX(40%);
  color: #fff;
  cursor: pointer;
  outline: none;
  background-color: #3194d0;
`