<template>
  <div class="columns is-multiline">
    <div class="column is-three-fifths">
      <div class="control">
        <b-field label="RSS Link">
          <b-input placeholder="Enter a valid RSS link" v-model="rssLink" icon="rss"></b-input>
        </b-field>
        <b-button type="is-primary">Add</b-button>
      </div>
    </div>
    <div class="column is-two-fifths"></div>
    <div class="column is-two-fifths">
      <b-message type="is-success" has-icon>RSS feed was successfully added!</b-message>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-feed',
  data: function () {
    return {
      rssLink: ''
    }
  }
}
</script>

<style>
</style>
