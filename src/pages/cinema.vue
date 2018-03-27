<template>
  <div id='cinema' v-if='list.length'>
    <div class="item" v-for='(item,i) in district' :key='i'>
      <div class="title" @click='changeArea(item.pinyin)'>{{item.name}}</div>
      <div class="list" v-if='pinyin==item.pinyin'>
        <div class="shop" v-for='(shop,v) in list' :key='v' v-if='shop.district.pinyin == item.pinyin'>
          <a :href="'http://m.maizuo.com/v4/?co=maizuo#!/film/'+_id+'/cinema'">
            <div class="desc">
              <div class="title">{{shop.name}} 
                <span>座</span><span v-if='shop.itemTypes.length>3'>通</span></div>
                <div class="tip">
                  <span v-for='(tip,index) in shop.labels' :key='index' v-if="tip.type!='REFUNDABLE_SEAT_TICKET'" :class='tip.type.toLocaleLowerCase()'>
                    {{tip.name}}
                  </span>
                </div>
                <div class="area">{{shop.address}}</div>
                <div class="extra">距离未知 | 剩余{{shop.avaliableSchedule}}场</div>
            </div>
            <div class="price">￥{{shop.minimumPrice}}</div> 
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        pinyin: ''
      }
    },
    computed: {
      ...mapGetters(['list','district']),
      _id() {
        return this.$route.params.id
      }
    },
    methods: {
      changeArea(pinyin) {
        if(this.pinyin == pinyin) {
          this.pinyin = ''
        } else {
           this.pinyin = pinyin
        }
      }
    },
    created() {
      let id = this.$route.params.id
      this.$store.dispatch('getCinemaList',id)
    }
  }
</script>

<style scoped lang='sass'>
  @import '../assets/styles/mixins.sass'
  #cinema
    .item
      &>.title
        width: 100%
        height: 40*$px
        line-height: 40*$px
        border-bottom: 1px solid #fff
        color: #636363
        font-size: 14*$px
        padding-left: 15*$px
      &:last-child
        .title
          border-bottom: none
      .list
          .shop   
              background: #fff
              border-bottom: 1px solid #e1e1e1
              font-size: 14*$px
              padding: 15*$px
              line-height: 180%
              @include box(justify,start)
              .desc
                  width: 300*$px
                  .title
                      font-size: 16*$px
                      span
                          font-size: 10*$px
                          display: inline-block
                          vertical-align: middle
                          border-radius: 50%
                          width: 16*$px
                          height: 16*$px
                          text-align: center
                          line-height: 14*$px
                          color: #fd9c77
                          border: 1px solid #fd9c77
                          margin-left: 5*$px
                      span:last-child
                          color: #a5c1d5
                          border: 1px solid #a5c1d5
                  .tip
                      padding: 5*$px 10*$px
                      span
                          display: inline-block
                          color: #fff
                          font-size: 11*$px
                          padding: 0*$px 4*$px
                          border-radius: 4*$px
                          &.sundry
                              background: #51add0
                              margin-right: 8*$px
                          &.discount
                              background: #ff9658
                  .area
                      color: #ccc
                      font-size: 13*$px
                      @include nowrap
                  .extra
                      color: #ccc
                      font-size: 13*$px
              .price
                  width: 45*$px
                  color: #fc8637
                  font-size: 16*$px

</style>