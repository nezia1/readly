<template>
  <div class="card">
    <div class="card-content">
      <p class="title">{{article.title}}</p>
      <p class="subtitle">{{article.creator}}</p>
    </div>
    <div class="card-footer">
      <a class="card-footer-item" v-on:click.stop="$emit('open-article')">Read</a>
      <a class="card-footer-item">Save</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-card',
  props: ['article']
}
</script>

<style>
</style>
