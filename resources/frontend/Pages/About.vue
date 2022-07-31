<script setup>

</script>

<template>
  <div class="container">
    <h1>AdonisJS</h1>
    <p><a href="https://adonisjs.com/">AdonisJS</a> is a Node.js framework that contains everything you need to create a web app. Based upon the same concepts as Laravel, it will instantly feel familiar to Laravel developers.</p>

    <h1>Inertia</h1>
    <p><a href="https://inertiajs.com/">Inertia</a> is a new approach to building single-page web apps. It is essentially some 'glue' that joins the frontend and the backend together without the need of an API. Instead of returning static templates, Inertia allows you to return Vue, React or Svelte components directly from the backend!</p>

    <h1>Vite</h1>
    <p><a href="https://vitejs.dev/">Vite</a>, which means "quick" in French, is a rapid development tool for building web projects. It significantly speeds up and improves the frontend development experience. Using Hot Module Replacement, Vite can update only the parts of the code that have been changed, instead of reloading the whole application.</p>

    <h1>Vue</h1>
    <p><a href="https://vuejs.org/">Vue</a> is a progressive JavaScript frontend framework designed to be flexible. The core Vue library focuses on the view layer only, and additional packages are needed for features like routing and state management.</p>
    <p><inertia-link href="/">Back to Home</inertia-link> </p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
}

h1 {
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

</style>
