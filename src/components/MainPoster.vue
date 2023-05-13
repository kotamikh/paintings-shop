<template>
  <div class="wrapper">
    <figure>
      <div class="picture-holder"></div>
      <figcaption>Some picture description</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: "MainPoster"
}
</script>

<script setup>

</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
}

figure {
  margin: 0;
  width: 90%;
  height: 50vh;
}

figcaption {
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.picture-holder {
  width: 100%;
  height: 100%;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('@/assets/main-poster.jpg');
}
</style>