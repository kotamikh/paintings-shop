<template>
  <teleport to="body">
    <div v-if="props.show"
         class="img-dialog"
         @click.self="emit('close')">
      <div :class="[props.width < props.height ? 'vertical' : 'img-wrapper']" @click.self="emit('close')">
        <img :src="props.source" :alt="props.title"/>
        <button class="cross-btn" @click="emit('close')">Вернуться &#10148;</button>
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
    transform: translate(-50%, -50%)
    position: absolute

    @media screen and (max-width: 839px)
      width: 80%

    @media screen and (max-width: 600px)
      width: 100%
      height: auto

    .cross-btn
      top: 0
      right: 0
      border: none
      padding: 5px 10px
      position: absolute
      color: var(--header-grey)
      font-size: calc(14px + 4 * (100vw / 1280))
      background-color: rgba(255, 255, 255, 0.8)

  .vertical
    height: 100%
    display: flex
    position: absolute
    align-items: center

    .cross-btn
      top: 5%
      right: 0
      border: none
      padding: 5px 10px
      position: absolute
      color: var(--header-grey)
      font-size: calc(14px + 4 * (100vw / 1280))
      background-color: rgba(255, 255, 255, 0.8)

      @media screen and (max-width: 429px)
        top: 10%

    img
      height: 90%
      width: auto
      margin: auto
      object-fit: contain
</style>