<template>
  <section class="main-block">
    <div class="choose main-area">
      <div class="container">
        <div class="content-head">
          <span class="progress-bar"></span>
          <h2>歡迎來到數花部，選一顆種子吧
            你可能可以種出...
          </h2>
        </div>
        <ul class="content-body">
          <li @click="goTest"> seed1 </li>
          <li @click="goTest"> seed2 </li>
          <li @click="goTest"> seed3 </li>
          <li @click="goTest"> seed4 </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    goTest() {
      this.$router.push({
        name: 'Test',
      })
    },
  },
}
</script>
<style lang="scss">
</style>
