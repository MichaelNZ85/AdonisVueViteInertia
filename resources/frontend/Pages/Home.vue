<script setup>
import {ref} from 'vue';
import {useForm} from '@inertiajs/inertia-vue3';

const form = useForm({
  name: null,
  file: null
})

function submit() {
  form.post('/meow')
}

</script>

<template>
  <div class="box">
    <form @submit.prevent="submit">
      <input type="text" v-model="form.name" />
      <br>
      <input type="file" @input="form.avatar = $event.target.files[0]" />
      <progress v-if="form.progress" :value="form.progress.percentage" max="100">
        {{form.progress.percentage}}
      </progress>
      <br>
      <button type="submit">Submit</button>
    </form>
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
