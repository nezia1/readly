<template>
  <div class="columns is-multiline">
    <div class="column is-half" v-for="article in articles" v-bind:key="article.guid">
      <div class="card">
        <div class="card-content">
          <p class="title">{{article.title}}</p>
          <p class="subtitle">{{article.creator}}</p>
        </div>
        <div class="card-footer">
          <div class="card-footer-item">Read</div>
          <div class="card-footer-item">Mark as read</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'feed',
  data: function () {
    return {

    }
  },
  computed: {
    articles: function () {
      return this.$store.state.feeds.find(feed => feed.id === this.$route.params.id).items
    }
  }
}
</script>

<style>
</style>
