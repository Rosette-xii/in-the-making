<template>
  <section class="main">
    <Loading v-if="$store.state.isLoading" />
    <div class="container">
      <div class="content-body">
        <canvas
          style="display: none"
          ref="flowerResult"
          width="612"
          height="982"
        ></canvas>
        <canvas
          style="display: none"
          class="flowerAll"
          ref="flowerAll"
          width="548"
          height="772"
        ></canvas>
        <canvas
          style="display: none"
          class="flowerHead"
          ref="flowerHead"
          width="216"
          height="216"
        ></canvas>
        <div class="e-flower">
          <img :src="showUrl" alt="Your e-flower." />
        </div>
      </div>
      <div class="content-foot">
        <button class="go-btn border-2" :disabled="isChecked" @click="goGarden">
          獲取更多數位養分
          <img src="../assets/images/others/arrow.svg" alt="arrow" />
        </button>
        <p>{{ downloadTxt }}</p>
      </div>
    </div>
  </section>
</template>
<script>
import Loading from "@/components/Loading";
import { uploadData } from "../api/in-the-making.js";
import { gsap } from "gsap";
export default {
  name: "Result",
  components: { Loading },
  data() {
    return {
      ratio: 0.66,
      flowerData: {},
      flowerHeadUrl: "",
      resultUrl: "",
      showUrl: "",
      flowerLanguage1: "",
      flowerLanguage2: "",
      isChecked: false,
    };
  },
  methods: {
    createResultImg(props) {
      const {
        flowerObj,
        flowerResultCtx,
        flowerResultCvs,
        eFlowerCtx,
        eFlowerCvs,
      } = props;
      // 判斷花瓣是香菇的時候 身體要在最上面
      let flowerOrder = flowerObj;
      const petal = this.flowerData.flower[3];
      if (petal.name === "chill 蘑菇") {
        const body = flowerOrder.splice(4, 1);
        flowerOrder.push(body[0]);
      }
      flowerOrder.forEach((flower) => {
        flowerResultCtx.drawImage(
          flower.part,
          flower.x,
          flower.y,
          flower.width,
          flower.height
        );
        if (flower.id === 1) {
          eFlowerCtx.drawImage(flower.part, -32, -150, 612, 982);
        } else if (flower.id > 2) {
          eFlowerCtx.drawImage(flower.part, -32, -150, 612, 982);
        }
      });

      // 大圖 名字
      flowerResultCtx.font = `900 48px "Noto Sans TC"`;
      flowerResultCtx.fillStyle = "#897BFC";
      flowerResultCtx.textAlign = "center";
      flowerResultCtx.fillText(this.$store.getters.flowerName, 612 / 2, 250);
      // 大圖 花語
      flowerResultCtx.font = `500 25px "Noto Sans TC"`;
      flowerResultCtx.fillStyle = "#4294F5";
      flowerResultCtx.textAlign = "center";
      flowerResultCtx.fillText(this.flowerLanguage1, 612 / 2, 835);
      flowerResultCtx.fillText(this.flowerLanguage2, 612 / 2, 868);
      // 小圖 名字
      eFlowerCtx.font = `900 48px "Noto Sans TC"`;
      eFlowerCtx.fillStyle = "#897BFC";
      eFlowerCtx.textAlign = "center";
      eFlowerCtx.fillText(this.$store.getters.flowerName, 548 / 2, 100);
      // 小圖 花語
      eFlowerCtx.font = `500 25px "Noto Sans TC"`;
      eFlowerCtx.fillStyle = "#4294F5";
      eFlowerCtx.textAlign = "center";
      eFlowerCtx.fillText(this.flowerLanguage1, 548 / 2, 688);
      eFlowerCtx.fillText(this.flowerLanguage2, 548 / 2, 721);
      this.$store.commit("PUSH_MY_E_FLOWER", eFlowerCvs.toDataURL("image/jpg"));
      flowerResultCvs.toBlob(
        (blob) => {
          this.resultUrl = blob;
        },
        "image/jpg",
        1
      );

      this.showUrl = flowerResultCvs.toDataURL("image/jpg", 1);
      setTimeout(() => {
        this.$store.commit("LOADING", false);
        gsap.from(".main", {
          opacity: 0.3,
          duration: 0.6,
        });
      }, 1500);
    },
    goGarden() {
      this.isChecked = true;
      const formData = new FormData();
      formData.append("files.flowerHead", this.flowerHeadUrl);
      formData.append("files.flowerAll", this.resultUrl);
      let obj = {
        name: this.flowerData.name,
        title: this.flowerData.exhibits.title,
        introduction: this.flowerData.exhibits.introduction,
      };
      formData.append("data", JSON.stringify(obj));
      uploadData(formData)
        .then(() => {
          this.$router.replace({
            name: "Garden",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    downloadTxt() {
      if (window.innerWidth > 767) {
        return "＊右鍵下載圖片，分享到你的 FB / IG 吧！＊";
      } else {
        return "＊長按儲存圖片，分享到你的 FB / IG 吧！＊";
      }
    },
  },
  mounted() {
    const flowerResultCvs = this.$refs.flowerResult;
    const flowerResultCtx = flowerResultCvs.getContext("2d");
    const eFlowerCvs = this.$refs.flowerAll;
    const eFlowerCtx = eFlowerCvs.getContext("2d");
    this.$store.commit("LOADING", true);
    this.$store.state.flowerLanguage.filter((i) => {
      if (i.name === this.$store.getters.flowerName) {
        this.flowerLanguage1 = i.language1;
        this.flowerLanguage2 = i.language2;
        this.$store.commit("PUSH_EXHIBITS", i.exhibits);
      }
    });

    let images = [];
    const flowerBg = new Image();
    const flowerTag = new Image();
    const flowerLeafLeft = new Image();
    const flowerLeafRight = new Image();
    const flowerBody = new Image();
    const flowerPetal = new Image();
    const flowerFace = new Image();
    const bgUrl = require("../assets/images/flowers/flower-bg.png");
    const tagUrl = require("../assets/images/flowers/flower-tag.png");
    images.push(
      flowerBg,
      flowerTag,
      flowerLeafLeft,
      flowerLeafRight,
      flowerBody,
      flowerPetal,
      flowerFace
    );
    this.flowerData = this.$store.state.flowerData;
    flowerBg.src = bgUrl;
    flowerTag.src = tagUrl;
    flowerLeafLeft.src = this.flowerData.flower[0].imgUrl;
    flowerLeafRight.src = this.flowerData.flower[1].imgUrl;
    flowerBody.src = this.flowerData.flower[2].imgUrl;
    flowerPetal.src = this.flowerData.flower[3].imgUrl;
    flowerFace.src = this.flowerData.flower[4].imgUrl;
    images.forEach((image) => {
      image.onload = () => {
        triggerWhenImageReady();
      };
    });
    // 定位每朵花的部位
    const flowerObj = [
      {
        id: 1,
        part: flowerBg,
        x: 0,
        y: 0,
        width: 612,
        height: 982,
      },
      {
        id: 2,
        part: flowerTag,
        x: 0,
        y: 0,
        width: 612,
        height: 982,
      },
      {
        id: 3,
        part: flowerLeafLeft,
        x: 0,
        y: 0,
        width: 612,
        height: 982,
      },
      {
        id: 4,
        part: flowerLeafRight,
        x: 0,
        y: 0,
        width: 612,
        height: 982,
      },
      {
        id: 5,
        part: flowerBody,
        x: 0,
        y: 0,
        width: 612,
        height: 982,
      },
      {
        id: 6,
        part: flowerPetal,
        x: 0,
        y: 0,
        width: 612,
        height: 982,
      },
      {
        id: 7,
        part: flowerFace,
        x: 0,
        y: 0,
        width: 612,
        height: 982,
      },
    ];
    let currentLoaded = 0;
    const _this = this;
    function triggerWhenImageReady() {
      currentLoaded++;
      if (currentLoaded === images.length) {
        createHeadIImg();
        loadFontAndSetupResult().then(() => {
          _this.createResultImg({
            flowerObj,
            flowerResultCtx,
            flowerResultCvs,
            eFlowerCtx,
            eFlowerCvs,
          });
        });
      }
    }
    async function loadFontAndSetupResult() {
      /**
       * * 首先對要使用的字體做讀取
       * ! 讀取規則：load('字體樣式', '顯示文字')
       * @author Nathan Cheng
       * @date   11/01/2022 22:14:55
       */
      await document.fonts.load(
        "900 48px Noto Sans TC",
        _this.$store.getters.flowerName
      );
      await document.fonts.load("500 25px Noto Sans TC", _this.flowerLanguage1);
      await document.fonts.load("500 25px Noto Sans TC", _this.flowerLanguage2);
    }

    // 生成花頭圖片
    const flowerHeadCvs = this.$refs.flowerHead;
    function createHeadIImg() {
      const ctxHead = flowerHeadCvs.getContext("2d");
      ctxHead.drawImage(
        flowerObj[5].part,
        -197,
        -263,
        flowerObj[5].width,
        flowerObj[5].height
      );
      ctxHead.drawImage(
        flowerObj[6].part,
        -197,
        -263,
        flowerObj[6].width,
        flowerObj[6].height
      );
      _this.$store.commit(
        "PUSH_MY_FLOWER_HEAD",
        flowerHeadCvs.toDataURL("image/png")
      );
      _this.flowerHeadUrl = flowerHeadCvs.toBlob((blob) => {
        _this.flowerHeadUrl = blob;
      }, "image/png");
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/_mixin.scss";
@import "@/assets/style/_variable.scss";
@font-face {
  font-family: "Noto Sans TC";
  src: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&family=Russo+One&display=swap";
}
.main {
  @include pc {
    display: flex;
    align-items: center;
  }
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url("../assets/images/covers/ee_cover_garden_BG大.jpg");
}
canvas {
  font-family: "Noto Sans TC", sans-serif;
}
.container {
  margin: 15px auto;
}
.flower {
  position: relative;
}
.content-head {
  padding: 8px;
  background-color: $purple;
}
h2 {
  padding: 8px 0;
  font-size: 32px;
}
.content-body {
  margin-top: -2px;
  position: relative;
  background-color: #fff;
}
.flowerHead {
  position: absolute;
  left: 50%;
  display: none;
  transform: translateX(-50%);
}
.e-flower {
  border: 5px solid $purple;
  border-radius: 10px;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
.content-foot {
  margin-top: 14px;
}
.go-btn {
  display: flex;
  margin: 0 auto;
  align-items: center;
  img {
    margin-left: 8px;
  }
}
p {
  padding-top: 6px;
  font-size: 14px;
}
</style>
