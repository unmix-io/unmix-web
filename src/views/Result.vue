<template>
  <div class="result">
    <div v-if="result">
      <p>
        Your file
        <i>{{result.result.name}}</i> has been processed - here are the results:
      </p>
      <img class="thumbnail" :src="result.result.thumbnail">
      <div class="player">
        <a class="btn" @click="toggleBoth">
          <font-awesome-icon v-show="!playing" icon="play-circle" size="7x"/>
          <font-awesome-icon v-show="playing" icon="pause-circle" size="7x"/>
        </a>
        <div class="slider container">
          <div class="row">
            <div class="col" style="text-align: left;">Vocals Only</div>
            <div class="col" style="text-align: right;">Instrumental Only</div>
          </div>
          <div class="row">
            <input class="fader" type="range" min="0" max="100" value="50" @input="sliderChanged" @change="sliderChanged">
          </div>
        </div>
        <br>
        <button
          class="btn btn-default"
          @click="showIndividual = !showIndividual"
        >Play individual files</button>
        <div v-show="showIndividual">
          <audio ref="audioVocals" v-bind:src="result.result.vocals" controls></audio>
          <audio ref="audioInstrumental" v-bind:src="result.result.instrumental" controls></audio>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <div class="result-download">
        <a v-bind:href="result.result.vocals" target="_blank">
          <font-awesome-icon icon="microphone" size="5x"/>
          <p>Download Vocals</p>
        </a>
        <a v-bind:href="result.result.instrumental" target="_blank">
          <font-awesome-icon icon="music" size="5x"/>
          <p>Download Instrumentals</p>
        </a>
      </div>
    </div>
    <br>
    <br>
    <router-link to="/">Another try?</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    result: state => state.result
  }),
  watch: {
    "$route.params.id": function() {
      this.$store.dispatch("loadResult", this.$route.params.id);
    }
  },
  created() {
    if (!this.$store.state.result) {
      this.$store.dispatch("loadResult", this.$route.params.id);
    }
  },
  methods: {
    sliderChanged: function(element) {
      console.log(element.srcElement.value);
      var value = parseInt(element.srcElement.value);
      var volumeVocals = Math.min(((100 - value) * 2) / 100, 1);
      var volumeInstrumental = Math.min((value * 2) / 100, 1);
      this.$refs.audioVocals.volume = volumeVocals;
      this.$refs.audioInstrumental.volume = volumeInstrumental;
    },
    toggleBoth: function() {
      if (this.playing) this.pauseBoth();
      else this.playBoth();
    },
    playBoth: function() {
      // Seek to the same position
      this.$refs.audioVocals.currentTime = this.$refs.audioInstrumental.currentTime = 0;
      this.$refs.audioVocals.play();
      this.$refs.audioInstrumental.play();
      this.playing = true;
    },
    pauseBoth: function() {
      this.$refs.audioVocals.pause();
      this.$refs.audioInstrumental.pause();
      this.playing = false;
    }
  },
  data() {
    return {
      sliderValue: 50,
      showIndividual: false,
      playing: false
    };
  }
};
</script>

<style lang="scss">
@import "../colors.scss";

.result-download {
  display: flex;
  width: 100%;
  align-items: stretch;
  justify-content: center;
  border-radius: 15px;
}
.result-download > a {
  width: 50%;
  color: $color-unmix-gray-dark;
  max-width: 300px;
  background: white;
  padding: 25px 0px 10px 0;
  &:first-child {
    border-radius: 10px 0 0 10px;
    border-right: 1px solid $color-unmix-gray-light;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  }
  p {
    padding-top: 15px;
  }

  &:hover {
    background: #fafafa;
    text-decoration: none;
  }
}

.thumbnail {
  max-height: 320px;
  margin-bottom: 20px;
}

.slider {
  $input-bw: 1.5em;
  $input-h: 2.25em;
  $input-bg-c: #f1f1f1;
  $input-bg-ct: rgba($input-bg-c, 0);

  $ruler-line-w: 0.0625em;
  $ruler-line-h: 0.625em;
  $ruler-line-off: ($input-bw - $ruler-line-h)/2;
  $ruler-line-c: #e6e6e6;
  $ruler-fs: 0.75;

  $track-u: 6em;
  $track-k: 10;
  $track-xtra: 1em;
  $track-w: $track-k * $track-u + $track-xtra;
  $track-h: 0.5em;

  $thumb-w: 4em;
  $thumb-h: 2em;
  $thumb-r: 0.75em;

  @mixin track() {
    width: $track-w;
    height: $track-h;
    border-radius: 0.1875em;
    background: mix(rgba(#c7c7c7, 0.65), #f1f1f1);
  }

  @mixin track-focus() {
    background: #e0e0e0;
  }

  @mixin thumb() {
    border: none;
    width: $thumb-w;
    height: $thumb-h;
    border-radius: 0.5em;
    box-shadow: -0.125em 0 0.25em #928886, inset -1px 0 1px #fff;
    background: radial-gradient(
          #fbfbfb 10%,
          rgba(#fbfbfb, 0.2) 10%,
          rgba(#ebe1e0, 0) 72%
        )
        no-repeat 50% 50%,
      radial-gradient(#{at 100% 50%}, #f5f5f5, #dcdcdc 71%, transparent 71%)
        no-repeat ($thumb-w - 2 * $thumb-r) 50%,
      linear-gradient(90deg, #f5f5f5, #d0c8c6) no-repeat 100% 50%,
      radial-gradient(#{at 0 50%}, #d0c6c5, #c6baba 71%, transparent 71%)
        no-repeat $thumb-r 50%,
      linear-gradient(90deg, #e3d9d8, #d0c6c5) no-repeat 0 50%,
      linear-gradient(#cdc0c0, #fcf5ef, #fcf5ef, #cdc0c0);
    background-size: 1.1 * $thumb-r 100%;
  }

  input[type="range"] {
    &,
    &::-webkit-slider-runnable-track,
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
    }

    align-self: center;
    margin: -$input-bw/2 0;
    margin-top: 2vh;
    border: solid $input-bw transparent;
    padding: 0;
    width: $track-w;
    height: $input-h;
    background: repeating-linear-gradient(
          90deg,
          $ruler-line-c,
          $ruler-line-c $ruler-line-w,
          transparent $ruler-line-w,
          transparent $track-u
        )
        no-repeat 50% $ruler-line-off border-box,
      repeating-linear-gradient(
          90deg,
          $ruler-line-c,
          $ruler-line-c $ruler-line-w,
          transparent $ruler-line-w,
          transparent $track-u
        )
        no-repeat 50% $ruler-line-off + $input-h + $input-bw border-box;
    background-size: $track-k * (($track-u) * 0.9) + $ruler-line-w $ruler-line-h,
      $track-k * (($track-u)) + $ruler-line-w $ruler-line-h, 100% $input-h;
    font-size: 1em;
    cursor: pointer;

    &::-webkit-slider-runnable-track {
      position: relative;
      @include track();
    }
    &::-moz-range-track {
      @include track();
    }
    &::-ms-track {
      border: none;
      @include track();
      color: transparent;
    }

    &::-ms-fill-lower {
      display: none;
    }

    &::-webkit-slider-thumb {
      margin-top: ($track-h - $thumb-h)/2;
      @include thumb();
    }
    &::-moz-range-thumb {
      @include thumb();
    }
    &::-ms-thumb {
      @include thumb();
    }

    &::-webkit-slider-runnable-track,
    #track {
      &:before,
      &:after {
        position: absolute;
        font: #{$ruler-fs * 1em}/#{3 * $track-u/$ruler-fs} trebuchet ms, arial,
          sans-serif;
      }
      &:before {
        top: 50%;
        right: 100%;
        transform: translate(50%, -50%) rotate(90deg) translate(0, 32%);
      }
      &:after {
        left: 50%;
        width: 3em;
        word-spacing: 1em;
      }
    }

    &:nth-of-type(1),
    &:nth-of-type(6) {
      &::-webkit-slider-runnable-track,
      #track {
        &:after {
          content: "+18 0 -18";
        }
      }
    }

    &:focus {
      outline: none;

      &::-webkit-slider-runnable-track {
        @include track-focus();
      }
      &::-moz-range-track {
        @include track-focus();
      }
      &::-ms-track {
        @include track-focus();
      }
    }
  }
}
</style>