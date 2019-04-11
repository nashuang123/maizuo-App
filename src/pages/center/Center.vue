<template>
    <div>
        <div class="center-view">
           <div class="avatar">
               <img src="" class="avator-icon">
                <div class="nick-name">立即登录</div>
            </div> 
            <ul class="my-order-tab">
              <li>
                 <img src="" width="26px" height="26px" alt=""> 
                    <span class="mint-badge is-primary is-size-small" style="display: none;">99+</span> 
                    <div class="common-p">电影订单</div>
              </li> 
              <li>
                <img src="" width="26px" height="26px" alt=""> 
                <div class="common-p">商品订单</div>
              </li>
            </ul>
           <div class="margin-set my-card">
             <img src="" width="20px" height="20px" alt=""> 
             <span class="label">卖座卡</span> 
             <img src="" alt="" class="arrow">
          </div>
        </div>
        <Footer :index-color="indexColor"/>
    </div>
</template>
<script>
import Footer from '@/components/common/Footer'
export default {
    name:'Center',
    data(){
        return{
            indexColor:3
        }
    },
    components:{
        Footer
    }
}
</script>
<style>
.center-view {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    font-size: 15px;
    background: #f4f4f4;
    margin-bottom: 59px;
}
.center-view .avatar {
    text-align: center;
    margin-top: -44px;
    height: 200px;
    padding-left: 22px;
    padding-top: 64px;
    background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
    background-size: cover;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
}
.center-view .my-order-tab li {
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    list-style: none;
}
.center-view .my-order-tab li .common-p {
    color: #797d82;
}
.center-view .my-order-tab {
    width: 100%;
    margin: 0 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    font-size: 13px;
    padding: 0;
    height: 79px;
    background: #fff;
    margin-bottom: 10px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.center-view .margin-set {
    background: #fff;
    padding: 0 15px;
    height: 49px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
</style>