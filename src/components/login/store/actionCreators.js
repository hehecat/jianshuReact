import axios from 'axios'
import  * as actiontype from './actiontypes'

const loginInfo = (login) => {
  return {
    type: actiontype.LOGIN_STATUS_INFO,
    login
  }
}

export const login = (account,password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res)=>{
      let data = res.data
      if(data.code === 200) {
        dispatch(loginInfo(data.login))
      }
    })
  }
}