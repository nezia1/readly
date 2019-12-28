<template>
  <div class="container is-fluid">
    <div class="columns">
      <Dashboard class="column is-one-quarter" />
    </div>
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard'
export default {
  name: 'home',
  components: {
    Dashboard
  }
}
</script>
