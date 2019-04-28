<template>
    <div class="home-container">
        <!-- 标题导航栏 -->
        <div class="title">
            <div class="title-left">
                <img src="../assets/untitled.png" alt="">
            </div>
            <div class="title-right">
                <div class="link">
                    <ul>
                        <li><a href="">旧版官网</a></li>
                        <li><a href="">在线客服</a></li>
                        <li><a href="">95328</a></li>
                    </ul>
                </div>
                <div class="nav">
                    <ul>
                        <li><a href="">首页</a></li>
                        <li><a href="">公司业务</a></li>
                        <li><a href="">有财资讯</a></li>
                        <li><a href="">投资者教育</a></li>
                        <li><a href="">软件下载</a></li>
                        <li><a href="">关于我们</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 轮播图区域 -->
        <div class="banner">
            <el-carousel height="470px">
                <el-carousel-item v-for="item in bannerImage" :key="item.url">
                    <img :src="item.url" alt="图片无法显示">
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
                    <img :src="item.img" alt="" >
                    <h4>{{item.name}}</h4>
                    <p>{{item.content}}</p>
                </li>
            </ul>
            <div class="notice-box">
                <span style="display:block;">最新公告</span>
                <div class="notice-box-outer">
                    <el-carousel height="60px" direction="vertical" :autoplay="false">
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
                ]
            }
        }
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
    li{
       list-style: none;
    }
  .title{
    width:1200px;
    height: 70px;
    margin:0 auto;

    @include display-flex(space-between);
    ul{
        @include display-flex(space-between);
        // margin: 5px;
        @include clear();
    }
    a{
        text-decoration: none;
    }
    border: 1px pink solid;
    .title-left{
        height: 75px;
        display: flex;
        align-items: center;
    }
    .title-right{
        position:relative;
        .link{
            width: 250px;
            position: absolute;
            right: 0;
            li{
                margin:2px 0;
                &:nth-child(2){
                    border-left: 1px #d8d8d8 solid; 
                }
                &:nth-child(3){
                    border-left: 1px #d8d8d8 solid; 
                }
                a{
                    font-size: 14px;
                    padding: 0px 0px 0px 20px;
                    color: #999; 
                }
            }
        }
        .nav{
            position: absolute;
            bottom: 0;
            right: 0;
            // border: 1px red solid;
            width: 650px;
            ul{
                li{
                padding:0 0 0 40px;
                    a{
                        display: block;
                        font-size: 16px;
                        padding: 13px 0;
                    }
             }
            }
            
           
        }
    }
}  
    .index{
        width: 100%;
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
                            // display: block;
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
          }
      }
  }



}

</style>