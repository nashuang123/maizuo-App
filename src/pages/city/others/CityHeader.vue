<template>
    <section class="fixed">
    <div id="locate" class="city-title">当前城市 -</div>
    <div class="city-list city-list-inline clearfix">
     <div class="input-wrap">
       <i class="search-icon iconfont icon-sousuo-sousuofangdajing" style="font-size: 20px;"></i> 
       <input type="text" placeholder="输入城市名或拼音" class="search-input">
        <div class="clean-icon">
            <i class="iconfont icon-chongzhi-qingchu" style="font-size: 20px; display: none;"></i>
        </div>
    </div>
    </div>
  </section>
</template>
<script>
export default {
    name:'CityHeader'
}
</script>
<style lang="stylus" scoped>
.fixed{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index:20;
}
.city-title {
  text-align:center;
  line-height: 44px;
  background:#fff;
}

.city-list-inline {
  background-color: #f5f5f5;
  padding-bottom: 8px;

  .location-city {
    float: left;
    background: #fff;
    height: 30px;
    margin-top: 15px;
    margin-left: 4%;
    padding: 0 4px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    line-height: 30px;
    text-align: center;
    box-sizing: border-box;
    white-space: nowrap;
  }

  .location-city {
    width: auto;
    min-width: 30%;
    padding: 0 20px;
  }
}

.city-list {
  padding-right: 30px;
}

.clearfix:after {
  content: ' ';
  display: table;
  clear: both;
}
 .input-wrap {
    background-color: #fff;
    position: relative;
    display: inline-block;
    border-radius: 3px;
    width: 100%;
    height: 30px;
    margin:10px 15px 0px 15px;
    .clean-icon {
    position: absolute;
    right: 7px;
    top: 0;
    line-height: 30px;
    font-size: 21px;
    color: #bdc0c5;
}
    .search-input {
    position: absolute;
    left: 33.5px;
    top: 0;
    height: 30px;
    width: calc(100% - 65px);
    border: 0;
    box-sizing:border-box;
}

}
</style>
