<template>
  <div id='header'>
    <a @click='showNav' class="go-menu"><i class="icon iconfont icon-menu"></i></a>
    <div class="title">
      <p>{{com.title}}</p>
      <a class='go-city'>深圳<i class="icon iconfont icon-bottom"></i></a>
    </div>
    <a href="/" class="go-mine"><i class="icon iconfont icon-people"></i></a>
  </div>
</template>

<script>
  export default {
    props:{
      com:{
        type:Object
      }
    },
    methods: {
      showNav() {
        this.$store.dispatch('changeLeftNavStatus',true)  
      }
    }
  }
</script>

<style scoped lang='sass'>
  @import '../assets/styles/mixins.sass'
  #header
    background: #282828
    color: #999
    position: fixed
    z-index: 500
    width: 100%
    height: 50*$px
    line-height: 50*$px
    @include box(justify,center)
    a
      display: block
    .go-menu,.go-mine
      width: 50*$px
      text-align: center
      height: 48*$px
    .go-menu
      border-right: 1px solid #222
      box-shadow: 1px 0 1px #363636
    .title
      width: 274*$px
      font-size: 16*$px
      @include box(justify,center)
      a
        i
          margin-left: 5*$px
          font-size: 12*$px
      p
        color: #fff
</style>