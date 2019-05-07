<template>
    <div id="home-container" class="home-container">
        
        <!-- 轮播图区域 -->
        <div id="banner" class="banner">
            <el-carousel height="470px" >
                <el-carousel-item v-for="item in bannerImage" :key="item.url">
                    <img :src="item.url" alt="图片无法显示" width="100%" height="100%">
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 指数区域 -->
        <div class="index">
            <div class="index-inner">
            <ul>
                <li v-for="item of index" :key="item.id">
                    <h3>{{item.name}}</h3>
                    <strong>{{item.price}}</strong>
                    <div class="dotAndRate">
                        <span>{{item.dot}}</span>
                        <span>{{item.rate}}</span>
                    </div>
                </li>
            </ul>
           </div>   
        </div> 
        <!-- 4卡片点击区和公告区 -->
        <div class="notice">
            <ul>
                <li v-for="item of cards" :key="item.id">
                    <a href="" @click.prevent="go(item.id)">
                        <img :src="item.img" alt="" >
                        <h4>{{item.name}}</h4>
                        <p>{{item.content}}</p>
                    </a> 
                </li>
            </ul>
            <div class="notice-box">
                <span style="display:block;">最新公告</span>
                <div class="notice-box-outer">
                    <el-carousel height="60px" direction="vertical" :autoplay="true">
                        <el-carousel-item v-for="item of notice" :key="item.id">
                            <div class="notice-box-inner">
                                 <div><a href="">{{item.content1}} &nbsp;&nbsp;{{item.data1}}</a></div>
                                 <div><a href="">{{item.content2}} &nbsp;&nbsp;{{item.data2}}</a></div>  
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <a href="" style="display:block;background:white;border:0;padding:0;height:30px;color:red;">更多 ></a>
            </div>
        </div>
        <!-- 下载软件 -->
        <div class="software">
            <img src="https://media.dgzq.com.cn/app/file/getImg?group=group1&name=TTAwLzAwLzQ0L3JCUWFtMXc5YlFTQVBsZVpBQURla0tFRHNXczA0MS5wbmc" alt="图片无法显示">
            <div class="software-text">
                <h4>东莞证券手机炒股软件</h4>
                <strong>掌证宝</strong>
                <p>提供行情交易，智能投顾，业务办理，投资理财，优质产品，最新资讯及活动游戏等一站式服务。</p>
                <a href="">立即下载</a>
            </div>
        </div>
        <!-- 9卡片区域 -->
        <div class="nine">
            <ul>
                <li>
                    <a href="">
                        <div class="pic-box"><img src="https://media.dgzq.com.cn/app/file/getImg?group=group1&name=TTAwLzAwLzRBL3JCSWFtMXc3Nk0tQVhlYTJBQURxZEtSSXdnVTYwNi5wbmc" alt=""></div>
                        <div class="text-box">
                            <h5>智能投顾</h5>
                            <h4>智能投顾 财富小宝</h4>
                            <span class="line"></span>
                            <p>AI金融智能投顾，提供超过20种自动化专业服务，助您精准投资一臂之力</p>
                            <a href="">立即体验</a>
                        </div>
                    </a>
                    
                </li>
                <li>
                    <a href="">
                        <div class="text-box">
                            <h5>专业投资顾问</h5>
                            <h4>投顾热评 市场动态</h4>
                            <span class="line"></span>
                            <p>数百名专业资深投顾，全程盯盘直播，遨游股市，一路护航</p>
                            <a href="">立即体验</a>
                        </div>
                    </a>
                </li>
                <li>
                   <a href="">
                        <div class="text-box">
                        <h5>热门股票组合</h5>
                        <h4>精选组合策略</h4>
                        <span class="line"></span>
                        <p>专业、专属、高效的业务团队，为客户量身定制个性化的股票组合策略</p>
                        <a href="">立即体验</a>
                    </div>
                   </a>
                </li>
                <li>
                    <a href="">
                        <div class="pic-box"><img src="https://media.dgzq.com.cn/app/file/getImg?group=group1&name=TTAwLzAwLzQ0L3JCUWFtMXc4WjdDQVIwZU5BQURwZGdvTDRJODAxMy5wbmc" alt=""></div>
                        <div class="text-box">
                            <h5>港股淘金大利器</h5>
                            <h4>港股level-2</h4>
                            <span class="line"></span>
                            <p>实时提供港股十档行情，看港股，不延时，限时限量免费领取</p>
                            <a href="">立即体验</a>
                        </div>
                    </a>
                </li>
                <li>
                   <a href="">
                        <div class="text-box">
                        <h5>专业主播 每日播报</h5>
                        <h4>有财早播报</h4>
                        <span class="line"></span>
                        <p>汇聚每日最新的宏观要闻、行业动态、公司公告，了解行业最新资讯</p>
                        <a href="">立即体验</a>
                    </div>
                   </a>
                </li>
                <li>
                  <a href="">
                        <div class="text-box">
                            <h5>全新服务 助您致富</h5>
                            <h4>研报速递</h4>
                            <span class="line"></span>
                            <p>汇集资深权威研究人员，覆盖重要行业数据，用心为客户打造证券财富之巅</p>
                            <a href="">立即体验</a>
                        </div>
                  </a>
                </li>
                <li>
                   <a href="">
                        <div class="text-box">
                            <h5>天添有金喜</h5>
                            <h4>天添金</h4>
                            <span class="line"></span>
                            <p>所有交易0费用，随时买卖巨灵活，5秒理财很快捷，收益稳定超省心，足额兑现有保障</p>
                            <a href="">立即体验</a>
                        </div>
                   </a>
                </li>
            </ul>
        </div>
        <!-- 4按钮区域 -->
        <div class="four">
            <ul>
                <li>
                    <a href="">
                        <span></span>
                        <h4>投资者教育</h4>
                        <p>证券知识，交易规则，风险提示等理性投资，由我做起</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span></span>
                        <h4>营业网点</h4>
                        <p>数十家分支机构遍布全国联系您身边的财富管理专家</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span></span>
                        <h4>党务专栏</h4>
                        <p>新时代 新征程 新东证 全面贯彻党的十九大精神</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span></span>
                        <h4>企业责任</h4>
                        <p>肩负重任 与爱同行 践行社会责任，公益时刻在路上</p>
                    </a>
                </li>
            </ul>
        </div>
        
        

    </div>
</template>

<script>
    export default {
        name:'home',
        data(){
            return {
                bannerImage:[
                    {url:'https://media.dgzq.com.cn/app/file/getImg?group=group1&name=TTAwLzAwLzRGL3JCSWFtMXg4ZjBXQVZZcTRBQUpRUm41anIzYzI2Mi5qcGc%22'},
                    {url:'https://media.dgzq.com.cn/app/file/getImg?group=group1&name=TTAwLzAwLzREL3JCUWFtMXkxbDQyQVVza2hBQUxrZUF0Nno0Zzc2Mi5qcGc'},
                    {url:'https://media.dgzq.com.cn/app/file/getImg?group=group1&name=TTAwLzAwLzUxL3JCSWFtMXlSb29tQWZQdnpBQUtGMlp2UFZkSTIwNS5qcGc'},
                    {url:'https://media.dgzq.com.cn/app/file/getImg?group=group1&name=TTAwLzAwLzRBL3JCSWFtMXc4WWRLQUR4RjlBQW5WYzEzWnRBRTU1OS5wbmc'}
                ],
                index:[
                    {id:0,name:'上证指数',price:'3086.40',dot:'-37.43',rate:'-1.20%'},
                    {id:1,name:'深圳指数',price:'9780.82',dot:'-126.80',rate:'-1.28%'},
                    {id:2,name:'创业扳指',price:'1657.82',dot:'-12.15',rate:'-0.73%'},
                    {id:3,name:'恒生指数',price:'29605.01',dot:'-55.21',rate:'-0.19%'}
                ],
                cards:[
                    {id:0,name:'快速开户',content:'3分钟极速开户',img:'https://media.dgzq.com.cn/app/file/getImg?group=group1&name=TTAwLzAwLzQ3L3JCUWFtMXhqME1pQU1mU3FBQUFLNUl5UDQzczUzNi5wbmc'},
                    {id:1,name:'网上营业厅',content:'全能业务办理',img:'https://media.dgzq.com.cn/app/file/getImg?group=group1&name=TTAwLzAwLzRFL3JCSWFtMXhqME95QWR2a19BQUFLWWxhWjdBUTc0NC5wbmc'},
                    {id:2,name:'有财商城',content:'助你开启财富之门',img:'https://media.dgzq.com.cn/app/file/getImg?group=group1&name=TTAwLzAwLzRFL3JCSWFtMXhqMFFDQVdkbG9BQUFMY1ZYX1VOMDk5Ni5wbmc'},
                    {id:3,name:'产品信息披露',content:'保护投资者利益',img:'https://media.dgzq.com.cn/app/file/getImg?group=group1&name=TTAwLzAwLzRFL3JCSWFtMXhqMFJhQUVFOExBQUFLYm4zT003MDI4NS5wbmc'}
                ],
                notice:[
                    {id:0,content1:'关于2019年劳动节期间港股通交易日安排的通知',data1:'2019-04-24',content2:'一心堂(002727):公开发行可转换公司债券发行提示性公告',data2:'2019-04-23'},
                    {id:1,content1:'康泰生物(300601):关于可转换公司债券赎回实施的第七次公告',data1:'2019-04-24',content2:'广东证监局温馨提示',data2:'2019-04-23'},
                    {id:2,content1:'东莞证券股份有限公司非公开发行2017年次级债券（第一期）付息公告',data1:'2019-04-24',content2:'关于2019年劳动节期间港股通交易日安排的通知',data2:'2019-04-23'}
                ],
            }
        },
        methods:{
            go(which){
                switch(which){
                    case 0:
                        // alert("ok");
                        this.$router.push({ path: 'openaccount' });
                        break;
                    case 1:
                        this.$router.push({ path: 'openaccount' });
                        break;
                    case 2:
                        this.$router.push({ path: 'openaccount' });
                        break;
                    case 3:
                        this.$router.push({ path: 'openaccount' });
                        break;            
                }
            }
        },
       
    }
</script>

<style lang="scss" scoped>
@mixin display-flex($justify){
    display: flex;
    justify-content: $justify;
}
@mixin clear{
    margin: 0;
    padding:0;
}
.home-container{
width: 100%;
.banner{
    margin:70px auto 0 auto;
    min-width: 1200px;
    // width: 100%;
}
.banner-collapse{
    margin-top:47px !important;
}
.index{
    width: 100%;
    min-width: 1200px;
    background: #eee;
    .index-inner{
        width: 1200px;
        margin: 0 auto;
        ul{
        @include display-flex(space-between);
        margin:0;
            li{
                h3{
                    font-size: 1em;
                    margin: 0;
                }
                strong{
                    display: block;
                    font-size: 26px;
                    height: 34px;
                    line-height: 34px;
                    color: #1caa3d;
                }
                .dotAndRate{
                    span{
                        display: inline-block;
                        width: 70px;
                        color: #1caa3d;
                    }
                }
            }
    }
    } 
}
  .notice{
      margin-top:25px;
      ul{
          width: 1200px;
          height: 100px;
          @include display-flex(space-between);
          margin:0 auto;
          li{
              width: 175px;
              height: 70px;
              border:1px solid #c49056;
              position: relative;
              padding: 28px 0 0 100px;
              &:hover{
                  h4{
                        color:#e84230;
                        font-size: 24px;
                        transform: translateY(8px);
                        transition: all 0.5s;
                    }
                   p{
                       display: none;
                   }
              } 
              img{
                  width: 50px;
                  height: 50px;
                  position: absolute;
                  top:25%;
                  left: 35px;
                  display: block;
              }
              h4{
                  color: #333;
                  font-size: 18px;
                  line-height: 26px;
                  margin: 0;
              }
              p{
                  color: #999;
                  margin: 0;
              }
          }
      }
      .notice-box{
        width: 1200px;
        margin:20px auto;
        padding-left:40px;
        // border-bottom:0.5px solid #ddd;
        @include display-flex(space-between);
          .notice-box-outer{
              width: 1050px;
              margin:0 auto;
              .notice-box-inner{
                  @include display-flex(space-between);
                  div{
                      width: 50%;
                      a{
                            font-size: 14px;
                            color: black;
                        }
                  }
              }
                
            }
      }
  }  
  .software{
      width: 1200px;
      margin: 0 auto;
      @include display-flex(space-around);
      img{
          width: 400px;
          height: 395px;
          display: block;
      }
      .software-text{
          width: 500px;
          text-align: left;
          h4{
              font-size: 24px;
              color: #333;
          }
          strong{
              font-size: 40px;
              color: #333;
          }
          p{
              height:100px;
          }
          a{
              width: 138px;
              height: 34px;
              color: #cf1126;
              border:1px #cf1126 solid;
              display: block;
              text-align: center;
              line-height: 34px;
              &:hover{
                  color: white;
                  background: #cf1126;
              }
          }
      }
  }
  .nine{
      width:100%;
      min-width: 1200px;
    //   background-image:url("../assets/00002.jpg"); 
        background: gray;
        padding-top:50px;
      ul{
          width: 1200px;
          height: 1100px;
          margin: 0 auto;
          padding: 0;
          li{
              float:left;
              margin:11px 0 11px 0;
              .text-box{
                  width: 305px;
                  height: 294px;
                  display: inline-block;
                  vertical-align: top;
                  padding:40px 40px 0 40px;
                  text-align: left;
                  background: white;
                  h5{
                      font-size: 16px;
                      color: #b28147;
                      padding-bottom: 32px;
                      line-height: 22xp;
                      margin:0;
                  }
                  h4{
                      font-size: 24px;
                      line-height: 33px;
                      color:#333;
                      font-weight: 400;
                      margin: 0;
                      padding:0;
                  }
                  .line{
                      display: block;
                      width: 50px;
                      height: 1px;
                      margin: 18px 0 16px 0;
                      background: #b28147;
                  }
                  p{
                      color:black;
                      font-size: 14px;
                  }
                  a{
                      width: 140px;
                      height: 36px;
                      color: white;
                      font-size: 14px;
                      transform: translateY(0);
                      display: block;
                      text-align: center;
                      line-height: 36px;
                      border: 1px #e84230 solid;
                      opacity: 0;
                      &:hover{
                          background: #e84230;
                      }
                  }
              }
              .pic-box{
                  width: 400px;
                  overflow: hidden;
                  display: inline-block;
              }
              &:hover{
                  .text-box{
                      color:white;
                      background: #222;
                    //   transition: all 1s;
                      p{
                          color: white;
                      }
                      h4{
                          color: white;
                      }
                      a{
                          opacity: 1;
                          transform: translateY(100%);
                          transition: all .3s;
                        //   transform: translateY(0);
                      }
                  }
                  .pic-box{
                      overflow: hidden;
                      img{
                          transition: all 0.5s;
                           transform: scale(1.1,1.1);
                      }
                  }
              } 
          }
          li:nth-child(1){
              width: 790px;
              height: 330px;
              margin-right: 22px;
              
          }
          li:nth-child(4){
              width: 790px;
              height: 330px;
              margin-left: 22px;
            //   .pic-box{
            //       width: 400px;
            //       overflow: hidden;
            //       display: inline-block;
            //   } 
          }
          li:nth-child(3){
             height: 294px;
          }
          li:nth-child(5){
             height: 294px;
             margin-right:22px;
          }
          li:nth-child(6){
             margin-right:22px;
          }
      }
  }
  .four{
      height: 290px;
      ul{
          width: 1200px;
          padding:40px 0;
          margin: 0 auto;
          li{
              width: 25%;
              float:left;
              a{
                  display: block;
                  text-align: center;
                  padding:20px 40px 24px;
                  h4{
                      font-size: 18px;
                      line-height: 25px;
                      color: #333;
                      font-weight: 400;
                      padding: 0;
                      margin:0;
                  }
                  p{
                      font-size: 14px;
                      color:#999;
                      line-height: 20px;
                      margin: 0;
                      padding-top:6px;
                  }
              }
              &:hover{
                  h4{
                      color:#e84230;
                  }
              }
          }
          li:nth-child(1){
              span{
                      height: 95px;
                      display: block;
                      background: url('../assets/1.png') center  center no-repeat
                  }
          }
          li:nth-child(2){
              span{
                      height: 95px;
                      display: block;
                      background: url('../assets/0.png') center  center no-repeat
                  }
          }
          li:nth-child(3){
              span{
                      height: 95px;
                      display: block;
                      background: url('../assets/2.png') center  center no-repeat
                  }
          }
          li:nth-child(4){
              span{
                      height: 95px;
                      display: block;
                      background: url('../assets/3.png') center  center no-repeat
                  }
          }
      }
  }
}

</style>