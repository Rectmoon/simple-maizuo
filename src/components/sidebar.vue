<template>
  <div id='sidebar'>
    <div class="container" @click='hideNav' v-show='show'>
      <div class="overlay">
        <transition name='leftNav'>
          <nav v-show='show'>
            <li v-for='menu in menuList'>
              <router-link class='lzx' :to='menu.path' :key='menu.name'>
                <span>{{menu.name}}</span>
                <span class="icon iconfont icon-right"></span>
              </router-link>
            </li>
          </nav>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuList: [
          {
            name:'首页',
            path:'/home'
          },
          {
            name:'影片',
            path:'/film/now-playing'
          }
        ] 
      }
    },
    computed: {
      show() {
        return this.$store.getters.leftNavStatus
      }
    },
    methods: {
      hideNav() {
        this.$store.dispatch('changeLeftNavStatus',false)
      }
    }
  }
</script>

<style scoped lang='sass'>
  @import '../assets/styles/mixins.sass'
  #sidebar
  	transition: all ease .4s 
  .sidebar-enter-active,.sidebar-leave-active
    transition: all ease .4s
  .sidebar-enter,.sidebar-leave-active
    opacity: 0
  .leftNav-enter-active,.leftNav-leave-active
    transition: all ease .4s
  .leftNav-enter,.leftNav-leave-active
    right: 380*$px !important
  .container
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    color: #9a9a9a
    z-index: 501
    .overlay
      background: rgba(0,0,0,.5)
      position: absolute
      top: 50*$px
      right: 0
      bottom: 0
      left: 0
      nav
        border-top: 1px solid #222
        box-shadow: 0 1px 1px #363636 inset
        background: #282828
        position: absolute
        display: block
        top: 0
        right: 110*$px
        bottom: 0
        left: 0
        li
          overflow: hidden
          line-height: 50*$px
          height: 51*$px
          .lzx
            color: #9a9a9a
            font-size: 14*$px
            display: block
            border-bottom: 1px dotted #333
            width: 90%
            margin: 0 auto
            .icon
              float: right
              color: #666
              font-size: 14*$px
</style>