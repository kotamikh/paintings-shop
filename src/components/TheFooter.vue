<template>
  <div class="footer">
    <div class="telephone">
      <p>Телефон: +7(922)-951-92-44</p>
    </div>
    <div class="messengers">
      <p>Написать:
      <a href="https://vk.com/m.kozlov73">Вконтакте</a>
      <a href="https://wa.me/79229519244">WhatsApp</a>
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
  justify-content: center;

  bottom: 0;
  z-index: 3;
  position: absolute;

  width: 100%;
  padding: 20px;
}

@media screen and (max-width: 767px) {
  .footer{
    padding: 0 10px 20px;
  }
}
.messengers {
  gap: 10px;
  display: flex;
}

.telephone p,
.messengers p {
  font-size: calc(10px + 6 * (100vw / 1280))
}

a {
  color: var(--nav-hover);
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