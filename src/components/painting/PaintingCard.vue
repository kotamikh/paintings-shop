<template>
  <div class="painting-card">
    <div class="painting-info">
      <h3>{{ painting.title }}</h3>
      <div class="paint-description">
        Холст, масло. Размер картины: __/__
      </div>
      <div class="price-and-year">
      <p class="painting-price">{{ 'Цена: ' + painting.price + ' руб.'}}</p>
      <p class="painting-year">{{ painting.year + ' год'}}</p>
      </div>
    </div>
    <div class="painting-holder">
      <img :src="painting.source" :alt="painting.title"/>
    </div>
    <button class="fav-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/></svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "PaintingCard"
}
</script>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  painting: {
    id: {
      type: Number
    },
    title: {
      type: String
    },
    price: {
      type: Number
    },
    year: {
      type: Number
    },
    source: {
      type: Object
    }
  }
})

</script>
<style scoped>

.painting-card {
  width: 100%;
  padding: 10px 30px;
  aspect-ratio: 4 / 1.5;

  position: relative;
  background-color: var(--background-grey);
  border-bottom: 1px solid rgba(108, 140, 121, 0.5);

  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.painting-card:nth-child(odd) {
  flex-direction: row-reverse;
}

.painting-card:nth-child(odd) .painting-holder {
  transform: rotate(-4deg);
}

h3 {
  font-size: calc(16px + 10 * (100vw / 1280));
}

.painting-info {
  display: flex;
  flex-direction: column;
  max-width: 50%;
}

.painting-holder {
  width: 45%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  transform: rotate(4deg);
}

img {
  object-fit: cover;
}

.price-and-year {
  padding: 10px;
}

button {
  top: 10px;
  right: 10px;
  height: 25px;
  cursor: pointer;
  position: absolute;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;
}

.fav-button svg {
  fill: white;
  stroke: black;
}

.fav-button:hover svg {
  fill: red;
  stroke: red;
}
</style>