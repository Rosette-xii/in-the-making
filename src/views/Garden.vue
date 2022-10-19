<template>
  <section class="main"
           ref="main">
    <div id="world"
         ref="world"></div>
    <div class="main-area">
      <div class="container">
        <div class="content-head">
          <h2>{{name}}</h2>
          <h3>{{message}}</h3>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import * as Matter from 'matter-js'
import { listData, totalData } from '../api/in-the-making.js'
export default {
  name: 'Garden',
  data() {
    return {
      flowerData: {},
      imgList: [
        {
          imgUrl: require('@/assets/images/temp-flower-head/flower1.png'),
          w: 215,
          h: 215,
          name: 'name1',
          message: 'message1',
        },
        {
          imgUrl: require('@/assets/images/temp-flower-head/flower2.png'),
          w: 215,
          h: 215,
          name: 'name2',
          message: 'message2',
        },
        {
          imgUrl: require('@/assets/images/temp-flower-head/flower3.png'),
          w: 215,
          h: 215,
          name: 'name3',
          message: 'message3',
        },
        {
          imgUrl: require('@/assets/images/temp-flower-head/flower4.png'),
          w: 215,
          h: 215,
          name: 'name4',
          message: 'message4',
        },
        {
          imgUrl: require('@/assets/images/temp-flower-head/flower5.png'),
          w: 215,
          h: 215,
          name: 'name5',
          message: 'message5',
        },
        {
          imgUrl: require('@/assets/images/temp-flower-head/flower6.png'),
          w: 215,
          h: 215,
          name: 'name6',
          message: 'message6',
        },
        {
          imgUrl: require('@/assets/images/temp-flower-head/flower7.png'),
          w: 215,
          h: 215,
          name: 'name7',
          message: 'message7',
        },
        {
          imgUrl: require('@/assets/images/temp-flower-head/flower8.png'),
          w: 215,
          h: 215,
          name: 'name8',
          message: 'message8',
        },
        {
          imgUrl: require('@/assets/images/temp-flower-head/flower9.png'),
          w: 215,
          h: 215,
          name: 'name9',
          message: 'message9',
        },
        {
          imgUrl: require('@/assets/images/temp-flower-head/flower10.png'),
          w: 215,
          h: 215,
          name: 'name10',
          message: 'message10',
        },
      ],
      name: '',
      message: '',
      totalNum: 0,
    }
  },
  // methods: {
  //
  // },
  mounted() {
    // 取得storage
    const flowerData = JSON.parse(localStorage.getItem('flower'))
    if (flowerData) {
      this.flowerData = flowerData
      this.name = this.flowerData.name
      this.message = this.flowerData.message
    }
    getApiData()
    async function getApiData() {
      try {
        const totalNum = await totalData()
        const allData = await listData()
        let randomArr = []
        let randomNum
        while (randomArr.length < 9) {
          randomNum = Math.floor(Math.random() * (totalNum.data - 2)) + 1
          if (randomArr.indexOf(randomNum) === -1) {
            randomArr.push(randomNum)
          }
        }
        let randomData = []
        for (let i = 0; i < randomArr.length; i++) {
          randomData.push(allData.data[randomArr[i]])
        }
        setTimeout(() => {
          Example.sprites(randomData)
        }, 1000)
      } catch (err) {
        throw new Error(err)
      }
    }
    // 定義作用畫布範圍為 #world
    const canvas = this.$refs.world
    const mainArea = this.$refs.main
    const _this = this

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
      let width = mainArea.offsetWidth
      let height = mainArea.offsetHeight

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
      const ratio = 0.6
      // Composites.stack(x軸開始放置位置, y軸開始放置位置, grid寬, grid高,callbackFun(render物件))
      // 建立當前使用者的花
      let main = Composites.stack(0, 0, 1, 1, 0, 0, function (x, y, index) {
        // 碰撞半徑範圍 imgList[index].h * ratio * 0.9 / 2
        // Bodies.circle(x軸,y軸,radius半徑)
        return Bodies.circle(width / 2 - (215 * 0.6) / 2, index * 20, 70, {
          name: _this.flowerData.name,
          message: _this.flowerData.message,
          speed: 1,
          density: 0.0005,
          frictionAir: 0.06,
          restitution: 0.3,
          friction: 10,
          render: {
            sprite: {
              texture: _this.flowerData.myFlower,
              // 物件x軸比例
              xScale: ratio * 1.5,
              // 物件y軸比例
              yScale: ratio * 1.5,
            },
          },
        })
      })
      // 建立隨機的花
      let random = Composites.stack(width / 4, 600, 9, 1, 0, 0, function (x, y, index) {
        // Bodies.circle(x軸,y軸,radius半徑)
        //  return Bodies.circle((index % 5) * (width / 5) + Common.random(-200, 200), index * 20, (215 * ratio * 0.7) / 2,
        return Bodies.circle(width / 3, 500 + Common.random(-100, 100), 50, {
          name: randomData[arr[index]].name,
          message: randomData[arr[index]].message,
          density: 0.0005,
          frictionAir: 0.06,
          restitution: 0.3,
          friction: 10,
          render: {
            sprite: {
              // _this.randomData[arr[index]].flowerHead.url
              // _this.imgList[arr[index]].imgUrl
              texture: randomData[arr[index]].flowerHead.url,
              // 物件x軸比例
              xScale: ratio,
              // 物件y軸比例
              yScale: ratio,
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
          e.body.render.opacity = 0.5
          _this.name = e.body.name
          _this.message = e.body.message
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

    window.addEventListener('popstate', (e) => {
      console.log('上一頁')
      e.stopPropagation()
      console.log(e.target)
      console.log(e.target.navigation.canGoBack)
      console.log(e.target.navigation.canGoForward)
    })
  },
}
</script>
<style lang="scss">
@mixin pc {
  @media (min-width: 576px) {
    @content;
  }
}
#world {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  canvas {
    width: 100%;
  }
}
</style>

