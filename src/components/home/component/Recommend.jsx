import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RecommendItem, RecommendWrapper } from '../style'
class Recommend extends Component {

  render() {
    const {list} = this.props;    
    
    return (
      <RecommendWrapper>
        {
          list.map((item) => {
            return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommendItem>
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state, porps) => {
  return {
    list: state.getIn(['home', 'recommendList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recommend)