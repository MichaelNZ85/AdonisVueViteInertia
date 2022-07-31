<script setup>
import {ref} from 'vue';

const count = ref(0);

const props = defineProps({
  test: String
})

const incrementCount = () => {
  count.value++;
}
</script>

<template>
  <div class="box">
    <div class="items">
      <h1>Vue is working!</h1>
      <button @click="incrementCount">Count is {{ count }}</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: blue;
  font-family: "Roboto Thin",serif;
}
</style>
