import Vue from 'vue';

const baseUrl = "https://api.unmix.io/"

export default {
  get(url, request) {
    return Vue.http.get(baseUrl + url, request)
  },
  post(url, request) {
    return Vue.http.post(baseUrl + url, request)
  }
};