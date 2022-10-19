<template>
  <div class="content-head">
    <div class="progress-bar"
         v-if="curPage>0">
      <span :class="{active:i==curPage}"
            :style="`left:${(i-1)*25}%`"
            v-for="i in testNum"
            :key="i"></span>
    </div>
    <h2>{{testData[curPage].question}}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'QuizHead',
  props: ['curPage'],
  data() {
    return {
      testNum: 5,
    }
  },
  computed: {
    ...mapState(['testData']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.progress-bar {
  position: relative;
  margin: 20px auto;
  width: 144px;
  height: 4px;
  border-radius: 10px;
  background-color: #aaa;
  span {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 13px;
    height: 13px;
    display: inline-block;
    background-color: #fff;
    border: 1px solid #1972f8;
    border-radius: 50%;
    &.active {
      background-color: #1972f8;
      width: 19px;
      height: 19px;
    }
  }
}
</style>
