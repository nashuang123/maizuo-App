<template>
    <div>
       <Header/>
       <NavMune :mune-actived="muneActived" :menu-show="menuShow" :menu-position="menuPosition"/>
      <router-view></router-view>
       <Footer/>
    </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/common/Footer'
import NavMune from './component/NavMune'
export default {
    name:'Films',
    data(){
        return {
        muneActived:0,
        menuShow:false,
        menuPosition:0
        }
    },
    methods: {
        changeMune(){
            this.muneActived=!muneActived
        },
        handleScroll(){
              var scrollTop=window.pageYOffset;
            if(scrollTop>=173){
                this.menuShow=true;
                this.menuPosition=1;
            }else{
                this.menuShow=false
                  this.menuPosition=0;
            }
          
           
        }
    },
    components:{
        Header,
        NavMune,
        Footer
    },
    mounted() {
        window.addEventListener('scroll',this.handleScroll)
    },
     watch: {
        '$route'(to,from){
            this.muneActived=(this.muneActived+1)%2
        }
    }
}
</script>