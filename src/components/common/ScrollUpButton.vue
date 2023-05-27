<template>
  <button @click="toUp">
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
  right: 50px
  bottom: 60px
  border: none
  position: fixed
  background-color: transparent

  opacity: 0
  transition: opacity 0.1s ease-in-out
</style>