<template>
  <div class="wrapper">
    <figure>
      <div class="picture-holder">
        <img :src="images[currentIndex]" alt="image"/>
        <div class="prev-button" @click="prev"></div>
        <div class="next-button" @click="next"></div>
      </div>
      <figcaption>Примеры картин</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: "MainPoster"
}
</script>

<script setup>
import { ref } from "vue";

const currentIndex = ref(0);
const images = ref([
    "/src/assets/main-poster.jpg",
    "/src/assets/meadow.jpg",
    "/src/assets/mountains.jpg",
])

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}

const prev = () => {
  if (currentIndex.value === 0) {
    currentIndex.value = images.value.length;
  }

  currentIndex.value = (currentIndex.value - 1) % images.value.length
}
</script>

<style scoped lang="sass">
.wrapper
  width: 100%
  height: 100%
  display: flex
  align-items: center
  justify-content: center
  background-color: lightgray

figure
  margin: 0
  width: 90%
  height: 50vh

figcaption
  height: 5vh
  display: flex
  align-items: center
  justify-content: center

.picture-holder
  width: 100%
  height: 100%
  position: relative

  img
    height: 100%
    width: 100%
    object-fit: cover

  .prev-button, .next-button
    width: 100px
    height: 100%

    top: 0
    left: 0
    opacity: 15%
    position: absolute
    background-color: white

    cursor: pointer

    &:hover
      opacity: 20%

  .next-button
    right: 0
    left: auto

</style>