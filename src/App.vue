<template>
  <div class="app container is-fluid">
    <nav-bar />
    <div class="columns">
      <div class="column is-one-fifth">
        <dashboard />
      </div>
      <div class="column">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from 'Components/NavBar'
import Dashboard from 'Components/Dashboard'

export default {
  name: 'app',
  metaInfo: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { name: 'description', content: 'Readly is a front-end RSS reader to get all your blogs in one place.' }
    ],
    title: 'Readly'
  },
  components: {
    NavBar,
    Dashboard
  }
}
</script>
<style>
</style>
