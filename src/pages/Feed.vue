<template>
  <div class="columns is-multiline">
    <div class="column is-half" v-for="article in articles" v-bind:key="article.guid">
      <article-card v-bind:article="article" v-on:open-article="openArticle(article)" />
    </div>
    <transition name="fade">
      <!-- TODO: close modal when clicking outside: https://gist.github.com/AnalyzePlatypus/22ca31c8f953db92eedadfe930bce31f -->
      <article-modal
        v-if="isModalOpened"
        v-bind:opened-article="openedArticle"
        v-on:close-article="closeArticle"
      />
    </transition>
  </div>
</template>

<script>
import ArticleCard from 'Components/ArticleCard.vue'
import ArticleModal from 'Components/ArticleModal.vue'

export default {
  name: 'feed',
  components: {
    ArticleCard,
    ArticleModal
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
    },
    feedTitle: function () {
      return this.$store.state.feeds.find(feed => feed.id === this.$route.params.id).title
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
  metaInfo () {
    return {
      title: `Readly - ${this.feedTitle}`
    }
  }
}
</script>

<style>
</style>
