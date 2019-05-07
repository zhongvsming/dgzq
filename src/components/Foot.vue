<template>
    <!-- 底部区域 -->
        <div class="bottom">
            <div class="footer-box">
                <div class="footer-inner">
                    <div class="logo">东莞证券</div>
                    <div class="service">
                        <a href="">在线客服与建议</a>
                        <a href="">95328</a>
                        <p>官方客服 竭诚服务</p>
                        <p><a href="" id="mianze">免责条款</a></p>
                    </div>
                    <div class="ft-nav">
                        <h4>业务支持</h4>
                        <ul>
                            <li><a href="">在线交易</a></li>
                            <li><a href="">网上打新</a></li>
                            <li><a href="">企业邮箱</a></li>
                            <li><a href="">东证锦信</a></li>

                        </ul>
                    </div>
                    <div class="ft-nav">
                        <h4>友情链接</h4>
                        <ul>
                            <li><a href="">上海证券交易所</a></li>
                            <li><a href="">中国证监会</a></li>
                            <li><a href="">中国证监协会</a></li>
                            <li><a href="">深圳证券交易所</a></li>
                            <li><a href="">更多...</a></li>


                        </ul>
                    </div>
                    <div class="ft-nav">
                        <h4>走进我们</h4>
                        <ul>
                            <li><a href="">关于我们</a></li>
                            <li><a href="">营业网点</a></li>
                            <li><a href="">联系我们</a></li>
                            <li><a href="">招贤纳士</a></li>

                        </ul>
                    </div>
                    <div class="ft-nav">
                        <h4>客户服务</h4>
                        <ul>
                            <li><a href="">从业人员查询</a></li>
                            <li><a href="">投资者教育基地</a></li>
                            <li><a href="">销售产品信息披露</a></li>
                            <li><a href="">业务公告</a></li>

                        </ul>
                    </div>
                    <div class="ft-code">
                        <h4>东莞证券官方微信</h4>
                        <div><img src="https://new.dgzq.com.cn/dz-ow/pcfront/img/ft_code.7459285.png" alt="" width="86px" height="86px"></div>
                    </div>
                </div>
                <div class="copy-right">

                </div>
            </div>
            
        </div>
</template>

<script>
    export default {
        name:'foot'
    }
</script>

<style lang="scss" scoped>
@mixin display-flex($justify){
    display: flex;
    justify-content: $justify;
}
.bottom{
      width: 100%;
      min-width: 1200px;
      height: 300px;
      background: #242a37;
      .footer-box{
          width: 1200px;
          padding: 40px 0 25px;
          margin: 0 auto;
          .footer-inner{
              @include display-flex(space-around);
              color:white;
                p{
                    font-size: 14px;
                    color:#888c94;
                }
                .logo{
                    width: 100px;
                    height: 100px;
                    margin:auto 0;
                    line-height: 100px;
                    font-size:22px;
                    font-weight: bold;
                }
                .service{
                    width: 180px;
                    height: 150px;
                    a:nth-child(1){
                        font-size: 14px;
                        color: white;
                        display: block;
                        margin-top:18.62px;
                    }
                    a:nth-child(2){
                        height: 44px;
                        font-size: 32px;
                        color: white;
                        display: block;
                        margin:12px 0 11px;
                    }
                    #mianze{
                        font-size: 14px;
                        color:#888c94;
                    }
                }
                .ft-nav{
                    h4{
                        font-size: 14px;
                        text-align: left;
                    }
                    ul{
                        padding:0;

                        li a{
                            display: block;
                            height: 26px;
                            font-size: 14px;
                            color:#666;
                            text-align: left;
                        }
                        
                    }
                }
                .ft-code{
                    //   float:left;
                }
          }
          
      }
  }  
</style>