<template>
  <section class="main-block">
    <div class="home main-area"
         :class="{active:isShow}">
      <button class="start-btn"
              @click="isShow=!isShow">開始測驗</button>
    </div>
    <div class="intro"
         v-if="isShow">
      <button class="close-btn"
              @click="isShow=!isShow">X</button>
      <div class="intro-content">
        <h1>歡迎光臨 moda garden！</h1>
        <ul>
          <li>我們都是使用者，也是創造者</li>
          <li>歡迎光臨 moda garden！</li>
          <li>一起開出屬於你的 e-flower</li>
        </ul>
        <p>說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字活動說明文字</p>
        <button class="go-btn"
                @click="$router.push('/Choose')">
          出發！
        </button>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      isShow: false,
    }
  },
  components: {
    // HelloWorld
  },
}
</script>
<style lang="scss">
@mixin pc {
  @media (min-width: 576px) {
    @content;
  }
}
.main-block {
  position: relative;
  width: 100vw;
  height: 100vh;
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
}
.home {
  background-image: url('../assets/images/temp-bg.jpg');
}
// .active::after {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: hsla(0, 0%, 100%, 0.3);
//   filter: blur(5px);
//   z-index: -1;
// }
.start-btn {
  position: absolute;
  left: 50%;
  bottom: 72px;
  transform: translateX(-50%);
  padding: 16px 28px;
  background-color: #1972f8;
  color: #fff;
  border-radius: 20px;
  font-size: 28px;
}
h1 {
  padding-bottom: 16px;
  font-size: 20px;
}
.intro {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  background-color: #d4d4d4;
  border-radius: 20px;
  display: flex;
  align-items: center;
}
.intro-content {
  padding: 30px;
  li {
    padding-bottom: 16px;
  }
}
p {
  padding-bottom: 24px;
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
