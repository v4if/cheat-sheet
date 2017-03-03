<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei', Monaco, Consolas, "Andale Mono", "lucida console", "Courier New",monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 90%;
  margin: 20px auto;
  padding: 10px;
}

input, button {
  font-family: 'Microsoft YaHei', Monaco, Consolas, "Andale Mono", "lucida console", "Courier New",monospace;
}

ul, li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

a {
  color: #42b983;
}
</style>
