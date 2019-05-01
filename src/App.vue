<template>
  <div id="app">
    <div id="header">
      <router-link to="/"><img class="logo" alt="Vue logo" src="./assets/logo-invert.svg"></router-link>
      <p class="slogan">An AI-Driven accapella and instrumental separator</p>
    </div>
    <div class="panel">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

body {
  padding:0;
  margin:0;
  background:#42b983;
  color:#2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:center;
}
a, a:hover { color:#2c3e50 }
.panel { max-width:900px; margin:0 auto; }
#header {
  
  padding:40px 0;
  .logo { width:700px; max-width:80%; }
  .slogan { font-size:20px; padding-top:15px; }
}
</style>
