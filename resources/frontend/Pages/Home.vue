<script setup>
import {ref} from 'vue';

let count = ref(0);
const props = defineProps({
  test: String
})
</script>

<template>
  <div class="box">
    <div class="items"><h1>Inertia + Adonis + Vue 3!</h1>
      <button class="button" @click="count = count + 1">Count is {{count}}</button>
      <p>"{{props.test}}" was sent from the backend </p>
      <inertia-link href="about">
        Check out the technologies
      </inertia-link>
    </div>
  </div>
</template>

<style scoped>
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

.items h1 {
  font-family: Helvetica, Arial, sans-serif;
}

p {
  font-family: Arial, sans-serif;
  font-size: 1rem;
}

a {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: lighter;
  color: #42b882;
}

a:visited {
  color: #42b882;
  text-decoration: none;
}

a:hover {
  color: #20b3ff;
}

.button {
  height: 2rem;
  padding: 5px;
}
</style>
