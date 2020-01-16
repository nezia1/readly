<template>
  <b-menu>
    <!-- TODO: Make menu sticky -->
    <b-menu-list label="Feeds">
      <b-menu-item icon="newspaper" label="New articles"></b-menu-item>
      <b-menu-item icon="rss" :active="isActive" :expanded="isActive" @click="isActive = !isActive">
        <template slot="label" class="has-text-centered">
          Feeds
          <b-icon class="is-pulled-right" :icon="isActive ? 'menu-up' : 'menu-down'"></b-icon>
        </template>
        <!-- TODO: make nicer URLs for feeds using feed title and still keep the id to display articles -->
        <b-menu-item
          v-for="feed in feeds"
          v-bind:key="feed.id"
          v-bind:label="feed.title"
          tag="router-link"
          :to="{path: `/feeds/${feed.id}`}"
        ></b-menu-item>
      </b-menu-item>
      <b-menu-item icon="plus" label="Add a feed" tag="router-link" :to="{path: '/add'}"></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'dashboard',
  data: function () {
    return {
      isActive: false
    }
  },
  computed: mapState({
    feeds: state => state.feeds
  })
}
</script>

<style>
</style>
