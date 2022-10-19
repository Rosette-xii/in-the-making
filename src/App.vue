<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    alert(vh)
  },
}
</script>
<style lang="scss">
/* mobile 375*667 */
/* pc 1280*720 */
@mixin pc {
  @media (min-width: 576px) {
    @content;
  }
}
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
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
}
a {
  color: #fff;
  text-decoration: none;
}
body {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(230, 198, 224);
}
.main {
  position: relative;
  width: 100vw;
  // height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background-size: cover;
  overflow: hidden;
  @include pc {
    width: 375px;
    height: 667px;
    border-radius: 20px;
  }
}
.main-area {
  width: 100%;
  height: 100%;
  background-color: #fff;
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
.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 8px;
  background-color: transparent;
  font-size: 24px;
}
.go-btn {
  padding: 8px 60px;
  border-radius: 20px;
}
</style>
