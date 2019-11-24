import {fromJS} from 'immutable'

const defaultState= fromJS({
  articleList: [{
    id:1,
    title:'好女不过百？不是平胸就是矮，很对',
    desc:'​​3月不减肥，4月徒伤悲，即将迎来春天与夏天，很多女生已经迫不及待的开始减肥了。经过一个假期，体重必然有所增长，对于女生来说，这真的是太残忍了...',
    pic:'https://upload-images.jianshu.io/upload_images/16286118-38780ef16971f8d3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id:2,
    title:'为实现梦想而努力——自律行动计划第22天',
    desc:'起床：5：30 晨学：5：40——6：20   洗漱早餐： 6：30——7：20 上班： 7：20——11：45 午餐午休：11：50——13：...',
    pic:'https://upload-images.jianshu.io/upload_images/15005244-92a4fb46b12b0111.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id:3,
    title:'千万别在深夜试探人性：这9.5分神综，刷新我三观',
    desc:'作家陈丹燕写过：“大多数人的生活，就是一种水滴石穿的单调和宁静。” 年少时，总对未来生活有许多朦胧的期待；成年后，在日复一日的琐碎中，丧失对生活...',
    pic:'https://upload-images.jianshu.io/upload_images/6126137-8e09872e1054fc2a?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id:4,
    title:'千万别轻易和网友见面，真的好可怕！',
    desc:'01 我昨天刷到这样一条热点新闻： 前两天，安徽男大学生小王来到青岛，和一名男网友见面，两个小伙在酒店聊天时，小王竟慢慢昏了过去，睡了一天一夜，...',
    pic: 'https://upload-images.jianshu.io/upload_images/14106711-edff042db6e742b5?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }]
})

export default (state=defaultState, action)=>{
  switch (action.type) {
    
    default:
      return state;
  }
}