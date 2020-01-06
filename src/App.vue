<template>
  <div class="app">
    <nav-bar />
    <div class="container is-fluid">
      <div class="columns">
        <dashboard class="column is-one-quarter" />
        <router-view class="column" />
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from 'Components/NavBar'
import Dashboard from 'Components/Dashboard'

export default {
  name: 'app',
  components: {
    NavBar,
    Dashboard
  }
}
</script>
<style>
</style>
