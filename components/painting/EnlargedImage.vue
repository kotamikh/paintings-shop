<template>
  <teleport to="body">
    <div v-if="props.show"
         class="img-dialog"
         @click.self="emit('close')">
      <img :src="props.source" :alt="props.title"/>
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
  }
})

const emit = defineEmits(['close'])

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

  img
    height: 80%
    margin: auto
    object-fit: contain

    @media screen and (max-width: 839px)
      width: 80%
      height: auto
</style>