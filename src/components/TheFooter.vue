<template>
  <div class="footer">
    <div class="telephone">
      <p>Телефон: +7(922)-951-92-44</p>
    </div>
    <div class="messengers">
      <p>Написать:
      <a href="https://vk.com/m.kozlov73">Вконтакте</a>
      <a href="/home">Viber</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped>
.footer {
  gap: 3vw;
  display: flex;

  bottom: 0;
  z-index: 3;
  position: fixed;

  width: 100%;
  padding: 20px 40px;
  border-top: 2px solid var(--seagreen);
  background-color: var(--background-grey);
}

.messengers {
  gap: 10px;
  display: flex;
}

a {
  text-decoration: none;
  margin-right: 10px;
}

a:hover {
  cursor: pointer;
  color: var(--nav-hover);
  text-decoration: underline;
}

a:visited {
  color: var(--seagreen);
}
</style>