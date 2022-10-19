import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testData: [
      {
        id: 0,
        name: 'Quiz',
        question: '歡迎來到數花部，選一顆種子吧 你可能可以種出...',
        answers: [
          {
            ans: '種子A',
            isCorrect: true,
          },
          {
            ans: '種子B',
            isCorrect: true,
          },
          {
            ans: '種子C',
            isCorrect: true,
          },
          {
            ans: '種子D',
            isCorrect: true,
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
        name: 'Quiz1',
        question: 'Q1：數位發展部作為培養全民數位韌性的？',
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
            imgUrl: require('@/assets/images/temp-flower-petal-1.png'),
          },
          {
            id: 1,
            imgUrl: require('@/assets/images/temp-flower-petal-2.png'),
          },
          {
            id: 2,
            imgUrl: require('@/assets/images/temp-flower-petal-3.png'),
          },
          {
            id: 3,
            imgUrl: require('@/assets/images/temp-flower-petal-false.png'),
          },
        ],
      },
      {
        id: 2,
        name: 'Quiz2',
        question: 'Q2：數位發展部作為培養全民數位韌性的？',
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
            imgUrl: require('@/assets/images/temp-flower-head-1.png'),
          },
          {
            id: 1,
            imgUrl: require('@/assets/images/temp-flower-head-2.png'),
          },
          {
            id: 2,
            imgUrl: require('@/assets/images/temp-flower-head-3.png'),
          },
          {
            id: 3,
            imgUrl: require('@/assets/images/temp-flower-head-false.png'),
          },
        ],
      },
      {
        id: 3,
        name: 'Quiz3',
        question: 'Q3：數位發展部作為培養全民數位韌性的？',
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
            imgUrl: require('@/assets/images/temp-flower-face-1.png'),
          },
          {
            id: 1,
            imgUrl: require('@/assets/images/temp-flower-face-2.png'),
          },
          {
            id: 2,
            imgUrl: require('@/assets/images/temp-flower-face-3.png'),
          },
          {
            id: 3,
            imgUrl: require('@/assets/images/temp-flower-face-false.png'),
          },
        ],
      },
      {
        id: 4,
        name: 'Quiz4',
        question: 'Q4：數位發展部作為培養全民數位韌性的？',
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
            imgUrl: require('@/assets/images/temp-flower-body-1.png'),
          },
          {
            id: 1,
            imgUrl: require('@/assets/images/temp-flower-body-2.png'),
          },
          {
            id: 2,
            imgUrl: require('@/assets/images/temp-flower-body-3.png'),
          },
          {
            id: 3,
            imgUrl: require('@/assets/images/temp-flower-body-false.png'),
          },
        ],
      },
      {
        id: 5,
        name: 'Quiz5',
        question: 'Q5：數位發展部作為培養全民數位韌性的？',
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
            imgUrl: require('@/assets/images/temp-flower-hand-1.png'),
          },
          {
            id: 1,
            imgUrl: require('@/assets/images/temp-flower-hand-2.png'),
          },
          {
            id: 2,
            imgUrl: require('@/assets/images/temp-flower-hand-3.png'),
          },
          {
            id: 3,
            imgUrl: require('@/assets/images/temp-flower-hand-false.png'),
          },
        ],
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
