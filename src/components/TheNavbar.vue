<template>
  <div class="navbar">
  <h1 @click="router.push('/home')">Картины маслом | Киров</h1>
  <ul class="nav-menu">
    <li @click="router.push('/categories')">Картины</li>
    <li @click="router.push('/contacts')">Контакты</li>
    <li @click="router.push('/about')">О художнике</li>
    <li>Войти</li>
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

<style scoped>
.navbar {
  width: 100%;
  user-select: none;

  display: flex;
  justify-content: space-between;
}

h1,
ul {
  cursor: pointer;
}

h1:hover,
li:hover {
  color: var(--nav-hover);
}

.nav-menu {
  list-style: none;

  gap: 20px;
  display: flex;
  align-items: center;
}
</style>