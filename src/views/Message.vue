<template>
  <section class="main">
    <div class="main-area">
      <div class="container">
        <div class="content-head">
          <h2>最後，輸入你的名字和留言灌溉到花朵</h2>
        </div>
        <div class="content-body">
          <input type="text"
                 v-model="name"
                 placeholder="你的名字是">
          <textarea rows="10"
                    v-model="message"
                    placeholder="你的留言是"></textarea>
        </div>
        <button class="btn go-btn"
                @click="setFlower">生成結果</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      message: '',
      flowerData: {},
    }
  },
  methods: {
    setFlower() {
      this.flowerData.name = this.name
      this.flowerData.message = this.message
      localStorage.setItem('flower', JSON.stringify(this.flowerData))
      this.$router.push({
        name: 'Result',
      })
    },
  },
  mounted() {
    const flowerData = JSON.parse(localStorage.getItem('flower'))
    if (flowerData) {
      this.flowerData = flowerData
    }
  },
}
</script>
<style lang="scss">
input,
textarea {
  width: 80%;
  margin: 16px;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #6f6f6f;
}
</style>

