<template>
  <div class="columns is-multiline">
    <div class="column is-half" v-for="article in articles" v-bind:key="article.guid">
      <div class="card">
        <div class="card-content">
          <p class="title">{{article.title}}</p>
          <p class="subtitle">{{article.creator}}</p>
        </div>
        <div class="card-footer">
          <a class="card-footer-item" v-on:click.stop="openArticle(article)">Read</a>
          <a class="card-footer-item">Save</a>
        </div>
      </div>
    </div>
    <!-- TODO: close modal when clicking outside: https://gist.github.com/AnalyzePlatypus/22ca31c8f953db92eedadfe930bce31f -->
    <div v-if="isModalOpened" class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ openedArticle.title }}</p>
          <button class="delete" aria-label="close" v-on:click="closeArticle"></button>
        </header>
        <section class="modal-card-body">
          <div class="content" v-html="openedArticle.content"></div>
        </section>
        <footer class="modal-card-foot">
          <a class="button is-link" v-bind:href="openedArticle.link" target="_blank">Read on website</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'

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
    parseArticle: function (article) {
      const domparser = new DOMParser()
      const parsedArticle = domparser.parseFromString(article.content)
      return parsedArticle
    },
    openArticle: function (clickedArticle) {
      this.isModalOpened = true
      this.openedArticle = clickedArticle
    },
    closeArticle: function () {
      this.openedArticle = {}
      this.isModalOpened = false
    }

  },
  mounted () {
    hljs.initHighlightingOnLoad()
  }
}
</script>

<style>
</style>
