<template>
  <div id='home'>
    <div class="banner">
      <swiper :options="swiperOption" class='banner-swiper'>
        <swiper-slide class='slide' v-for='(item,i) in banners' :key='i'>
          <a :href="item.url" target='_blank'>
            <img :src="item.imageUrl" alt="">
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <div class="now-playing">
      <div class="item" v-for='(item,i) in nowplays'>
        <router-link :to="{name:'detail',params:{id:item.id}}">
          <img :src="item.cover.origin" alt="">
          <div class="desc">
            <div class="info">
              <h4>{{item.name}}</h4>
              <p>{{item.cinemaCount}}</p>家影院上映{{item.watchCount}}人购票
            </div>
            <div class="count">{{item.grade}}</div>
          </div>
        </router-link>
      </div>
      <router-link :to="{name:'film',params:{type:'now-playing'}}" class='go-more'>
        更多热映电影
      </router-link>
    </div>
    <div class="coming-title"><h2>即将上映</h2></div>
    <div class="coming-soon">
      <div class="item" v-for='item in comings'>
        <router-link :to="{name:'detail',params:{id:item.id}}">
          <img :src="item.cover.origin" alt="">
          <div class="desc">
            <div class="info"><h4>{{item.name}}</h4></div>
            <div class="time">{{item.premiereAt|formatDate}}</div>
          </div>
        </router-link>
      </div>
      <router-link :to="{name:'film',params:{type:'coming-soon'}}" class='go-more'>更多即将上映电影</router-link>
    </div>

  </div>
</template>

<script>
  import { swiper,swiperSlide } from 'vue-awesome-swiper' 
  import { mapGetters,mapActions } from 'vuex'
  export default {
    data() {
      return {
        swiperOption: {
          autoplay: true,
          autoHeight: true,
          loop: true
        }
      }
    },
    computed: {
      ...mapGetters(['banners','nowplays','comings'])
    },
    methods: {
      ...mapActions(['getBannerList','getNowPlaying','getComingSoon'])
    },
    filters: {
      formatDate(time) {
        let date = new Date(time*1),
            month=date.getMonth()+1>9 
              ? date.getMonth()+1
              :'0'+(date.getMonth()+1),
            day=date.getDate()>9
              ? date.getDate()
              : '0'+ date.getDate()
            return `${month}月${day}日上映`  
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    created() {
      this.$store.commit('COM_CONF',{title:'卖座电影'})
      if(!this.banners.length) this.getBannerList()
      if(!this.nowplays.length) this.getNowPlaying()
      if(!this.comings.length) this.getComingSoon()
    }
  }
</script>

<style scoped lang='sass'>
  @import '../assets/styles/mixins.sass'
  #home
    background: #e1e1e1
    .banner-swiper
      height: 232*$px
      color: #fff
      font-size: 30*$px
      text-align: center
      overflow: hidden
      .slide img
        width: 100%
    .go-more
      width: 150*$px
      height: 30*$px
      line-height: 30*$px
      text-align: center
      color: #616161
      border: 1px solid #aaa
      border-radius: 30*$px
      font-size: 13*$px
      margin: 0 auto
      margin-bottom: 15*$px
      display: block
    .now-playing,.coming-soon
      padding: 15*$px
      .item
        background: #f9f9f9
        margin-bottom: 15*$px
        box-shadow: 0 0 4px rgba(0,0,0,.4)
        img
          width: 100%
        .desc
          @include box(justify,center)
          padding: 5*$px 10*$px
        .info
          font-size: 12*$px
          font-weight: 100
          p
            font-size: 10*$px
            color: #9a9a9a
        .count
          color: #f78360
          font-weight: 500
        .time
          font-size: 12*$px
          color: #f78360
    .coming-title
      width: 100%
      height: 1px 
      background: #a8a8a8
      position: relative
      margin-bottom: 20*$px
      text-align: center
      div
        position: absolute
        color: #eee
        background: #a7a7a7
        font-size: 14*$px
        width: 80*$px
        height: 22*$px
        text-align: center
        line-height: 22*$px
        border-radius: 5*$px
        top: 50%
        left: 50%
        margin-top: -11*$px
        margin-left: -40*$px
</style>