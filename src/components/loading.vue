<template>
  <div class='loading-rotate'>
    <div class="inner">
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang='sass'>
  @keyframes rotate
    0%
      -webkit-transform: rotate(0deg)
      transform: rotate(0deg)
    50%
      -webkit-transform: rotate(180deg)
      transform: rotate(180deg)
    100%
      -webkit-transform: rotate(360deg)
      transform: rotate(360deg) 
  .loading-rotate
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: rgba(0,0,0,.4)
    .inner
      width: 80px
      height: 80px
      position: absolute
      top: 50%
      left: 50%
      margin-left: -40px
      margin-top: -40px
      &>span
        display:block
        animation-fill-mode: both
        position: absolute
        left: 0px
        top: 0px
        border: 2px solid #fff
        border-bottom-color: transparent
        border-top-color: transparent
        border-radius: 100%
        height: 80px
        width: 80px
        animation: rotate 1s 0s ease-in-out infinite
        &:last-child
          display: inline-block
          top: 15px
          left: 15px
          width: 50px
          height: 50px
          animation-duration: 0.5s
          border-color: #fff transparent #fff transparent
          animation-direction: reverse   
</style>