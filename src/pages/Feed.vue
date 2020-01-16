<template>
  <div class="columns is-multiline">
    <div class="column is-half" v-for="article in articles" v-bind:key="article.guid">
      <div class="card">
        <div class="card-content">
          <p class="title">{{article.title}}</p>
          <p class="subtitle">{{article.creator}}</p>
        </div>
        <div class="card-footer">
          <a class="card-footer-item" v-on:click="openArticle(article)">Read</a>
          <a class="card-footer-item">Save</a>
        </div>
      </div>
    </div>
    <div v-bind:class="{'modal': true, 'is-active': isModalOpened }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ openedArticle.title }}</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="content" v-html="openedArticle.content"></div>
        </section>
        <footer class="modal-card-foot">
          <button class="button">Close</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'feed',
  data: function () {
    return {
      isModalOpened: false,
      openedArticle: {}
    }
  },
  computed: {
    articles: function () {
      return this.$store.state.feeds.find(feed => feed.id === this.$route.params.id).items
    }
  },
  methods: {
    openArticle: function (clickedArticle) {
      this.isModalOpened = true
      this.openedArticle = clickedArticle
    },
    parseArticle: function (article) {
      const domparser = new DOMParser()
      const parsedArticle = domparser.parseFromString(article.content)
      return parsedArticle
    }
  }
}
</script>

<style>
</style>
