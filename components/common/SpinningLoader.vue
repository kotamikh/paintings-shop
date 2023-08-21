<template>
  <div class="loader-wrap">
    <span class="loader"></span>
  </div>
</template>

<script>
export default {
  name: "SpinningLoader"
}
</script>

<style scoped lang="sass">
.loader
  width: 48px
  height: 48px
  border-radius: 50%
  display: inline-block
  position: relative
  border-left: 4px solid #c7c7c7
  border-top: 4px solid transparent
  box-sizing: border-box
  animation: rotation 0.8s linear infinite

.loader::after
  content: ''
  width: 44px
  height: 44px
  border-radius: 50%
  box-sizing: border-box
  position: absolute
  top: 0
  left: 0
  border-bottom: 4px solid var(--seagreen)
  border-right: 4px solid transparent
  animation: rotation 0.4s linear infinite reverse

@keyframes rotation
  0%
    transform: rotate(0deg)

  100%
    transform: rotate(360deg)
</style>