<template>
  <div class="navbar">
  <h1>Картины маслом | Киров</h1>
  <ul class="nav-menu">
    <li>Картины</li>
    <li>Контаты</li>
    <li>О художнике</li>
    <li>Войти</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: "TheNavbar"
}
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
  color: var(--text-hover);
}

.nav-menu {
  list-style: none;

  gap: 20px;
  display: flex;
  align-items: center;
}
</style>