<template>
  <div id="app">
    <div id="header">
      <router-link to="/">
        <img class="logo" alt="unmix.io" src="./assets/logo-invert.svg">
      </router-link>
      <p class="slogan">Vocal and Instrumental Extraction from Music driven by AI.</p>
    </div>
    <div class="panel-wrapper">
      <div class="panel-container">
        <router-view/>
      </div>
    </div>
    <div id="footer">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/result/skyfall">Example</router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

body {
  padding: 0;
  margin: 0;
  background: #42b983;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  margin-bottom: 60px;
}

a,
a:hover {
  color: #2c3e50;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: white;
}

.panel-wrapper {
  max-width: 900px;
  margin: 0 auto;
  .panel-container {
    margin: 20px 10px;
  }
}

#header {
  padding: 40px 0 14px 0;
  .logo {
    width: 700px;
    max-width: 80%;
  }
  .slogan {
    font-size: 24px;
    padding-top: 15px;
  }
}

#footer {
  position: fixed;
  height: 40px;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 8px;
  background-color: #efefef;
  text-align: center;

  a {
    padding: 0 10px;;
  }
}
</style>
