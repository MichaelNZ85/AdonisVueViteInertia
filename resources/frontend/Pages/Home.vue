<script setup>
import {ref} from 'vue';
import {Link} from '@inertiajs/inertia-vue3';
import {stardust} from '@eidellev/adonis-stardust';

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
      <h1>Adonis + Inertia + Vite + Vue 3!</h1>
      <button @click="incrementCount">Count is {{ count }}</button>
      <p>This is sent from the backend:
        <strong>{{props.test}}</strong>
      </p>
      <p>To learn more about each of the technologies this boilerplate is built with,
        <Link :href="stardust.route('about')">click here.</Link></p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #42b882;
  font-family: Helvetica, Arial, sans-serif;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.items {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  font-family: Arial, sans-serif;
  font-weight: normal;
}

a a:visited {
  color: #42b882;
  font-family: Arial, sans-serif;
  font-weight: lighter;
}

a:hover {
  color: #ff6b94;
}
</style>
