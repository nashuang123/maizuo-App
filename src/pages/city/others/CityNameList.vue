<template>
   <section class="down">
    <div v-for="(item,index) in wordList" :key="index">
      <div class="city-title city-title-letter" >{{item}}</div>
      <div class="city-list city-list-block clearfix">
        <div class="city-item" v-for="(item,index) in nameList" :key="index" @click="changeCity(item.cityName)">{{item.cityName}}</div>
      </div>
    </div>
  </section>
</template>
<script>
 import {getCityList} from '@/api/city'
 import {setCity} from 'vuex'
export default {
    name:'CityNameList',
    data(){
        return{
            wordList:[
                "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
            ],
            nameList:[]
        }
    },
    mounted() {
        getCityList().then(res=>{
        if(res.code==1){
          this.nameList=res.data;
          for(var i=0;i<this.nameList.length;i++){
            this.nameList[i].cityName=this.nameList[i].cityName.substring(0,this.nameList[i].cityName.length-1)
          }
          
        }
      })
    },
    methods: {
      changeCity(name){
        this.$store.commit('setCity',name);
        this.$router.push('/films')
      }
    }
}
</script>
<style lang="stylus" scoped>
.down{
  position:absolute;
  width:100%;
  top:0;
  left:0;
  top:310px;
}
.city-title-letter {
  padding-left: 20px;
  line-height: 30px;
  background-color: #f5f5f5;
  color:#797d82;
  font-size:13px;
}

.city-list-block {
  padding-left:20px;

  .city-item {
    height: 44px;
    line-height: 44px;
    margin-left: 15px;
    border-bottom: 1px solid #eee;
    color: #191a1b;
    font-size:14px;
    
  }
}
</style>