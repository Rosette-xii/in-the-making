<template>
  <section class="main garden">
    <Loading v-if="$store.state.isLoading" />
    <div class="container">
      <div v-show="!showFlower">
        <div class="content-head border-2">
          <button class="check-flower-btn border-2"
                  @click="showMyFlower">
            <img src="../assets/images/others/mini-flower.svg"
                 alt="check e-flower">查看 e-flower
          </button>
          <button class="replay-btn"
                  @click="replay">
            <img src="../assets/images/others/replay.svg"
                 alt="check e-flower">重新測驗
          </button>
        </div>
        <div class="content-body border-2"
             ref="contentBody">
          <div class="info">
            <div class="marquee">
              <marquee-text :duration="20">
                <strong>數位發展部：</strong>點擊看看大家是什麼花，以及適合到展場汲取什麼樣的數位養分呢！11/10 - 11/13 到世貿中心一館資訊月瞭解更多。
              </marquee-text>
            </div>
            <div class="user-info"
                 v-show="showMessage">
              <div class="user-img">
                <img :src="flowerUrl"
                     alt="my e-flower">
              </div>
              <div class="user-message">
                <h2>{{name}}</h2>
                <p>推薦你的 IN THE MAKING 展品：</p>
                <p><span>{{title}}</span>，{{introduction}}</p>
                <button class="close-btn"
                        @click="showMessage=false">
                  <img src="../assets/images/others/close-black.svg"
                       alt="close message">
                </button>
              </div>
            </div>
          </div>
          <div id="world"
               ref="world"></div>
        </div>
      </div>
      <div class="eFlower"
           v-show="showFlower">
        <div class="content-head border-2">
          你的專屬 e-flower
          <button class="close-btn"
                  @click="showFlower = false">
            <img src="../assets/images/others/close-purple.svg"
                 alt="check e-flower">
          </button>
        </div>
        <div class="content-body border-2">
          <img :src="this.flowerData.eFlowerUrl"
               alt="你的專屬e-flower">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Loading from '@/components/Loading'
import MarqueeText from 'vue-marquee-text-component'
import * as Matter from 'matter-js'
import { listData } from '../api/in-the-making.js'
export default {
  name: 'Garden',
  components: {
    MarqueeText,
    Loading,
  },
  data() {
    return {
      flowerData: {},
      name: '',
      title: '',
      introduction: '',
      flowerUrl: '',
      totalNum: 0,
      showMessage: false,
      showFlower: false,
      famousNum: 10,
    }
  },
  methods: {
    showMyFlower() {
      this.showMessage = false
      this.showFlower = true
    },
    goResult() {
      this.$router.replace({
        name: 'Result',
      })
    },
    replay() {
      this.$store.commit('REPLAY')
      this.$router.replace({
        name: 'Home',
      })
    },
  },
  mounted() {
    this.$store.commit('LOADING', true)
    const _this = this
    function getApiData() {
      let axiosParams = new URLSearchParams()
      axiosParams.append('_sort', 'id')
      let params = {
        params: axiosParams,
      }
      listData(params)
        .then((res) => {
          let allData = res.data
          let randomIdx = []
          let randomNum
          while (randomIdx.length < 9) {
            randomNum = Math.floor(Math.random() * (allData.length - 1))
            if (randomIdx.indexOf(randomNum) === -1) {
              randomIdx.push(randomNum)
            }
          }
          let randomData = []
          let addNum = 0
          for (let i = 0; i < randomIdx.length; i++) {
            randomData.push(allData[randomIdx[i]])
            addNum += 1
          }
          if (addNum === 9) {
            _this.$store.commit('LOADING', false)
            Example.sprites(randomData)
          }
        })
        .catch((err) => console.log(err))
    }
    getApiData()

    this.flowerData = this.$store.state.flowerData
    // 定義作用畫布範圍為 #world
    const canvas = this.$refs.world
    const mainArea = this.$refs.contentBody

    // matter js
    let Example = {}

    Example.sprites = function (randomData) {
      let Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Composite = Matter.Composite,
        Bodies = Matter.Bodies,
        Events = Matter.Events
      // create engine
      let engine = Engine.create(),
        world = engine.world

      // 設定畫布寬、高 = 視窗的寬、高
      let width = mainArea.offsetWidth - 5
      let height = 420
      // create renderer
      let render = Render.create({
        // render 範圍為 canvas
        element: canvas,
        engine: engine,
        options: {
          // 範圍寬、高為剛指定的寬、高
          width: width,
          height: height,
          showAngleIndicator: false,
          wireframes: false,
          // 背景為透明(預設為黑色)
          background: 'transparent',
        },
      })

      // 當畫面縮放時，動態更新畫布的寬、高
      // window.addEventListener('resize', function () {
      //   canvas.width = window.innerWidth
      //   canvas.height = window.innerHeight
      // })

      Render.run(render)

      // create runner
      let runner = Runner.create()
      Runner.run(runner, engine)

      // 牆壁顏色
      const borderColor = 'transparent'

      // add bodies
      let offset = 10,
        options = {
          isStatic: true,
          render: { fillStyle: borderColor },
        }

      world.bodies = []

      // these static walls will not be rendered in this sprites example, see options
      // 建立牆壁
      Composite.add(world, [Bodies.rectangle(width / 2, -offset, width + 0.5 + 2 * offset, 50.5, options), Bodies.rectangle(width / 2, height + offset, width + 0.5 + 2 * offset, 50.5, options), Bodies.rectangle(width + offset, height / 2, 50.5, height + 0.5 + 2 * offset, options), Bodies.rectangle(-offset, height / 2, 50.5, height + 0.5 + 2 * offset, options)])

      // 建立隨機 render 數據 array
      let arr = []
      let str = ''
      for (let i = 0; i < 9; i++) {
        str = Math.floor(Math.random() * 9)
        arr.find((j) => j == str) === undefined ? arr.push(str) : i--
      }
      const ratio = 0.5
      // Composites.stack(x軸開始放置位置, y軸開始放置位置, grid寬, grid高,callbackFun(render物件))
      // 建立當前使用者的花
      let main = Composites.stack(0, 0, 1, 1, 0, 0, function (x, y, index) {
        // 碰撞半徑範圍 imgList[index].h * ratio * 0.9 / 2
        // Bodies.circle(x軸,y軸,radius半徑)
        return Bodies.circle(width / 2 - (219 * ratio) / 2, index * 20, (219 / 2) * ratio, {
          name: _this.flowerData.name,
          title: _this.flowerData.exhibits.title,
          introduction: _this.flowerData.exhibits.introduction,
          flowerUrl: _this.flowerData.myFlower,
          speed: 1,
          density: 0.0005,
          frictionAir: 0.06,
          restitution: 0.3,
          friction: 10,
          render: {
            sprite: {
              texture: _this.flowerData.myFlower,
              // 物件x軸比例
              xScale: 1.2 * ratio,
              // 物件y軸比例
              yScale: 1.2 * ratio,
            },
          },
        })
      })
      // 建立隨機的花
      let random = Composites.stack(width / 4, height - 25.25 - 5 * 40, 9, 1, 0, 0, function (x, y, index) {
        // Bodies.circle(x軸,y軸,radius半徑)
        return Bodies.circle(width / 4, height - 25.25 - 5 * 60 + Common.random(-100, 100), 35, {
          name: randomData[arr[index]].name,
          title: randomData[arr[index]].title,
          introduction: randomData[arr[index]].introduction,
          flowerUrl: randomData[arr[index]].flowerHead.url,
          density: 0.0005,
          frictionAir: 0.06,
          restitution: 0.3,
          friction: 10,
          render: {
            sprite: {
              texture: randomData[arr[index]].flowerHead.url,
              // 物件x軸比例
              xScale: ratio * 0.9,
              // 物件y軸比例
              yScale: ratio * 0.9,
            },
          },
        })
      })

      Composite.add(world, random)
      setTimeout(() => {
        Composite.add(world, main)
      }, 500)

      // add mouse control
      let mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: {
              visible: false,
            },
          },
        })
      Composite.add(world, mouseConstraint)
      Events.on(mouseConstraint, 'startdrag', function (e) {
        if (e.body) {
          if (!e.body.name) {
            _this.showMessage = false
          } else {
            _this.showMessage = true
            e.body.render.opacity = 0.5
            _this.name = e.body.name
            _this.title = e.body.title
            _this.introduction = e.body.introduction
            _this.flowerUrl = e.body.flowerUrl
          }
        }
      })
      Events.on(mouseConstraint, 'enddrag', function (e) {
        if (e.body) {
          e.body.render.opacity = 1
        }
      })

      // keep the mouse in sync with rendering
      render.mouse = mouse

      // fit the render viewport to the scene
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: width, y: height },
      })

      // context for MatterTools.Demo
      return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function () {
          Matter.Render.stop(render)
          Matter.Runner.stop(runner)
        },
      }
    }
    Example.sprites.title = 'Sprites'
    Example.sprites.for = '>=0.14.2'
  },
}
</script>
<style lang="scss">
@import '@/assets/style/_mixin.scss';
@import '@/assets/style/_variable.scss';
#world {
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  canvas {
    z-index: 1;
    width: 100%;
  }
}
.garden {
  &.main {
    position: relative;
    @include pc {
      display: flex;
      align-items: center;
    }
  }
  .container {
    padding: 15px;
  }
  .content-head {
    position: relative;
    display: flex;
    padding: 8px;
    justify-content: space-between;
    background-color: $purple;
    color: #fff;
  }
  button img {
    margin-right: 6px;
  }
  .check-flower-btn {
    display: flex;
    padding: 5px 16px;
    background-color: #ffe1cd;
    color: #000;
    border-radius: 100px;
    font-weight: bold;
  }
  .replay-btn {
    padding: 5px;
    background-color: transparent;
    border: none;
    font-weight: bold;
  }
  .content-body {
    position: relative;
    margin-top: -2px;
    max-width: 384px;
    height: 560px;
    background-image: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('../assets/images/others/square-bg.svg');
    background-size: 105%;
    overflow: hidden;
    @include pc {
      width: 341px;
    }
  }
  .info {
    z-index: 20;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .marquee {
    padding: 10px 15px;
    background-color: #fff;
    border-bottom: 2px solid #000;
  }
  .user-info {
    z-index: 5;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    padding: 10px 15px;
    background-color: #ffec4c;
    border-bottom: 2px solid #000;
    text-align: left;
  }
  .user-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background-color: #fff;
    border: 2px solid #000;
      border-radius: 50%;
    img {
      width: 80%;
    }
  }
  .user-message {
    position: relative;
    overflow: hidden;
    h2 {
      padding-bottom: 4px;
    }
    p {
      font-size: 12px;
      line-height: 1.5;
      letter-spacing: 0;
    }
    span {
      color: $dark-purple;
      font-size: 12px;
      font-weight: bold;
    }
    .close-btn {
      right: -13px;
      top: 13px;
    }
  }
}
.eFlower {
  z-index: 10;
  .content-head {
    position: relative;
    display: block;
    padding: 0;
    background-color: #ffec4c;
    color: $purple;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    line-height: 50px;
  }
  .content-body {
    display: flex;
    align-items: center;
    height: auto;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
    transform: scale(1.02);
  }
}
.close-btn {
  position: absolute;
  right: 5px;
  top: 50%;
  padding: 8px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
}
</style>

