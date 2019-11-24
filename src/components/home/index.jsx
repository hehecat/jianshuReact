import React,{Component} from 'react'
import { HomeWapper, HomeLeft, HomeRight } from './style'
import List from './component/List'
export default class Home extends Component {

  render() {
    return (
      <HomeWapper>
        <HomeLeft>
          <List></List>
        </HomeLeft>
        <HomeRight>

        </HomeRight>
      </HomeWapper>
    )
  }
}