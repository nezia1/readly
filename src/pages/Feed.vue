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
    <transition name="fade">
      <!-- TODO: close modal when clicking outside: https://gist.github.com/AnalyzePlatypus/22ca31c8f953db92eedadfe930bce31f -->
      <feed-modal
        v-if="isModalOpened"
        v-bind:opened-article="openedArticle"
        v-on:close-article="closeArticle"
      />
    </transition>
  </div>
</template>

<script>
import FeedModal from 'Components/FeedModal.vue'
import hljs from 'highlight.js'

export default {
  name: 'feed',
  components: {
    FeedModal
  },
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
  // FIXME: hljs doesn't highlight inside the modal
  mounted () {
    hljs.initHighlightingOnLoad()
  }
}
</script>

<style>
</style>
