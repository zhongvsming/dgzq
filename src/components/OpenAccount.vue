<template>
    <div class="open-account-container">
        <!-- 广告栏 -->
        <div class="advertisement">
            <div class="ad-inner">
                 <div class="ad-text">
                    <strong>手机开户</strong>
                    <p>30年专业品质保证值得信赖!</p>
                </div>
                <div class="ad-code">
                    <h3>手机开户</h3>
                    <img src="../assets/code.png" alt="">
                    <h4>扫码下载掌证宝APP</h4>
                    <p>7*24小时，5分钟极速开户</p>
                </div>
            </div>
           
        </div>
        <!-- 4大优势 -->
        <div class="four-advantage">
            <div class="four-ad-inner">
                <div><h3>四大优势</h3><span class="line"></span></div>
                <ul>
                    <li><img src="../assets/01.png" alt=""></li>
                    <li><img src="../assets/02.png" alt=""></li>
                    <li><img src="../assets/03.png" alt=""></li>
                    <li><img src="../assets/04.png" alt=""></li>
                </ul>
            </div>
        </div>
        <!-- 开户准备 -->
        <div class="open-prepare">
            <div class="prepare-inner">
                <div><h3>手机开户准备</h3><span class="line"></span>
                </div>
                <div>
                    <ul>
                        <li>
                            <img src="../assets/11.png" alt="">
                            <h4>身份证</h4>
                            <p>有效期内的本人中国大陆18位身份证原件</p>
                        </li>
                        <li>
                            <img src="../assets/22.png" alt="">
                            <h4>银行卡</h4>
                            <p>本人借记卡</p>
                        </li>
                        <li>
                            <img src="../assets/33.png" alt="">
                            <h4>手机</h4>
                            <p>请使用您本人的手机，接收验证码</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 支持银行 -->
        <div class="support-banks">
            <div class="banks-inner">
                <div><h3>支持的银行</h3><span class="line"></span></div>
                <img src="../assets/banks.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'openAccount'
    }
</script>

<style lang="scss" scoped>
@mixin setfont($size,$weight,$lheight,$color){
    font-size: $size;
    font-weight: $weight;
    line-height: $lheight;
    color: $color;
}
.open-account-container{
    padding-top:70px;
    h3{
        @include setfont(24px,500 ,33px ,#333 );
    }
    .line{
        display: block;
        width: 50px;
        height: 1px;
        background: #b28147;
        margin: 16px auto;
    }
    .advertisement{
        height: 400px;
        background: url("https://media.dgzq.com.cn/app/file/getImg?group=group1&name=TTAwLzAwLzRCL3JCUWFtMXlQRHJXQUxlMVhBQUNySkJIUkx3azU4My5qcGc");
        .ad-inner{
            width: 1200px;
            display: flex;
            justify-content: space-between;
            margin:0 auto;
            .ad-text{
                margin-top:110px;
                strong{
                    height: 68px;
                    @include setfont(52px,400 ,68px ,#333 );
                }
                p{
                    @include setfont(23px,200 ,32px ,#333 );
                }
            }
            .ad-code{
                margin-top:30px;
            }   
        }
       
    }
    .four-advantage{
        padding: 20px 0 60px 0;
        .four-ad-inner{
            width: 1200px;
            margin: 0 auto;
            h3{
                @include setfont(24px,500 ,33px ,#333 );
            }
            ul{
                display: flex;
                justify-content: space-between;
                margin-top:40px;
                li{
                    
                }
            }
        }
    }
    .open-prepare{
        background: #f7f8fa;
        .prepare-inner{
            width: 1200px;
            margin: 0 auto;
            padding:30px 0;
            ul{
                display: flex;
                justify-content: space-around;
                margin-top:40px;
                li{
                    p{
                        @include setfont(14px,300 ,20px ,#999 );
                    }
                }
            }
        }
    }
    .support-banks{
        padding-top:20px;
        .banks-inner{
            width: 1200px;
            margin:50px auto;
        }
    }
}
</style>