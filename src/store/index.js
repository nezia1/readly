import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
const uuidv4 = require('uuid/v4')
const Parser = require('rss-parser')
const parser = new Parser()
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    feeds: []
  },
  mutations: {
    ADD_FEED (state, feed) {
      state.feeds.push({
        id: uuidv4(),
        title: feed.title,
        feedUrl: feed.feedUrl,
        description: feed.description,
        items: feed.items
      })
    }
  },
  actions: {
    // TODO: Add duplicates detection
    async addFeed ({ commit }, url) {
      const feed = await parser.parseURL(CORS_PROXY + url)
      commit('ADD_FEED', feed)
    }
  },
  plugins: [createPersistedState({
    paths: ['feeds']
  })]
})
