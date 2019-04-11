<template>
    <div>
        <CityContent/>
        <CityNameList/>
    </div>
</template>
<script>
import CityContent from './others/CityContent'
import CityNameList from './others/CityNameList'
export default {
    name:'CityScroll',
    components:{
        CityContent,
        CityNameList
    }
}
</script>