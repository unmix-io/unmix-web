<template>
  <div class="home">
    <div id="upload-wrapper" no-body v-show="!loading">
      <div id="file-container" class="upload-container">
        <div class="chooser">
          <vue2-dropzone ref id="dropzone" :options="dropzoneOptions"></vue2-dropzone>
        </div>
      </div>
      <div id="youtube-container" class="upload-container">
        <h5>or paste a link from YouTube</h5>
        <div class="input-group mb-3">
          <input
            class="form-control"
            @change="fromYoutube"
            name="youtubeUrl"
            type="text"
            placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            aria-describedby="button-youtube-go"
            v-model="youtubeUrl"
          >
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-youtube-go"
              style="border:1px solid #ced4da; background: #ced4da;"
            >
              <font-awesome-icon icon="arrow-circle-right" size="1x"/>
            </button>
          </div>
        </div>
      </div>
    </div>
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
      <button @click="cancel" type="button" class="btn btn-outline-dark">Cancel</button>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  name: "home",
  components: {
    vue2Dropzone
  },
  data: function() {
    return {
      dropzoneOptions: {
        url: this.$api + "predict/file",
        maxFilesize: 20,
        acceptedFiles: "audio/wav,audio/mpeg,.mp3,.wav,.amr",
        sending: () => {
          this.loading = true;
        },
        success: (file, response) => {
          this.$store.commit("newResult", response);
          this.$router.push(`/result/${response.identifier}`);
        },
        uploadprogress: (file, progress) => {
          if (progress == 100) this.indeterminate = true;
          this.progress = progress;
        }
      },
      youtubeUrl: "",
      loading: false,
      indeterminate: false,
      progress: 0
    };
  },
  methods: {
    fromYoutube: function() {
      this.loading = true;
      this.indeterminate = true;
      this.$store.dispatch("fromYoutube", this.youtubeUrl).then(response => {
        this.$router.push(`/result/${response.identifier}`);
      });
    },
    cancel: function() {
      this.loading = false;
      this.indeterminate = false;
      this.youtubeUrl = "";
      this.progress = 0;
    }
  }
};
</script>

<style lang="scss">

@import "../colors.scss";

#dropzone {
  border-radius: 10px;
  border: 3px dashed $color-unmix-gray-dark;
  background: none;
  color: white;
}

#youtube-container {
  margin-top: 30px;
}
</style>