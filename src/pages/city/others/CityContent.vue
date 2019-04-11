<template>
    <section class="scroll">
     <div id="hot" class="city-title">GPS定位你所在城市</div>
    <div class="city-list city-list-inline clearfix">
      <div class="city-item" >定位失败</div>
    </div>
    <div id="hot" class="city-title">热门城市</div>
    <div class="city-list city-list-inline clearfix">
      <div class="city-item" v-for="(item,index) in nameList" :key="index" @click="changeCity(item.cityName)">{{item.cityName}}</div>
    </div>
  </section>
</template>
<script>
import { getCityName } from '@/api/city'
import {setCity}from 'vuex'
export default {
    name:'CityContent',
    data(){
    return{
      nameList:[],
      rename:''
    }
  },
  methods: {
      changeCity(cityName){
          this.rename=cityName;
          this.$store.commit('setCity',this.rename);
          this.$router.push('/films')
      }
  },
   mounted() {
    getCityName().then(res=>{
      if(res.code==1){
      this.nameList=res.data;
      for(var i=0;i<this.nameList.length;i++){
        this.nameList[i].cityName=this.nameList[i].cityName.substring(0,(this.nameList[i].cityName.length)-1)
      
      }
     
      }
    })
  }
}
</script>
<style lang="stylus" scoped>
.scroll{
  position:absolute;
  top:90px;
  left:0;
  width:100%;
}
.city-title {
  padding-left: 15px;
  line-height: 30px;
  color:#797d82;
  font-size:13px;
  margin-bottom:-10px;
  margin-top:10px;
}

.city-list-inline {
  background-color: #fff;
  padding-bottom: 8px;
  padding-right: 20px;
  overflow: hidden;
  padding-left:10px;
  width:100%;

  .city-item {
    float: left;
    background: #f5f5f5;
    width: 27%;
    height: 30px;
    margin-top: 15px;
    margin-left: 4%;
    padding: 0 4px;
    border-radius: 3px;
    line-height: 30px;
    text-align: center;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:14px;
    color:#191a1b;
  }
}
</style>
