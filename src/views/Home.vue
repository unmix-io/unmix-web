<template>
  <div class="home">
    <b-card no-body v-show="!loading">
      <b-tabs card>
        <b-tab title="Upload a file" active>
          <b-card-text>
            <div class="chooser" >
              <vue2-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue2-dropzone>
            </div>
          </b-card-text>
        </b-tab>
        <b-tab title="From Youtube">
          <b-card-text>
            <input class="form-control" @change="fromYoutube" name="youtubeUrl" type="text" placeholder="Paste video url here" v-model="youtubeUrl" />
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
    <div class="loading" v-show="loading">
      <loading-progress
        :progress="progress"
        :indeterminate="indeterminate"
        :counter-clockwise="false"
        :hide-background="false"
        shape="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
        size="180"
        fill-duration="2"
      />
      <p>Please wait, our brain is working!</p>
    </div>

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
          url: 'http://192.168.1.16:5000/predict/file',
          maxFilesize: 20,
          acceptedFiles: 'audio/wav,audio/mpeg,.mp3,.wav,.amr',
          sending: (file, xhr, formData) => {
            this.loading = true;
          },
          success: (file, response) => {
            this.$store.commit('newResult', response)
            this.$router.push(`/result/${response.identifier}`)
          },
          uploadprogress: (file, progress) => {
            if(progress == 100)
              this.indeterminate = true;
            this.progress = progress;
          }
      },
      youtubeUrl: "",
      loading: false,
      indeterminate: false,
      progress: 0
    }
  },
  methods: {
    fromYoutube: function() {
      this.loading = true;
      this.indeterminate = true;
      this.$store.dispatch('fromYoutube', this.youtubeUrl)
        .then((response) => {
          this.$router.push(`/result/${response.identifier}`)
        })
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