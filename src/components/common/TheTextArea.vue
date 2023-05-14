<template>
  <div class="input-container">
    <label>{{ label }}</label>
    <textarea v-model="modelValue"/>
    <div
        v-if="!valid"
        class="warning"
    ></div>
    <div
        v-if="!valid"
        class="hint"
    >
      {{ hintText }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTextArea"
}
</script>

<script setup>
import { computed, ref, watch } from "vue";

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

const hintText = ref('Данное поле обязательно для заполнения');
const valid = ref(true);

watch(modelValue, newValue => {
  valid.value = !!newValue;
}, { immediate: true })

defineExpose({ valid })
</script>

<style scoped lang="sass">
.input-container
  position: relative

  display: flex
  flex-direction: column

  .warning
    position: absolute
    right: 0

    height: 20px
    width: 20px
    background-color: #c56f6f
    border-radius: 50%

    display: flex
    align-items: center
    justify-content: center

    &::after
      content: '!'
      color: white

  label
    color: gray
    padding: 0 0 5px 5px

  textarea
    font-size: 15px
    color: #383838
    padding: 10px

    outline: none
    border-radius: 10px
    border: 1px solid rgba(128, 128, 128, 0.54)
    box-shadow: 0 0 2px 1px rgba(34, 60, 80, 0.2) inset

  .hint
    font-size: 10px
    padding-left: 10px
    padding-top: 5px
    color: #c56f6f
</style>