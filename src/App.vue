<template>
  <div id="wrap" v-scroll='showTop'>
    <v-header :com='comConf'></v-header>
    <div class="container">
       <transition :name='transitionName'><router-view class='child-view'/></transition>
    </div>
    <v-loading v-show='loading'></v-loading>
    <SideBar/>
    <div @click="gotop" class="go-top" :class="goTop ? 'active' : ''">
      <i class="icon iconfont icon-top-copy"></i>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/reset.sass' 
import { mapGetters } from 'vuex'
import Header from '@/components/header'
import Loading from '@/components/loading'
import SideBar from '@/components/sidebar'
export default {
  data() {
    return {
      transitionName:'slide-left',
      goTop: false
    }
  }, 
  computed: {
    ...mapGetters({
      comConf: 'comConf',
      loading: 'loading'
    })
  },
  methods: {
    showTop() {
      let sTop = document.documentElement.scrollTop || document.body.scrollTop
      if(sTop>200) {
        this.goTop = true
      } else {
        this.goTop = false
      }
    },
    gotop() {
      let speed = 10;
      let timer = setInterval(function(){
        let sTop = document.documentElement.scrollTop || document.body.scrollTop
        if(sTop>0){
          document.documentElement.scrollTop  = sTop-speed > 0 ? sTop-speed : 0 
          document.body.scrollTop  = sTop-speed > 0 ? sTop-speed : 0 
          speed += 20;      
        }else{
          clearInterval(timer)
        }       
      },16)
    }
  },
  components: {
    'v-header': Header,
    'v-loading': Loading,
    SideBar,
  },
  watch: {
    '$route' (to,from) {
      let tos = to.path.split('/').length,
         froms= from.path.split('/').length
      if(tos < froms) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }   
    }
  },
  created() {
  }
}
</script>

<style scoped lang='sass'>

</style>
