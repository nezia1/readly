<template>
  <div class="modal is-active" v-on:keydown.esc="$emit('close-article')" v-focus tabindex="0">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ openedArticle.title }}</p>
        <button class="delete" aria-label="close" v-on:click="$emit('close-article')"></button>
      </header>
      <section class="modal-card-body has-text-justified">
        <div class="content" v-html="openedArticle.content"></div>
      </section>
      <footer class="modal-card-foot">
        <a class="button is-link" v-bind:href="openedArticle.link" target="_blank">Read on website</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-modal',
  props: ['openedArticle'],
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style>
</style>
