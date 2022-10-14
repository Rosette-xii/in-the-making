<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
/* mobile 375*667 */
/* pc 1280*720 */
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}
a {
  // padding: 20px;
  color: #fff;
  text-decoration: none;
}
body {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(230, 198, 224);
}
.container {
  max-width: 540px;
  margin: 0 auto;
  padding: 30px;
}
ul {
  list-style-type: none;
}
button {
  background-color: #1972f8;
  color: #fff;
  border: none;
  cursor: pointer;
}
.main-area {
  background-color: #fff;
}
.progress-bar {
  display: block;
  height: 10px;
  border-radius: 10px;
  background-color: #222;
}
.content-body {
  margin-top: 24px;
  li {
    margin: 16px 0;
    padding: 20px;
    color: #fff;
    background-color: #1972f8;
    cursor: pointer;
  }
}
/* 
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
