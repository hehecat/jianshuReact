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
  width: 240px;
  float: right;
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