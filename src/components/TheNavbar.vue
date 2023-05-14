<template>
  <div class="navbar">
  <h1 @click="router.push('/home')">Картины маслом | Киров</h1>
  <button class="nav-burger"
          @click="switchNavMenu">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
  </button>
  <ul class="nav-menu hidden-menu">
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

const switchNavMenu = () => {
  let navMenu = document.querySelector('.nav-menu')
  navMenu.classList.toggle('hidden-menu')
}
</script>

<style scoped>
@media screen and (max-width: 800px) {
  li {
    font-size: 12px;
  }
}

@media screen and (max-width: 550px) {
  .navbar {
    position: relative;
  }

  button.nav-burger {
    display: flex;
    align-items: center;

    top: 30%;
    right: 0;
    position: absolute;

    width: 30px;
    height: 30px;
    border: none;
    background-color: var(--seagreen);
  }
  ul.nav-menu {
    gap: 0;
    flex-direction: column;
    align-items: flex-start;

    top: 55%;
    right: 0;
    z-index: 2;
    position: absolute;

    width: 35%;
    padding: 0;
    font-weight: bold;
    background-color: #F6F6F6;

    border: 1px solid var(--seagreen);
    border-bottom: none;

    transition: opacity 0.1s ease-in-out;
  }
  ul li {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid var(--seagreen);
  }
  ul.hidden-menu {
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
  }
}

.nav-burger {
  display: none;
}

.navbar {
  width: 100%;
  user-select: none;

  display: flex;
  justify-content: space-between;
  border-bottom: 4px solid var(--seagreen)
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