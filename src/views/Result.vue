<template>
  <div class="result">
    <div v-if="result">
        <p>Your file <i>{{result.result.name}}</i> has been processed - here are the results:</p>
        <img class="thumbnail" :src="result.result.thumbnail" />
        <div class="player">
            <a class="btn" @click="toggleBoth">
                <font-awesome-icon v-show="!playing" icon="play-circle" size="7x" />
                <font-awesome-icon v-show="playing" icon="pause-circle" size="7x" />
            </a>
            <div class="slider">
                <div>
                    <VueSlideBar
                        v-model="sliderValue"
                        :min="0"
                        :max="100"
                        :lineHeight="13"
                        :labelStyles="{ color: '#4a4a4a', backgroundColor: '#FFFFFF' }"
                        :processStyle="{ backgroundColor: '#2F3E4E' }"
                        @input="sliderChanged">
                        <template slot="tooltip" slot-scope="tooltip">
                            <div class="tooltip-drag">
                                Drag me!
                            </div>
                        </template>
                    </VueSlideBar>
                </div>
            </div>
            <br>
            <button class="btn btn-default" @click="showIndividual = !showIndividual">Play individual files</button>
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
                <font-awesome-icon icon="microphone" size="5x" />
                <p>Download Vocals</p>
            </a>
            <a v-bind:href="result.result.instrumental" target="_blank">
                <font-awesome-icon icon="music" size="5x" />
                <p>Download Instrumentals</p>
            </a>
        </div>
    </div>
    <br><br>
    <router-link to="/">Another try?</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    result: state => state.result
  }),
  created() {
      if(!this.$store.state.result)
        this.$store.dispatch('loadResult', this.$route.params.id)
  },
  methods: {
    sliderChanged: function(value) {
        var volumeVocals = Math.min((100 - value) * 2 / 100, 1);
        var volumeInstrumental = Math.min(value * 2 / 100, 1);
        this.$refs.audioVocals.volume = volumeVocals;
        this.$refs.audioInstrumental.volume = volumeInstrumental;
    },
    toggleBoth: function() {
        if(this.playing)
            this.pauseBoth();
        else
            this.playBoth();
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
}

</script>

<style lang="scss">
.result-download { display:flex; width:100%; align-items:stretch; justify-content: center; border-radius:15px; }
.result-download > a {
    width:50%;
    color:#2c3e50;
    max-width:300px;
    background:white;
    padding:25px 0px 10px 0;
    &:first-child {
        border-radius: 10px 0 0 10px;
        border-right:1px solid #AAA;
    }
    &:last-child {
        border-radius: 0 10px 10px 0;
    }
    p { padding-top:15px; }

    &:hover {
        background:#FAFAFA;
        text-decoration: none;
    }
}

.thumbnail {
    max-height: 320px;
    margin-bottom: 20px;
}

// .slider { display:flex; width:100%; flex:100px 500px 100px; align-items:stretch; }
// .slider > div { flex-grow:1; }
// .slider > svg { position:relative; top:6px; }

.tooltip-drag { width:100px; height:28px; top:-8px; background: #FEFEFE; position:relative; }
.tooltip-drag:after { content:' '; position:absolute; top:28px; left:50%; margin-left:-10px; border:10px solid #FFF; border-color:#FFF transparent transparent transparent; }
</style>