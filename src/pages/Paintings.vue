<template>
  <h2>Все работы</h2>
  <div class="all-paintings">
  <painting-card
      v-for="(painting, index) in paintings"
      :key="index"
      :painting="painting"
      @click="router.push('/paintingpage' + '/' + painting.title)"
  >
  </painting-card>
  </div>
</template>

<script>
export default {
  name: "Paintings"
}
</script>

<script setup>
import PaintingCard from "@/components/common/PaintingCard.vue";
import { paintingsMocks } from "@/mocks/paintings.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const paintings = ref(paintingsMocks);
</script>

<style scoped>

.all-paintings {
  display: flex;
  flex-wrap: wrap;
}
</style>