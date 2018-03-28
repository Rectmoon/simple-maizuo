<template>
	<div id="film" v-scroll="getMore">
    <div class="tabs">
      <div class="item" @click="changeTab('now-playing')" :class="type=='now-playing' ? 'active' : '' ">正在热映</div>
      <div class="item" @click="changeTab('coming-soon')" :class="type=='coming-soon' ? 'active' : '' ">即将上映</div>
    </div>
    <div class="tab-content">
      <transition-group tag='div' name='list-complete' class='now-playing-list' v-if="type=='now-playing'">
        <router-link v-for='(item,i) in nowPlayingList' :key='i' class='item list-complete-item' :to="{name:'cinema',params:{id:item.id}}">
          <div class="avater"><img :src="item.poster.thumbnail" alt=""></div>
          <div class="info">
            <h3>{{item.name}}</h3>
            <p>{{item.intro}}</p>
            <p>
              <span>{{item.cinemaCount}}</span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{{item.watchCount}}</span>人购票
            </p>
          </div>
          <div class="count">{{item.grade}}</div>
        </router-link>
      </transition-group>
      <transition-group tag='div' class='coming-soon-list' name='list-complete' v-if="type=='coming-soon'">
        <router-link v-for='(item,i) in comingList' :key='i' :to="{name:'detail',params:{id:item.id}}" class='item list-complete-item'>
          <div class="avater"><img :src="item.poster.thumbnail" alt=""></div>
          <div class="info">
            <h3>{{item.name}}</h3>
            <p>{{item.info}}</p>
            <p><span class="time">{{item.premiereAt|formatDate}}</span></p>
          </div>
          <div class="count"></div>
        </router-link>
      </transition-group>
    </div>
	</div>
</template>
<script>
  import { mapGetters,mapActions,mapMutations } from 'vuex'
  export default {
    created() {
      document.body.scrollTop = 0 
      this.type = this.$route.params.type
      this.judge()
    },
    data() {
      return {
        type: ''
      }
    },
    methods: {
      ...mapActions(['getNowPlayingList','getComingList']),
      getMore(el) {
        let sTop = document.documentElement.scrollTop || document.body.scrollTop
        if(sTop + window.innerHeight > el.clientHeight-100) {
          if(this.$route.params.type == 'now-playing') {
            this.getNowPlayingList()
          } else if (this.$route.params.type == 'coming-soon' ) {
            this.getComingList()
          }
        } 
      },
      judge() {
        if(this.type == 'now-playing' && this.nowPlayingList.length == 0){
          this.getNowPlayingList()
        }else if(this.type == 'coming-soon' && this.comingList.length == 0){
          this.getComingList()
        }
      },
      changeTab(v) {
        if(this.type == v) return false
        this.type = v
        this.$router.replace({params:{type:this.type}})
        this.judge()
      }
    },
    computed: {
      ...mapGetters(['nowPlayingList','comingList'])
    },
    filters: {
      formatDate(time) { 
        let date = new Date(time),
        month = date.getMonth()+1 > 9 ?  date.getMonth()+1 : '0' + ( date.getMonth()+1),
        someDay = date.getDate() > 9 ? date.getDate() : '0' + (date.getDate()),
        toDay = date.getDay()
        let arr = ['日','一','二','三','四','五','六']
        return `${month}月${someDay}日上映  星期${arr[toDay]}`
      }
    }
  }
</script>

<style lang='sass'>
  @import '../assets/styles/mixins.sass'
  #film
    background: #f9f9f9
    .tabs
      margin: 0 15*$px
      border-bottom: 1px solid #fe6e00
      @include box(justify,center)
      .item
        width: 50%
        text-align: center
        font-size: 16*$px
        height: 40*$px
        line-height: 40*$px
        color: #6a6a6a
        &.active
          border-bottom: 2px solid #fe6e00
          color: #fe6e00
    .tab-content
      margin: 0 15*$px
      .now-playing-list,.coming-soon-list
        .item
          @include box(justify,start)
          padding: 15*$px 0
          // display: block
          border-bottom: 1px dashed #8e8e8e
          &:last-child
            border-bottom: none
          .avater
            width: 60*$px
            margin-right: 15*$px
            img
              width: 60*$px
              height: 82*$px
              object-fit: contain
          .info
            width: 250*$px
            font-size: 14*$px
            h3
              font-weight: 400
              font-size: 16*$px
              margin-top: 5*$px
            p
              font-size: 13*$px
              height: 28*$px
              line-height: 28*$px
              color: #8e8e8e
              span
                color: #8aa2bf
              .time
                color: #fe6e00
          .count
            width: 50*$px
            padding-top: 5*$px
            color: #fe6e00
</style>
