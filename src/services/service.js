import Vue from 'vue';

const baseUrl = "http://192.168.1.16:5000/"

export default {
  get(url, request) {
    return Vue.http.get(baseUrl + url, request)
  },
  post(url, request) {
    return Vue.http.post(baseUrl + url, request)
  }
};