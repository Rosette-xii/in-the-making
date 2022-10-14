<template>
  <section class="main-block">
    <div class="result main-area">
      <div class="container">
        <div class="content-head">
          <span class="scroll-bar"></span>
          <h2>你的 e-flower</h2>
          <p>一朵正在盛開中的</p>
          <p>“謎之笑茉莉”</p>
        </div>
        <div class="content-body">
          <!-- <div class="flower">
            <span class="flower-1"></span>
            <span class="flower-2"></span>
            <span class="flower-3"></span>
            <span class="flower-4"></span>
            <span class="flower-5"></span>
          </div> -->
          <canvas ref="flower"
                  width="315"
                  height="375"></canvas>
        </div>
        <div class="content-foot">
          <button class="btn result-btn">把你的花種在 moda garden 裡吧！</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      flowerObj: [],
      scale: 0.5,
      imgArr: [],
    }
    // flowerObj: [
    //   {
    //     name: null,
    //     imgSrc: require('../assets/images/temp-flower-head.png'),
    //     x: 0,
    //     y: 0,
    //   },
    //   {
    //     name: null,
    //     imgSrc: require('../assets/images/temp-flower-petal.png'),
    //     x: 10,
    //     y: 10,
    //   },
    //   {
    //     name: null,
    //     imgSrc: require('../assets/images/temp-flower-face.png'),
    //     x: 20,
    //     y: 20,
    //   },
    //   {
    //     name: null,
    //     imgSrc: require('../assets/images/temp-flower-body.png'),
    //     x: 30,
    //     y: 30,
    //   },
    //   {
    //     name: null,
    //     imgSrc: require('../assets/images/temp-flower-hand.png'),
    //     x: 40,
    //     y: 40,
    //   },
    // ]
  },
  methods: {
    // loadImg(img) {
    //   console.log(img)
    //   return new Promise((resolve, reject) => {
    //     if (img !== '') {
    //       resolve(img)
    //     } else {
    //       reject(new Error('失敗'))
    //     }
    //   })
    // },
    // async drawFlower(ctx, obj, x, y, width, height) {
    //   const res = await this.loadImg(obj.part)
    //   ctx.drawImage(res, x, y, width, height)
    // },
    drawFlower(ctx) {
      this.flowerObj.forEach((obj) => {
        // obj.part.onl
        //   await ctx.doad = async () => {
        //   console.log(obj.part
        // }
        console.log(obj.part)
        ctx.drawImage(obj.part, obj.x, obj.y, obj.width * this.scale, obj.height * this.scale)
      })
      // let load = false;
      // let id = 0;
      // while(id <= 4) {
      //   this.flowerObj.find(f => f.id === id).part.src = obj.imgSrc
      //   obj.part.onload = async () => {
      //     console.log(obj.part.src = obj.imgSrc)
      //     await ctx.drawImage(obj.part, obj.x, obj.y, obj.width * this.scale, obj.height * this.scale)
      //   }
      // }
      console.log(ctx)
    },
  },
  mounted() {
    const flowerCvs = this.$refs.flower
    const ctx = flowerCvs.getContext('2d')
    const cvsWidth = flowerCvs.width
    this.scale = 0.5
    const flowerHead = new Image()
    flowerHead.src = require('../assets/images/temp-flower-head.png')
    const flowerPetal = new Image()
    flowerPetal.src == require('../assets/images/temp-flower-petal.png')
    const flowerFace = new Image()
    flowerFace.src = require('../assets/images/temp-flower-face.png')
    const flowerBody = new Image()
    flowerBody.src = require('../assets/images/temp-flower-body.png')
    const flowerHand = new Image()
    flowerHand.src = require('../assets/images/temp-flower-hand.png')
    this.flowerObj = [
      {
        id: 0,
        part: flowerBody,
        x: cvsWidth / 2 - 127 * 0.5 * this.scale,
        y: 90,
        width: 127,
        height: 555,
      },
      {
        id: 1,
        part: flowerHand,
        x: cvsWidth / 2 - 301 * 0.5 * this.scale,
        y: 170,
        width: 301,
        height: 235,
      },
      {
        id: 2,
        part: flowerPetal,
        x: cvsWidth / 2 - 357 * 0.5 * this.scale,
        y: 15,
        width: 357,
        height: 347,
      },
      {
        id: 3,
        part: flowerHead,
        x: cvsWidth / 2 - 211 * 0.5 * this.scale,
        y: 50,
        width: 211,
        height: 211,
      },
      {
        id: 4,
        part: flowerFace,
        x: cvsWidth / 2 - 107 * 0.5 * this.scale,
        y: 85,
        width: 107,
        height: 98,
      },
    ]
    this.$nextTick(() => {
      this.drawFlower(ctx)
    })
  },
}
</script>
<style lang="scss">
.flower {
  position: relative;
}
span {
  display: inline-block;
}
.result-btn {
  width: 100%;
  padding: 8px;
  border-radius: 20px;
}
</style>