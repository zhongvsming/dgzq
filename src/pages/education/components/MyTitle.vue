<template>
    <div class="container">
         <!-- 导航栏 -->
    <div class="title-outer">
        <div class="title-inner">
            <div class="logo">
                <a href="">
                    <img src="https://dzedu.dgzq.com.cn/dgzq/images/logo.png" alt=""><span>投资者教育基地</span>
                </a>
            </div>
            <div class="items">
                <ul>
                    <li>
                        <a href="">首页</a>
                    </li>
                     <li @mouseleave="closeMenu('youcaiketang')">
                        <a href="" @mouseenter="openMenu('youcaiketang','230px')">有财课堂</a>
                        <ul id="youcaiketang">
                            <li><a href="">新手入门</a></li>
                            <li><a href="">脱新进阶</a></li>
                            <li><a href="">技能提升</a></li>
                            <li><a href="">科创板</a></li>
                            <li><a href="">理财知识</a></li>

                        </ul>
                    </li>
                     <li @mouseleave="closeMenu('shipinzhongxin')">
                        <a href="" @mouseenter="openMenu('shipinzhongxin','414px')">视频中心</a>
                        <ul id="shipinzhongxin">
                            <li><a href="">风险教育专题</a></li>
                            <li><a href="">理财投资专题</a></li>
                            <li><a href="">基金专题</a></li>
                            <li><a href="">债券专题</a></li>
                            <li><a href="">股票期权专题</a></li>
                            <li><a href="">港股通专题</a></li>
                            <li><a href="">融资融券专题</a></li>
                            <li><a href="">适当性专题</a></li>
                            <li><a href="">基础知识专题</a></li>
                        </ul>
                    </li>
                     <li @mouseleave="closeMenu('toujiaodongtai')">
                        <a href="" @mouseenter="openMenu('toujiaodongtai','92px')">投教动态</a>
                        <ul id="toujiaodongtai">
                            <li><a href="">主题活动</a></li>
                            <li><a href="">投教活动</a></li>
                        </ul>
                    </li>
                     <li @mouseleave="closeMenu('fengxianjiaoyu')">
                        <a href="" @mouseenter="openMenu('fengxianjiaoyu','138px')">风险教育</a>
                        <ul id="fengxianjiaoyu">
                            <li><a href="">风险揭示</a></li>
                            <li><a href="">退市信息整理</a></li>
                            <li><a href="">风险案例</a></li>
                        </ul>
                    </li>
                     <li @mouseleave="closeMenu('touzizhebaohu')">
                        <a href="" @mouseenter="openMenu('touzizhebaohu','184px')">投资者保护</a>
                        <ul id="touzizhebaohu">
                            <li><a href="">政策法规</a></li>
                            <li><a href="">互联网金融与信息安全</a></li>
                            <li><a href="">投资者维权</a></li>
                            <li><a href="">纠纷调解</a></li>
                        </ul>
                    </li>
                     <li @mouseleave="closeMenu('shichangdongtai')">
                        <a href="" @mouseenter="openMenu('shichangdongtai','138px')">市场动态</a>
                        <ul id="shichangdongtai">
                            <li><a href="">有财播报</a></li>
                            <li><a href="">业务热点</a></li>
                            <li><a href="">监管信息</a></li>
                        </ul>
                    </li>
                     <li @mouseleave="closeMenu('monitiyan')">
                        <a href="" @mouseenter="openMenu('monitiyan','184px')">模拟体验</a>
                        <ul id="monitiyan">
                            <li><a href="">风险测评</a></li>                            
                            <li><a href="">港股通</a></li>                            
                            <li><a href="">理财计算器</a></li>                            
                            <li><a href="">股票期权</a></li>                            
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="search">搜索</div>
        </div>
    </div>
    <!-- 轮播图 -->
    <div class="banner">
        <el-carousel height="444px">
            <el-carousel-item v-for="item in bannerImage" :key="item.id">
                <img :src="item.url" alt="图片无法显示">
            </el-carousel-item>
        </el-carousel>
    </div>
    <!-- 有财课堂 -->
    <div class="classroom-outer">
        <div class="classroom-inner">
            <h3>有财课堂</h3>
            <p>炒股学习由零基础起步，步步为赢从入门到精通</p>
            <div class="classroom-item">
                <ul>
                    <li>
                        <a href="">
                            <div class="classroom-img"><img src="https://dzedu.dgzq.com.cn/dgzq/images/pic1.png" alt=""></div>
                            <h5>新手入门</h5>
                            <p>炒股初学者必看</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div class="classroom-img"><img src="https://dzedu.dgzq.com.cn/dgzq/images/pic2.png" alt=""></div>
                            <h5>脱新进阶</h5>
                            <p>炒股进阶指南</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div class="classroom-img"><img src="https://dzedu.dgzq.com.cn/dgzq/images/pic3.png" alt=""></div>
                            <h5>技能提升</h5>
                            <p>技术面、基本面</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div class="classroom-img"><img src="https://dzedu.dgzq.com.cn/dgzq/images/pic4.png" alt=""></div>
                            <h5>科创板</h5>
                            <p>走近科创，你我同行</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 市场动态 -->
    <div class="market-outer">
        <div class="market-inner">
            <h3>市场动态</h3>
            <p>小宝带你读资讯，市场动态早知道</p>
            <div class="market-item">
                <ul>
                    <li>
                        <div class="market-box">
                            <div class="t">
                                <h5>有财播报</h5>
                                <img src="https://dzedu.dgzq.com.cn/dgzq/images/market01.png" alt="">
                            </div>
                            <ul>
                                <li>
                                    <a href="">
                                        <h6>第十一轮中美经贸高级别磋商将于下周在华盛顿举行</h6>
                                        <p>东莞证券 2019-05-05</p>                    
                                    </a>
                                </li>
                                <li>                                  
                                    <a href="">
                                        <h6>习近平会见新加坡总理李显龙，表示双方要立足中新合作，推动地区和沿线国家共同发展，推进“陆海新通道”和三方合作。</h6>
                                        <p>东莞证券 2019-04-29</p>
                                    </a>
                                </li>
                            </ul>
                            <a href="" class="market-more">查看更多</a>
                        </div>
                    </li>
                    <li>
                        <div class="market-box">
                            <div class="t">
                                <h5>监管信息</h5>
                                <img src="https://dzedu.dgzq.com.cn/dgzq/images/market02.png" alt="">
                            </div>
                            <ul>
                                <li>
                                    <a href="">
                                        <h6>你知道哪些交易行为会被重点监控吗？</h6>
                                        <p>东莞证券 2019-05-05</p>                    
                                    </a>
                                </li>
                                <li>                                   
                                    <a href="">
                                        <h6>上交所加速推进设立科创板并试点注册制各项工作</h6>
                                        <p>东莞证券 2019-04-29</p>
                                    </a>
                                </li>
                            </ul>
                            <a href="" class="market-more">查看更多</a>
                        </div>
                    </li>
                    <li>
                        <div class="market-box">
                            <div class="t">
                                <h5>业务热点</h5>
                                <img src="https://dzedu.dgzq.com.cn/dgzq/images/market03.png" alt="">
                            </div>
                            <ul>
                                <li>
                                    <a href="">
                                        <h6>1图看懂科创板细则</h6>
                                        <p>东莞证券 2019-05-05</p>                    
                                    </a>
                                </li>
                                <li>                                
                                    <a href="">
                                        <h6>CDR知识知多少？</h6>
                                        <p>东莞证券 2019-04-29</p>
                                    </a>
                                </li>
                            </ul>
                            <a href="" class="market-more">查看更多</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 视频中心 -->
    <div class="vedio-outer">
        <div class="vedio-inner">
            <h3>视频中心</h3>
            <p>点燃投资者知识学习热情，各类投教课程免费学</p>
            <div class="vedio-content">
                <div class="vedio-nav">
                    <h5>热播推荐</h5>
                    <ul>
                        <li>
                            <i></i>
                            <a @mouseenter="displayVideo('video1')" href="javascript:;">如何识别非法证券活动</a>
                        </li>
                        <li>
                            <i></i>
                            <a @mouseenter="displayVideo('video2')" href="javascript:;">代客理财莫相信</a>
                        </li>
                        <li>
                            <i></i>
                            <a @mouseenter="displayVideo('video3')" href="javascript:;">教你识别互联网“非法荐股”</a>
                        </li>
                        <li>
                            <i></i>
                            <a @mouseenter="displayVideo('video4')" href="javascript:;">一起来学融资融券</a>
                        </li>
                        <li>
                            <i></i>
                            <a @mouseenter="displayVideo('video5')" href="javascript:;">起航咯 | 老船长带您遨游"适当性"</a>
                        </li>
                    </ul>
                    <a href="">查看更多</a>
                </div>
                <div class="vedio-box">
                    <ul>
                        <li id="video1" style="opacity:1;">
                            <video width="860px" height="360px" controls > 
                                <source src="https://eduvideo.dgzq.com.cn/upload/20190128/20190128165748759.mp4" type="video/mp4"> 
    
                                您的浏览器不支持 video 标签。 
                            </video>
                            <!-- <div class="vedio-text"></div> -->
                        </li>
                        <li id="video2">
                            <video width="860px" height="360px" controls> 
                                <source src="https://eduvideo.dgzq.com.cn/upload/20190319/20190319170348932.mp4" type="video/mp4"> 
    
                                您的浏览器不支持 video 标签。 
                            </video>
                            <!-- <div class="vedio-text"></div> -->
                        </li>
                        <li id="video3">
                            <video width="860px" height="360px" controls> 
                                <source src="https://eduvideo.dgzq.com.cn/upload/20190128/20190128165926271.mp4" type="video/mp4"> 
    
                                您的浏览器不支持 video 标签。 
                            </video>
                            <!-- <div class="vedio-text"></div> -->
                        </li>
                        <li id="video4">
                            <video width="860px" height="360px" controls> 
                                <source src="https://eduvideo.dgzq.com.cn/upload/20190312/20190312162155785.mp4" type="video/mp4"> 
    
                                您的浏览器不支持 video 标签。 
                            </video>
                            <!-- <div class="vedio-text"></div> -->
                        </li>
                        <li id="video5">
                            <video width="860px" height="360px" controls> 
                                <source src="https://eduvideo.dgzq.com.cn/upload/videos/rBIXk1mZET2ADJ57CdfjeOOltZk202.mp4" type="video/mp4"> 
    
                                您的浏览器不支持 video 标签。 
                            </video>
                            <!-- <div class="vedio-text"></div> -->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- 投保专区 -->
    <div class="insure-outer">
        <div class="insure-inner">
            <h3>投保专区</h3>
            <p>识别投资风险，知悉权利义务，争做理性投资人</p>
            <div class="insure-item">
                <ul>
                    <li>
                        <div class="insure-box">
                            <img src="https://dzedu.dgzq.com.cn/dgzq/images/tzzbh.png" alt="">
                            <div class=insure-text>
                                <h5>投资者保护</h5>
                                <p>深入了解交易规则</p>
                                <a href="">了解详情</a>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div class="insure-box">
                            <img src="https://dzedu.dgzq.com.cn/dgzq/images/tzzbh.png" alt="">
                            <div class=insure-text>
                                <h5>风险教育</h5>
                                <p>知晓风险，理性投资</p>
                                <a href="">了解详情</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
    <!-- 投教专项活动 -->
    <div class="activity-outer">
        <div class="activity-inner">
            <h3>投教专项活动</h3>
            <p>避风险！聚焦详实整非案例，查看新鲜投教活动</p>
            <div class="activity-item">
                <ul>
                    <li>
                        <div class="activity-box">
                            <div class="acti-img"><img src="https://dzedu.dgzq.com.cn/dgzq/images/zjag.png" alt=""></div>
                            <h5>走进A股</h5>
                            <a href="">了解详情</a>
                        </div>
                    </li>
                    <li>
                        <div class="activity-box">
                            <div class="acti-img"><img src="https://dzedu.dgzq.com.cn/dgzq/images/zjgx.png" alt=""></div>
                            <h5>走进高校</h5>
                            <a href="">了解详情</a>
                        </div>
                    </li>
                    <li>
                        <div class="activity-box">
                            <div class="acti-img"><img src="https://dzedu.dgzq.com.cn/dgzq/images/dfjxs.png" alt=""></div>
                            <h5>打非进行时</h5>
                            <a href="">了解详情</a>
                        </div>
                    </li>
                    <li>
                        <div class="activity-box">
                            <div class="acti-img"><img src="https://dzedu.dgzq.com.cn/dgzq/images/315xc.png" alt=""></div>
                            <h5>315宣传</h5>
                            <a href="">了解详情</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 其他选项 -->
    <div class="other-outer">
        <div class="other-inner">
            <ul>
                <li>
                    <a href="">
                        <img src="https://dzedu.dgzq.com.cn/dgzq/images/fxcp.png" alt="">
                        <p>风险评测</p>
                    </a>
                </li>
                 <li>   
                     <a href="">
                        <img src="https://dzedu.dgzq.com.cn/dgzq/images/ggt.png" alt="">
                        <p>港股通</p>
                     </a>   
                </li>
                 <li>
                     <a href="">
                        <img src="https://dzedu.dgzq.com.cn/dgzq/images/lcjsq.png" alt="">
                       <p>理财计算器</p>
                     </a>       
                </li>
                 <li>
                     <a href="">
                        <img src="https://dzedu.dgzq.com.cn/dgzq/images/fxcp.png" alt="">
                        <p>股票期权</p>
                     </a>    
                </li>
            </ul>
        </div>
    </div>

    </div>  
</template>

<script>
    export default {
        name:'mytitle',
        data(){
            return {
                bannerImage:[
                    {id:0,url:'https://dzedu.dgzq.com.cn/upload/20190326/20190326105619435.png'},
                    {id:1,url:'https://dzedu.dgzq.com.cn/upload/20181217/20181217175931495.png'},
                    {id:2,url:'https://dzedu.dgzq.com.cn/upload/20181217/20181217175917765.png'},
                    {id:3,url:'https://dzedu.dgzq.com.cn/upload/20181217/20181217175903512.png'},
                    {id:4,url:'https://dzedu.dgzq.com.cn/upload/20190117/20190117175840107.png'}
                ],
                nowVideo:"video1"
            }
        },
        methods:{
            openMenu(el,h){
                document.getElementById(el).style.height = h;
            },
            closeMenu(el){
                document.getElementById(el).style.height = "0";
            },
            displayVideo(id){
                switch(id){
                    case "video1":
                    // alert("1");
                    this.nowVideo="video1";
                    break; 
                    case "video2":
                    // alert("2");
                    this.nowVideo="video2";
                    break;   
                    case "video3":
                    this.nowVideo="video3";
                    break;   
                    case "video4":
                    this.nowVideo="video4";
                    break;   
                    case "video5":
                    this.nowVideo="video5";
                    break;              
                }
            }
        },
        watch:{
            nowVideo(newVal,oldVal){
                document.getElementById(oldVal).style.opacity = "0";
                document.getElementById(oldVal).style.transform = "perspective(500px) translate3d(0,10px,-10px)";
                // document.getElementById(oldVal).style.transformStyle = "preserve-3d";

               
                // document.getElementById(oldVal).style.transform = "";
                document.getElementById(newVal).style.opacity = "1";
                document.getElementById(newVal).style.transform = "perspective(500px) translate3d(0,0,0)";
                // document.getElementById(newVal).style.transform = "";

                // const x =document.getElementById(newVal);
                // alert(x);
                // alert("watch");
            }
        }
    }
</script>

<style lang="scss" scoped>
@mixin wAndH($width,$height){
    width: $width;
    height:$height;
}
@mixin setfont($size,$weight,$lheight,$color){
    font-size: $size;
    font-weight: $weight;
    line-height: $lheight;
    color: $color;
}
@mixin oneLineMore(){
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.container{
    h3{
        @include setfont(24px,bold ,32px ,#000 );
        text-align: left;
    }
    p{
        @include setfont(14px,200 ,20px ,#999 );
        margin-top:9px;
        text-align: left;
    }
    h5{
        @include setfont(16px,bold ,23px ,#333 );
        margin:25px 0 10px 0;
    }
    .title-outer{
        .title-inner{
            @include wAndH(1200px,75px );
            margin:0 auto;
            .logo{
                float: left;
                height: 75px;
                display: flex;
                align-items: center;
                a{
                    @include setfont(16px,bold ,1.5 ,#494E64 );
                    // margin: auto 0;
                    // display: block;
                    img{
                        @include wAndH(132px,37px );
                        vertical-align: middle;
                        margin-right: 5px;
                    }
                }
            }
            .items{
                float: left;
                margin-left:44px;
                ul{
                    margin:0;
                    padding:0;
                    li{
                        float: left;
                        padding: 0 20px;
                        position: relative;
                        a{
                            @include setfont(16px,400 ,75px ,black );
                            display: block;
                            height: 75px;
                            &:hover{
                                color:#E2001E;
                            }
                        }
                        ul{
                            @include wAndH(144px,0 );
                            overflow: hidden;
                            margin:0 0 0 -82px;
                            background: white;
                            border-radius: 0 0 8px 8px;
                            z-index: 1000;
                            position: absolute;
                            top: 100%;
                            right:-30px;
                            box-shadow: 0 8px 17px 0 rgba(0,0,0,0.10);
                            transition: all .5s ease;
                            border-top: 0;
                            li{
                                @include wAndH(100%,46px );
                                text-align: center;
                                padding:0;
                                border: 0;

                                a{
                                    @include setfont(15px,200 ,46px ,black );
                                    height: 46px;
                                }
                            }
                        }
                    }
                }
            }
            .search{
                height: 75px;
                line-height: 75px;
            }
        }
    }
    .classroom-outer{
        .classroom-inner{
            width: 1200px;
            height: 300px;
            margin: 0 auto;
            
            .classroom-item{
                ul{
                    li{
                        float: left;
                        margin: 20px 50px;
                        .classroom-img{
                            img{
                                @include wAndH(78px,78px );
                                display: block;
                                margin: 0 auto;
                            }
                        }
                        h5{
                            @include setfont(18px,400 ,24px ,#333 );
                            margin: 12px 0;
                        }
                        &:hover{
                            .classroom-img{
                                img{
                                    transform: rotateY(360deg);
                                    transition: transform 1s ease;
                                }
                            }
                            h5{
                                color: #D01F27;
                            }
                            p{
                                color:black;
                            }
                        }
                    }
                }
            }
        }
    }
    .market-outer{
        background: #F6F9FF;
        .market-inner{
            @include wAndH(1200px,490px );
            margin: 0 auto;
            padding: 20px 0 20px 0;
            .market-item{
                >ul{
                    display: flex;
                    justify-content: space-between;
                    padding: 0;
                    >li{
                        background: white;
                        padding:16px;
                        border-radius:10px;
                        transition: transform 1s ease;
                        &:hover{
                            transform: translate(-0,-5px);
                            box-shadow: 0 10px 26px 0 rgba(0,0,0,0.07);
                        }
                        .market-box{
                            @include wAndH(340px,310px );
                            position: relative;
                            *{
                                text-overflow:ellipsis;
                                text-align: left;
                                padding: 0;
                                margin: 0;
                                white-space:nowrap;
                                overflow: hidden;
                            }
                            .t{
                                height: 132px;
                                background: #F7F7F7;
                                position: relative;
                                h5{
                                    @include setfont(18px,400 ,24px ,#000 );
                                    position: absolute;
                                    left: 20px;
                                    top: 50px;
                                    border-bottom: 2px #F0737A solid;
                                }
                                img{
                                    @include wAndH(142px,113px );
                                    display: block;
                                    position: absolute;
                                    top: 10px;
                                    right: 20px;
                                }
                            }
                            ul{
                                @include wAndH(auto,120px );                               
                                li{
                                    float: none;
                                    h6{
                                        margin:20px 0 5px 0;
                                        max-width: 300px;
                                    }
                                    p{
                                        font-size: 12px;
                                    }
                                }
                            }
                            .market-more{
                                @include wAndH(104px,30px );
                                @include setfont(14px,400 ,30px ,#EB5D7F );
                                text-align: center;
                                display: block;
                                position: absolute;
                                left: 5px;
                                bottom:5px;
                                border:1px solid rgba(237,104,126,.4);
                                &:hover{
                                    color:white;
                                    background: #FF5A53;
                                    border: 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .vedio-outer{
        .vedio-inner{
            @include wAndH(1200px,565px );
            margin: 0 auto;
            padding-top:20px;
            .vedio-content{
                display: flex;
                justify-content: space-between;
                .vedio-nav{
                    @include wAndH(380px,380px );
                    background: url('../../../assets/onlinebg2.png');
                    border-radius: 8px;
                    text-align: left;
                    >h5{
                        @include setfont(18px,400 ,24px ,white );
                        padding-left: 40px;
                    }
                    >ul{
                        padding: 0;
                        >li{
                            padding:0 20px;
                            margin:0 20px;
                            &:hover{
                                background: white;
                                a{
                                    color: #F0737A;
                                }
                            }
                            a{
                                @include setfont(14px,400 ,40px ,white );
                                @include oneLineMore();
                                width: 100%;
                                display: block;
                            }
                        }
                    }
                    >a{
                        @include wAndH(104px,30px );
                        @include setfont(14px,400 ,30px ,white );
                        display: block;
                        text-align: center;
                        margin:30px 0 0 40px;
                        border: 1px solid rgba(255,255,255,.5);
                    }
                }
                .vedio-box{
                    @include wAndH(820px,366px );
                    position: relative;
                    // .vedio-text{
                    //     @include wAndH(820px,366px );
                    //     background: pink;
                    // }
                    >ul{
                        >li{
                            // transform: translateY(-10px);
                            // transform: scale(0.9);
                            opacity: 0;
                            position: absolute;
                            transition: opacity 1s;
                            transform-style: preserve-3d;
                            video{
                                background: black;
                            }
                        }
                        .dontplay{
                            display: none;
                        }
                    }
                }
            }
            
            
        }
    }
    .insure-outer{
        background: #F6F9FF;
        .insure-inner{
            @include wAndH(1200px,340px );
            padding: 20px 0 50px 0;
            margin: 0 auto;
            .insure-item{
                >ul{
                    display: flex;
                    justify-content: space-between;
                    >li{
                        .insure-box{
                            // @include wAndH(230px,180px );
                            width: 500px;
                            padding: 25px;
                            background: white;
                            display: flex;
                            justify-content: space-between;
                            border-radius: 18px;
                            img{
                                display: block
                            }
                            .insure-text{
                                text-align: left;
                                width: 200px;
                                >a{
                                    margin-top:30px;
                                    @include wAndH(104px,30px );
                                    @include setfont(14px,400 ,30px ,#EB5D7F );
                                    border: 1px solid rgba(237,104,126,.4);
                                    display: block;
                                    text-align: center;
                                    &:hover{
                                        color:white;
                                        background: #FF5A53;
                                        border:0;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .activity-outer{
        background: #F6F9FF;
        padding: 10px 0 50px 0;
        .activity-inner{
            width: 1200px;
            margin: 0 auto;
            .activity-item{
                >ul{
                    display: flex;
                    justify-content: space-between;
                    >li{
                        background: white;
                        .activity-box{
                            .acti-img{
                                height: 200px;
                                background: rgba(255,219,189,.5);
                            }
                            >a{
                                // margin-top:30px;
                                margin:20px auto 20px auto;
                                @include wAndH(104px,30px );
                                @include setfont(14px,400 ,30px ,#EB5D7F );
                                border: 1px solid rgba(237,104,126,.4);
                                display: block;
                                text-align: center;
                                &:hover{
                                    color:white;
                                    background: #FF5A53;
                                    border:0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .other-outer{
        padding: 20px 0;
        .other-inner{
            width: 1200px;
            margin: 0 auto;
            >ul{
                display: flex;
                justify-content: space-around;
                >li{
                    >a{
                        &:hover{
                            p{
                                color:#D01F27;
                            }
                            img{
                                transform: rotateY(180deg);
                                transition: transform 1s;
                            }
                        }
                        p{
                            @include setfont(18px,400 ,24px ,black );
                            text-align: center;  
                        }
                    }
                }
            }
        }
    }
}
    
</style>