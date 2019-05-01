<template>
  <div class="result">
    <div v-if="result">
        <p>Your file <i>{{result.result.name}}</i> has been processed - here are the results:</p>
        
        <div class="player">
            <audio v-bind:src="result.result.vocals" controls></audio>
            <audio v-bind:src="result.result.instrumental" controls></audio>
        </div>
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
  }
}

</script>

<style lang="scss">
#dropzone { 
    border-radius: 10px;
    border: 3px dashed #2c3e50;
    background:none;
}

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
</style>