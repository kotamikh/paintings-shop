<template>
  <div class="navbar">
    <ul class="nav-menu">
      <li v-for="(link, index) in links"
          :class="{ current: isCurrent(index) }"
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
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const currentIndex = ref(0)
const isCurrent = (index) => {
    return index === currentIndex.value
}

const links = [
  {
    title: 'Главная',
    router: '/home'
  },
  {
    title: 'Картины',
    router: '/categories'
  },
  {
    title: 'Заказать',
    router: '/contacts'
  },
  {
    title: 'Об авторе',
    router: '/about'
  },
  {
    title: 'Вход',
    router: '/'
  }
]

const onLinkClick = (link, index) => {
  currentIndex.value = index
  router.push(link.router)
}

</script>

<style>
.navbar {
  display: flex;
  user-select: none;
  justify-content: center;
}

.nav-menu {
  display: flex;
  cursor: pointer;
  align-items: center;
}

li {
  padding: 10px;
  font-size: calc(14px + 6 * (100vw / 1280));
  border-bottom: 2px solid rgba(108, 140, 121, 50%);
}

li:hover {
  color: var(--nav-hover);
}

li.current {
  border-bottom: 2px solid var(--nav-hover);
}

</style>