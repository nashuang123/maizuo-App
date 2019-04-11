<template>
<div>
    <div class="city-fixed" data-click-fun="track_f_76671" @click="$router.push({path:'/city'})">
      <span>{{$store.state.cityName}}</span> 
       <span class="iconfont icon-xiala"></span>
      <i class="iconfont icon-sousuo-paixujiantouxia" style="font-size: 10px;"></i>
    </div>
    <el-carousel>
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
        <img :src="item.imgUrl" class="lunbo"/>
      </el-carousel-item>
    </el-carousel>
    </div>

</template>


<script>
import {getImg} from '@/api/lunbo'
export default {
  data(){
    return{
      imgList:[]
    }
  },
  mounted() {
    getImg().then(res=>{
      if(res.code==1){
        this.imgList=res.data
        
      }
    })
  },
};
</script>

<style>
.city-fixed {
    position: absolute;
    top: 18px;
    left: 7px;
    color: #fff;
    z-index: 10;
    font-size: 13px;
    background: rgba(0,0,0,.2);
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    padding: 0 15px;
}
.iconfont {
    font-family: iconfont!important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.lunbo{
  width:100%;
  height:173px;
}
.el-carousel{
  height:100%;
}
.el-carousel__item  {
    height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.icon-xiala{
  font-size:14px;
  margin-top:5px;
}
</style>