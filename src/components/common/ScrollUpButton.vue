<template>
  <button @click="toUp">
    <span class="hint-text">Наверх</span>
    <img :src="Arrow" alt="up-button"/>
  </button>
</template>

<script>
export default {
  name: "ScrollUpButton"
}
</script>
<script setup>
import Arrow from "@/assets/arrow-up.png"

const toUp = function () {
  window.scrollTo(0, 0)
}
</script>

<style scoped lang="sass">
button
  right: 10px
  width: 8%
  bottom: 60px
  border: none
  position: fixed
  background-color: transparent

  opacity: 0

  transition: opacity 0.1s ease-in-out
  &:hover
    cursor: pointer
    .hint-text
      opacity: 1
      visibility: visible

  .hint-text
    opacity: 0
    position: absolute
    top: 10%
    right: 100%
    visibility: hidden
    transition: opacity 0.3s

  @media screen and (max-width: 650px)
    width: 12%

  @media screen and (min-width: 840px)
    width: 5%

</style>