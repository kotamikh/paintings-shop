<template>
  <div class="input-field">
    <input v-model="value" v-bind="$attrs"/>
    <img v-if="!isValid" src="@/assets/icons/exclamationmark.svg" style="width: 24px" alt="!!!"/>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const props = defineProps({
  modelValue: String,
  validate: Function,
})

const emit = defineEmits([ 'update:modelValue' ])

const value = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
})

const isValid = ref(true)
const validate = () => {
  isValid.value = props.validate(value.value)
}

watch(value, () => {
  validate()
})
</script>

<style scoped lang="sass">
.input-field
  width: 100%
  position: relative

  @media screen and (max-width: 620px)
    max-width: 200px

  input
    border: 0
    width: 100%
    padding: 10px 0
    background-color: transparent
    border-bottom: 2px solid rgba(128, 128, 128, 0.5)

    &:focus,
    &:hover
      outline: none
      border-bottom: 2px solid var(--nav-hover)

  img
    bottom: 30%
    right: -15%
    max-width: 15%
    position: absolute
</style>