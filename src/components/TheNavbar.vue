<template>
  <div class="navbar">
    <ul class="nav-menu">
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
    route: '*'
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

</script>

<style lang="sass">
.navbar
  display: flex
  user-select: none
  justify-content: center

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
</style>