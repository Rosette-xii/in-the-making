<template>
  <section class="main"
           :class="{active:isShow}">
    <button class="start-btn border-2"
            @click="showIntro">測試你的數位知識量能 <img src="../assets/images/others/arrow.svg"
           alt="arrow"></button>
    <div class="intro border-2"
         v-show="isShow">
      <div class="intro-head">
        <h1>數位發展部 IN THE MAKING</h1>
      </div>
      <div class="intro-body">
        <div class="intro-content">
          <p>「我們是思想的載體，就像自然生長的樹木，用自己的方式擴散，承載著世界。只有在遐想（reverie）的狀態下能成為載體，這個歷程是永續的。」———唐鳳<br><br>
            人們在數位的時代，扮演著供給「數位民主」的養分，透過每個人、每個獨立的個體的分解與組成，在不斷的重組與運算中有機生長，在每一次的上傳與下載中互利共生。
            <img src="../assets/images/others/flower-dash.svg"
                 alt="flower dash">
            或許有點難懂，或許離生活有點遠，但希望你可以記住：<br><br>
            <strong>「數位科技的世界裡，我們都是使用者，也是創造者」</strong><br><br>
            並且透過花園的挑戰，瞭解更多關於數位發展中的定位與任務<br><br>
            moda Garden 永遠開放。永遠歡迎所有數位公民， 在這裡種下你的思想、你的e-flowers。
          </p>
          <button class="go-btn"
                  @click="goQuizes">種下你數位種子</button>
        </div>
        <div class="scroll">
          <p>scroll</p>
          <img src="../assets/images/others/triangle-down.svg"
               alt="scroll down">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
export default {
  name: 'Home',
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    showIntro() {
      this.isShow = !this.isShow
      this.$nextTick(() => {
        gsap.from('.intro', {
          y: 30,
          duration: 0.3,
          ease: 'back.out(1.7)',
        })
      })
    },
    goQuizes() {
      this.$store.commit('START')
      this.$router.replace({
        name: 'Quizes',
        query: {
          id: 0,
        },
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/_mixin.scss';
@import '@/assets/style/_variable.scss';
.main {
  background-image: url('../assets/images/covers/ee_cover_garden_大.jpg');
  &.active {
    background-image: url('../assets/images/covers/ee_cover_garden_BG大.jpg');
  }
}
.start-btn {
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -110%);
  padding: 8px 20px;
  background: $gradient-purple;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}
h1 {
  color: #fff;
  font-size: 20px;
}
.intro {
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 80%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.intro-head {
  padding: 16px;
  background-color: $purple;
  border-bottom: 2px solid #000;
}
.intro-body {
  padding: 24px 24px 70px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('../assets/images/others/square-bg.svg');
  background-size: 105%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  p {
    padding-bottom: 30px;
    font-size: 14px;
    text-align: justify;
    img {
      margin: 8px auto;
      display: block;
    }
  }
}
.scroll {
  width: 100%;
  position: absolute;
  padding: 10px 0;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('../assets/images/others/square-bg.svg');
  background-size: 105%;
  p {
    padding-bottom: 0;
    text-align: center;
  }
}
strong {
  color: $main-color;
}
</style>
