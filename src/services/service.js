import Vue from 'vue';

const baseUrl = "http://51.154.102.220:5000/"

export default {
  get(url, request) {
    return Vue.http.get(baseUrl + url, request)
  },
  post(url, request) {
    return Vue.http.post(baseUrl + url, request)
  }
};