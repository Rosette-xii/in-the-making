<template>
  <section class="main">
    <Loading v-if="isLoading" />
    <div class="container seed"
         v-if="curPage===0">
      <div class="content-head border-2">
        <h2>{{testData[curPage].question}}</h2>
      </div>
      <ul class="content-body border-2">
        <li v-for="(i,idx) in testData[curPage].seeds"
            :key="idx"
            @click="checkAns(curPage,i,$event)"><img :src="i.imgUrl"
               :alt="i.name"></li>
      </ul>
    </div>
    <div class="container quizes"
         v-else>
      <div class="content-head border-2">
        <h2>Q{{curPage}}</h2>
      </div>
      <div class="content-body border-2">
        <h3>{{testData[curPage].question1}}</h3>
        <h3>{{testData[curPage].question2}}</h3>
        <h3 v-if="testData[curPage].question3">{{testData[curPage].question3}}</h3>
        <ul>
          <li :data-ans="i.isCorrect"
              class="border-1"
              :class="{correct:showAns&&i.isCorrect}"
              v-for="(i,idx) in testData[curPage].answers"
              :key="idx"
              @click="checkAns(curPage,i,$event)">
            <span>{{i.ans}}
              <img v-show="showAns&&i.isCorrect"
                   class="icon"
                   :src="i.icon"
                   alt="icon">
            </span>
          </li>
        </ul>
        <div class="flower-status">
          <img :src="flowerStatusUrl(curPage)"
               :alt="`Quiz${curPage}`">
        </div>
        <div class="progress-bar">
          <span :class="{active:i==curPage}"
                :style="`left:${10+(i-1)*20}%`"
                v-for="i in testNum"
                :key="i"></span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex'
import Loading from '@/components/Loading'
export default {
  data() {
    return {
      testNum: 5,
      seedSelected: false,
      flower_status: [
        {
          imgUrl: require('@/assets/images/flower-status/flower-status-1.svg'),
        },
        {
          imgUrl: require('@/assets/images/flower-status/flower-status-2.svg'),
        },
        {
          imgUrl: require('@/assets/images/flower-status/flower-status-3.svg'),
        },
        {
          imgUrl: require('@/assets/images/flower-status/flower-status-4.svg'),
        },
        {
          imgUrl: require('@/assets/images/flower-status/flower-status-5.svg'),
        },
      ],
      showAns: false,
      isLoading: true,
    }
  },
  components: { Loading },
  methods: {
    setFlower(page, ans) {
      if (page > 0) {
        if (ans.isCorrect) {
          this.$store.commit('PUSH_FLOWER', page)
        } else {
          this.$store.commit('PUSH_FALSE', page)
        }
      }
    },
    goNext(curPage) {
      if (curPage < 5) {
        this.$router.replace({
          query: {
            id: curPage + 1,
          },
        })
      } else {
        this.$router.replace({
          name: 'Message',
        })
      }
    },
    checkAns(curPage, ans, e) {
      curPage = +curPage
      if (curPage === 0 && !this.seedSelected) {
        this.seedSelected = true
        e.target.parentElement.classList.add('selected')
        setTimeout(() => {
          this.goNext(curPage)
        }, 1000)
        this.setFlower(curPage, ans)
      } else if (curPage > 0 && !this.showAns) {
        if (e.target.dataset.ans) {
          this.showAns = true
          this.setFlower(curPage, ans)
          setTimeout(() => {
            this.showAns = false
            this.goNext(curPage)
          }, 1000)
        } else if (!e.target.dataset.ans) {
          this.showAns = true
          if (e.target.nodeName === 'SPAN') {
            e.target.parentElement.classList.add('wrong')
            e.target.lastChild.style.display = 'block'
            this.setFlower(curPage, ans)
            setTimeout(() => {
              this.showAns = false
              e.target.parentElement.classList.remove('wrong')
              e.target.lastChild.style.display = 'none'
              this.goNext(curPage)
            }, 1000)
          } else {
            e.target.classList.add('wrong')
            e.target.children[0].lastChild.style.display = 'block'
            this.setFlower(curPage, ans)
            setTimeout(() => {
              this.showAns = false
              e.target.classList.remove('wrong')
              e.target.children[0].lastChild.style.display = 'none'
              this.goNext(curPage)
            }, 1000)
          }
        }
      }
    },
  },
  computed: {
    ...mapState(['testData']),
    curPage() {
      return this.$route.query.id
    },
    flowerStatusUrl() {
      return (curPage) => {
        return this.flower_status[curPage - 1].imgUrl
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 1500)
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/_mixin.scss';
@import '@/assets/style/_variable.scss';
.main {
  position: relative;
  @include pc {
    display: flex;
    align-items: center;
  }
}
.container {
  margin: 15px auto;
  @include pc {
    padding: 0;
  }
}
.seed {
  .content-body {
    background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('../assets/images/others/square-bg.svg');
    background-size: 105%;
  }
  li {
    background-color: #fff;
    &:last-child {
      margin-top: 20px;
    }
  }
  img {
    display: block;
  }
}
.content-head {
  padding: 8px;
  background-color: $purple;
  color: #fff;
  font-size: 18px;
}
.content-body {
  margin-top: -2px;
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #fff;
  li {
    cursor: pointer;
  }
}
.selected {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 95%;
    height: 96%;
    top: 0;
    left: 0;
    border: 4px solid $purple;
  }
}
.quizes {
  .content-head {
    position: relative;
    padding: 14px 0;
  }
  h2 {
    position: absolute;
    top: -24px;
    left: 15px;
    color: #bbeb29;
    font-family: 'Russo One', sans-serif;
    font-size: 40px;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
    letter-spacing: 1px;
  }
  h3 {
    font-size: 18px;
  }
  .content-body {
    padding: 20px;
    display: block;
    background-color: #ffe1cd;
    @include pc {
      width: 301px;
    }
  }
  li {
    padding: 20px 0;
    margin: 10px 0;
    background-color: #fff26d;
    font-weight: bold;
    &.correct {
      background-color: $main-color;
      color: #fff;
    }
    &.wrong {
      background-color: #b6b6b6;
    }
  }
  span {
    position: relative;
  }
  .icon {
    position: absolute;
    top: 50%;
    left: -27px;
    transform: translateY(-50%);
  }
}
.flower-status {
  transform-origin: bottom center;
  animation: flower-shaking 2s infinite;
}
@keyframes flower-shaking {
  0% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(15deg);
  }
}
.progress-bar {
  position: relative;
  margin: 8px auto;
  width: 196px;
  height: 28px;
  border-radius: 28px;
  background-color: #ffad82;
  &::before {
    content: '';
    position: absolute;
    width: 156px;
    height: 4px;
    background-color: #000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  span {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    display: inline-block;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 50%;
    &.active {
      background-color: #ff877c;
      width: 14px;
      height: 14px;
    }
  }
}
</style>

