<template>
  <div :class="[ {show : isBurgerShown }, 'navbar' ]">
    <button @click="showMenu">
      <img v-if="isBurgerShown" src="@/assets/icons/cross.svg" alt="закрыть"/>
      <img v-else src="@/assets/icons/burger.svg" alt="меню"/>
    </button>
    <ul class="nav-menu hidden">
      <li v-for="(link, index) in links"
          :class="{ current : isCurrent(index) }"
          @click="onLinkClick(link, index)"
      >{{ link.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheNavbar"
}
</script>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";

const router = useRouter();
const currentIndex = ref(0)
const isBurgerShown = ref(false)

const isCurrent = (index) => {
  return index === currentIndex.value
}

const links = ref([
  {
    title: 'Главная',
    route: '/home'
  },
  {
    title: 'Картины',
    route: '/paintings'
  },
  {
    title: 'Автор',
    route: '/about'
  },
  {
    title: 'Связаться',
    route: '/contacts'
  },
  {
    title: 'Вход',
    route: '/home'
  }
])

const onLinkClick = (link, index) => {
  currentIndex.value = index
  typeof link.route === 'string' ? router.push(link.route) : router.push(link.route[0])
}

onMounted(() => {
  const route = useRoute();

  watch(() => route.path, (path) => {
    const index = links.value.findIndex(link => path.includes(link.route))

    if (index !== -1) {
      currentIndex.value = index
    }
  }, { immediate: true })
})

const showMenu = () => {
  const navbar = document.querySelector('.navbar')
  const menu = navbar.querySelector('ul')

  isBurgerShown.value ? isBurgerShown.value = false : isBurgerShown.value = true
  menu.classList.toggle('hidden')
  menu.addEventListener('click', () => {
    menu.classList.add('hidden')
    isBurgerShown.value = false
  })
}
</script>

<style lang="sass">
.navbar
  z-index: 3
  display: flex
  max-width: 100%
  user-select: none
  position: relative
  justify-content: center

  button
    display: none
    visibility: hidden

  .nav-menu
    display: flex
    cursor: pointer

  li
    height: 50%
    padding: 15px 10px
    font-size: calc(14px + 6 * (100vw / 1280))
    border-bottom: 2px solid rgba(108, 140, 121, 50%)

    &:hover
      color: var(--nav-hover)

    &.current
      border-bottom: 2px solid var(--nav-hover)

  @media screen and (max-width: 374px)
    button
      top: 7px
      right: 7px
      z-index: 3
      position: absolute
      visibility: visible

      width: 45px
      height: 45px
      display: flex
      align-items: center
      justify-content: center

      border: none
      background-color: transparent

    .nav-menu
      left: 0
      width: 100%
      height: 100vh
      opacity: 100%
      padding-top: 90px
      position: absolute
      visibility: visible
      flex-direction: column
      background-color: white
      align-items: center
      transition: all 0.2s ease

      li
        width: 70%
        position: relative
        text-align: center
        height: max-content
        border-bottom: 1px solid var(--grey)
        &.current
          color: var(--nav-hover)
        &:first-of-type
          &::before
            content: ''
            left: 0
            top: -50%
            width: 100%
            height: 100%
            opacity: 0.5
            position: absolute
            background-size: contain
            background-position: center
            background-repeat: no-repeat
            background-image: url("@/assets/end-line.png")
        &:last-of-type
          border: none
          &::after
            content: ''
            left: 0
            width: 100%
            height: 100%
            bottom: -50%
            opacity: 0.5
            position: absolute
            background-size: contain
            background-position: center
            background-repeat: no-repeat
            background-image: url("@/assets/end-line.png")

    .nav-menu.hidden
      opacity: 0
      visibility: hidden
</style>