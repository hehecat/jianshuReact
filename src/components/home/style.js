import styled from 'styled-components'

export const HomeWapper = styled.div`
  /* overflow: hidden; */
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
 float: left;
 margin-left: 15px;
 padding-top: 30px;
 width: 625px;
 .banner-img {
   width: 625px;
   height: 270px;
 }
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const RecommendWrapper = styled.div`
  margin:30px 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props)=>{return props.imgUrl}});
  background-size:cover; 
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`
export const ItemFoot = styled.div`
  color: #b4b4b4;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  .grade {
    color:  #ea6f5a;
    margin-right: 10px;
    i {
      font-size: 12px;
    }
  }
  a {
    color: #b4b4b4;
    margin-right: 10px;
    text-decoration: none;
    i {
      font-size: 13px;
    }
  }
  i {
    font-size: 14px;
    margin-right: 2px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color:#999;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 20px;
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  border-radius: 20px;
  color: #fff;
  background-color: #a5a5a5;
  cursor: pointer;
  box-sizing: border-box;
`