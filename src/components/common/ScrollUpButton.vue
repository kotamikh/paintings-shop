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
  window.scroll(0, 0)
}
</script>

<style scoped lang="sass">
button
  right: 4%
  width: 10%
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
    visibility: hidden
    transition: opacity 0.3s

  @media screen and (max-width: 550px)
    right: 2%
    width: 15vw

  @media screen and (min-width: 840px)
    right: 5%
    width: 6%

</style>