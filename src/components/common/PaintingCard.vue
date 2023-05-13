<template>
  <div class="painting-card"
  @mouseover="colorizeTitle">
    <div class="painting-frame">
    <img :src="painting.source" :alt="painting.title"/>
    </div>
    <h3 class="painting-name">{{ painting.title }}</h3>
    <div class="price-and-year">
    <p class="painting-price">{{ 'Цена: ' + painting.price + ' руб.'}}</p>
    <p class="painting-year">{{ painting.year + ' год'}}</p>
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

// const hoverColors = ['blue', 'black', 'pink' ]

// let colorizeTitle = () => {
//   let card = document.querySelector('.painting-card')
//   let title = card.getElementsByTagName("h3")
//   console.log(title)
//   title.style.color = randomColor(hoverColors)
// }
//
// function randomColor(array) {
//   let min = 0
//   let max = array.length - 1
//   let rand = min - 0.5 + Math.random() * (max - min + 1)
//   console.log(Math.round(rand))
//   console.log(array[Math.round(rand)])
// }
</script>
<style scoped>

.painting-card {
  width: 30%;
  margin-right: 3%;
  margin-bottom: 3%;
  max-height: 350px;
  padding-top: 40px;
  box-sizing: border-box;

  position: relative;
  border-radius: 10px;
  border: 2px solid var(--seagreen);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}

.painting-card:hover {
  cursor: pointer;
}

.painting-card:hover h3 {
  color: var(--text-hover)
}

.painting-frame {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  overflow: hidden;
}

.painting-frame img {
  height: 250px;
  width: inherit;
  object-fit: cover;
}

.price-and-year {
  padding: 0 10px;
  align-self: start;
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