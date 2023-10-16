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
    type: Object
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
  justify-content: center

  top: 0
  left: 0
  z-index: 3
  position: fixed
  background-color: rgba(128, 128, 128, 0.8)

  .img-wrapper
    top: 50%
    left: 50%
    width: 50%
    position: absolute
    transform: translate(-50%, -50%)

    @media screen and (max-width: 839px)
      width: 80%

    @media screen and (max-width: 600px)
      width: 90%
      height: auto

    .cross-btn
      top: 0

  .vertical
    height: 100%
    display: flex
    position: absolute
    align-items: center

    .cross-btn
      top: 5%

      @media screen and (max-width: 704px)
        top: 12.5%
      @media screen and (max-width: 504px)
        top: 17.5%
      @media screen and (max-width: 459px)
        top: 25%

    img
      height: 90%
      width: auto
      margin: auto
      object-fit: contain

      @media screen and (max-width: 704px)
        height: 75%
      @media screen and (max-width: 504px)
        height: 65%
      @media screen and (max-width: 459px)
        height: 50%

.cross-btn
  right: 0
  width: 40px
  height: 40px
  border: none
  display: flex
  align-items: center
  justify-content: center
  color: rgba(255, 255, 255, 0.8)
  font-size: calc(50px + 5 * (100vw / 1280))
  position: absolute
  transition: scale 0.2s ease
  background-color: transparent

  &:hover,
  &:active
    color: white
  &:active
    transform: scale(0.95)

  @media screen and (max-width: 704px)
    height: 30px
    width: 30px
    padding: 0
</style>