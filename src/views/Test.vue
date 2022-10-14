<template>
  <section class="main-block">
    <div class="choose main-area">
      <div class="container">
        <div class="content-head">
          <span class="scroll-bar"></span>
          <h2>{{testData[curTest-1].title}}
          </h2>
          <p>{{testData[curTest-1].question}}</p>
        </div>
        <ul class="content-body">
          <li v-for="(i,idx) in testData[curTest-1].answers"
              :key="idx"
              @click="nextTest">{{i.ans}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      curTest: 1,
      testData: [
        {
          id: 0,
          title: 'Q1',
          question: '問題一數位發展部作為培養全民數位韌性的？',
          answers: [
            {
              ans: '答案A',
              isCorrect: true,
            },
            {
              ans: '答案B',
              isCorrect: false,
            },
            {
              ans: '答案C',
              isCorrect: false,
            },
            {
              ans: '答案D',
              isCorrect: false,
            },
          ],
          flowers: [
            // 正確的話隨機回傳 0~2  Math.floor(Math.random()*3)
            {
              id: 0,
              imgUrl: '1',
            },
            {
              id: 1,
              imgUrl: '2',
            },
            {
              id: 2,
              imgUrl: '3',
            },
            {
              id: 3,
              imgUrl: '4',
            },
          ],
        },
        {
          id: 1,
          title: 'Q2',
          question: '問題二數位發展部作為培養全民數位韌性的？',
          answers: [
            {
              ans: '答案A',
              isCorrect: true,
            },
            {
              ans: '答案B',
              isCorrect: false,
            },
            {
              ans: '答案C',
              isCorrect: false,
            },
            {
              ans: '答案D',
              isCorrect: false,
            },
          ],
          flowers: [
            // 正確的話隨機回傳 0~2  Math.floor(Math.random()*3)
            {
              id: 0,
              imgUrl: '1',
            },
            {
              id: 1,
              imgUrl: '2',
            },
            {
              id: 2,
              imgUrl: '3',
            },
            {
              id: 3,
              imgUrl: '4',
            },
          ],
        },
        {
          id: 2,
          title: 'Q3',
          question: '問題三數位發展部作為培養全民數位韌性的？',
          answers: [
            {
              ans: '答案A',
              isCorrect: true,
            },
            {
              ans: '答案B',
              isCorrect: false,
            },
            {
              ans: '答案C',
              isCorrect: false,
            },
            {
              ans: '答案D',
              isCorrect: false,
            },
          ],
          flowers: [
            // 正確的話隨機回傳 0~2  Math.floor(Math.random()*3)
            {
              id: 0,
              imgUrl: '1',
            },
            {
              id: 1,
              imgUrl: '2',
            },
            {
              id: 2,
              imgUrl: '3',
            },
            {
              id: 3,
              imgUrl: '4',
            },
          ],
        },
        {
          id: 3,
          title: 'Q4',
          question: '問題四數位發展部作為培養全民數位韌性的？',
          answers: [
            {
              ans: '答案A',
              isCorrect: true,
            },
            {
              ans: '答案B',
              isCorrect: false,
            },
            {
              ans: '答案C',
              isCorrect: false,
            },
            {
              ans: '答案D',
              isCorrect: false,
            },
          ],
          flowers: [
            // 正確的話隨機回傳 0~2  Math.floor(Math.random()*3)
            {
              id: 0,
              imgUrl: '1',
            },
            {
              id: 1,
              imgUrl: '2',
            },
            {
              id: 2,
              imgUrl: '3',
            },
            {
              id: 3,
              imgUrl: '4',
            },
          ],
        },
        {
          id: 4,
          title: 'Q5',
          question: '問題五數位發展部作為培養全民數位韌性的？',
          answers: [
            {
              ans: '答案A',
              isCorrect: true,
            },
            {
              ans: '答案B',
              isCorrect: false,
            },
            {
              ans: '答案C',
              isCorrect: false,
            },
            {
              ans: '答案D',
              isCorrect: false,
            },
          ],
          flowers: [
            // 正確的話隨機回傳 0~2  Math.floor(Math.random()*3)
            {
              id: 0,
              imgUrl: '1',
            },
            {
              id: 1,
              imgUrl: '2',
            },
            {
              id: 2,
              imgUrl: '3',
            },
            {
              id: 3,
              imgUrl: '4',
            },
          ],
        },
      ],
    }
  },
  methods: {
    nextTest() {
      if (this.curTest === 5) {
        this.$router.push({
          name: 'Result',
        })
      } else {
        this.curTest += 1
      }
    },
  },
}
</script>
<style lang="scss">
</style>
