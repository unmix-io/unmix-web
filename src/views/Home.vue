<template>
  <div class="home">
    <vue2-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue2-dropzone>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: 'home',
  components: {
    vue2Dropzone
  },
  data: function () {
    return {
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          maxFilesize: 20,
          headers: { "My-Awesome-Header": "header value" },
          acceptedFiles: 'audio/wav,audio/mpeg,.mp3,.wav',
          complete: (file, done) => {
            this.$router.push('/result/7djl47odhoi3od7')
          }
      }
    }
  }
}
</script>

<style lang="scss">
  #dropzone { 
    border-radius: 10px;
    border: 3px dashed #2c3e50;
    background:none;
  }
</style>