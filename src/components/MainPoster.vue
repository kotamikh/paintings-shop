<template>
  <div class="wrapper">
    <div class="paint-in-frame">
      <img :src="Frame" alt="painting">
    </div>
    <div class="main-text">
      <h1>Картины маслом | Киров</h1>
      <p>Сайт художника М. А. Козлова</p>
      <button @click="router.push('/paintings')">Перейти к каталогу</button>
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
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
.wrapper {
  min-width: 90%;
  height: 100%;
  margin: 30px auto;

  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 550px){
  .wrapper {
    flex-direction: column-reverse;
  }
}

.paint-in-frame {
  display: flex;
  min-width: 50%;
  justify-content: center;
}

.paint-in-frame img {
  width: 70%;
  height: auto;
  max-width: 100%;
  transform: rotate(0deg);
  transform-origin: 48% 6%;

  animation-delay: 5s;
  animation-duration: 4s;
  animation-name: paint-swing;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes paint-swing {
  15% {
   transform: rotate(5deg);
  }
  30% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(3deg);
  }
  70% {
    transform: rotate(-2deg);
  }
  90% {
    transform: rotate(0deg);
  }
}
.main-text {
  display: flex;
  margin: 0 20px;
  align-self: center;
  align-items: start;
  flex-direction: column;
}

.main-text p,
button {
  font-size: calc(12px + 6 * (100vw / 1280));
}

button {
  color: white;
  text-wrap: none;
  background-color: var(--seagreen);
  box-shadow: 0 0 10px 5px rgba(108, 140, 121, 0.5);

  border: 0;
  padding: 10px;
  margin: 20px 0;
  align-self: center;
  border-radius: 10px;

  width: 60%;
  height: auto;
  max-width: 350px;

  cursor: pointer;
  transition: all 0.1s ease-in-out;
}

button:hover {
  background-color: #4b6253;
}

button:active {
  transform: translateY(3px);
  box-shadow: 0 0 10px 1px rgba(108, 140, 121, 0.5);
}
</style>