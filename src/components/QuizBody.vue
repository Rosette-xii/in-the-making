<template>
  <ul class="content-body">
    <li v-for="(i,idx) in testData[curPage].answers"
        :key="idx"
        @click="goNext(curPage,i)">{{i.ans}}</li>

  </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'QuizBody',
  props: ['curPage'],
  data() {
    return {
      flowerData: {
        flower: [],
        name: '',
        message: '',
        myFlower: '',
      },
    }
  },
  computed: {
    ...mapState(['testData']),
  },
  methods: {
    setFlower(page, ans) {
      if (ans.isCorrect) {
        this.flowerData.flower[page - 1] = this.$store.state.testData[page].flowers[Math.floor(Math.random() * 3)].imgUrl
      } else {
        this.flowerData.flower[page - 1] = this.$store.state.testData[page].flowers[3].imgUrl
      }
      localStorage.setItem('flower', JSON.stringify(this.flowerData))
    },
    goNext(page, ans) {
      page = +page
      if (page === 0) {
        this.$router.push({
          path: `/quiz${page + 1}`,
          query: {
            id: page + 1,
          },
        })
      } else if (page > 0 && page < 5) {
        this.setFlower(page, ans)
        this.$router.push({
          path: `/quiz${page + 1}`,
          query: {
            id: page + 1,
          },
        })
      } else if (page === 5) {
        this.setFlower(page, ans)
        this.$router.push({
          name: 'Message',
        })
      }
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
</style>
