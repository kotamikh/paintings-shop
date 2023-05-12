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
  box-sizing: border-box;
  padding-top: 30px;
  max-height: 350px;
  position: relative;
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
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 95%;
}

.painting-frame img {
  object-fit: cover;
  height: 250px;
}

.price-and-year {
  align-self: start;
  padding: 0 10px ;
}
</style>