<template>
  <b-menu>
    <b-menu-list label="Feeds">
      <b-menu-item icon="newspaper" label="New articles"></b-menu-item>
      <b-menu-item icon="rss" :active="isActive" :expanded="isActive" @click="isActive = !isActive">
        <template slot="label" class="has-text-centered">
          Feeds
          <b-icon class="is-pulled-right" :icon="isActive ? 'menu-up' : 'menu-down'"></b-icon>
        </template>
        <b-menu-item label="Feed 1"></b-menu-item>
        <b-menu-item label="Feed 2"></b-menu-item>
        <b-menu-item label="Feed 3"></b-menu-item>
      </b-menu-item>
      <b-menu-item icon="plus" label="Add a feed" tag="router-link" :to="{path: '/add'}"></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
export default {
  name: 'dashboard',
  data: function () {
    return {
      isActive: false
    }
  }
}
</script>

<style>
</style>
