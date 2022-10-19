<template>
  <section class="main">
    <div class="main-area">
      <div class="container">
        <div class="content-head">
          <span class="scroll-bar"></span>
          <h2>你的 e-flower</h2>
          <p>一朵正在盛開中的</p>
          <p>“謎之笑茉莉”</p>
        </div>
        <div class="content-body">
          <canvas ref="flowerAll"
                  width="315"
                  height="375"></canvas>
          <canvas class="flowerHead"
                  ref="flowerHead"
                  width="215"
                  height="215"></canvas>
        </div>
        <div class="content-foot">
          <button class="btn result-btn"
                  @click="goGarden">種花</button>
          <button class="btn result-btn"
                  ref="downloadImg"
                  @click="downloadFlower">下載圖片</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { uploadData } from '../api/in-the-making.js'
export default {
  data() {
    return {
      ratio: 0.5,
      flowerData: {},
      flowerHeadUrl: '',
      flowerAllUrl: '',
    }
  },
  methods: {
    setFlower() {
      localStorage.setItem('flower', JSON.stringify(this.flowerData))
    },
    createFlower(flowerObj, ctx) {
      flowerObj.forEach((flower) => {
        ctx.drawImage(flower.part, flower.x, flower.y, flower.width * this.ratio, flower.height * this.ratio)
      })
      const flowerAllCvs = this.$refs.flowerAll
      flowerAllCvs.toBlob((blob) => {
        this.flowerAllUrl = blob
      }, 'image/png')
    },
    downloadFlower() {
      const flowerAllCvs = this.$refs.flowerAll
      flowerAllCvs.toBlob(
        (blob) => {
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = 'flower.png'
          link.click()
          // 使用完的物件記得手動清除，不然GC不會幫你清
          URL.revokeObjectURL(url)
        },
        'image/png',
        1
      )
    },
    goGarden() {
      const formData = new FormData()
      formData.append('files.flowerHead', this.flowerHeadUrl)
      formData.append('files.flowerAll', this.flowerAllUrl)
      let obj = {
        name: this.flowerData.name,
        message: this.flowerData.message,
      }
      formData.append('data', JSON.stringify(obj))
      uploadData(formData)
        .then((response) => {
          if (response.status === 200) {
            this.$router.push({
              name: 'Garden',
            })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  mounted() {
    // 取得storage
    const flowerData = JSON.parse(localStorage.getItem('flower'))
    if (flowerData) {
      this.flowerData = flowerData
    }

    const flowerAllCvs = this.$refs.flowerAll
    const flowerHeadCvs = this.$refs.flowerHead
    // 建立畫布、畫花
    const ctx = flowerAllCvs.getContext('2d')
    const cvsWidth = flowerAllCvs.width
    let images = []
    const flowerHead = new Image()
    const flowerPetal = new Image()
    const flowerFace = new Image()
    const flowerBody = new Image()
    const flowerHand = new Image()

    images.push(flowerPetal, flowerHead, flowerFace, flowerBody, flowerHand)

    flowerPetal.src = this.flowerData.flower[0]
    flowerHead.src = this.flowerData.flower[1]
    flowerFace.src = this.flowerData.flower[2]
    flowerBody.src = this.flowerData.flower[3]
    flowerHand.src = this.flowerData.flower[4]
    images.forEach((image) => {
      image.onload = () => {
        triggerWhenImageReady()
      }
    })

    // 定位每朵花的部位
    const flowerObj = [
      {
        id: 0,
        part: flowerBody,
        x: cvsWidth / 2 - 127 * 0.5 * this.ratio,
        y: 90,
        width: 127,
        height: 555,
      },
      {
        id: 1,
        part: flowerHand,
        x: cvsWidth / 2 - (301 / 2) * this.ratio,
        y: 170,
        width: 301,
        height: 235,
      },
      {
        id: 2,
        part: flowerPetal,
        x: cvsWidth / 2 - (357 / 2) * this.ratio,
        y: 15,
        width: 357,
        height: 347,
      },
      {
        id: 3,
        part: flowerHead,
        x: cvsWidth / 2 - (211 / 2) * this.ratio,
        y: 50,
        width: 211,
        height: 211,
      },
      {
        id: 4,
        part: flowerFace,
        x: cvsWidth / 2 - (107 / 2) * this.ratio,
        y: 85,
        width: 107,
        height: 98,
      },
    ]
    let currentLoaded = 0
    const _this = this
    function triggerWhenImageReady() {
      currentLoaded++
      if (currentLoaded === images.length) {
        // console.log('all done')
        createFlowerHead()
        _this.createFlower(flowerObj, ctx)
      }
    }

    // 生成花頭圖片
    function createFlowerHead() {
      const ctxHead = flowerHeadCvs.getContext('2d')
      ctxHead.drawImage(flowerObj[2].part, 107 - (357 / 2) * _this.ratio, 107 - (347 / 2) * _this.ratio, flowerObj[2].width * _this.ratio, flowerObj[2].height * _this.ratio)
      ctxHead.drawImage(flowerObj[3].part, 107 - (211 / 2) * _this.ratio, 107 - (211 / 2) * _this.ratio, flowerObj[3].width * _this.ratio, flowerObj[3].height * _this.ratio)
      _this.flowerData.myFlower = flowerHeadCvs.toDataURL('image/png')
      _this.flowerHeadUrl = flowerHeadCvs.toBlob((blob) => {
        _this.flowerHeadUrl = blob
      }, 'image/png')
      _this.setFlower()
    }
  },
}
</script>
<style lang="scss" scope>
.flower {
  position: relative;
}
.content-body {
  position: relative;
  margin: 24px 0;
}
.content-foot {
  display: flex;
}
.flowerHead {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: none;
}
.result-btn {
  width: 50%;
  padding: 8px;
  border-radius: 20px;
}
</style>