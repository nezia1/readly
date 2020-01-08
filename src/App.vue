<template>
  <div class="app container is-fluid">
    <nav-bar />
    <div class="columns">
      <dashboard class="column is-one-fifth" />
      <router-view class="column" />
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
