<template>
  <header>
    <button @click="showMenu">
      <img v-if="isBurgerShown" src="@/assets/icons/cross.svg" alt="закрыть"/>
      <img v-else src="@/assets/icons/burger.svg" alt="меню"/>
    </button>
    <nav>
      <ul class="nav-menu hidden" ref="menu">
        <li v-for="(link, index) in links"
            :class="{ current : isCurrent(index) }"
            @click="onLinkClick(link, index)"
        >{{ link.title }}
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";

const currentIndex = ref(0)
const isCurrent = (index) => {
  return index === currentIndex.value
}

const router = useRouter();
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

const isBurgerShown = ref(false)
const menu = ref(null)
const showMenu = () => {
  isBurgerShown.value ? isBurgerShown.value = false : isBurgerShown.value = true
  menu.value.classList.toggle('hidden')
  menu.value.addEventListener('click', () => {
    menu.value.classList.add('hidden')
    isBurgerShown.value = false
  })
}
</script>

<style lang="sass">
header
  z-index: 3
  display: flex
  max-width: 100%
  user-select: none
  position: relative
  justify-content: center

  @media screen and (max-width: 550px)
    margin-bottom: 30px

  button
    display: none
    visibility: hidden

  .nav-menu
    display: flex
    cursor: pointer

    li
      height: 50%
      padding: 15px
      font-size: calc(15px + 6 * (100vw / 1280))
      border-bottom: 2px solid rgba(108, 140, 121, 50%)

      &:hover
        color: var(--nav-hover)

      &.current
        border-bottom: 2px solid var(--nav-hover)

  @media screen and (max-width: 374px)
    button
      top: 7px
      right: 3px
      z-index: 3
      position: fixed
      visibility: visible

      width: 45px
      height: 45px
      display: flex
      align-items: center
      justify-content: center

      border: none
      background-color: transparent

    nav
      height: inherit

      .nav-menu
        left: 0
        width: 100%
        height: 100vh
        opacity: 100%
        position: fixed
        padding-top: 90px
        align-items: center
        visibility: visible
        flex-direction: column
        background-color: white
        transition: all 0.2s ease

        li
          width: 70%
          position: relative
          text-align: center
          height: max-content
          border-bottom: 1px solid var(--grey)

          &.current
            color: var(--nav-hover)
            border-bottom: 1px solid var(--grey)

          &:first-of-type
            &::before
              content: ''
              left: 0
              top: -50%
              width: 100%
              height: 100%
              opacity: 0.5
              position: absolute
              pointer-events: none
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
              pointer-events: none
              background-size: contain
              background-position: center
              background-repeat: no-repeat
              background-image: url("@/assets/end-line.png")

    .nav-menu.hidden
      opacity: 0
      visibility: hidden
</style>