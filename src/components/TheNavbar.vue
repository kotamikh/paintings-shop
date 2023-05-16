<template>
  <div class="navbar">
  <ul class="nav-menu">
    <li @click="router.push('/home')">Главная</li>
    <li @click="router.push('/categories')">Картины</li>
    <li @click="router.push('/contacts')">Заказать</li>
    <li @click="router.push('/about')">Об авторе</li>
    <li>Вход</li>
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

const router = useRouter();
</script>

<style>
.navbar {
  padding: 20px;
  user-select: none;

  display: flex;
  justify-content: center;
  border-bottom: 4px solid var(--seagreen);
  background-color: var(--background-grey);
}

ul {
  cursor: pointer;
}

li {
  font-size: calc(14px + 6 * (100vw / 1280));
}

li:hover {
  color: var(--nav-hover);
}

.nav-menu {
  gap: 20px;
  display: flex;
  align-items: center;
}
</style>