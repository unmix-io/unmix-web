<template>
  <div id="app">
    <div class="content">
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

@import "./colors.scss";

html,
body {
  height: 100%;
  margin: 0;
}

body {
  padding: 0;
  background: $color-unmix-green-light;
  color: $color-unmix-gray-dark;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a,
a:hover {
  color: $color-unmix-gray-dark;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: white;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: $color-unmix-gray-dark;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  overflow: auto;
}

#header {
  margin-left: calc(100vw - 100%);
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

.panel-wrapper {
  margin: 0 auto;
  max-width: 900px;
  .panel-container {
    margin: 20px 10px;
  }
}

#footer {
  right: 0;
  bottom: 0;
  left: 0;
  padding: 8px;
  background-color: $color-unmix-gray-light;
  text-align: center;

  a {
    padding: 0 10px;
  }
}
</style>
