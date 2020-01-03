<template>
  <div class="app">
    <nav-bar />
    <div class="container is-fluid">
      <div class="columns">
        <Dashboard class="column is-one-quarter" />
        <router-view class="column" />
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import Dashboard from '@/components/Dashboard'

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
