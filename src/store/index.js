import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testData: [
      {
        id: 0,
        name: 'Quiz',
        question: '選擇一顆屬於自己的數位種子吧！',
        seeds: [
          // 正確的話隨機回傳 0~2  Math.floor(Math.random()*3)
          {
            id: 1,
            name: 'seed a',
            imgUrl: require('@/assets/images/seeds/seed-a.svg'),
          },
          {
            id: 2,
            name: 'seed b',
            imgUrl: require('@/assets/images/seeds/seed-b.svg'),
          },
          {
            id: 3,
            name: 'seed c',
            imgUrl: require('@/assets/images/seeds/seed-c.svg'),
          },
        ],
      },
      {
        id: 1,
        name: 'Quiz1',
        question1: '先來小試身手吧！',
        question2: '數位發展部作為培養全民',
        question3: '"數位韌性" 的...？',
        answers: [
          {
            ans: 'A.教練',
            isCorrect: true,
            icon: require('@/assets/images/others/correct.svg')
          },
          {
            ans: 'B.馴獸師',
            isCorrect: false,
            icon: require('@/assets/images/others/wrong.svg')
          },
          {
            ans: 'C.小蝴蝶',
            isCorrect: false,
            icon: require('@/assets/images/others/wrong.svg')
          },
          {
            ans: 'D.老師',
            isCorrect: false,
            icon: require('@/assets/images/others/wrong.svg')
          },
        ],
        flowers: [
          // 正確的話隨機回傳 0~2  Math.floor(Math.random()*3)
          {
            id: 1,
            imgUrl: require('@/assets/images/flowers/egg-leaf-left.png'),
          },
          {
            id: 2,
            imgUrl: require('@/assets/images/flowers/mushroom-leaf-left.png'),
          },
          {
            id: 3,
            imgUrl: require('@/assets/images/flowers/planet-leaf-left.png'),
          },
          {
            id: 4,
            imgUrl: require('@/assets/images/flowers/computer-leaf-left.png'),
          },
        ]
      },
      {
        id: 2,
        name: 'Quiz2',
        question1: '哪項不是數位發展部建構全民',
        question2: '"數位韌性"的推動面向？',
        answers: [
          {
            ans: 'A.社會發展',
            isCorrect: false,
            icon: require('@/assets/images/others/wrong.svg')
          },
          {
            ans: 'B.產業數位轉型',
            isCorrect: false,
            icon: require('@/assets/images/others/wrong.svg')
          },
          {
            ans: 'C.資安應變',
            isCorrect: false,
            icon: require('@/assets/images/others/wrong.svg')
          },
          {
            ans: 'D.腦波控制',
            isCorrect: true,
            icon: require('@/assets/images/others/correct.svg')
          },
        ],
        flowers: [
          // 正確的話隨機回傳 0~2  Math.floor(Math.random()*3)
          {
            id: 1,
            imgUrl: require('@/assets/images/flowers/egg-leaf-right.png'),
          },
          {
            id: 2,
            imgUrl: require('@/assets/images/flowers/mushroom-leaf-right.png'),
          },
          {
            id: 3,
            imgUrl: require('@/assets/images/flowers/planet-leaf-right.png'),
          },
          {
            id: 4,
            imgUrl: require('@/assets/images/flowers/computer-leaf-right.png'),
          },
        ],
      },
      {
        id: 3,
        name: 'Quiz3',
        question1: '哪項是從數位民主出發',
        question2: '解決疫情問題的案例？',
        answers: [
          {
            ans: 'A.口罩地圖',
            isCorrect: true,
            icon: require('@/assets/images/others/correct.svg')
          },
          {
            ans: 'B.萌典',
            isCorrect: false,
            icon: require('@/assets/images/others/wrong.svg')
          },
          {
            ans: 'C.即時空氣品質指標',
            isCorrect: false,
            icon: require('@/assets/images/others/wrong.svg')
          },
          {
            ans: 'D.提點子',
            isCorrect: false,
            icon: require('@/assets/images/others/wrong.svg')
          },
        ],
        flowers: [
          // 正確的話隨機回傳 0~2  Math.floor(Math.random()*3)
          {
            id: 1,
            imgUrl: require('@/assets/images/flowers/egg-body.png'),
          },
          {
            id: 2,
            imgUrl: require('@/assets/images/flowers/mushroom-body.png'),
          },
          {
            id: 3,
            imgUrl: require('@/assets/images/flowers/planet-body.png'),
          },
          {
            id: 4,
            imgUrl: require('@/assets/images/flowers/computer-body.png'),
          },
        ],
      },
      {
        id: 4,
        name: 'Quiz4',
        question1: 'moda 名稱由來',
        question2: '是因為數位發展部期許自己成為',
        question3: '臺灣數位發展過程中的什麼物件？',
        answers: [
          {
            ans: 'A.馬力',
            isCorrect: false,
            icon: require('@/assets/images/others/wrong.svg')
          },
          {
            ans: 'B.動力',
            isCorrect: false,
            icon: require('@/assets/images/others/wrong.svg')
          },
          {
            ans: 'C.馬達',
            isCorrect: true,
            icon: require('@/assets/images/others/correct.svg')
          },
          {
            ans: 'D.瑪利歐',
            isCorrect: false,
            icon: require('@/assets/images/others/wrong.svg')
          },
        ],
        flowers: [
          // 正確的話隨機回傳 0~2  Math.floor(Math.random()*3)
          {
            id: 1,
            name: '花仙子',
            imgUrl: require('@/assets/images/flowers/egg-petal.png'),
          },
          {
            id: 2,
            name: 'chill 蘑菇',
            imgUrl: require('@/assets/images/flowers/mushroom-petal.png'),
          },
          {
            id: 3,
            name: '喵星球',
            imgUrl: require('@/assets/images/flowers/planet-petal.png'),
          },
          {
            id: 4,
            name: '知識+花',
            imgUrl: require('@/assets/images/flowers/computer-petal.png'),
          },
        ],
      },
      {
        id: 5,
        name: 'Quiz5',
        question1: '數位世界裡，每個人都是資料的',
        question2: '使用者，同時也是？',
        answers: [
          {
            ans: 'A.超級勇者',
            isCorrect: false,
            icon: require('@/assets/images/others/wrong.svg')
          },
          {
            ans: 'B.灌溉者',
            isCorrect: false,
            icon: require('@/assets/images/others/wrong.svg')
          },
          {
            ans: 'C.創造者',
            isCorrect: true,
            icon: require('@/assets/images/others/correct.svg')
          },
          {
            ans: 'D.初學者',
            isCorrect: false,
            icon: require('@/assets/images/others/wrong.svg')
          },
        ],
        flowers: [
          // 正確的話隨機回傳 0~2  Math.floor(Math.random()*3)
          {
            id: 1,
            name: '未來',
            imgUrl: require('@/assets/images/flowers/egg-face.png'),
          },
          {
            id: 2,
            name: '迷幻',
            imgUrl: require('@/assets/images/flowers/mushroom-face.png'),
          },
          {
            id: 3,
            name: '數位',
            imgUrl: require('@/assets/images/flowers/planet-face.png'),
          },
          {
            id: 4,
            name: '超前',
            imgUrl: require('@/assets/images/flowers/computer-face.png'),
          },
        ],
      },
    ],
    flowerLanguage: [
      {
        id: 1,
        name: '數位喵星球',
        language1: '數位世界中不可或缺的貓咪～',
        language2: '喵喵',
        exhibits: {
          title: '智慧平安符',
          introduction: '就讓數位科技守護重要的人們！',
        },
      },
      {
        id: 2,
        name: '數位chill 蘑菇',
        language1: '數位中迷幻的一朵存在',
        language2: '（甚至是蘑菇不是花）',
        exhibits: {
          title: 'AI-LOHAS 樂齡智造健身房',
          introduction: '不分年齡用數位科技chill動起來！',
        },
      },
      {
        id: 3,
        name: '數位花仙子',
        language1: '在數位世界',
        language2: '尋找愛的花仙子',
        exhibits: {
          title: 'AI精準健康共照服務',
          introduction: '讓數位科技做您的健康諮詢師！',
        },
      },
      {
        id: 4,
        name: '數位知識+花',
        language1: '需要更多',
        language2: '數位知識力+++的數位花！',
        exhibits: {
          title: 'VR新視野. 我的元宇宙',
          introduction: '虛實共融的元宇宙世界，等你來探索',
        },
      },
      {
        id: 5,
        name: '迷幻chill 蘑菇',
        language1: '自己創造迷幻宇宙的',
        language2: '超chill蘑菇花',
        exhibits: {
          title: 'VR BOX 射擊競賽',
          introduction: '用VR迷走在射擊遊戲的世界裡！',
        },
      },
      {
        id: 6,
        name: '迷幻喵星球',
        language1: '迷幻貓咪宇宙中的',
        language2: '貓貓星人',
        exhibits: {
          title: '2022虛擬人黑客松創作大賽',
          introduction: '跟VTuber來場虛實交錯的迷幻互動',
        },
      },
      {
        id: 7,
        name: '迷幻花仙子',
        language1: '在迷幻的數位世界中',
        language2: '充滿愛的花仙子',
        exhibits: {
          title: '虛擬製作內容拍攝實驗室',
          introduction: '科技讓迷幻的現實變得超真實了呢',
        },
      },
      {
        id: 8,
        name: '迷幻知識+花',
        language1: '迷幻但需要',
        language2: '數位知識力+++的花！',
        exhibits: {
          title: 'NFT包廂',
          introduction: 'NFT 知識一次看懂，不再迷失喔',
        },
      },
      {
        id: 9,
        name: '未來花仙子',
        language1: '希望未來世界',
        language2: '充滿著愛的花仙子',
        exhibits: {
          title: 'PARALAND 區塊鏈遊戲',
          introduction: '透過地圖定位，讓互動遊戲變得超有溫度',
        },
      },
      {
        id: 10,
        name: '未來喵星球',
        language1: '在未來可能',
        language2: '統治星球的喵咪花',
        exhibits: {
          title: '智慧AED',
          introduction: '了解智慧AED，未來救人不GG',
        },
      },
      {
        id: 11,
        name: '未來chill 蘑菇',
        language1: '數位世界裡',
        language2: '對未來充滿迷幻想像的蘑菇花',
        exhibits: {
          title: '虛擬直播攝影棚',
          introduction: '沈浸式的新體驗，學習變得好好玩',
        },
      },
      {
        id: 12,
        name: '未來知識+花',
        language1: '在數位裡創造未來',
        language2: '但需要數位知識力+++的花！',
        exhibits: {
          title: '遠距離實驗室',
          introduction: '物聯網大應用，創造兩點之前最短距離',
        },
      },
      {
        id: 13,
        name: '超前知識+花',
        language1: '走在最前面',
        language2: '但需要數位知識力+++的花！',
        exhibits: {
          title: 'AI智慧小車趴趴走',
          introduction: 'AI Ｘ STEAM 提升學習創造力',
        },
      },
      {
        id: 14,
        name: '超前喵星球',
        language1: '不管世界怎麼變化',
        language2: '都做自己的喵咪花',
        exhibits: {
          title: '科技淨海',
          introduction: '讓海洋透過循環系統回歸美好吧！',
        },
      },
      {
        id: 15,
        name: '超前chill 蘑菇',
        language1: '走在最前面',
        language2: '因為你超chill的蘑菇花',
        exhibits: {
          title: 'SmartBoard智慧平衡板',
          introduction: '專注遊戲的同時，也把肌肉練起來啦',
        },
      },
      {
        id: 16,
        name: '超前花仙子',
        language1: '永遠超前',
        language2: '但保持愛的初心的花仙子',
        exhibits: {
          title: '以樹養球計畫',
          introduction: '透過造林計畫，一起替未來種樹吧！',
        },
      },
    ],
    flowerData: {
      flower: [],
      name: '',
      message: '',
      myFlower: '',
      eFlowerUrl: '',
      exhibits: {}
    },
    isStart: false,
    isLoading: false
  },
  mutations: {
    START(state) {
      state.isStart = true
    },
    PUSH_FLOWER(state, val) {
      state.flowerData.flower.push(state.testData[val].flowers[Math.floor(Math.random() * 3)])
    },
    PUSH_FALSE(state, val) {
      state.flowerData.flower.push(state.testData[val].flowers[3])
    },
    ADD_MESSAGE(state, val) {
      state.flowerData.name = val
    },
    PUSH_MY_FLOWER_HEAD(state, val) {
      state.flowerData.myFlower = val
    },
    PUSH_MY_E_FLOWER(state, val) {
      state.flowerData.eFlowerUrl = val
    },
    PUSH_EXHIBITS(state, val) {
      state.flowerData.exhibits = val
    },
    REPLAY(state) {
      state.flowerData = {
        flower: [],
        name: '',
        message: '',
        myFlower: '',
        eFlowerUrl: '',
        exhibits: {}
      }
    },
    LOADING(state, val) {
      state.isLoading = val
    }
  },
  actions: {
  },
  getters: {
    flowerName(state) {
      return state.flowerData.flower[4].name + state.flowerData.flower[3].name
    }
  },
  modules: {
  }
})
