<template>
  <teleport to="body">
    <div v-if="props.show"
         class="img-dialog"
         @click.self="emit('close')">
      <div :class="[props.width <= props.height ? 'vertical' : 'img-wrapper']" @click.self="emit('close')">
        <img :src="props.source" :alt="props.title"/>
        <button class="cross-btn" @click="emit('close')">&#215;</button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean
  },
  source: {
    type: String
  },
  title: {
    type: String
  },
  width: {
    type: Number
  },
  height: {
    type: Number
  }
})

const emit = defineEmits([ 'close' ])
</script>

<style scoped lang="sass">
.img-dialog
  width: 100vw
  height: 100vh
  display: flex
  align-items: center

  top: 0
  left: 0
  z-index: 3
  position: fixed
  background-color: rgba(128, 128, 128, 0.8)

  .img-wrapper
    width: 60%
    margin: auto
    position: relative
    display: inline-block

    @media screen and (max-width: 839px)
      width: 80%

    @media screen and (max-width: 600px)
      width: 90%
      height: auto

  .vertical
    margin: auto
    height: 90%
    width: auto
    position: relative
    display: inline-flex

    @media screen and (max-width: 1359px)
      height: 85%
    @media screen and (max-width: 1119px)
      height: 75%
    @media screen and (max-width: 874px)
      height: 65%
    @media screen and (max-width: 624px)
      height: 60%
    @media screen and (max-width: 499px)
      width: 100%
      height: auto

    img
      object-fit: contain

.cross-btn
  top: 0
  right: 0
  width: 40px
  height: 40px
  border: none
  display: flex
  align-items: center
  justify-content: center

  cursor: pointer
  position: absolute
  transition: all 0.2s ease
  background-color: transparent
  color: rgba(255, 255, 255, 0.8)
  font-size: calc(50px + 5 * (100vw / 1280))
  text-shadow: 2px 4px 2px rgba(105,105,105,0.8)

  &:hover,
  &:active
    color: white
    transform: scale(1.1)
  &:active
    transform: scale(1)

  @media screen and (max-width: 704px)
    height: 30px
    width: 30px
    padding: 0
</style>