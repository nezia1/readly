<template>
  <div class="card">
    <div class="card-content">
      <p class="title">{{article.title}}</p>
      <p class="subtitle">{{article.creator}}</p>
      <p class="subtitle is-6">{{getReadableDate(article.isoDate)}}</p>
    </div>
    <div class="card-footer">
      <a class="card-footer-item" v-on:click.stop="$emit('open-article')">Read</a>
      <!-- TODO: add save functionality -->
      <!-- <a class="card-footer-item">Save</a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-card',
  props: ['article'],
  methods: {
    getReadableDate: function (isoDate) {
      const date = new Date(isoDate)
      return date.toDateString()
    }
  }
}
</script>

<style>
</style>
