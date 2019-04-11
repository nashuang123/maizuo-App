<template>
  <div>
    <CommonTop/>
    <div class="cinema-list-wrap">
      <ul class="cinema-list">
        <li class="cinema-list-item" v-for="n in 20" :key="n">
          <a href="#/cinema/1701/film" class="cinema-item-wrap">
            <div class="cinema-info-lf cinema-info">
              <span class="cinema-name">保利国际影城北京天安门店</span>
              <span class="cinema-address">北京市西城区前门煤市街北京坊C1区，B1\B2层</span>
            </div>
            <div class="cinema-info-rt cinema-info">
              <div class>
                <span class="cinema-lowPrice price-fmt">
                  <i>￥</i>
                  <span class="interge" style="font-size: 15px;">40</span>
                  <span style="display: none;">.</span>
                  <span class="decimal" style="font-size: 10px;"></span>
                </span>
                <span class="upon">起</span>
              </div>
              <span class="cinema-gpsAddress">距离未知</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <Footer :index-color="indexColor"/>
  </div>
</template>
<script>
import CommonTop from "@/pages/films/component/common/CommonTop";
import Footer from "@/components/common/Footer";
export default {
  name: "Cinemas",
  data() {
    return {
      indexColor: 1
    };
  },
  components: {
    Footer,
    CommonTop
  }
};
</script>
<style>
.cinema-list-wrap {
  padding: 94px 0 49px;
  z-index: 100;
}
.cinema-list-wrap li {
  height: 45px;
  position: relative;
  background-color: #fff;
  padding: 15px;
}
.cinema-item-wrap {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.cinema-info-lf {
  width: calc(100% - 65px);
  text-align: left;
  padding-right: 15px;
  float: left;
}
</style>