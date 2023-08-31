<template>
  <teleport to="body">
    <div v-if="props.open"
         class="dialog-wrapper"
         @click.self="emit('close')"
    >
      <div class="enter-block">
        <p>Логин:</p>
        <input type="text"/>
        <p>Пароль:</p>
        <input type="password"/>
        <button>Войти</button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
const props = defineProps({
  open: {
    type: Boolean
  }
})

const emit = defineEmits([ 'close' ])
</script>


<style scoped lang="sass">
.dialog-wrapper
  width: 100vw
  height: 100vh
  display: flex
  align-items: center

  top: 0
  left: 0
  z-index: 3
  position: fixed
  background-color: rgba(128, 128, 128, 0.8)

  .enter-block
    width: 30%
    margin: auto
    display: flex
    padding: 30px
    min-width: 300px
    position: relative
    height: fit-content
    border-radius: 10px
    flex-direction: column
    box-sizing: border-box
    background-color: white

    &::before
      content: ''
      left: 50%
      top: -8%
      transform: translate(-50%, -50%)
      width: 70%
      height: 100%
      opacity: 0.8
      filter: invert(1)
      position: absolute
      pointer-events: none
      background-size: contain
      background-position: center
      background-repeat: no-repeat
      background-image: url("@/assets/end-line.png")
    &::after
      content: ''
      left: 50%
      bottom: -108%
      transform: translate(-50%, -50%)
      width: 70%
      height: 100%
      opacity: 0.8
      filter: invert(1)
      position: absolute
      pointer-events: none
      background-size: contain
      background-position: center
      background-repeat: no-repeat
      background-image: url("@/assets/end-line.png")

    input
      border: 0
      width: 100%
      padding: 5px
      cursor: pointer
      margin-bottom: 20px
      background-color: transparent
      border-bottom: 2px solid rgba(128, 128, 128, 0.5)

      &:focus,
      &:hover
        outline: none
        border-bottom: 2px solid var(--nav-hover)

    button
      border: none
      color: white
      cursor: pointer
      padding: 5px 10px
      border-radius: 5px
      align-self: center
      transition: all 0.1s ease-in-out
      background-color: rgba(119, 119, 119, 0.8)

      &:hover
        background-color: rgba(108, 140, 121, 0.8)

      &:active
        transform: translateY(2px)
</style>