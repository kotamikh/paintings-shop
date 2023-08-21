<template>
  <div :class="[ {show : isBurgerShown }, 'navbar' ]">
    <button @click="showMenu">
      <svg v-if="isBurgerShown" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="var(--grey)"
           class="bi bi-x" viewBox="0 0 16 16">
        <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="var(--grey)" class="bi bi-list"
           viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
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

      width: 40px
      height: 40px
      display: flex
      align-items: center
      justify-content: center

      border-radius: 5%
      border: 1px solid var(--grey)
      background-color: rgba(255, 255, 255, 0.3)

    .nav-menu
      left: 0
      width: 100%
      position: absolute
      flex-direction: column
      background-color: white

      li
        text-align: center
        border-bottom: 1px solid var(--grey)

    .nav-menu.hidden
      display: none
</style>