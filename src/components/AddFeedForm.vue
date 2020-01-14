<template>
  <div class="control">
    <b-field label="RSS Link">
      <b-input
        placeholder="Enter a valid RSS link"
        icon="rss"
        v-model="rssLink"
        v-on:keyup.enter.native="$emit('create:feed', rssLink)"
      ></b-input>
    </b-field>
    <b-button type="is-primary" v-on:click="$emit('create:feed', rssLink)">Add</b-button>
  </div>
</template>

<script>
export default {
  name: 'add-feed-form',
  data: function () {
    return {
      rssLink: ''
    }
  }
}
</script>

<style>
</style>
