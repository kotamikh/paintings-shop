<template>
  <div class="input-container">
    <label>{{ label }}</label>
    <input type="text" v-model="modelValue"/>
  </div>
</template>

<script>
export default {
  name: "TheInput"
}
</script>

<script setup>
import { computed } from "vue";

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  label: {
    default: ''
  },
  modelValue: {
    required: true,
    type: String
  }
})

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<style scoped lang="sass">
.input-container
  display: flex
  flex-direction: column

  label
    color: gray
    padding: 0 0 5px 5px

  input
    font-size: 15px
    color: #383838
    padding: 10px

    outline: none
    border-radius: 10px
    border: 1px solid rgba(128, 128, 128, 0.54)
    box-shadow: 0 0 2px 1px rgba(34, 60, 80, 0.2) inset
</style>