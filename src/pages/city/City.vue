<template>
  <div>
    <CityHeader/>
       <CityScroll/>
   
  </div>
</template>
<script>
import CityHeader from './others/CityHeader'
import CityScroll from './CityScroll'
export default {
  name:'City',
  components:{
    CityHeader,
    CityScroll,
  }
}
</script>