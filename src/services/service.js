import Vue from 'vue';

const baseUrl = "https://api.unmix.io/"
Vue.prototype.$api = baseUrl


export default {
  get(url, request) {
    return Vue.http.get(baseUrl + url, request)
  },
  post(url, request) {
    return Vue.http.post(baseUrl + url, request)
  }
};