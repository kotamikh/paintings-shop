<template>
  <teleport to="body">
    <div v-if="props.show"
         class="img-dialog"
         @click.self="emit('close')">
        <vue-easy-lightbox class="img-wrapper" :imgs="props.source" :visible="visibleRef" @hide="emit('close')"/>
    </div>
  </teleport>

</template>

<script setup>
import VueEasyLightbox from "vue-easy-lightbox";
import { ref } from "vue";

const visibleRef = ref(true)

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
    margin: auto
</style>