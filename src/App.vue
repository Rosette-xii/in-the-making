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
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&family=Russo+One&display=swap');
@import '@/assets/style/_mixin.scss';
@import '@/assets/style/_variable.scss';
/* mobile 375*667 */
/* pc 1280*720 */
* {
  margin: 0;
  padding: 0;
  font-size: 16px;
  letter-spacing: 1px;
}
body {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  // background-color: $blue;
  overflow: hidden;
  @include pc {
    background-image: url('./assets/images/covers/pc-bg.jpg');
    background-size: cover;
  }
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: $blue;
  text-align: center;
  font-family: 'Noto Sans TC', sans-serif;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  height: calc(var(--vh, 1vh) * 100);
  @include pc {
    height: 100%;
  }
}
a {
  color: #fff;
  text-decoration: none;
}
.main {
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  @include pc {
    overflow-y: hidden;
  }
  background-image: url('./assets/images/covers/ee_cover_garden_BG大.jpg');
  @include pc {
    width: 375px;
    height: 667px;
    border: 2px solid #000;
    border-radius: 10px;
  }
}
.container {
  max-width: 345px;
  margin: 0 auto;
  padding: 24px;
}
ul {
  list-style-type: none;
}
button {
  background-color: $main-color;
  color: #fff;
  border: 2px solid #000;
  cursor: pointer;
}
.go-btn {
  padding: 10px 40px;
  background: $gradient-purple;
  font-weight: bold;
}
.border-1 {
  border: 1px solid #000;
}
.border-2 {
  border: 2px solid #000;
}
</style>
