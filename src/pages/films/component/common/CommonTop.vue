<template>
    <div>
     <header>
         <div class="left">
           <div class="city" @click="$router.push('/city')">
              <span >{{$store.state.cityName}}</span>
               <span class="iconfont icon-xiala"></span>
            </div>
        </div> 
        <div class="title" style="text-align: center;">
          <div>电影</div>
        </div> 
        <div class="right">
         </div>
    </header>
    <div class="cinema-list-tag"><div class="cinema-list-tag-name"><label class="">全城
        <img src="" width="6px" height="3px" style=""></label> <label class="">最近去过
        <img src="" width="6px" height="3px" style=""></label></div></div>
    </div>
</template>
<script>
export default {
    name:'CommonTop'
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
.cinema-list-tag {
    position: fixed;
    height: 50px;
    width: 100%;
    top: 44px;
    right: 0;
    text-align: center;
    background-color: #fff;
    z-index: 2000;
}
.cinema-list-tag-name {
    position: relative;
}
.cinema-list-tag-name label {
    float: left;
    width: 50%;
    line-height: 49px;
    font-size: 14px;
    color: #191a1b;
    letter-spacing: -.2px;
}
 .cinema-list-tag::after {
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

</style>