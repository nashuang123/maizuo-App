<template>
    <div :class="[menuPosition==1?'menuPosition':'']">
    <header v-show="menuShow">
       <div class="left">
           <div class="city" @click="$router.push('/city')">
              <span >{{$store.state.cityName}}</span>
               <span class="iconfont icon-xiala"></span>
            </div>
        </div> 
        <div class="title" style="text-align: center;">
          <div>电影</div>
        </div> <div class="right">
    </div>
    </header>
    <div class="tabs-bar-wrapper">
        <div class="tabs-bar">
        <ul class="tabs-nav">
        <li style="width: 50%;"  v-for="item in munelist" :key="item.id">
        <router-link :to="item.href" :class="[muneActived==item.id?'active':''] ">{{item.title}}</router-link></li>
      </ul></div>
    </div>
    </div>
</template>
<script>
export default {
    props:{
        muneActived:{
            type:Number,
            default:0
        },
        menuShow:{
            type:Boolean,
            default:false
        },
        menuPosition:{
            type:Number,
            default:0
        }
    },
    data(){
        return{
           munelist:[
            {id:0,
            title:'正在热映',
            href:'/films/nowPlaying'
            },
            {
                id:1,
                title:'即将上映',
                 href:'/films/comingSoon'
            }
        ]
        }
       
    },
    methods: {
        changeMune(itemId){
           this.$emit('changeMune',itemId)
        }
    },
    name:'NavMune'
   
}
</script>
<style>
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    z-index: 3000;
    background-color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.left{
    min-width: 15%;
    align-items: center; 
    margin-left: 15px;
}
.title {
    font-size: 17px;
    color: #191a1b;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.right {
    width: 15%;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 15px;
}
header::after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #ededed;
    color: #ededed;
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(.5);
    -ms-transform: scaleY(.5);
    transform: scaleY(.5);
}
.tabs-bar-wrapper li, .tabs-bar-wrapper ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.tabs-bar-wrapper ul {
    display:flex
}
.tabs-nav li { 
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-flex-shrink: 0;
    color: #191a1b;
    text-align: center;
    height: 49px;
    line-height: 49px;
    font-size: 14px;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    
}
.tabs-nav a { 
    display:inline-block;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-flex-shrink: 0;
    color: #191a1b;
    text-align: center;
    height: 49px;
    line-height: 49px;
    font-size: 14px;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
   
    text-decoration:none;
}
.tabs-nav .active {
    color: #ff5f16;
     border-bottom:2px solid  #ff5f16;
}
.icon-xiala{
  font-size:14px;
  margin-top:5px;
}
.menuPosition{
    background:#fff;
    z-index:200;
   position:fixed;
   top:43px;
   width:100%;
   border:1px solid #eee;
}
</style>