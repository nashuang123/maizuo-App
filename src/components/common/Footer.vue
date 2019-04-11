<template>
       <div class="bottom">
        <div class="btn-item" v-for="item in itemList" :key="item.id">
            <router-link :to="item.href" :class="[indexColor==item.id?'active':'']" >
                <span class="iconfont" :class="item.icon"></span>
                <p>{{item.title}}</p>
            </router-link>
        </div>
       </div>
</template>
<script>
export default {
    name:'Footer',
    props:{
        indexColor:{
            type:Number,
            default:0

        }
    },
    data(){
        return{
            itemList:[
                {
                    id: 0,
                    title: '电影',
        　　　　　　　icon: 'icon-dianying',
       　　　　　　　href: '/films'
                },
                {
                    id: 1,
                    title: '影院',
        　　　　　　　icon: 'icon-yingyuan',
       　　　　　　　href: '/cinemas'
                },
                {
                    id: 2,
                    title: '特惠',
        　　　　　　　icon: 'icon-dianying',
       　　　　　　　href: '/tehui'
                },
                {
                    id: 3,
                    title: '我的',
        　　　　　　　icon: 'icon-home',
       　　　　　　　href: '/center'
                },
            ]
        }
    },
    methods: {
        changeColor(data){
            this.indexColor=data;
            console.log(this.indexColor)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~stylus/variable.styl'
.bottom
  position: fixed;
  bottom:0;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid #d6d6d6;
  background-color: rgba(246,246,246,1);
  .btn-item
    text-decoration: none;
    flex: 1;
    font-size:11px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a
      text-decoration: none;
      color: #999;
      &.active
        color: #ff5f16;
  .iconfont
    font-size: 22px;
  p
    margin-top: 4px;
</style>
