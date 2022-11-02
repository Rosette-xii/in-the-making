<template>
  <section class="main">
    <div class="container">
      <div class="content-head border-2">
      </div>
      <div class="content-body border-2">
        <h2>最後，輸入你的數位姓名，<br>標記你的 e-flower</h2>
        <input @blur="goTop"
               ref="nameInput"
               class="nameInput"
               type="text"
               v-model="name"
               placeholder="你的名字是...(10字以內)"
               maxlength="10">
        <button class="go-btn"
                @click="setFlower">你是哪一種數位花朵</button>
      </div>
    </div>
  </section>
</template>
<script>
import { gsap } from 'gsap'
export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    setFlower() {
      if (this.name === '') {
        gsap.from('.nameInput', {
          x: 12,
          ease: 'elastic.out(1, 0.3)',
        })
        this.$refs.nameInput.focus()
      } else {
        this.name = this.name.trim()
        this.$store.commit('ADD_MESSAGE', this.name)
        this.$router.replace({
          name: 'Result',
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/_mixin.scss';
@import '@/assets/style/_variable.scss';
.main {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  @include pc {
    position: relative;
  }
}
.content-head {
  padding: 14px;
  background-color: $dark-purple;
  font-size: 18px;
}
.content-body {
  padding: 0 20px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('../assets/images/others/square-bg.svg');
  background-size: 105%;
  border-top: 0;
}
h2 {
  padding: 20px 0;
}
input {
  margin-bottom: 24px;
  padding: 10px;
  width: 80%;
  font-size: initial;
  border: 1px solid #000;
  &::placeholder {
    font-size: 14px;
  }
}
p {
  padding-bottom: 20px;
  font-size: 12px;
}
button {
  margin-bottom: 20px;
}
</style>

