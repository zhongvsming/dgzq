<template>
    <!-- 标题导航栏 -->
        <div class="title-bg">
            <div class="title">
            <a href="" style="display:flex; align-item:center;">
                <div id="title-logo" class="title-left" :class="{'title-left-collapse':titleCollapse}">
                </div>
            </a>
            <div class="title-right">
                <div id="title-link" class="link" :class="{'link-collapse':titleCollapse}">
                    <ul>
                        <li><a href="">旧版官网</a></li>
                        <li><a href="">在线客服</a></li>
                        <li><a href="">95328</a></li>
                    </ul>
                </div>
                <div class="nav">
                    <ul>
                        <li><a id="shouye" href="" @click.prevent="">首页</a></li>
                        <li @mouseleave="unShowTitleNav('business_menu','gongsiyewu')">
                            <a id="gongsiyewu" href="" @mouseenter="showTitleNav('business_menu','gongsiyewu','block')">公司业务</a>
                            <div id="business_menu" class="business_menu">
                                <div class="business_nav">
                                    <a href=""><h4>大经纪</h4></a>
                                    <ul>
                                        <a href=""><li>融资融券</li></a>
                                        <a href=""><li>产品信息披露</li></a>
                                        <a href=""><li>期货IB业务</li></a>
                                        <a href=""><li>股票期权</li></a>
                                        <a href=""><li>港股通</li></a>
                                    </ul>
                                </div>
                                <div class="business_nav">
                                    <a href=""><h4>大资管</h4></a>
                                    <ul>
                                        <a href=""><li>资产管理</li></a>
                                        <a href=""><li>集合理财</li></a>
                                        <a href=""><li>单一理财</li></a>
                                        <a href=""><li>资管资讯</li></a>
                                        <a href=""><li>投资者教育</li></a>
                                        <a href=""><li>投研团队</li></a>
                                    </ul>
                                </div>
                                <div class="business_nav">
                                    <a href=""><h4>大投行</h4></a>
                                    <ul>
                                        <a href=""><li>团队介绍</li></a>
                                        <a href=""><li>信息披露</li></a>
                                        <a href=""><li>网下打新</li></a>
                                        <a href=""><li>上市融资</li></a>
                                        <a href=""><li>债券融资</li></a>
                                        <a href=""><li>新三板</li></a>
                                    </ul>
                                </div>
                                <div class="business_nav">
                                    <a href=""><h4>东证锦信</h4></a>
                                </div>
                            </div>
                            </li>
                        <li class="nav-relative"  @mouseleave="unShowTitleNav('inner-bobao','youcaizixun')">
                            <a id="youcaizixun" href="" @mouseenter="showTitleNav('inner-bobao','youcaizixun','list-item')">有财资讯 </a>
                            <ul id="inner-bobao" class="inner-menu">
                                <a href=""><li>研播速递</li></a>
                                <a href=""><li>有财播报</li> </a>
                            </ul>    
                        </li>
                        <li>
                            <a id="touzizhejiaoyu" href="/education.html" target="_blank">投资者教育</a>    
                       </li>
                        <li class="nav-relative" @mouseleave="unShowTitleNav('inner-download','ruanjianxiazai')">
                            <a id="ruanjianxiazai" href="" @mouseenter="showTitleNav('inner-download','ruanjianxiazai','list-item')">软件下载</a>
                            <ul id="inner-download" class="inner-menu">
                                <a href=""><li>PC软件下载</li></a>
                                <a href=""><li>APP软件下载</li> </a>
                            </ul>    
                        </li>
                        <li class="nav-relative" @mouseleave="unShowTitleNav('inner-about','guanyuwomen')">
                            <a id="guanyuwomen" href="" @mouseenter="showTitleNav('inner-about','guanyuwomen','list-item')">关于我们</a>
                            <ul id="inner-about" class="inner-menu">
                                <a href=""><li> 公司介绍</li></a>
                                <a href=""><li>组织架构</li> </a>
                                <a href=""><li>发展大事</li> </a>
                                <a href=""><li>公司动态</li> </a>
                                <a href=""><li>东证招标</li> </a>
                                <a href=""><li>联系我们</li> </a>
                                <a href=""><li>营业网点</li> </a>
                                <a href=""><li>人才招聘</li> </a>
                                <a href=""><li>企业党建</li> </a>
                                <a href=""><li>社会责任</li> </a>
                            </ul>   
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
    export default {
        name:'mytitle',
        data(){
            return {
                titleCollapse:false

            }
        },
        methods:{
            tCollapse(){
                var vm = this;
                document.body.onscroll = function(){
                    if(document.documentElement.scrollTop>50){
                        if(!vm.titleCollapse){
                            vm.titleCollapse = true;
                        }
                    }else{
                        if(vm.titleCollapse){
                            vm.titleCollapse=false;
                        }
                    }
                }
            },
            showTitleNav(attr1,attr2,attr3){
                document.getElementById(attr1).style.display = attr3;
                document.getElementById(attr2).style.color = "#e84230";
            },
            unShowTitleNav(attr1,attr2){
                document.getElementById(attr1).style.display = "none";
                document.getElementById(attr2).style.color = "black";
            }
        },
         created(){
            this.tCollapse();
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
    .title-bg{
        background: white;
        z-index: 100;
         position: fixed;
            z-index: 100;
            top:0;
            left: 0;
            right: 0;
        .title{
            width:1200px;
            // height: 70px;
            margin:0 auto;
   
            @include display-flex(space-between);
            ul{
                @include display-flex(space-between);
                @include clear();
            }
            a{
                text-decoration: none;
            }
            // border: 1px pink solid;
            .title-left{
                width: 132px;
                height: 42px;
                margin: auto 0;
                background: url("../assets/untitled.png");
                background-size: 100% 100%;
                transition:all 2s;
                }
                .title-left-collapse{
                    width: 90px;
                    height: 35px;
                    margin:auto 0;
                }
            .title-right{
                position:relative;
                .link-collapse{
                    height: 0 !important;
                }
                .link{
                    width: 650px;
                    height: 23px;
                    overflow: hidden;
                    // position: absolute;
                    // float:right;
                    right: 0;
                    text-align: right;
                    transition:all 2s;

                    ul{
                        width: 250px;
                        float: right;
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
                
                }
                .nav{
                    bottom: 0;
                    right: 0;
                    width: 650px;
                    ul{
                        .nav-relative{
                            position: relative;
                        }
                        li{
                        padding:0 0 0 40px;
                            a{
                                display: block;
                                font-size: 16px;
                                padding: 13px 0;
                            }
                    }
                    }
                    #touzizhejiaoyu:hover{
                        color: #e84230;
                    }
                    .business_menu_collapse{
                        height: 0;
                        overflow: hidden;
                    }
                    .business_menu{
                        width: 1200px;
                        height: 180px;
                        border-top:1px #e9e9e9 solid;
                        background: white;
                        position: absolute;
                        right:0px;
                        // @include display-flex(space-around);
                        display: none;
                        transition: all 1s;
                        .business_nav{
                            width: 300px;
                            float: left;
                            &:nth-child(4){
                                width: 200px;
                            }
                            a{
                                display: block;
                                padding:0;
                                h4{
                                    text-align: left;
                                    height: 16px;
                                    line-height: 16px;
                                    font-size: 16px;
                                    color:black;
                                    padding:10px 0 0 40px;
                                    margin: 20px 0 10px 0;
                                    &:hover{
                                       color:#e84230;
                                   }
                                }
                            }
                            ul{
                                @include display-flex(left);
                                flex-wrap: wrap;
                                margin-left:30px;
                               a{
                                   display: block;
                                   &:hover{
                                       color:#e84230;
                                   }
                                    li{
                                        //  width: 100px;
                                        padding:10px;
                                        font-size: 16px;
                                        text-align: left;
                                    }
                               }
                            }
                        }
                    }
                    .inner-menu{
                        display: none;
                        width: 100px;
                        height: 80px;
                        position: absolute;
                        left:22px;
                        top:45px;
                        // display: list-item;
                        list-style: none;
                        background: white;
                        z-index: 50;
                        a{
                            margin: 0;
                            padding:0;
                            &:hover{
                                color: #e84230;
                            }
                            li{
                                font-size: 14px;
                                padding:15px 5px 5px 5px;
                        }
                        }
                    }
                     #inner-about{
                        height: 400px;
                    }
                }
            }
        }  
    }
</style>