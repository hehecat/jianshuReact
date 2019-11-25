import React, { Component } from 'react'
import { ListInfo, ListItem,ItemFoot, } from '../style'
import {connect} from 'react-redux'

class List extends Component {

  render() {
    const {list} = this.props;
    // console.log(list);
    
    return (
      <div>
        {list.map((item)=>{          
          return (
            <ListItem key={item.get('id')}>
            <img className='pic' src={item.get('pic')} alt="" />
            <ListInfo>
          <h3 className='title'>{item.get('title')}</h3>
          <p className='desc'>{item.get('content')}</p>
            </ListInfo>
            <ItemFoot>
              {
                item.get('grade') && (
                  <span className='grade'>
                    <i className="iconfont">&#xe6ad;</i>
                    {item.get('grade')}
                  </span>
                )
              }
              <a href='www.baidu.com' >{item.get('name')}</a>
              <a href='www.baidu.com' className='leave'>
                <i className="iconfont">&#xe667;</i>
                {item.get('leave')}
              </a>
              <span className='star'>
                <i className="iconfont">&#xe755;</i>
                {item.get('star')}
              </span>
            </ItemFoot>
          </ListItem>
    
          )
        })}
     
      </div>
    )
  }
}

const mapStateToProps = (state, porps)=>{
  return {
    list: state.getIn(['home','articleList'])
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(List)