<template>
  <div class="columns is-multiline">
    <div class="column is-three-fifths">
      <div class="control">
        <b-field label="RSS Link">
          <b-input
            placeholder="Enter a valid RSS link"
            v-model="rssLink"
            icon="rss"
            v-on:keyup.enter.native="addFeed(rssLink)"
          ></b-input>
        </b-field>
        <b-button type="is-primary" v-on:click="addFeed(rssLink)">Add</b-button>
      </div>
    </div>
    <div class="column is-two-fifths"></div>
    <div class="column is-two-fifths">
      <b-loading :active="isAddingFeed"></b-loading>
      <b-message type="is-success" has-icon :active="isFeedAdded">RSS feed was successfully added!</b-message>
      <b-message
        type="is-danger"
        has-icon
        :active="isFeedInvalid"
      >The url you provided isn't a valid RSS feed.</b-message>
    </div>
  </div>
</template>

<script>
const Parser = require('rss-parser')
const parser = new Parser()
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const { openDB } = require('idb')

export default {
  name: 'add-feed',
  data: function () {
    return {
      rssLink: '',
      isAddingFeed: false,
      isFeedAdded: false,
      isFeedInvalid: false
    }
  },
  methods: {
    // TODO: Add duplicates detection
    addFeed: async function (url) {
      try {
        this.isFeedInvalid = false
        this.isAddingFeed = true
        let feed = await parser.parseURL(CORS_PROXY + url)
        const db = await openDB('readly', 1, {
          upgrade (db) {
            db.createObjectStore('feeds', {
              keyPath: 'id',
              autoIncrement: true
            })
          }
        })
        await db.add('feeds', {
          title: feed.title,
          feedUrl: feed.feedUrl,
          description: feed.description
        })
        this.isAddingFeed = false
        this.isFeedAdded = true
      } catch (error) {
        this.isFeedAdded = false
        this.isAddingFeed = false
        this.isFeedInvalid = true
      }
    }
  }
}
</script>

<style>
</style>
