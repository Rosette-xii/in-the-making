<template>
  <div class="loading">
    <span><img src="../assets/images/others/loading-flower.png"
           alt="loading"></span>
    <span><img src="../assets/images/others/loading-flower.png"
           alt="loading"></span>
    <span><img src="../assets/images/others/loading-flower.png"
           alt="loading"></span>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/_mixin.scss';
.loading {
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #dc90fc;
}
span {
  position: relative;
  padding: 0 5px;
  animation: loading 1s ease infinite;
  &:nth-child(2) {
    animation: loading 1s 0.3s ease infinite;
  }
  &:last-child {
    animation: loading 1s 0.6s ease infinite;
  }
}
@keyframes loading {
  0% {
    top: 0;
  }
  50% {
    top: 10px;
  }
  100% {
    top: 0;
  }
}
</style>