<template>
  <!-- TODO: remove burger menu -->
  <b-navbar mobile-burger="false">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h1 class="is-size-3">Readly</h1>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>
</style>
