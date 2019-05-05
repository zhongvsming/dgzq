<template>
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
</template>

<script>
    export default {
        name:'mytitle',
        data(){
            return {

            }
        },
        methods:{
            openMenu(el,h){
                document.getElementById(el).style.height = h;
            },
            closeMenu(el){
                document.getElementById(el).style.height = "0";
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
</style>