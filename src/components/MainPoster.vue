<template>
  <div class="wrapper">
    <div class="paint-in-frame">
      <img :src="Frame" alt="painting">
    </div>
    <div class="main-text">
      <h1>Картины маслом | Киров</h1>
      <p>Сайт художника М. А. Козлова</p>
      <button>Перейти к каталогу</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPoster"
}
</script>

<script setup>
import Frame from "@/assets/frame.png"
</script>

<style scoped>
.wrapper {
  width: 90%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
}

.paint-in-frame {
  display: flex;
  justify-content: center;

  min-width: 50%;
  min-height: 50%;
  transform: rotate(-4deg);
}

.paint-in-frame img {
  width: 70%;
}

.main-text {
  display: flex;
  margin: 0 20px;
  align-self: center;
  align-items: start;
  flex-direction: column;
}

button {
  color: white;
  background-color: var(--seagreen);

  margin: 20px;
  padding: 10px 30px;
  align-self: center;

  border: 0;
  border-radius: 10px;
}

</style>